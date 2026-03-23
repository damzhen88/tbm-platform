# AI UI Generation Tools Research
## For TBM Project - Google Stitch / v0 / Bolt.New

---

## 1. Overview

### Google Stitch (if available)
**Status:** อาจยังไม่เปิดให้ใช้งานอย่างเป็นทางการ

### Alternatives (พร้อมใช้งานแล้ว):

| Tool | Provider | Status | Best For |
|------|----------|--------|----------|
| **v0** | Vercel | ✅ Available | React/Next.js |
| **Bolt.New** | StackBlitz | ✅ Available | Full-stack |
| ** Lovable** | Lovable | ✅ Available | React/Next.js |
| **Frontend AI** | Various | Beta | Prototyping |

**แนะนำ: ใช้ v0.dev** - เพราะเราใช้ Next.js อยู่แล้ว

---

## 2. v0.dev - วิธีใช้งาน

### 2.1 Basic Usage

**Prompt Pattern ที่แนะนำ:**

```
Create a [TYPE OF PAGE] for a [APP TYPE] with these requirements:
- [REQUIREMENT 1]
- [REQUIREMENT 2]  
- [REQUIREMENT 3]

Design style:
- Modern, professional
- [COLOR PREFERENCE]
- [LAYOUT PREFERENCE]
```

### 2.2 Advanced Prompts

```markdown
# Full Prompt Template for v0

You are a senior UI/UX designer. Create a complete landing page for:

**App Name:** [TBM - Thailand Business Matching]

**App Description:** 
A B2B marketplace platform connecting Thai businesses with investors, 
co-founders, and partners. It's like a "dating app" for business deals.

**Target Users:**
- SME owners looking for funding/partners
- Investors seeking deal flow
- Business brokers

**Key Features:**
1. Verification badges (4 levels)
2. Business listings (Fundraising, Sale, Co-founder, Partner)
3. Search & Filter
4. Messaging system
5. Dashboard

**Pages to create:**
1. Landing Page (hero, features, CTA)
2. Explore/Browse page (filters, listing cards)
3. Listing Detail page
4. Dashboard (stats, my listings, messages)
5. Auth pages (login, register)

**Design Requirements:**
- Professional, trustworthy look
- Primary color: [Will use Thai business blue/green]
- Clean, modern, B2B style
- Mobile responsive
- Use Tailwind CSS
- Include subtle animations

**Tech Stack:**
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
```

---

## 3. TBM UI Prompt - สำหรับ v0

### 3.1 Landing Page

```
Create a modern, professional landing page for TBM (Thailand Business Matching Platform).

This is a B2B platform that connects:
- Business owners seeking funding/partners
- Investors looking for deals
- People seeking co-founders

Features to highlight:
- Verification system (trust)
- Multiple listing types (fundraising, sale, co-founder, partner)
- Smart matching
- Thai market focus

Design:
- Professional, trustworthy
- Blue/Teal color scheme (trust in business)
- Clean, modern
- Include: Hero section, Features, How it works, Testimonials, CTA
- Mobile responsive
- Use Tailwind CSS
```

### 3.2 Explore Page

```
Create a browse/explore page for TBM business listing platform.

Components needed:
- Header with search bar
- Sidebar filters (Type, Industry, Stage, Location, Deal Size)
- Grid of listing cards showing:
  - Company name/logo
  - Listing type badge
  - Key info (amount, stage, location)
  - Verification badge
  - View count, message count
- Pagination or infinite scroll

Filter options:
- Type: Fundraising, Sale, Co-founder, Partner
- Industry: Tech, F&B, Manufacturing, etc.
- Stage: Seed, Series A, etc.
- Location: Bangkok, etc.
- Deal size ranges
- Verified only toggle

Design: Clean, professional, B2B marketplace style
```

### 3.3 Dashboard

```
Create a user dashboard for TBM platform.

Dashboard sections:
1. Stats cards (Total listings, Views, Messages, Connections)
2. Recent activity feed
3. Quick actions (Create listing, View messages)
4. My listings management
5. Messages preview
6. Profile completeness indicator

Design: Professional, data-focused, clean
```

### 3.4 Listing Detail Page

```
Create a detailed listing page for TBM platform.

Sections:
1. Header (Title, Type badge, Verification badge)
2. Company/Profile info card
3. Key details (Industry, Stage, Location, Deal size)
4. Description/Full details
5. Financial summary (if applicable)
6. Documents (Pitch deck, etc.)
7. CTA buttons (Connect, Message, Save)
8. Similar listings sidebar

Design: Professional, comprehensive, trustworthy
```

---

## 4. Best Practices for AI UI Generation

### 4.1 Prompt Tips

| DO | DON'T |
|----|-------|
| ให้ context ชัดเจน | ถามกี่อย่างใน prompt เดียว |
| ระบุ target audience | ทำทุกอย่างพร้อมกัน |
| บอก design constraints | ปล่อยให้ AI ตัดสินใจเองทั้งหมด |
| ระบุ tech stack | ไม่บอก colors/fonts |
| แบ่งเป็นหน้าๆ | ขอทั้ง app ในครั้งเดียว |

### 4.2 Iteration Process

```
1. First Prompt → Generate basic layout
2. Review → Identify issues
3. Refine → Add specific corrections
4. Repeat → Until satisfied
5. Export → Get clean code
6. Customize → Add your business logic
```

---

## 5. v0 Code Export

### 5.1 How to Export

1. ไปที่ v0.dev
2. ใส่ prompt
3. รอ generate
4. กด "Export" หรือ "Copy Code"
5. นำ code ไปใช้ใน project

### 5.2 Integration with Next.js

```bash
# สร้าง Next.js project ใหม่
npx create-next-app@latest tbm --typescript --tailwind --eslint

# หรือใช้ existing project
cd tbm

# วาง code ที่ได้จาก v0 ใน src/app/
```

---

## 6. TBM Design System (Preparation)

### 6.1 Color Palette

| Purpose | Color | Hex |
|---------|-------|-----|
| Primary | Deep Blue | #1E40AF |
| Secondary | Teal | #0D9488 |
| Accent | Amber | #F59E0B |
| Background | Light Gray | #F8FAFC |
| Surface | White | #FFFFFF |
| Text Primary | Dark | #1E293B |
| Text Secondary | Gray | #64748B |
| Success | Green | #10B981 |
| Warning | Yellow | #F59E0B |
| Error | Red | #EF4444 |

### 6.2 Typography

| Element | Font | Weight |
|---------|------|--------|
| Headings | Inter | 700-800 |
| Body | Inter | 400-500 |
| Thai Support | Prompt / Sarabun | 400-600 |

### 6.3 Components Needed

- Buttons
- Cards
- Forms (Input, Select, Checkbox, Radio)
- Badges
- Modals
- Tables
- Navigation
- Sidebar
- Header
- Footer

---

## 7. Next Steps

### วิธีใช้งาน:

1. **ไปที่** v0.dev หรือ bolt.new
2. **ใช้ prompt** ที่เตรียมไว้
3. **Generate** UI แต่ละหน้า
4. **Export** code
5. **นำไปใช้** ใน Next.js project

---

## 8. Alternative: Use MCP/Codex

ถ้ามี access สามารถใช้ **Codex** หรือ **Claude Code** ผ่าน terminal:

```bash
# สร้าง UI ด้วย Codex
codex --prompt "Create a landing page for TBM..."
```

---

*Document Version: 1.0*
*Last Updated: 2026-03-21*
