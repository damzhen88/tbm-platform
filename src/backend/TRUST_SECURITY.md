# TBM Backend - Trust & Security Infrastructure

## Overview

Trust & Security เป็น **Core Infrastructure** ไม่ใช่ optional feature

---

## 1. Authentication & Registration

### Tech Stack
- **Supabase Auth** (มีอยู่แล้ว)
- Email/Password + Magic Link + Phone OTP

### User Roles
```typescript
enum UserRole {
  INVESTOR = "investor"
  BUSINESS_OWNER = "business_owner"
  BROKER = "broker"
  ADMIN = "admin"
}

enum VerificationLevel {
  NONE = "none"           // ยังไม่ verify
  EMAIL = "email"         // Email OTP แล้ว
  ID_PENDING = "id_pending"    // ส่ง ID แล้ว รอ review
  ID_VERIFIED = "id_verified"  // ID verified แล้ว
  PREMIUM = "premium"     // Full verified
}
```

### Registration Flow
```
1. User สมัคร → Email + Password
2. Select Role (Investor / Business Owner / Broker)
3. Email OTP verification (Level 1)
4. → Onboarding Wizard (2-3 steps)
   - Business Owner: Company name, Industry, Business size
   - Investor: Investment range, Industries of interest
```

### Supabase Config
```sql
-- ใน Supabase Auth settings:
-- - Enable email verification
-- - Enable phone OTP
-- - Session timeout: 30 minutes
-- - Enable refresh token rotation
```

---

## 2. KYC - Phased Approach

### Phase 1 (MVP - Manual Review)
**Level 1: Email OTP**
- ใช้ Supabase built-in email verification
- ทำได้ทันที

**Level 2: ID Verification (Manual)**
```
User อัพโหลด:
- รูปบัตรประชาชน (หน้า + หลัง)
- รูป selfie ถือบัตร

Admin ตรวจสอบผ่าน Admin Dashboard
→ Approve/Reject
```

### Database Schema (KYC)
```sql
-- KYC Submissions
CREATE TABLE kyc_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  
  -- Submission data
  id_card_front_url TEXT,
  id_card_back_url TEXT,
  selfie_url TEXT,
  status VARCHAR(20) DEFAULT 'pending', -- pending, reviewing, approved, rejected
  
  -- Admin review
  reviewed_by UUID REFERENCES users(id),
  reviewed_at TIMESTAMP,
  rejection_reason TEXT,
  
  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- KYC Documents (encrypted storage)
CREATE TABLE kyc_documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  kyc_id UUID REFERENCES kyc_submissions(id),
  type VARCHAR(50), -- id_card_front, id_card_back, selfie
  file_url TEXT,
  encrypted_bucket_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Phase 2 (When Needed)
- เชื่อมกับ Sertis KYC / Appman NDID
- Automated ID verification
- PEP/Sanctions screening

### PDPA Compliance
```typescript
// Consent check - required before upload
const kycConsentSchema = z.object({
  agreed_to_terms: z.boolean().refine(val => val === true, "Must agree to terms"),
  agreed_to_privacy: z.boolean().refine(val => val === true, "Must agree to privacy policy"),
  purpose: z.string(), // "kyc_verification"
  consent_timestamp: z.date()
});
```

---

## 3. Document Vault

### Storage Architecture
```
Supabase Storage:
├── buckets/
│   ├── private/          # เอกสารส่วนตัว (ต้อง login)
│   ├── public/           # Public files
│   └── documents/        # Business documents
│       ├── {listing_id}/
│       │   ├── pitch_deck.pdf
│       │   ├── financials.pdf
│       │   └── nda_signed.pdf
│       └── nda_templates/
```

### Document Types
```sql
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Owner
  user_id UUID REFERENCES users(id),
  listing_id UUID REFERENCES listings(id),
  
  -- Document info
  type VARCHAR(50), -- pitch_deck, financial, legal, nda, other
  name VARCHAR(255),
  file_url TEXT,
  file_size INTEGER,
  mime_type VARCHAR(100),
  
  -- Access control
  access_level VARCHAR(20) DEFAULT 'private', -- private, nda_required, public
  
  -- Status
  is_active BOOLEAN DEFAULT TRUE,
  
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### NDA System
```sql
CREATE TABLE nda_signatures (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- NDA Info
  listing_id UUID REFERENCES listings(id),
  document_id UUID REFERENCES documents(id),
  
  -- Signer (investor)
  signer_id UUID REFERENCES users(id),
  
  -- Status
  status VARCHAR(20) DEFAULT 'pending', -- pending, signed, declined
  signed_at TIMESTAMP,
  ip_address VARCHAR(45),
  user_agent TEXT,
  
  created_at TIMESTAMP DEFAULT NOW()
);
```

### NDA Acceptance Flow
```
1. Investor กด "Request NDA & Financials"
2. System สร้าง NDA record (pending)
3. Investor ต้อง click "I accept NDA" + digital signature (type name)
4. Status → signed
5. → Unlock document access
6. → Log to audit trail
```

---

## 4. RBAC & Authorization

### Row Level Security (RLS)

```sql
-- Users: เห็นได้เฉพาะตัวเอง + admin
CREATE POLICY "Users can view own profile"
ON profiles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all profiles"
ON profiles FOR SELECT
USING (
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
);

-- Listings: Business owner เห็นและแก้ไขได้เฉพาะตัวเอง
CREATE POLICY "Owners can manage own listings"
ON listings FOR ALL
USING (auth.uid() = user_id);

-- Investors เห็น listing ทั้งหมด (active เท่านั้น)
CREATE POLICY "Investors can view active listings"
ON listings FOR SELECT
USING (status = 'active');

-- Documents: เห็นได้เฉพาะ owner หรือ NDA signed แล้ว
CREATE POLICY "Documents access control"
ON documents FOR SELECT
USING (
  -- Owner เห็นได้
  auth.uid() = user_id
  OR
  -- Admin เห็นได้
  EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  OR
  -- NDA signed แล้ว
  (
    access_level = 'public'
    OR
    EXISTS (
      SELECT 1 FROM nda_signatures ns
      WHERE ns.listing_id = documents.listing_id
      AND ns.signer_id = auth.uid()
      AND ns.status = 'signed'
    )
  )
);
```

### Role Permissions
```typescript
const rolePermissions = {
  admin: {
    users: ['read', 'update', 'delete', 'verify'],
    listings: ['read', 'create', 'update', 'delete', 'publish'],
    documents: ['read', 'upload', 'delete'],
    kyc: ['read', 'approve', 'reject'],
    nda: ['read', 'view_all'],
    analytics: ['read']
  },
  business_owner: {
    listings: ['read', 'create', 'update', 'delete'],
    documents: ['upload', 'delete'],
    nda: ['read', 'sign'],
    kyc: ['submit', 'read_own']
  },
  investor: {
    listings: ['read'],
    documents: ['read_public', 'request_nda'],
    nda: ['read', 'sign'],
    kyc: ['submit', 'read_own']
  },
  broker: {
    listings: ['read', 'create'],
    documents: ['read'],
    nda: ['read']
  }
};
```

---

## 5. Security Features

### A. Document Protection

**Watermark on Preview:**
```typescript
// สร้าง preview image พร้อม watermark
async function generateWatermarkedPreview(
  documentUrl: string, 
  userId: string
): Promise<Buffer> {
  const watermark = `Viewed by: ${userId} | ${new Date().toISOString()}`;
  // ใช้ sharp หรือ puppeteer สร้าง preview + watermark
}
```

**Preview-Only Mode:**
```typescript
// API ส่ง preview ไม่ใช่ original file
app.get('/api/documents/:id/preview', async (req, res) => {
  // 1. Check NDA signed
  // 2. Generate preview (PDF → PNG)
  // 3. Add watermark
  // 4. Return preview image (not downloadable)
});
```

### B. Audit Trail
```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Action info
  user_id UUID REFERENCES users(id),
  action VARCHAR(100), -- document_view, nda_sign, listing_update
  resource_type VARCHAR(50), -- document, listing, user
  resource_id UUID,
  
  -- Context
  ip_address VARCHAR(45),
  user_agent TEXT,
  
  -- Details
  metadata JSONB,
  
  created_at TIMESTAMP DEFAULT NOW()
);
```

### C. Rate Limiting
```typescript
// Next.js middleware หรือ Supabase config
const rateLimit = {
  // API calls
  '/api/auth/login': { max: 5, window: 15 * 60 }, // 5 ครั้ง / 15 นาที
  '/api/documents/upload': { max: 10, window: 60 * 60 },
  
  // General
  default: { max: 100, window: 60 * 60 }
};
```

---

## 6. API Endpoints Summary

### Auth
- `POST /api/auth/register` - สมัคร + role selection
- `POST /api/auth/login` - Login
- `POST /api/auth/otp` - Request OTP
- `POST /api/auth/verify-otp` - Verify OTP
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

### KYC
- `POST /api/kyc/submit` - Submit KYC documents
- `GET /api/kyc/status` - Get KYC status
- `GET /api/kyc/admin/submissions` - Admin: list submissions (admin only)
- `POST /api/kyc/admin/approve` - Admin: approve
- `POST /api/kyc/admin/reject` - Admin: reject

### Documents
- `POST /api/documents/upload` - Upload document
- `GET /api/documents/:id/preview` - Get watermarked preview
- `GET /api/documents/:id/download` - Download (requires NDA)
- `DELETE /api/documents/:id` - Delete document

### NDA
- `POST /api/nda/request` - Request NDA signing
- `POST /api/nda/sign` - Sign NDA
- `GET /api/nda/status/:listingId` - Get NDA status

### Listings
- `GET /api/listings` - List listings
- `POST /api/listings` - Create listing
- `GET /api/listings/:id` - Get listing detail
- `PATCH /api/listings/:id` - Update listing
- `DELETE /api/listings/:id` - Delete listing

---

## 7. Implementation Priority

### Sprint 1 (Week 1-2)
- [ ] Supabase Auth setup
- [ ] Role selection on signup
- [ ] Session config (30 min timeout)
- [ ] RLS policies
- [ ] Basic user profile

### Sprint 2 (Week 3-4)
- [ ] KYC submission (manual review)
- [ ] Admin dashboard for KYC
- [ ] Document upload
- [ ] NDA acceptance flow

### Sprint 3 (Week 5-6)
- [ ] Watermarked previews
- [ ] Audit logging
- [ ] Document access control
- [ ] Verification badges UI

### Phase 2 (When Needed)
- [ ] LINE Login
- [ ] Third-party KYC API
- [ ] 2FA
- [ ] Advanced DLP

---

## 8. Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Auth
AUTH_SECRET=
NEXTAUTH_SECRET=

# Security
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW_MS=3600000

# Storage
STORAGE_DOCUMENTS_BUCKET=documents
STORAGE_KYC_BUCKET=kyc
```

---

## Summary

| Feature | MVP | Phase 2 |
|---------|-----|---------|
| Email Auth | ✅ | |
| Role Selection | ✅ | |
| Session Timeout | ✅ | |
| RLS | ✅ | |
| Manual KYC | ✅ | |
| Document Upload | ✅ | |
| NDA Flow | ✅ | |
| Watermark | ✅ | |
| Audit Log | ✅ | |
| LINE Login | | ✅ |
| Auto KYC | | ✅ |
| 2FA | | ✅ |
