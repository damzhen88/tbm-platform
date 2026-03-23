# TBM Platform - Design Analysis & Recommendations

## Design Analysis (Based on Stitch Screenshots)

### ✅ What's Already Designed:

| Page | Status | Quality |
|------|--------|---------|
| Landing | ✅ Complete | Excellent - Editorial style |
| Auth/Register | ✅ Complete | Good - Role selection included |
| Explore/Marketplace | ✅ Complete | Good - Filters + Cards |
| Dashboard | ✅ Complete | Good - Stats + Tables |

---

## 🔬 Research-Based Recommendations

### 1. UX/UI Improvements

#### Current Issues Found:

| Issue | Severity | Recommendation |
|-------|----------|----------------|
| No "I Want to Sell/Invest" buttons on Hero | High | Add prominent CTAs in Hero section |
| Missing Role-based landing experience | Medium | After login, show different dashboard for Investor vs Owner |
| No Data Room UI | High | Need dedicated page for confidential documents |
| No NDA flow UI | High | Need NDA signing experience |
| No KYC/Verification UI | Medium | Need verification progress tracking |
| No Messaging UI | Medium | Chat interface not shown |
| No Search Results page | Low | Explore IS the search |

#### Missing Pages to Add:

| Priority | Page | Description |
|----------|------|-------------|
| 🔴 High | **Data Room** | Secure document viewing with watermarks |
| 🔴 High | **NDA Signing** | NDA acceptance flow before viewing docs |
| 🔴 High | **Listing Creation Wizard** | Multi-step form to create listings |
| 🟡 Medium | **Profile Page** | User profile with verification badges |
| 🟡 Medium | **Messages/Chat** | Real-time messaging UI |
| 🟡 Medium | **KYC Verification** | Upload ID, documents |
| 🟢 Low | **Admin Dashboard** | For platform admins |

---

### 2. Recommended Features to Add

#### A. "I Want to Sell / I Want to Invest" CTAs
Based on the Private Equity Marketplace concept:

```
Hero Section Should Have:
┌─────────────────────────────────────────────────────────┐
│  🏢 I WANT TO SELL          💰 I WANT TO INVEST       │
│  ขายธุรกิจ/หุ้น/หาพาร์ท    ลงทุนในธุรกิจไทย           │
└─────────────────────────────────────────────────────────┘
```

**After click:**
- "I Want to Sell" → Create Listing Wizard
- "I Want to Invest" → Marketplace with Investor filters

#### B. Verification Badges System
Current: Shows "VERIFIED" badge

**Should add levels:**
```
⚪ BASIC         - Email verified only
🔵 ID VERIFIED   - ID card verified  
🟢 BUSINESS     - Business docs verified
🟣 PREMIUM      - Full verification
```

#### C. Data Room (Critical Feature)
This is the "killer feature" that differentiates from Facebook/LINE:

**UI Elements:**
- Lock icons on sensitive documents
- Preview with watermark (show user name + date)
- NDA status indicator
- Download button (only after NDA signed)
- Access log (who viewed what)

#### D. Listing Creation Wizard
Multi-step wizard:

```
Step 1: ประเภท → Fundraising / Sale / Co-founder / Partner
Step 2: ข้อมูลธุรกิจ → Title, Description, Industry, Location
Step 3: การเงิน → Amount, Valuation, Equity
Step 4: เอกสาร → Upload Pitch Deck, Financials
Step 5: NDA Settings → Require NDA to view?
Step 6: Preview → Review & Publish
```

---

### 3. Technical Recommendations

#### Security (from TRUST_SECURITY.md):
- [ ] Row Level Security (RLS) policies
- [ ] Document access control (NDA-gated)
- [ ] Watermark on document previews
- [ ] Audit logging for document access
- [ ] Rate limiting on API

#### Performance:
- [ ] Implement pagination (current shows all?)
- [ ] Lazy load images
- [ ] Optimize bundle size
- [ ] Add loading skeletons

#### Mobile:
- [ ] Responsive breakpoints check
- [ ] Touch-friendly tap targets (min 44px)
- [ ] Bottom navigation for mobile

---

### 4. Design System Compliance

The Kinetic Unity design system specifies:

| Rule | Status | Notes |
|------|--------|-------|
| No 1px borders | ⚠️ Partial | Some cards still have borders |
| Tonal layering | ✅ Good | Using surface colors |
| Glassmorphism | ✅ Good | Floating bars use blur |
| Blue-tinted shadows | ⚠️ Need | Check shadow colors |
| Manrope + Inter fonts | ✅ Good | Consistent typography |

---

### 5. Priority Action Items

#### First Sprint (MVP):
1. ✅ Landing Page (Done)
2. ✅ Auth Pages (Done)
3. ✅ Explore/Marketplace (Done)
4. ✅ Dashboard (Done)
5. 🔄 **Listing Creation Wizard** (Need to build)
6. 🔄 **Data Room UI** (Need to build)
7. 🔄 **NDA Flow** (Need to build)

#### Second Sprint:
8. Profile Page
9. Messaging UI
10. KYC Verification UI

---

## Summary

### What's Working Well:
✅ Modern, professional aesthetic  
✅ Editorial design approach  
✅ Clear information hierarchy  
✅ Good use of verification badges  
✅ Trust indicators visible  

### What Needs Work:
🔴 No "Sell/Invest" CTAs on hero  
🔴 Missing Data Room experience  
🔴 No NDA signing flow  
🔴 No Listing creation wizard  
🔴 No verification progress UI  

---

## Recommended Next Steps

1. **Add "I Want to Sell/Invest" buttons** to Hero
2. **Build Listing Creation Wizard** (critical for user onboarding)
3. **Design Data Room UI** (killer feature)
4. **Add NDA signing flow** (trust system)
5. **Build Profile + Verification UI** (completion)

---

*Analysis based on: Frontend Design Skill, Anti-Slop Design, UX Research*
