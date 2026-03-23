# TBM - Thailand Business Matching Platform

> แพลตฟอร์มเชื่อมต่อธุรกิจไทย: หาเงินทุน, หาหุ้นส่วน, ขายธุรกิจ, หานักลงทุน

---

## 🎨 Design System (Anti-Slop)

### Design Principles Applied

The TBM platform now follows **Anti-Slop Design** principles to create a distinctive, premium look:

| Principle | Before (AI Slop) | After (Anti-Slop) |
|-----------|-----------------|-------------------|
| **Colors** | Generic blue (#00288e) | Deep forest green (#0f2e2a) + Warm amber (#d97706) |
| **Typography** | Inter (overused) | Sora (display) + DM Sans (body) |
| **Layout** | Centered, symmetrical | Asymmetric, diagonal patterns, broken grid |
| **Background** | Plain white/gray | Noise texture, dot patterns, diagonal lines |
| **Cards** | Identical rounded corners | Varied sizes, editorial bento grid |
| **Animations** | Basic fade-in | Staggered reveals, smooth easing (cubic-bezier) |
| **Details** | Generic shadows | Floating elements, layered depth |

### Key Design Features

- **Noise Overlay** - Subtle texture for depth
- **Custom Color Palette** - Not generic blue/purple
- **Framer Motion** - Smooth staggered animations
- **Varied Typography** - Sora + DM Sans pairing
- **Dot/Diagonal Patterns** - Background texture
- **Floating Elements** - Decorative accents breaking grid

---

## 📁 Project Structure

```
tbm/
├── docs/                    # Documentation
├── research/                # Research documents
│   ├── 01-business-research.md
│   ├── 02-product-requirements.md
│   ├── 03_technical-architecture.md
│   ├── 04_mvp-scope.md
│   ├── 05_extended-research.md
│   └── EXECUTIVE_SUMMARY.md
├── src/                    # Source code
│   ├── frontend/           # Next.js Frontend
│   │   ├── app/           # App Router pages
│   │   ├── components/   # React components
│   │   └── ...
│   └── backend/           # Backend (Next.js API Routes)
│       ├── app/api/       # API Routes
│       ├── lib/          # Utilities (db, auth, validations)
│       └── prisma/       # Database schema
├── prisma/                # Database (legacy, now in backend)
├── docker-compose.yml     # Local development
└── .env.example          # Environment template
```

---

## 📚 Research Documents

| Document | Description |
|----------|-------------|
| **01-business-research.md** | Market analysis, competitors, business model |
| **02-product-requirements.md** | Features, user stories, MVP scope |
| **03-technical-architecture.md** | Tech stack, database, API design |
| **04-mvp-scope.md** | Simplified MVP (no payment, no AI) |
| **05-extended-research.md** | Deep dive: competitors, UX, verification |
| **EXECUTIVE_SUMMARY.md** | Quick summary for stakeholders |

---

## 🎯 Quick Summary

### Concept
**"Business Dating App"** - เป็นตัวกลางให้ Demand และ Supply มาเจอกัน (ไม่มีระบบจ่ายเงิน)

### Target Users
- SME Owners (3 ล้าน+)
- Startups (2,500+)
- Investors (500+)
- Business Brokers (500+)

### Key Features
- ✅ Verification 4 ระดับ
- ✅ Listings (Fundraising, Sale, Co-founder, Partner)
- ✅ Search & Filter (Manual)
- ✅ Messaging

### Revenue
- Freemium: Free / 990฿/เดือน
- Verified Badge: 2,500฿/ปี
- Featured: 500฿/listing

### Timeline
- MVP: ~2 เดือน
- Growth: 3-4 เดือน
- Scale: 6-12 เดือน

### Cost
~300 ฿/เดือน (Free Tier)

---

## 🚀 Next Steps

1. Validate with 20 user interviews
2. Design wireframes
3. Build MVP
4. Launch beta (50 users)

---

## 📞 Contact

- **Project:** TBM (Thailand Business Matching)
- **Status:** Research Phase Complete
- **Ready for:** Product Design → Development

---

*Last Updated: 2026-03-21*
