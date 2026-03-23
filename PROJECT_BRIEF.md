# TBM Platform - Project Brief for AI Agents

## 🎯 Project Overview

**TBM (Thailand Business Matching)** คือแพลตฟอร์ม B2B ที่เชื่อมต่อธุรกิจไทยกับนักลงทุนและพาร์ทเนอร์

---

## 💡 Core Concept

เป็น "Business Dating App" - ตัวกลางให้ Demand และ Supply มาเจอกัน:
- **ฝั่ง Supply:** ธุรกิจที่ต้องการเงินทุน / หาหุ้นส่วน / ขายธุรกิจ
- **ฝั่ง Demand:** นักลงทุน / VC / Angel / คนหาหุ้นส่วน

**ไม่มี:** ระบบชำระเงิน, Escrow, AI Matching (MVP)

---

## 👥 Target Users

| Segment | Description |
|---------|-------------|
| SME Owners | 3 ล้าน+ รายในไทย |
| Startups | 2,500+ ราย |
| Investors | VC, Angel, Corporate |
| Brokers | ที่ปรึกธุรกิจ |

---

## 🎯 Goals & Success Metrics

| Goal | Metric |
|------|--------|
| จำนวน Verified Listings | 1,000+ |
| จำนวน Verified Users | 500+ |
| Deal Success Rate | 80%+ |
| User Satisfaction | 4.5+ / 5 |

---

## ✨ Key Features (MVP)

1. **Verification System** - 4 ระดับ (Basic → Premium)
2. **Listings** - Fundraising, Sale, Co-founder, Partner
3. **Search & Filter** - Industry, Stage, Location, Deal Size
4. **Messaging** - ส่งข้อความหากัน
5. **Dashboard** - ดูประกาศตัวเอง + Stats

---

## 📱 Pages & UI

UI Design จาก Google Stitch (ล่าสุด):

| Page | URL | Status |
|------|-----|--------|
| Landing | `/` | ✅ Done |
| Auth | `/auth` | ✅ Done |
| Explore | `/explore` | ✅ Done |
| Dashboard | `/dashboard` | ✅ Done |
| Listing Detail | `/listing/[id]` | ✅ Done |
| Create Listing | `/listings/create` | 🔄 Pending |
| Messages | `/messages` | 🔄 Pending |
| Profile | `/profile` | 🔄 Pending |

---

## 🛠 Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL (Supabase)
- **Design:** Google Stitch UI → Tailwind (Anti-Slop Design)

---

## 🎨 Design Principles

- **Colors:** Primary Navy (#00288e), Secondary Teal (#006a61), Accent Amber
- **Typography:** Manrope (Headline), Inter (Body)
- **Style:** Professional, Trustworthy, Clean - ไม่ใช่ AI Slop
- **Motion:** Smooth animations, staggered reveals

---

## 📋 Working Process

1. **Brief:** อธิบาย Requirement ชัดเจน
2. **Research:** ใช้ Research Skills ก่อนทำ (database-operations, frontend-design, etc.)
3. **Implement:** เขียน Code ตาม Design จาก Google Stitch
4. **Review:** ตรวจสอบก่อนส่ง

---

## 📁 Project Location

```
/Users/kritsadak/.openclaw/workspace/tbm/
├── src/frontend/     # Next.js Frontend
├── src/backend/      # API Routes + Prisma
├── ui-design/       # Google Stitch Exports
└── research/        # Research Documents
```

---

## 🚀 Next Steps (Current)

1. ✅ Landing Page, Auth, Explore, Dashboard, Listing Detail
2. 🔄 Fix Build Errors (HTML in .tsx)
3. 🔄 Complete: Create Listing, Messages, Profile Pages
4. 🔄 Backend: Connect API to Frontend
5. 🔄 Database: Setup Supabase

---

## 📞 Contact

- **Owner:** Kritsada K. (+66610089585)
- **Channel:** WhatsApp
- **Platform:** OpenClaw Agent (Murphy)
