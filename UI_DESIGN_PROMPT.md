# TBM Platform - Master Prompt for UI Designer Team

## Project Overview

**TBM (Thailand Business Matching)** คือแพลตฟอร์ม B2B ที่เชื่อมต่อธุรกิจไทยกับนักลงทุนและพาร์ทเนอร์

**Concept:** "Business Dating App" - ตัวกลางให้ Demand และ Supply มาเจอกัน

---

## 1. Business Context

### Target Users

| Segment | Description |
|---------|-------------|
| SME Owners | 3 ล้าน+ รายในไทย |
| Startups | 2,500+ ราย |
| Investors | VC, Angel, Corporate |
| Brokers | ที่ปรึกธุรกิจ |

### User Goals
- **Business Owners:** ต้องการเงินทุน / หาหุ้นส่วน / ขายธุรกิจ
- **Investors:** หาธุรกิจที่น่าลงทุน

### Success Metrics
- 1,000+ Verified Listings
- 500+ Verified Users
- 80%+ Deal Success Rate

---

## 2. Core Features

### Pages Required

1. **Landing Page** - หน้าหลัก
2. **Auth Pages** - Login / Register + Role Selection
3. **Explore/Marketplace** - ค้นหาประกาศ
4. **Listing Detail** - รายละเอียดประกาศ
5. **Dashboard** - แดชบอร์ดผู้ใช้
6. **Create Listing** - สร้างประกาศใหม่
7. **Messages** - ระบบส่งข้อความ
8. **Profile** - โปรไฟล์ผู้ใช้
9. **KYC/Verification** - หน้ายืนยันตัวตน
10. **Data Room** - ห้องเอกสาร (NDA protected)

### Listing Types
- **Fundraising** - ระดมทุน
- **Sale** - ขายธุรกิจ
- **Co-founder** - หาหุ้นส่วน
- **Partner** - หาพาร์ทเนอร์

### Verification Levels
- Level 0: UNVERIFIED
- Level 1: EMAIL_VERIFIED
- Level 2: ID_VERIFIED
- Level 3: DOCS_CERTIFIED (Premium)

---

## 3. Technical Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL (Supabase)
- **Auth:** Supabase Auth + LINE Login

---

## 4. Design Requirements

### Color Palette (Current - for reference)
- Primary: Navy Blue (#00288e)
- Secondary: Teal (#006a61)
- Accent: Amber (#d97706)
- Background: White (#ffffff), Light Gray (#f7f9fb)

### Typography
- Display: Manrope
- Body: Inter

### You Can Change Everything!
- เปลี่ยนสีได้ตามต้องการ
- เปลี่ยน typography ได้
- เปลี่ยน layout ได้
- **แต่ต้องทันสมัย, Professional, Trustworthy**

---

## 5. Design Principles

### Must-Have
- ✅ Professional & Trustworthy (ธุรกิจเกี่ยวกับเงิน)
- ✅ Clean & Modern (ไม่ใช่ AI Slop)
- ✅ Mobile-First Responsive
- ✅ Fast Loading
- ✅ Accessible (WCAG 2.1)

### Tone of Voice
- **Professional:** สำหรับนักธุรกิจ, นักลงทุน
- **Trustworthy:** ปลอดภัย, น่าเชื่อถือ
- **Premium:** ไม่เหมือน marketplace ทั่วไป
- **Thai-friendly:** เข้าใจตลาดไทย

### Anti-Patterns (อย่าทำ)
- ❌ Generic blue/purple gradients
- ❌ Inter font (overused)
- ❌ Centred-only layouts
- ❌ Cluttered information
- ❌ Slow animations

---

## 6. Page-by-Page Requirements

### 6.1 Landing Page
- Hero section with clear value proposition
- Stats (businesses, investors, deals)
- Features highlights (Verification, Matching, Messaging)
- "How it works" 4-step process
- Live opportunities preview
- CTA: Sign Up / Explore

### 6.2 Auth Pages
- Split screen design (branding left, form right)
- Login / Register toggle
- Role selection: Investor / Business Owner / Broker
- Social login: Google, LINE (important for Thai market)
- Trust badges (security, compliance)

### 6.3 Explore/Marketplace
- Search bar with filters
- Filter sidebar: Type, Industry, Stage, Location, Investment Range
- Listing cards with: Type badge, Company name, Tagline, Amount, Stage, Location, Verified badge
- Pagination or Infinite scroll
- "Concierge" CTA for premium service

### 6.4 Listing Detail
- Header: Company info, Verification badges, CTA buttons
- Quick stats: Target amount, Valuation, Equity, Stage
- Tab navigation: Overview, Financials, Team, Documents
- Investment highlights
- Use of funds visualization
- Related opportunities sidebar
- "Connect with Founder" / "Request NDA" CTAs

### 6.5 Dashboard
- Sidebar navigation
- Stats cards: Active Listings, Views, Messages, Connections
- Listings table with status
- Recent messages preview
- Trust score indicator
- Quick actions bar

### 6.6 Create Listing (Wizard)
- Step 1: Business Type (Fundraising/Sale/Co-founder/Partner)
- Step 2: Basic Info (Title, Description, Industry, Location)
- Step 3: Financials (Amount, Valuation, Equity)
- Step 4: Documents (Pitch deck, Financials)
- Step 5: Review & Publish

### 6.7 Messages
- Conversation list sidebar
- Chat area with message bubbles
- File attachment support
- Read receipts

### 6.8 KYC/Verification
- Progress steps (Email → ID → Documents)
- Upload ID card (front/back) + Selfie
- Document upload for business verification
- Status tracking

### 6.9 Data Room (NDA Protected)
- Document list with lock icons
- Watermark preview
- NDA signing flow
- Download access after NDA

---

## 7. Deliverables

### Required Outputs
1. **Figma Files** - All pages in Figma
2. **Design System** - Colors, Typography, Components, Spacing
3. **Responsive Breakpoints** - Mobile (375px), Tablet (768px), Desktop (1440px)
4. **Component Library** - Reusable UI components

### File Format
- Export as **Figma** link
- Include **Design Specifications** in comments
- Provide **Assets** (icons, images) if needed

---

## 8. Reference

### Current Design (Static HTML)
```
http://localhost:8080/
- /index.html (Landing)
- /auth.html (Login/Register)
- /explore.html (Marketplace)
- /dashboard.html (Dashboard)
- /listing-detail.html (Listing Detail)
```

### Project Brief
```
~/Desktop/Workspace/tbm/
├── PROJECT_BRIEF.md
├── QUICK_BRIEF.md
└── src/backend/TRUST_SECURITY.md
```

---

## 9. Contact

**Project Owner:** Kritsada K. (SK INTER FRUIT)
**Channel:** WhatsApp +66610089585

---

## Notes for Designer

1. **Trust is key** - This is a B2B platform dealing with money. Design must feel professional and secure.

2. **Thai market** - Consider LINE integration (most popular in Thailand), Thai language support, local payment methods.

3. **Verification badge** - Make this prominent. It's the main differentiator from Facebook groups or LINE OA.

4. **Data room** - This is the "killer feature". Make it feel premium and secure.

5. **Mobile** - Many Thai users access via mobile. Must be mobile-first.

6. **Speed** - Keep animations snappy, no heavy effects that slow down loading.
