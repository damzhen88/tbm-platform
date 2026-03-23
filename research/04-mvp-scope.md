# TBM - MVP Scope (Simplified)
## Version 2.0 - No Payments, No AI

---

## 🎯 Core Concept

**"Business Dating App"** - เป็นแค่ตัวกลางให้ Demand และ Supply มาเจอกัน
- ผู้ขายธุรกิจ / ผู้ต้องการหาหุ้นส่วน / ผู้ต้องการเงินทุน → Post ประกาศ
- ผู้ซื้อ / นักลงทุน / คนหาหุ้นส่วน → ดูและติดต่อ

**ไม่มี:**
- ❌ ระบบชำระเงิน
- ❌ Escrow
- ❌ AI Matching
- ❌ Payment Integration

---

## 📋 MVP Features

### Must Have (P0)

| Feature | Description |
|---------|-------------|
| **User Auth** | Email, Google, LinkedIn Login |
| **Profile** | สร้างโปรไฟล์ (Investor / Business Owner / Seeker) |
| **Listing Types** | Fundraising, Sale, Co-founder, Partner |
| **Search & Filter** | Industry, Stage, Location, Deal Size |
| **Messaging** | ส่งข้อความหากัน |
| **Verification** | Email, ID, Business Documents |
| **Dashboard** | ดูประกาศของตัวเอง, Stats |

### Should Have (P1)

| Feature | Description |
|---------|-------------|
| **Bookmark** | บันทึกประกาศที่สนใจ |
| **Notifications** | Email แจ้งเมื่อมีคนติดต่อ |
| **Analytics** | ดูว่าประกาศเรามีคนดูกี่คน |
| **Featured Listings** | โปรโมทประกาศ |

### Won't Have (MVP)

| Feature | Reason |
|---------|--------|
| AI Matching | ยังไม่ต้องการ |
| Payment/ESCROW | เป็นแค่ middleware |
| Video Calls | ใช้ external ได้ |
| Mobile App | Web PWA ก่อน |
| API | ยังไม่ต้องการ |

---

## 🔐 Verification System (สำคัย!)

### Verification Levels

| Level | Requirements | Badge | Capabilities |
|-------|-------------|-------|--------------|
| **Basic** | Email verified | ⚪ White | 3 listings, limited search |
| **Identity** | + ID Card / Passport | 🔵 Blue | Full access |
| **Business** | + Company Documents | 🟢 Green | Verified badge, priority |
| **Premium** | + Manual Review | 🟣 Purple | Early features, support |

### KYC Flow

```
1. สมัครสมาชิก (Email/Google)
        ▼
2. Email Verification (OTP)
        ▼
3. ยืนยันตัวตน (National ID / Passport)
        ▼
4. [Optional] ยืนยันธุรกิจ (Business Registration)
        ▼
5. ได้รับ Badge + Full Access
```

### Document Verification

- **บุคคล:** National ID, Passport
- **นักลงทุน:** Investment credentials, LinkedIn
- **ธุรกิจ:** Company Registration ( กพ. ), Financial statements

---

## 🔍 Search & Filter

### Filter Options

| Filter | Options |
|---------|---------|
| **Type** | Fundraising, Sale, Co-founder, Partner |
| **Industry** | Tech, F&B, Manufacturing, Real Estate, etc. |
| **Stage** | Idea, Pre-seed, Seed, Series A, Bootstrap |
| **Location** | Bangkok, Chiang Mai, Phuket, etc. |
| **Deal Size** | <1M, 1-5M, 5-10M, 10-50M, 50M+ THB |
| **Verification** | Verified only, All |

### Matching (Manual)

- ผู้ใช้ค้นหาเองตาม Filter
- ระบบแสดง "Similar Listings" ธรรมดา (ไม่ใช่ AI)
- Sort by: Newest, Most Viewed, Verified First

---

## 💰 Revenue Model (ไม่มี Payment ในระบบ)

| Revenue Stream | Description |
|----------------|-------------|
| **Freemium** | Free basic, Pro 990฿/เดือน |
| **Verified Badge** | 2,500฿/ปี ( voluntary ) |
| **Featured Listing** | 500฿/ประกาศ/เดือน |
| **Intro Referral** | แนะนำให้ติดต่อกัน (ไม่เกี่ยวเงิน) |

*Note: ไม่มี transaction fee เพราะไม่มีการชำระเงินในระบบ*

---

## 📱 MVP Tech Stack (Simplified)

### Frontend
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend
- Next.js API Routes (ไม่ต้อง separate server)
- Prisma ORM
- PostgreSQL (Supabase)

### Infrastructure
- Vercel (Frontend + API)
- Supabase (DB + Auth + Storage)
- Resend (Email)

---

## 📅 MVP Timeline

| Week | Tasks |
|------|-------|
| 1-2 | Setup, Auth, Database Schema |
| 3-4 | Profile, Listings CRUD |
| 5-6 | Search & Filter, Messaging |
| 7-8 | Verification System, Dashboard |
| 9 | Polish, Testing, Launch |

**Total: ~2 เดือน**

---

## 💵 Estimated Cost

| Service | Monthly |
|---------|---------|
| Vercel (Free) | 0 ฿ |
| Supabase (Free Tier) | 0 ฿ |
| Resend (Free) | 0 ฿ |
| Domain | ~300 ฿ |
| **Total** | **~300 ฿/เดือน** |

*Free tier น่าจะพอสำหรับ MVP*

---

## 🎨 UX/UI Principles

### Design Goals
1. **Trust & Credibility** - ดู professional, น่าเชื่อถือ
2. **Simple** - ใช้งานง่าย, ไม่ซับซ้อน
3. **Fast** - โหลดเร็ว, ไม่มี lag
4. **Mobile First** - รองรับมือถือด้วย

### Key Pages
1. Landing Page - Overview, Features, CTA
2. Explore - Browse listings with filters
3. Listing Detail - Full info, Contact button
4. Dashboard - My listings, Messages, Stats
5. Profile - Edit profile, Verification status
6. Auth Pages - Login, Register, Forgot password

---

*Document Version: 2.0*
*Last Updated: 2026-03-21*
