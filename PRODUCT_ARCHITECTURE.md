# TBM Platform - Complete Product Architecture
## Version: 2.0 | From: Product Requirements Document

---

# SECTION 1: FULL SYSTEM FLOW

## User Journey Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        TBM DEAL FLOW                                   │
└─────────────────────────────────────────────────────────────────────────────┘

START
  │
  ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 1. LANDING / MARKETPLACE                                         │
│    - Browse listings                                              │
│    - Filter by: Type, Industry, Size, Location                   │
│    - View PE / Institutional sections                            │
│    CTA: "View Listing" or "Create Listing"                       │
└──────────────────────────────────────────────────────────────────────┘
  │
  ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 2. LISTING DETAIL                                               │
│    - Business overview                                          │
│    - Financial highlights                                       │
│    - Investment highlights                                       │
│    CTA: "Request Access" (requires login)                       │
└──────────────────────────────────────────────────────────────────────┘
  │
  ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 3. NDA GATE (Access Request)                                    │
│    - Login / Register                                           │
│    - Select role: Buyer / Investor / Broker                     │
│    - Fill accreditation info                                    │
│    - Sign NDA digitally                                        │
│    CTA: "Sign & Continue"                                       │
└──────────────────────────────────────────────────────────────────────┘
  │
  ▼ (NDA Approved)
┌──────────────────────────────────────────────────────────────────────┐
│ 4. DATA ROOM (VDR)                                            │
│    - View confidential documents                                │
│    - Download (with watermark)                                  │
│    - Add comments / Q&A                                        │
│    - Track activity                                            │
│    CTA: "Submit IOI"                                           │
└──────────────────────────────────────────────────────────────────────┘
  │
  ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 5. IOI SUBMISSION                                             │
│    - Indicative price range                                     │
│    - Proposed terms                                            │
│    - Conditions                                                │
│    CTA: "Submit IOI"                                           │
└──────────────────────────────────────────────────────────────────────┘
  │
  ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 6. DEAL ROOM / AUCTION                                        │
│    - Real-time bidding                                          │
│    - Anonymous rankings                                        │
│    - Chat with seller                                          │
│    - Submit final offer                                        │
│    CTA: "Place Bid" or "Submit Offer"                          │
└──────────────────────────────────────────────────────────────────────┘
  │
  ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 7. NEGOTIATION & DUE DILIGENCE                                │
│    - Document exchange                                         │
│    - Q&A                                                      │
│    - Legal review                                              │
│    CTA: "Proceed to Close"                                     │
└──────────────────────────────────────────────────────────────────────┘
  │
  ▼
┌──────────────────────────────────────────────────────────────────────┐
│ 8. DEAL CLOSURE                                               │
│    - Final documentation                                       │
│    - Payment / Escrow                                          │
│    - Transfer of ownership                                     │
│    CTA: "Complete Deal"                                        │
└──────────────────────────────────────────────────────────────────────┘
  │
  ▼
END - Deal Closed Successfully 🎉
```

---

# SECTION 2: PAGE-BY-PAGE BREAKDOWN

## Page 1: Landing Page

| Field | Detail |
|-------|--------|
| **Purpose** | Main entry point, value proposition |
| **Current State** | Static HTML with CTA buttons |
| **Missing** | - Dynamic listing counts, - Personalized recommendations, - Recent activity |
| **Primary CTA** | "Start Investing" / "List Your Business" |
| **Secondary CTA** | "View Marketplace" |
| **Backend Needed** | - Public stats API, - Featured listings API |
| **Next Step** | → Marketplace or → Create Listing |

## Page 2: Marketplace

| Field | Detail |
|-------|--------|
| **Purpose** | Browse all listings with filters |
| **Current State** | Static HTML with filter UI |
| **Missing** | - Search, - Pagination, - Sort, - Save/Bookmarks |
| **Primary CTA** | Click on Listing |
| **Secondary CTA** | Save to Watchlist |
| **Backend Needed** | - Listings API with filters, - Search API, - Save/Unsave API |
| **Next Step** | → Listing Detail |

## Page 3: PE Marketplace

| Field | Detail |
|-------|--------|
| **Purpose** | Curated PE deals for institutional buyers |
| **Current State** | Static HTML |
| **Missing** | - Accreditation gate, - Institutional-only access |
| **Primary CTA** | "Verify Accreditation" |
| **Secondary CTA** | "Learn More" |
| **Backend Needed** | - Accreditation status check, - Tiered access control |
| **Next Step** | → NDA Gate or → Listing Detail (if accredited) |

## Page 4: Listing Detail

| Field | Detail |
|-------|--------|
| **Purpose** | Present deal information, drive conversion |
| **Current State** | Static HTML with overview, financials, team |
| **Missing** | - Real-time views counter, - Interested buyer count, - Similar deals |
| **Primary CTA** | "Request Access" (or "Login to Access") |
| **Secondary CTA** | "Save to Watchlist" |
| **Backend Needed** | - Listing detail API, - User intent tracking, - Similar deals API |
| **Key Metric** | Track clicks on "Request Access" |
| **Next Step** | → NDA Gate |

## Page 5: Create Listing (Wizard)

| Field | Detail |
|-------|--------|
| **Purpose** | Seller creates new listing |
| **Current State** | Multi-step form |
| **Missing** | - Draft save, - Media upload, - Valuation tool |
| **Primary CTA** | "Publish Listing" |
| **Secondary CTA** | "Save as Draft" |
| **Backend Needed** | - Listing CRUD API, - Image upload API, - Draft auto-save |
| **Verification Check** | Verify seller identity before publishing |
| **Next Step** | → Dashboard (seller's listings) |

## Page 6: Dashboard

| Field | Detail |
|-------|--------|
| **Purpose** | Central hub for user activity |
| **Current State** | Static with stats, tables |
| **Missing** | - Dynamic data, - Pipeline view, - Notifications |
| **Primary CTA** | Context-dependent (View Listing / Create Listing) |
| **Secondary CTA** | View All |
| **Backend Needed** | - User stats API, - Activity API, - Notifications API |
| **Seller View** | - Views, - Inquiries, - IOIs, - Deals |
| **Buyer View** | - Saved Deals, - IOIs, - Active Negotiations |
| **Next Step** | Various (contextual) |

## Page 7: Data Room (VDR)

| Field | Detail |
|-------|--------|
| **Purpose** | Secure document access after NDA |
| **Current State** | Folder structure with documents |
| **Missing** | - Comments, - Q&A, - Activity logs, - Download tracking |
| **Primary CTA** | "Submit IOI" |
| **Secondary CTA** | "Ask Question" |
| **Backend Needed** | - Document API, - Comments/Q&A API, - Activity log API, - Download tracking |
| **Security** | - Watermarking, - Access logs |
| **Key Metric** | Time spent, documents viewed |
| **Next Step** | → IOI Submission |

## Page 8: NDA Gate

| Field | Detail |
|-------|--------|
| **Purpose** | Gate access to confidential info |
| **Current State** | Form with role selection |
| **Missing** | - Auto-fill from profile, - NDA template display |
| **Primary CTA** | "Sign & Continue" |
| **Secondary CTA** | "Learn More About NDA" |
| **Backend Needed** | - NDA generation, - Digital signature, - Access approval workflow |
| **Verification** | Check user accreditation level |
| **Next Step** | → Data Room (if approved) |

## Page 9: Deal Room / Auction

| Field | Detail |
|-------|--------|
| **Purpose** | Competitive bidding, negotiation |
| **Current State** | Auction UI with bid history |
| **Missing** | - Real-time updates, - Anonymous ranking, - Soft close |
| **Primary CTA** | "Place Bid" / "Submit Offer" |
| **Secondary CTA** | "Message Seller" |
| **Backend Needed** | - Bidding API, - Real-time websocket, - Auction rules engine |
| **Auction Types** | - Sealed bid, - Open auction, - Dutch |
| **Key Metric** | Number of bids, bid velocity |
| **Next Step** | → Negotiation or → Deal Closure |

---

# SECTION 3: DATA MODEL

## Core Entities

### User
```typescript
interface User {
  id: string
  email: string
  role: 'seller' | 'buyer' | 'broker' | 'admin'
  
  // Profile
  firstName: string
  lastName: string
  company?: string
  phone?: string
  lineUserId?: string
  
  // Verification
  verificationLevel: 'none' | 'email' | 'id' | 'business' | 'premium'
  isVerified: boolean
  
  // Accreditation (for buyers)
  accreditationType: 'individual' | 'institutional' | 'family_office'
  accreditedAt?: Date
  
  // Trust
  credibilityScore: number  // 0-100
  dealsCompleted: number
  
  createdAt: Date
  updatedAt: Date
}
```

### Listing (Deal)
```typescript
interface Listing {
  id: string
  ownerId: string
  
  // Business Info
  title: string
  slug: string
  type: 'full_sale' | 'partial_sale' | 'series_a' | 'growth_partner' | 'exit'
  status: 'draft' | 'pending' | 'active' | 'paused' | 'closed'
  
  // Industry & Location
  industry: string[]
  subIndustry?: string
  province: string
  
  // Financial
  targetAmount: number  // THB
  valuation?: number
  equityOffered?: number
  minParticipation?: number
  annualRevenue?: number
  ebitda?: number
  
  // Deal Terms
  dealType: 'auction' | 'negotiation' | 'direct'
  biddingEndsAt?: Date
  reservePrice?: number
  
  // Tracking
  viewCount: number
  inquiryCount: number
  ioiCount: number
  uniqueViewers: number
  
  // NDA
  requireNda: boolean
  ndaRequiredFor: 'documents' | 'financials' | 'all'
  
  publishedAt?: Date
  closedAt?: Date
  createdAt: Date
  updatedAt: Date
}
```

### IOI (Indication of Interest)
```typescript
interface IOI {
  id: string
  listingId: string
  buyerId: string
  
  // Terms
  priceRangeMin: number
  priceRangeMax: number
  proposedTerms?: string
  conditions?: string
  
  // Status
  status: 'submitted' | 'under_review' | 'accepted' | 'rejected' | 'withdrawn'
  
  // Priority
  isBinding: boolean
  isFinal: boolean
  
  submittedAt: Date
  respondedAt?: Date
}
```

### Bid
```typescript
interface Bid {
  id: string
  listingId: string
  buyerId: string
  
  // Bid Details
  amount: number
  terms?: string
  conditions?: string
  
  // Anonymous Ranking
  rank: number  // visible to seller only
  
  // Status
  status: 'active' | 'outbid' | 'winning' | 'withdrawn' | 'accepted' | 'rejected'
  
  // Timing
  isAutoBid: boolean
  maxBidAmount?: number  // for auto-bidding
  
  submittedAt: Date
  updatedAt: Date
}
```

### Document
```typescript
interface Document {
  id: string
  listingId: string
  uploaderId: string
  
  // Info
  name: string
  category: 'pitch_deck' | 'financial' | 'legal' | 'team' | 'other'
  fileUrl: string
  fileSize: number
  mimeType: string
  
  // Access Control
  accessLevel: 'public' | 'nda_required' | 'private'
  
  // Tracking
  viewCount: number
  downloadCount: number
  
  createdAt: Date
}
```

### NDA
```typescript
interface NDA {
  id: string
  listingId: string
  userId: string
  
  // Status
  status: 'pending' | 'signed' | 'expired' | 'revoked'
  
  // Signing
  signedName: string
  signedAt: Date
  ipAddress: string
  
  // Expiry
  expiresAt: Date
  
  createdAt: Date
}
```

### Activity
```typescript
interface Activity {
  id: string
  userId: string
  listingId?: string
  documentId?: string
  
  // Action Types
  action: 
    | 'view_listing'
    | 'request_access'
    | 'sign_nda'
    | 'view_document'
    | 'download_document'
    | 'submit_ioi'
    | 'place_bid'
    | 'message_sent'
    | 'deal_closed'
  
  metadata: Record<string, any>
  ipAddress?: string
  
  createdAt: Date
}
```

---

# SECTION 4: MONETIZATION STRATEGY

## Revenue Streams

### 1. Success Fee (Primary)
| Detail | Value |
|--------|-------|
| **Model** | % of deal value |
| **Standard** | 2-5% |
| **Tiered** | >10M: 2%, >50M: 1.5%, >100M: 1% |
| **When Charged** | On deal closure |
| **UI Placement** | Listing creation wizard, Deal room |

### 2. Listing Fees
| Tier | Price | Features |
|------|-------|----------|
| **Basic** | Free | Standard listing |
| **Professional** | ฿9,900/mo | Enhanced listing, analytics |
| **Premium** | ฿29,900/mo | Featured, priority, analytics |

### 3. Premium Exposure
| Placement | Price |
|-----------|-------|
| Homepage banner | ฿15,000/week |
| Category featured | ฿5,000/week |
| "Hot" badge | ฿2,000/week |

### 4. Data Room / VDR Service
| Service | Price |
|---------|-------|
| Basic VDR | Included |
| Enhanced VDR | ฿15,000/deal |
| Dedicated VDR | ฿50,000/mo |

### 5. Concierge / Advisory
| Service | Price |
|---------|-------|
| Valuation | ฿50,000 |
| M&A Advisory | 1% of deal |
| Due Diligence | ฿100,000+ |

### 6. Subscription (Optional)
| Plan | Price | Features |
|------|-------|----------|
| **Explorer** | Free | Limited searches |
| **Professional** | ฿2,900/mo | Full access, alerts |
| **Institutional** | ฿29,900/mo | Team, API, reports |

---

# SECTION 5: TOP 10 PRODUCT FIXES

## Critical Fixes (Immediate)

### 1. CONNECT THE FUNNEL 🔴
**Problem**: Pages are disconnected
**Fix**: Add proper routing and state management
- Link Marketplace → Listing Detail → NDA → Data Room → IOI → Deal Room
- Every page must have clear next step

### 2. ADD USER ROLES 🔴
**Problem**: No differentiation between seller/buyer
**Fix**: Implement role-based dashboard
- Seller dashboard: Listings, Inquiries, Pipeline
- Buyer dashboard: Saved, IOIs, Negotiations

### 3. IMPLEMENT DEAL STATES 🟠
**Problem**: No deal lifecycle
**Fix**: Add status tracking
- Draft → Live → NDA → IOI → Negotiation → Closed

### 4. BUILD BIDDING ENGINE 🟠
**Problem**: No transaction capability
**Fix**: 
- IOI form and submission
- Bid placement and tracking
- Anonymous ranking for sellers

### 5. ADD BUYER INTENT TRACKING 🟡
**Problem**: No visibility into interest
**Fix**:
- Track views, time spent, documents opened
- Display: "12 investors viewing", "5 IOIs submitted"

## Medium Priority

### 6. ENHANCE DATA ROOM 🟡
**Problem**: Basic folder structure
**Fix**:
- Comments and Q&A per document
- Activity logs
- Download watermarking

### 7. TRUST BADGES 🟢
**Problem**: No credibility indicators
**Fix**:
- Verified seller badge
- Financial verification badge
- Deal completion count

### 8. SELLER DASHBOARD 🟢
**Problem**: Limited seller insights
**Fix**:
- View count
- Inquiry conversion
- Pipeline visualization

### 9. SEARCH & FILTERS 🟢
**Problem**: Basic filtering only
**Fix**:
- Full-text search
- Save search
- Alerts for new listings

### 10. MOBILE RESPONSIVENESS 🟢
**Problem**: May not work on mobile
**Fix**:
- Responsive breakpoints
- Touch-friendly UI

---

# SECTION 6: AI FEATURES (BONUS)

### 1. Valuation AI
- Automated business valuation based on financials
- Comparable deal analysis
- ROI simulation

### 2. Fraud Detection
- Anomaly detection in financials
- Fake listing detection
- Suspicious activity alerts

### 3. Deal Matching
- AI-powered buyer-seller matching
- "Similar deals" recommendations
- Predictive closing probability

### 4. Document Analysis
- Auto-extract key terms from contracts
- Risk flagging in due diligence

### 5. Smart Notifications
- Personalized deal alerts
- Market trend insights

---

# SECTION 7: COMPETITIVE ADVANTAGE

### vs Axial / DealStream

| Our Advantage | Description |
|---------------|-------------|
| **Thailand Focus** | Local expertise, Thai language, BDEC integration |
| **End-to-End** | From browse to close in one platform |
| **Modern UX** | Better UI/UX than legacy platforms |
| **Trust System** | Verified badges, KYC, credibility scores |
| **Mobile First** | Better mobile experience |
| **Lower Fees** | 50% cheaper than traditional brokers |

---

*Document generated from Product Requirements*
*Version: 2.0*
*Date: 2026-03-23*
