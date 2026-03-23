# TBM Backend - Complete Technical Architecture

## Version: 1.0 | Date: 2026-03-23
## Stack: Next.js 15 + React 19 + Prisma + PostgreSQL (Supabase) + Tailwind CSS

---

## Database Schema

All tables defined in `prisma/schema.prisma`:

### 1. Users & Authentication
- `User` - Main user table (linked to Supabase Auth)
- `Profile` - User profiles (personal + company info)

### 2. Listings
- `Listing` - Business listings
- `TeamMember` - Team members
- `SavedListing` - Bookmarks

### 3. Messaging
- `Conversation` - Chat threads
- `Message` - Individual messages

### 4. Inquiries
- `Inquiry` - Contact requests from Explore

### 5. Documents & Data Room
- `Document` - Uploaded files
- `DocumentAccessLog` - Who viewed/downloaded

### 6. NDA Agreements
- `NdaAgreement` - NDA signatures

### 7. Verification
- `VerificationLog` - KYC verification history

### 8. Notifications
- `Notification` - User notifications

### 9. Audit Log
- `AuditLog` - Security audit trail

---

## API Routes

```
src/app/api/
├── auth/
│   ├── register/route.ts          POST - สมัครสมาชิก
│   ├── login/route.ts            POST - เข้าสู่ระบบ
│   ├── logout/route.ts           POST - ออกจากระบบ
│   ├── refresh/route.ts          POST - refresh token
│   ├── verify-email/route.ts     POST - ยืนยันอีเมล
│   ├── forgot-password/route.ts  POST - ลืมรหัสผ่าน
│   ├── reset-password/route.ts   POST - ตั้งรหัสใหม่
│   └── line/callback/route.ts    GET - LINE Login
│
├── users/
│   ├── me/route.ts              GET/PATCH - โปรไฟล์ตัวเอง
│   ├── [id]/route.ts            GET - Public profile
│   └── me/avatar/route.ts       POST - อัพโหลดรูป
│
├── onboarding/
│   └── route.ts                 POST - Onboarding data
│
├── listings/
│   ├── route.ts                 GET - ค้นหา listings
│   ├── route.ts                 POST - สร้าง listing
│   ├── [id]/route.ts            GET/PATCH/DELETE
│   ├── [id]/publish/route.ts    POST - เผยแพร่
│   ├── [id]/pause/route.ts      POST - หยุดชั่วคราว
│   ├── [id]/team/route.ts        GET/POST - Team members
│   ├── [id]/save/route.ts      POST - บันทึก
│   ├── [id]/inquiry/route.ts   POST - ส่ง inquiry
│   └── mine/route.ts             GET - My listings
│
├── dataroom/
│   ├── [listingId]/route.ts              GET - รายการเอกสาร
│   ├── [listingId]/documents/route.ts   POST - อัพโหลด
│   ├── [listingId]/nda/route.ts         GET - NDA status
│   ├── [listingId]/nda/sign/route.ts    POST - ลงนาม NDA
│   └── [listingId]/access-log/route.ts  GET - Audit log
│
├── messages/
│   ├── conversations/route.ts           GET/POST
│   ├── conversations/[id]/route.ts       GET
│   ├── conversations/[id]/messages/route.ts POST
│   └── conversations/[id]/read/route.ts POST
│
├── verification/
│   ├── status/route.ts         GET - สถานะ
│   └── submit/route.ts         POST - ส่งเอกสาร
│
├── notifications/
│   ├── route.ts               GET
│   └── read/route.ts          POST
│
├── search/
│   └── route.ts              GET - Full-text search
│
└── admin/
    ├── listings/route.ts              GET - All listings
    ├── listings/[id]/approve/route.ts POST
    ├── listings/[id]/reject/route.ts POST
    ├── verification/route.ts         GET
    ├── verification/[id]/approve/route.ts POST
    ├── verification/[id]/reject/route.ts POST
    ├── users/route.ts                GET
    └── stats/route.ts                GET
```

---

## Verification Levels

| Level | Name | Required For |
|-------|------|--------------|
| 0 | UNVERIFIED | - |
| 1 | EMAIL_VERIFIED | View listings, Send inquiry |
| 2 | ID_VERIFIED | Create listing, Connect |
| 3 | DOCS_CERTIFIED | Premium features |

---

## NDA Flow

1. Investor clicks "Request NDA"
2. System creates NDA record (PENDING)
3. Investor signs with digital signature
4. Status → SIGNED
5. Unlock document access

---

## Document Access Control

- **Confidential documents**: Requires NDA signed
- **Access logs**: Track who viewed/downloaded
- **Watermarks**: Applied on preview images

---

## Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.example .env
# Fill in DATABASE_URL and Supabase keys

# 3. Push schema to database
npx prisma db push

# 4. Generate Prisma client
npx prisma generate
```

---

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Supabase
NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_ANON_KEY=""
SUPABASE_SERVICE_ROLE_KEY=""

# Auth
NEXTAUTH_SECRET=""
AUTH_SECRET=""

# LINE Login (optional)
LINE_CLIENT_ID=""
LINE_CLIENT_SECRET=""
```
