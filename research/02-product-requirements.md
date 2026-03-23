# TBM - Product Requirements Document
## Phase 2: Product Planning

---

## 1. Product Vision

**Vision:** เป็นแพลตฟอร์มอันดับ 1 สำหรับธุรกิจในประเทศไทยที่เชื่อมต่อผู้ประกอบการ นักลงทุน และผู้ที่ต้องการร่วมธุรกิจ

**Mission:** ทำให้การหาหุ้นส่วน หาเงินทุน และซื้อขายธุรกิจในไทยเป็นเรื่องง่าย โปร่งใส และมีประสิทธิภาพ

---

## 2. User Roles

### 2.1 User Roles Matrix

| Role | Description | Primary Goal |
|------|-------------|--------------|
| **Business Owner** | เจ้าของ SME/Startup | หาเงินทุน, หาหุ้นส่วน, ขายธุรกิจ |
| **Investor** | Angel, VC, PE, Corporate | หาดีลที่ดี |
| **Seeker** | คนที่ต้องการหาธุรกิจ | หาธุรกิจที่จะลงทุน/ซื้อ |
| **Broker** | ที่ปรึกษาธุรกิจ | หาลูกค้า |
| **Admin** | ผู้ดูแลระบบ | ดูแล platform |

### 2.2 User Journeys

#### Journey 1: SME Owner ต้องการหาเงินทุน
```
1. สมัครสมาชิก → 2. ยืนยันตัวตน → 3. สร้างโปรไฟล์ธุรกิจ 
→ 4. อัพโหลด Pitch Deck → 5. รอ Match → 6. คุยกับนักลงทุน 
→ 7. Negotiation → 8. Close Deal
```

#### Journey 2: Investor ต้องการหาดีล
```
1. สมัครสมาชิก → 2. ยืนยันตัวตน → 3. ตั้งค่าความสนใจ 
→ 4. รับ Deal Alerts → 5. ดู Business Profiles → 6. ขอ Intro 
→ 7. Due Diligence → 8. Investment
```

---

## 3. Core Features

### 3.1 Feature Prioritization (MoSCoW)

#### Must Have (MVP)
| Feature | Description | Priority |
|---------|-------------|----------|
| User Authentication | Email, Google, LinkedIn login | P0 |
| Business Profile | สร้างโปรไฟล์ธุรกิจ | P0 |
| Investor Profile | สร้างโปรไฟล์นักลงทุน | P0 |
| Listing Creation | สร้างประกาศ (Fundraising, Sale, Partner) | P0 |
| Search & Filter | ค้นหาตาม industry, stage, location | P0 |
| Messaging | ส่งข้อความหากัน | P0 |
| Basic Matching | แนะนำ based on preferences | P0 |

#### Should Have (Phase 2)
| Feature | Description | Priority |
|---------|-------------|----------|
| AI Matching | Smart recommendations | P1 |
| Verification | KYC, Business docs | P1 |
| Analytics Dashboard | Stats for users | P1 |
| Deal Rooms | Private space for negotiation | P1 |
| Document Sharing | Pitch deck, financials | P1 |
| Escrow | Payment milestone | P1 |

#### Could Have (Phase 3)
| Feature | Description | Priority |
|---------|-------------|----------|
| Mobile App | iOS, Android | P2 |
| Video Calls | Built-in meeting | P2 |
| Valuation Tools | Business valuation | P2 |
| API | Third-party integrations | P2 |
| Events | Virtual/Physical events | P2 |

#### Won't Have (Now)
| Feature | Reason |
|---------|--------|
| Stock Trading | Regulatory complexity |
| Real-time Trading | Not a marketplace |
| Legal Docs Auto-gen | Need human lawyers |

---

## 4. Feature Specifications

### 4.1 Authentication System

**Requirements:**
- Email/Password registration
- Google OAuth
- LinkedIn OAuth (for investors)
- Multi-factor authentication (optional)
- Password reset flow

**Verification Levels:**
| Level | Requirements | Capabilities |
|-------|--------------|--------------|
| **Basic** | Email verified | Limited search, 3 listings |
| **Verified** | ID verified (National ID/Passport) | Full access |
| **Business Verified** | Business docs + ID | + Verified badge, Escrow |
| **Premium** | Manual review | + Priority support, API |

### 4.2 Business Listing Types

| Type | Sub-types | Key Fields |
|------|-----------|------------|
| **Fundraising** | Seed, Series A, Bridge | Amount, Valuation, Use of funds |
| **Business Sale** | Full sale, Partial | Asking price, Reason, Financials |
| **Co-founder Wanted** | Technical, Business, Sales | Equity %, Commitment, Skills |
| **Partner Wanted** | Distribution, JV, Strategic | Partnership type, Resources |
| **Acquisition** | Acquiring company | Budget, Target industry |

### 4.3 Listing Fields

#### For Fundraising
```typescript
interface FundraisingListing {
  // Basic Info
  companyName: string;
  tagline: string;
  description: string;
  industry: Industry[];
  foundedDate: Date;
  
  // Financial
  fundraisingAmount: number; // THB
  valuation: number;
  round: 'pre-seed' | 'seed' | 'series-a' | 'series-b' | 'other';
  useOfFunds: string[];
  
  // Traction
  revenue: number;
  growth: number;
  customers: number;
  
  // Files
  pitchDeck: File;
  financials: File[];
  
  // Preferences
  investorType: InvestorType[];
  location: string;
}
```

### 4.4 Matching Algorithm

**Matching Factors:**
| Factor | Weight | Description |
|--------|--------|-------------|
| Industry | 25% | Same or adjacent industry |
| Stage | 20% | Funding stage alignment |
| Location | 15% | Same region/country |
| Deal Size | 20% | Investment amount range |
| Skills/Expertise | 10% | For co-founder matching |
| Activity | 10% | Recent platform activity |

**Match Score Formula:**
```
Score = (Industry_Match × 0.25) + (Stage_Match × 0.20) + 
        (Location_Match × 0.15) + (DealSize_Match × 0.20) + 
        (Skills_Match × 0.10) + (Activity × 0.10)
```

### 4.5 Messaging System

**Requirements:**
- Real-time messaging (WebSocket)
- File attachments (PDF, images)
- Read receipts
- Block/report users
- Notification system (Email, In-app)

**Message Types:**
- **Connection Request** - ขอเชื่อมต่อก่อนคุย
- **Direct Message** - ข้อความตรง
- **Deal Room Invite** - เชิญเข้าห้องเจรจา

### 4.6 Verification System

**KYC Process:**
```
1. Submit ID (National ID / Passport)
2. Submit Business Documents (for business verified)
3. AI Document Verification
4. Manual Review (if needed)
5. Verification Badge Awarded
```

**Verification Badges:**
- ✓ Email Verified
- ✓ Identity Verified
- ✓ Business Verified
- ✓ Income Verified (for investors)

---

## 5. User Interface Structure

### 5.1 Page Structure

```
/                           # Landing Page
/login                     # Login
/register                 # Register
/dashboard                # User Dashboard
  /listings               # My Listings
  /messages               # Messages
  /matches                # AI Matches
  /analytics              # Stats
  /settings               # Settings
/explore                  # Browse Listings
  /explore/businesses    # Businesses for sale
  /explore/fundraising   # Fundraising opportunities
  /explore/investors     # Investor directory
  /explore/partners      # Partner seekers
/listings/[id]           # Listing Detail
/profile/[id]            # User/Company Profile
/verify                  # Verification Flow
/admin                   # Admin Dashboard
```

### 5.2 Mobile Responsiveness

**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Mobile Features:**
- Bottom navigation
- Swipeable cards
- Pull to refresh
- Push notifications

---

## 6. Non-Functional Requirements

### 6.1 Performance
| Metric | Target |
|--------|--------|
| Page Load | < 3 seconds |
| API Response | < 500ms |
| Search | < 1 second |
| File Upload | < 30 seconds (up to 50MB) |

### 6.2 Security
| Requirement | Implementation |
|-------------|----------------|
| Data Encryption | TLS 1.3, AES-256 at rest |
| Authentication | JWT with refresh tokens |
| CSRF Protection | Built-in Next.js protection |
| Rate Limiting | 100 req/min per user |
| Data Privacy | GDPR compliant, PDPA Thai |

### 6.3 Scalability
| Component | Target |
|-----------|--------|
| Concurrent Users | 50,000 |
| Listings | 1,000,000 |
| Messages | 10,000,000 |
| File Storage | 100TB |

---

## 7. Technical Constraints

### 7.1 Technology Stack (Recommended)

**Frontend:**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui

**Backend:**
- Node.js with Fastify หรือ Python FastAPI
- PostgreSQL (Supabase)
- Prisma ORM

**Infrastructure:**
- Vercel (Frontend)
- Supabase (DB, Auth, Storage)
- AWS/Cloudflare (CDN)

**AI/ML:**
- OpenAI API (GPT-4)
- Embeddings (for semantic search)

### 7.2 Third-Party Integrations

| Service | Purpose | Priority |
|---------|---------|----------|
| Google OAuth | Authentication | P0 |
| LinkedIn OAuth | Investor verification | P1 |
| Stripe | Payments | P1 |
| SendGrid | Email | P0 |
| Cloudflare | Security, CDN | P0 |

---

## 8. Analytics & Tracking

### 8.1 Key Metrics to Track

**User Metrics:**
- Signups, Activations, Retention
- Profile completion rate
- Time to first match

**Business Metrics:**
- Listings created
- Views per listing
- Messages sent
- Deals closed

**Revenue Metrics:**
- MRR, ARR
- Conversion rate (Free → Paid)
- Churn rate
- CAC, LTV

### 8.2 Tracking Tools

- **Product Analytics:** Mixpanel หรือ PostHog
- **Error Tracking:** Sentry
- **Performance:** Vercel Analytics

---

## 9. MVP Feature List

### MVP Scope (3-4 เดือน)

| Feature | Effort | Priority |
|---------|--------|----------|
| Auth (Email, Google) | Medium | P0 |
| Profile Creation | Medium | P0 |
| Listing (CRUD) | Medium | P0 |
| Search & Filter | High | P0 |
| Messaging | High | P0 |
| Basic Matching | High | P0 |
| Landing Page | Low | P0 |
| Dashboard | Medium | P1 |
| Email Notifications | Low | P1 |

**MVP Excluded:**
- LinkedIn OAuth
- Payment Integration
- Escrow
- Video Calls
- Mobile App
- AI Matching (Basic only)

---

## 10. Appendix

### A. Industry Categories
```
- Technology & Software
- E-commerce & Retail
- Food & Beverage
- Real Estate & Property
- Manufacturing
- Healthcare & Medical
- Education
- Finance & FinTech
- Logistics & Transportation
- Agriculture & Agtech
- Energy & Sustainability
- Media & Entertainment
- Professional Services
- Other
```

### B. Investment Stages
```
- Pre-Seed (Idea stage)
- Seed (MVP, Early traction)
- Series A (Product-Market Fit)
- Series B (Scale)
- Series C+ (Growth)
- Bootstrap (Profitable, No funding)
```

---

*Document Version: 1.0*
*Last Updated: 2026-03-21*
*Next: 03-technical-architecture.md*
