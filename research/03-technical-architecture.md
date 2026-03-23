# TBM - Technical Architecture
## Phase 3: Technical Design

---

## 1. System Overview

### 1.1 Architecture Principles

| Principle | Description |
|-----------|-------------|
| **Scalability** | รองรับ 50,000+ concurrent users |
| **Reliability** | 99.9% uptime, fault tolerant |
| **Security** | End-to-end encryption, PDPA compliance |
| **Developer Experience** | TypeScript end-to-end, CI/CD |
| **Cost Efficiency** | Pay-as-you-grow, optimize resources |

### 1.2 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   Web App   │  │ Mobile Web  │  │    Admin    │             │
│  │  (Next.js)  │  │  (PWA)      │  │  (Next.js)  │             │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘             │
└─────────┼────────────────┼────────────────┼─────────────────────┘
          │                │                │
          ▼                ▼                ▼
┌─────────────────────────────────────────────────────────────────┐
│                        API GATEWAY                               │
│  ┌─────────────────────────────────────────────────────────┐     │
│  │              Next.js API Routes (Route Handlers)        │     │
│  │  - Authentication - Listings - Matching - Messages     │     │
│  └─────────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│                       SERVICE LAYER                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│  │  Auth Svc    │ │  Listing Svc │ │  Match Svc   │           │
│  └──────────────┘ └──────────────┘ └──────────────┘           │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│  │ Message Svc   │ │ Payment Svc  │ │  Search Svc  │           │
│  └──────────────┘ └──────────────┘ └──────────────┘           │
│  ┌──────────────┐ ┌──────────────┐                             │
│  │ Verify Svc   │ │  AI Svc      │                             │
│  └──────────────┘ └──────────────┘                             │
└─────────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────────┐
│                        DATA LAYER                               │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│  │  PostgreSQL  │ │    Redis     │ │  S3/Storage  │           │
│  │  (Supabase)  │ │   (Cache)    │ │   (Files)    │           │
│  └──────────────┘ └──────────────┘ └──────────────┘           │
│  ┌──────────────┐                                               │
│  │ Elasticsearch│                                               │
│  │  (Search)    │                                               │
│  └──────────────┘                                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Technology Stack

### 2.1 Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.x | React framework with App Router |
| **React** | 19.x | UI Library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Styling |
| **shadcn/ui** | latest | Component library |
| **Framer Motion** | 11.x | Animations |
| **React Query** | 5.x | Data fetching |
| **Zustand** | 5.x | State management |

### 2.2 Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 22.x | Runtime |
| **Fastify** | 5.x | API Framework |
| **TypeScript** | 5.x | Type safety |
| **Prisma** | 6.x | ORM |
| **PostgreSQL** | 15.x | Primary database |
| **Redis** | 7.x | Caching, Sessions |
| **OpenAI** | API | AI Matching |

### 2.3 Infrastructure

| Service | Provider | Purpose |
|---------|----------|---------|
| **Frontend** | Vercel | Hosting, CDN |
| **Database** | Supabase | PostgreSQL, Auth, Storage |
| **Cache** | Upstash | Redis |
| **Search** | Elasticsearch | Full-text search |
| **Email** | Resend | Transactional email |
| **Storage** | Supabase Storage | Files, Images |
| **CDN** | Cloudflare | Security, Performance |

---

## 3. Database Schema

### 3.1 Core Entities

```sql
-- Users
users (
  id              UUID PRIMARY KEY,
  email           VARCHAR(255) UNIQUE NOT NULL,
  password_hash   VARCHAR(255),
  role            ENUM('user', 'investor', 'broker', 'admin'),
  verification_level ENUM('basic', 'verified', 'business_verified', 'premium'),
  created_at      TIMESTAMP DEFAULT NOW(),
  updated_at      TIMESTAMP DEFAULT NOW()
)

-- User Profiles
profiles (
  id              UUID PRIMARY KEY,
  user_id         UUID REFERENCES users(id),
  first_name      VARCHAR(100),
  last_name       VARCHAR(100),
  avatar_url      VARCHAR(500),
  bio             TEXT,
  linkedin_url    VARCHAR(255),
  phone           VARCHAR(20),
  location        VARCHAR(255),
  -- Investor specific
  investor_type   ENUM('angel', 'vc', 'pe', 'corporate'),
  investment_range_min DECIMAL(15,2),
  investment_range_max DECIMAL(15,2),
  industries      TEXT[],
  -- Business specific
  company_name    VARCHAR(255),
  company_website VARCHAR(255),
  founded_date    DATE,
  employee_count  INTEGER,
  revenue_range   VARCHAR(50)
)

-- Business Listings
listings (
  id              UUID PRIMARY KEY,
  user_id         UUID REFERENCES users(id),
  type            ENUM('fundraising', 'sale', 'cofounder', 'partner', 'acquisition'),
  title           VARCHAR(255) NOT NULL,
  slug            VARCHAR(255) UNIQUE,
  description     TEXT,
  industry        VARCHAR(50)[],
  stage           ENUM('idea', 'pre-seed', 'seed', 'series-a', 'series-b', 'bootstrap'),
  location        VARCHAR(255),
  -- Financial
  amount          DECIMAL(15,2),
  currency        VARCHAR(3) DEFAULT 'THB',
  valuation       DECIMAL(15,2),
  -- Status
  status          ENUM('draft', 'active', 'paused', 'closed'),
  is_featured     BOOLEAN DEFAULT FALSE,
  created_at      TIMESTAMP DEFAULT NOW(),
  updated_at      TIMESTAMP DEFAULT NOW()
)

-- Listing Documents
listing_documents (
  id              UUID PRIMARY KEY,
  listing_id      UUID REFERENCES listings(id),
  type            ENUM('pitch_deck', 'financial', 'legal', 'other'),
  file_url        VARCHAR(500),
  file_name       VARCHAR(255),
  file_size       INTEGER
)

-- Matches
matches (
  id              UUID PRIMARY KEY,
  listing_id      UUID REFERENCES listings(id),
  matched_user_id UUID REFERENCES users(id),
  score           DECIMAL(5,2),
  status          ENUM('suggested', 'interested', 'passed', 'connected'),
  created_at      TIMESTAMP DEFAULT NOW()
)

-- Messages
conversations (
  id              UUID PRIMARY KEY,
  participants    UUID[],
  last_message_at TIMESTAMP,
  created_at      TIMESTAMP DEFAULT NOW()
)

messages (
  id              UUID PRIMARY KEY,
  conversation_id UUID REFERENCES conversations(id),
  sender_id       UUID REFERENCES users(id),
  content         TEXT,
  type            ENUM('text', 'file', 'system'),
  is_read         BOOLEAN DEFAULT FALSE,
  created_at      TIMESTAMP DEFAULT NOW()
)

-- Verifications
verifications (
  id              UUID PRIMARY KEY,
  user_id         UUID REFERENCES users(id),
  type            ENUM('email', 'identity', 'business', 'income'),
  status          ENUM('pending', 'approved', 'rejected'),
  document_url    VARCHAR(500),
  verified_at     TIMESTAMP,
  created_at      TIMESTAMP DEFAULT NOW()
)

-- Payments
subscriptions (
  id              UUID PRIMARY KEY,
  user_id         UUID REFERENCES users(id),
  plan            ENUM('free', 'pro', 'enterprise'),
  status          ENUM('active', 'cancelled', 'past_due'),
  started_at      TIMESTAMP,
  expires_at      TIMESTAMP,
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255)
)
```

### 3.2 Indexes

```sql
-- Performance Indexes
CREATE INDEX idx_listings_type_status ON listings(type, status);
CREATE INDEX idx_listings_industry ON listings USING GIN(industry);
CREATE INDEX idx_listings_stage ON listings(stage);
CREATE INDEX idx_listings_location ON listings(location);
CREATE INDEX idx_profiles_investor_type ON profiles(investor_type);
CREATE INDEX idx_messages_conversation ON messages(conversation_id, created_at);
CREATE INDEX idx_matches_listing ON matches(listing_id, status);
```

---

## 4. API Design

### 4.1 REST API Structure

```
API Base URL: https://api.tbm.platform/v1

Authentication:
POST   /auth/register
POST   /auth/login
POST   /auth/refresh
POST   /auth/logout
POST   /auth/forgot-password

Users:
GET    /users/me
PATCH  /users/me
GET    /users/:id
GET    /users/:id/profile

Listings:
GET    /listings
POST   /listings
GET    /listings/:id
PATCH  /listings/:id
DELETE /listings/:id
POST   /listings/:id/publish
POST   /listings/:id/pause

Search:
GET    /search/businesses
GET    /search/investors
GET    /search/fundraising

Matches:
GET    /matches
POST   /matches/:listing_id/refresh
PATCH  /matches/:id/status

Messages:
GET    /conversations
GET    /conversations/:id/messages
POST   /conversations/:id/messages
POST   /conversations/start

Payments:
POST   /payments/checkout
POST   /payments/webhook
GET    /payments/subscription

Verification:
POST   /verification/submit
GET    /verification/status
```

### 4.2 API Response Format

```typescript
// Success Response
interface ApiResponse<T> {
  success: true;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
}

// Error Response
interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: Record<string, string[]>;
  };
}

// Example: Get Listings
GET /v1/listings?type=fundraising&industry=tech&stage=seed&page=1&limit=20

Response:
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Tech Startup Seed Round",
      "type": "fundraising",
      "industry": ["Technology"],
      "stage": "seed",
      "amount": 5000000,
      "valuation": 25000000,
      "createdAt": "2026-03-21T00:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}
```

---

## 5. Matching Algorithm

### 5.1 Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   User Action   │────▶│   Matching      │────▶│   Results       │
│ (View, Save,    │     │   Engine        │     │   (Ranked List) │
│  Message)       │     │                 │     │                 │
└─────────────────┘     └────────┬────────┘     └─────────────────┘
                                │
                                ▼
                    ┌─────────────────────────┐
                    │  Scoring Components     │
                    │  ┌───────────────────┐  │
                    │  │ Industry Match     │  │
                    │  │ Stage Match        │  │
                    │  │ Location Match     │  │
                    │  │ Deal Size Match    │  │
                    │  │ Skill Match        │  │
                    │  │ Activity Score     │  │
                    │  │ Engagement Score   │  │
                    │  └───────────────────┘  │
                    └─────────────────────────┘
                                │
                                ▼
                    ┌─────────────────────────┐
                    │  AI Enhancement         │
                    │  (OpenAI Embeddings)    │
                    └─────────────────────────┘
```

### 5.2 Matching Code Structure

```typescript
// services/matching.ts
interface MatchScore {
  listingId: string;
  userId: string;
  totalScore: number;
  breakdown: {
    industry: number;
    stage: number;
    location: number;
    dealSize: number;
    skills: number;
    activity: number;
    ai: number;
  };
}

class MatchingEngine {
  async calculateScore(listing: Listing, user: User): Promise<MatchScore> {
    // 1. Industry matching (25%)
    const industryScore = this.calculateIndustryScore(listing, user);
    
    // 2. Stage matching (20%)
    const stageScore = this.calculateStageScore(listing, user);
    
    // 3. Location matching (15%)
    const locationScore = this.calculateLocationScore(listing, user);
    
    // 4. Deal size matching (20%)
    const dealSizeScore = this.calculateDealSizeScore(listing, user);
    
    // 5. Skills matching (10%) - for co-founder
    const skillsScore = this.calculateSkillsScore(listing, user);
    
    // 6. Activity score (10%)
    const activityScore = this.calculateActivityScore(user);
    
    // Total
    const totalScore = 
      (industryScore * 0.25) +
      (stageScore * 0.20) +
      (locationScore * 0.15) +
      (dealSizeScore * 0.20) +
      (skillsScore * 0.10) +
      (activityScore * 0.10);
    
    return {
      listingId: listing.id,
      userId: user.id,
      totalScore,
      breakdown: {
        industry: industryScore,
        stage: stageScore,
        location: locationScore,
        dealSize: dealSizeScore,
        skills: skillsScore,
        activity: activityScore,
        ai: 0 // Future AI enhancement
      }
    };
  }
}
```

---

## 6. Security Architecture

### 6.1 Authentication Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     AUTHENTICATION                          │
│                                                             │
│  ┌─────────┐    ┌─────────┐    ┌─────────────────────┐    │
│  │ Register│───▶│ Verify  │───▶│   Issue JWT Pair    │    │
│  │  Email  │    │  Email  │    │ (Access + Refresh)  │    │
│  └─────────┘    └─────────┘    └─────────────────────┘    │
│                                             │               │
│  ┌─────────┐    ┌─────────┐                │               │
│  │ Google  │───▶│  Get    │◀───────────────┘               │
│  │ OAuth   │    │ Profile │                                │
│  └─────────┘    └─────────┘                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 Security Measures

| Layer | Implementation |
|-------|----------------|
| **Transport** | TLS 1.3, HTTPS only |
| **Authentication** | JWT with short-lived access tokens (15 min), refresh tokens (7 days) |
| **Authorization** | Role-based access control (RBAC) |
| **Input Validation** | Zod schemas on all inputs |
| **SQL Injection** | Prisma ORM (parameterized queries) |
| **XSS** | React's built-in escaping, Content Security Policy |
| **CSRF** | Next.js CSRF protection |
| **Rate Limiting** | 100 requests/min per IP, 1000/min per user |
| **File Upload** | Max 50MB, allowed types only (PDF, JPG, PNG) |
| **Secrets** | Environment variables, no hardcoding |

### 6.3 Data Privacy (PDPA Compliance)

- [ ] Data encryption at rest and in transit
- [ ] User consent management
- [ ] Data retention policies
- [ ] Right to deletion (account deletion)
- [ ] Data portability (export user data)
- [ ] Privacy policy and terms of service

---

## 7. Infrastructure

### 7.1 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PRODUCTION ENVIRONMENT                    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  CDN (Cloudflare)                    │   │
│  │     WAF, DDoS Protection, Caching, SSL/TLS          │   │
│  └─────────────────────────────────────────────────────┘   │
│                           │                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Load Balancer (Vercel)                 │   │
│  └─────────────────────────────────────────────────────┘   │
│                           │                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   Server 1   │  │   Server 2   │  │   Server N   │    │
│  │  (Next.js)   │  │  (Next.js)   │  │  (Next.js)   │    │
│  │   (Auto-scaling: 2-10 instances)                   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                           │                                 │
│           ┌───────────────┼───────────────┐                │
│           ▼               ▼               ▼                │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐     │
│  │  PostgreSQL  │ │    Redis     │ │  S3 Storage  │     │
│  │  (Supabase) │ │  (Upstash)   │ │  (Files)     │     │
│  │   (Replica) │ │   (Cluster)  │ │  (CDN)       │     │
│  └──────────────┘ └──────────────┘ └──────────────┘     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 7.2 Environment Variables

```bash
# Application
NEXT_PUBLIC_APP_URL=https://tbm.platform
NEXT_PUBLIC_API_URL=https://api.tbm.platform

# Database
DATABASE_URL=postgresql://...

# Auth
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://tbm.platform
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

# Third Party
OPENAI_API_KEY=sk-...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Infrastructure
REDIS_URL=redis://...
UPLOADTHING_SECRET=...
UPLOADTHING_APP_ID=...

# Email
RESEND_API_KEY=re_...
```

### 7.3 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm type-check
      - run: pnpm test

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
      - run: pnpm install
      - run: pnpm build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 8. File Structure

```
tbm/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Auth pages
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/       # Protected pages
│   │   │   ├── dashboard/
│   │   │   ├── listings/
│   │   │   ├── messages/
│   │   │   └── settings/
│   │   ├── (public)/          # Public pages
│   │   │   ├── explore/
│   │   │   └── listing/[id]/
│   │   ├── api/               # API Routes
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/             # React Components
│   │   ├── ui/               # shadcn components
│   │   ├── forms/            # Form components
│   │   ├── listings/         # Listing components
│   │   └── shared/           # Shared components
│   │
│   ├── lib/                   # Utilities
│   │   ├── auth.ts          # Auth utilities
│   │   ├── db.ts            # Database client
│   │   ├── utils.ts         # Helper functions
│   │   └── validations.ts   # Zod schemas
│   │
│   ├── services/              # Business Logic
│   │   ├── matching.ts
│   │   ├── messaging.ts
│   │   ├── payments.ts
│   │   └── verification.ts
│   │
│   ├── hooks/                # Custom React Hooks
│   │   ├── useAuth.ts
│   │   ├── useListings.ts
│   │   └── useMatch.ts
│   │
│   ├── stores/               # State Management
│   │   └── userStore.ts
│   │
│   └── types/                # TypeScript Types
│       ├── user.ts
│       ├── listing.ts
│       └── message.ts
│
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── migrations/           # Migration files
│
├── public/                   # Static assets
│   ├── images/
│   └── fonts/
│
├── docs/                     # Documentation
│   ├── api/
│   └── architecture/
│
├── tests/                    # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.example             # Environment variables template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── vercel.json
```

---

## 9. Development Phases

### Phase 1: Foundation (Month 1-2)
```
Week 1-2: Setup
- Project initialization
- CI/CD setup
- Database schema
- Auth system

Week 3-4: Core Features
- Profile management
- Listing CRUD
- Basic search

Week 5-6: Communication
- Messaging system
- Notifications
- Dashboard

Week 7-8: Polish
- UI/UX improvements
- Testing
- Bug fixes
```

### Phase 2: Growth (Month 3-4)
```
- AI Matching
- Verification system
- Analytics
- Performance optimization
```

### Phase 3: Scale (Month 5-6)
```
- Mobile app
- Payment integration
- API for partners
- Advanced features
```

---

## 10. Appendix

### A. Tech Stack Summary

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS |
| Backend | Node.js, Fastify, Prisma |
| Database | PostgreSQL (Supabase) |
| Cache | Redis (Upstash) |
| Search | PostgreSQL Full-text (Phase 1), Elasticsearch (Phase 2) |
| Auth | Supabase Auth, NextAuth |
| Storage | Supabase Storage |
| Email | Resend |
| Hosting | Vercel |
| AI | OpenAI API |

### B. Estimated Costs (Monthly)

| Service | Estimate |
|---------|----------|
| Vercel (Pro) | 2,000 ฿ |
| Supabase (Pro) | 1,500 ฿ |
| Upstash | 500 ฿ |
| Resend | 300 ฿ |
| Domain + SSL | 300 ฿ |
| **Total** | **~4,600 ฿/เดือน** |

---

*Document Version: 1.0*
*Last Updated: 2026-03-21*
*Next: 04-mvp-roadmap.md*
