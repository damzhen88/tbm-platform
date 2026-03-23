# TBM - Extended Research
## Phase 2: Deep Research & Competitor Analysis

---

## 1. Global Competitor Analysis

### 1.1 AngelList (US) - $4B Valuation

**What they do:**
- Startup jobs + Investor matching
- Syndicates (group investing)
- Rolling funds

**Key Features:**
| Feature | Description |
|---------|-------------|
| Profile | Detailed founder/investor profiles |
| Jobs Board | Startup job listings |
| Syndicates | Lead investor + backers |
| Products | SaaS for VC funds |

**Lessons for TBM:**
- ✅ Trust system (credential verification)
- ✅ Network effect is key
- ✅ Freemium works

**Weaknesses to exploit:**
- ❌ Not Thailand-focused
- ❌ Complex for SMEs
- ❌ No local language

---

### 1.2 Crunchbase (US)

**What they do:**
- Company database
- Funding tracking
- Professional search

**Key Features:**
| Feature | Description |
|---------|-------------|
| Company Profiles | Detailed company data |
| Funding Rounds | Track all funding |
| People Search | Find decision makers |
| News | Startup news |

**Lessons for TBM:**
- ✅ Data quality is crucial
- ✅ SEO is huge driver
- ✅ freemium + paid plans

---

### 1.3 Gust (US) - Acquired by StartupX

**What they do:**
- Startup management
- Investor matching

**Key Features:**
| Feature | Description |
|---------|-------------|
| Pitch Templates | Standardized pitch decks |
| Application Tracking | For accelerators |
| Investor CRM | Manage relationships |

**Lessons for TBM:**
- ✅ Standardization helps
- ✅ CRM for investors

---

### 1.4 LinkedIn (Global)

**What they do:**
- Professional network
- Job matching
- Company pages

**Key Features:**
| Feature | Description |
|---------|-------------|
| Network | Huge user base |
| Profile Verification | LinkedIn profanity |
| Messaging | InMail, connections |

**Lessons for TBM:**
- ✅ Verification = trust
- ✅ Network effects
- ❌ Too broad, not focused on deals

---

### 1.5 Dealstreetasia (Regional)

**What they do:**
- PE/VC news in Asia
- Deal tracking
- Events

**Key Features:**
| Feature | Description |
|---------|-------------|
| News | Regional VC/PE news |
| Events | Pitch sessions |
| Database | Deals tracking |

**Lessons for TBM:**
- ✅ Focus on Asia/Thailand
- ✅ News drives traffic
- ❌ Not a marketplace

---

## 2. Thailand Market Deep Dive

### 2.1 Key Players in Thai Ecosystem

| Organization | Type | Role |
|--------------|------|------|
| **SCB 10X** | Corporate VC | Biggest Thai VC |
| **InVent (SCG)** | Corporate VC | Manufacturing focus |
| **Beacon Venture** | Corporate VC | Digital focus |
| **500 TukTuks** | VC | Early stage |
| **InnoSpace** | Accelerator | Startup support |
| **Thai VC Association** | Association | Network |
| **Dek-D** | Platform | Community (not focused) |
| **ThaiStartup.com** | Directory | Basic listings |

### 2.2 Thai Business Pain Points

**Survey Results (Simulated):**

| Pain Point | % Respondents | Current Solution |
|------------|---------------|------------------|
| หาเงินทุนยาก | 78% | Warm intros, events |
| หาหุ้นส่วนยาก | 65% | เพื่อน, network |
| ขายธุรกิจไม่ได้ราคา | 55% | Broker, Facebook |
| ไม่รู้จะเริ่มต้นที่ไหน | 48% | ไม่มี platform |
| กลัวโดนหลอก | 72% | ไม่กล้าเชื่อใคร |

### 2.3 Regulatory Considerations (Thailand)

**Business Registration:**
- กพ. (Company Registration) - กระทรวงพาณิชย์
- ภาษีมูลค่าเพิ่ม (VAT) - กรมสรรพากร
- ข้อมูลส่วนบุคคล (PDPA) - สำคัญมาก!

**PDPA Compliance Checklist:**
- [ ] Privacy Policy
- [ ] Consent Management
- [ ] Data Subject Rights
- [ ] Data Retention Policy
- [ ] Security Measures
- [ ] Breach Notification

**Financial Services:**
- ⚠️ ไม่ต้อง license ถ้าเป็นแค่ "information platform"
- ⚠️ ถ้ามี payment = financial license required
- ✅ เราเป็นแค่ middleman ไม่มี payment

---

## 3. UX/UI Best Practices

### 3.1 Business Platform UX Patterns

**Trust Signals:**
```
┌────────────────────────────────────────┐
│  ✓ Verified Badge      ⭐ Premium      │
│  👤 John S.           📍 Bangkok      │
│  🏢 Acme Corp         👥 50-100      │
│  ✅ ID Verified       🟢 Business     │
└────────────────────────────────────────┘
```

**Listing Card Design:**
```
┌────────────────────────────────────────┐
│ [Logo]  Company Name           [Badge] │
│        Tagline here...                  │
│                                        │
│ 💰 5M THB    📍 Bangkok    🎯 Seed   │
│ 👁 1.2K     💬 15         ✅ Verified│
└────────────────────────────────────────┘
```

### 3.2 Conversion Funnel

```
Visitor → Sign Up → Profile Complete → 
Listing Created → Browse → Connect → 
Message → (Offline Deal)
```

**Drop-off Points:**
| Stage | Typical Drop-off | Solution |
|-------|------------------|----------|
| Sign up → Profile | 40% | Quick signup, social login |
| Profile → Listing | 50% | Templates, guidance |
| Browse → Connect | 60% | Clear CTA, suggested connects |
| Message → Response | 50% | Notifications, reminders |

### 3.3 Mobile vs Desktop

**Thailand Stats:**
- Mobile: 65% of traffic
- Desktop: 35% of traffic

**Must-have Mobile Features:**
- Bottom navigation
- Pull to refresh
- Swipe cards for listings
- Push notifications
- Easy form inputs

---

## 4. Verification System Deep Dive

### 4.1 Verification Levels (Detailed)

| Level | Checks | Time | Badge |
|-------|--------|------|-------|
| **Email** | Valid email | Instant | ⚪ |
| **Phone** | SMS OTP | 1 min | ⚪ |
| **Identity** | ID card AI check | 5 min | 🔵 |
| **LinkedIn** | OAuth + profile scrape | 2 min | 🔵 |
| **Business** | Company docs review | 1-2 days | 🟢 |
| **Income** | Financial docs | 2-3 days | 🟣 |
| **Premium** | Manual interview | 1 week | ⭐ |

### 4.2 Document Requirements

**For Thai National ID:**
```
✓ รูปถ่ายบัตรประจำตัวประชาชน (ชัดเจน)
✓ ชื่อ-นามสกุล ตรงกับ profile
✓ ไม่หมดอายุ
```

**For Company (นิติบุคคล):**
```
✓ หนังสือรับรองบริษัท (กพ.20)
✓ บัตรประจำตัวผู้มีอำนาจ
✓ ที่อยู่บริษัทจริง (ตรวจสอบได้)
```

### 4.3 Fraud Prevention

**Red Flags to Monitor:**
- Multiple accounts from same IP
- Suspicious listing patterns
- Generic business descriptions
- Stock photos for companies
- Unrealistic valuations

**Prevention Measures:**
- Manual review for suspicious listings
- Report system for users
- Community moderation
- Insurance/warranty for verified users

---

## 5. Growth Strategies

### 5.1 User Acquisition (Month 1-6)

| Channel | Target | Cost | ROI |
|---------|--------|------|-----|
| Direct outreach (SME associations) | 200 | Low | High |
| Content marketing (SEO) | 500 | Low | Medium |
| Startup events | 300 | Medium | High |
| Facebook/IG ads | 200 | High | Low |
| Referral program | 400 | Low | High |

### 5.2 Supply vs Demand

**Critical Balance:**
- Too many sellers, no buyers → listings don't convert
- Too many buyers, no sellers → users leave

**Strategy:**
1. **Phase 1:** Focus on SUPPLY (businesses listing)
2. **Phase 2:** Recruit DEMAND (investors)
3. **Phase 3:** Balance both

### 5.3 Early Adopters

**Target Early Users:**

| Segment | Why | How to reach |
|---------|-----|---------------|
| **Failed startup founders** | Have network, know pain | LinkedIn, events |
| **SME owners exiting** | Want to sell | Business associations |
| **Corporate innovation** | Looking for acquisition | Corporate VC events |
| ** Angels retiring** | Have money, time | THBA, HN groups |
| **Ex-bankers** | Have capital, network | Alumni groups |

---

## 6. Technical Deep Dive

### 6.1 Database Schema (Simplified)

```sql
-- Core Tables
users
profiles  
listings
listing_documents
messages
conversations
verifications
bookmarks

-- Indexes for Performance
CREATE INDEX idx_listings_search ON listings(type, status, industry, stage);
CREATE INDEX idx_profiles_investor ON profiles(investor_type, investment_range);
CREATE INDEX idx_messages_user ON messages(user_id, created_at);
```

### 6.2 Search Implementation

**Phase 1: PostgreSQL Full-Text Search**
```sql
-- Simple search
SELECT * FROM listings 
WHERE to_tsvector('thai', title || ' ' || description) @@ plainto_tsquery('thai', 'tech startup');
```

**Phase 2: Elasticsearch (If needed)**
- Fuzzy matching
- Thai language support
- Aggregations

### 6.3 Caching Strategy

| Data | Cache | TTL |
|------|-------|-----|
| Listing cards | Redis | 5 min |
| User profiles | Redis | 15 min |
| Search results | CDN | 1 min |
| Static assets | Browser | 1 week |

---

## 7. Risk Analysis (Extended)

### 7.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Scalability | Low | High | Design for scale from start |
| Security breach | Medium | High | Regular audits, penetration testing |
| Data loss | Low | High | Automated backups |
| Downtime | Low | High | Monitoring, alerting |

### 7.2 Business Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Low user acquisition | High | High | Multiple channels |
| Competitor launch | Medium | Medium | Speed to market |
| Regulatory change | Low | High | Legal compliance |
| Fraud/Scam | Medium | High | Verification + moderation |

### 7.3 Financial Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Runway < 18 months | Medium | High | Bootstrap first |
| Churn > 10% | Medium | High | Product iteration |
| CAC > LTV | High | Medium | Unit economics focus |

---

## 8. Metrics & KPIs

### 8.1 Product Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| MAU | Monthly Active Users | 1,000 @ M6 |
| DAU/MAU | Engagement ratio | >30% |
| Listings created | Total listings | 500 @ M6 |
| Messages sent | Total messages | 2,000 @ M6 |
| Connections made | User connections | 500 @ M6 |

### 8.2 Business Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| CAC | Customer acquisition cost | <500 ฿ |
| LTV | Lifetime value | >5,000 ฿ |
| LTV:CAC | Ratio | >10x |
| MRR | Monthly recurring revenue | 100K @ M12 |
| Churn | Monthly churn rate | <5% |

### 8.3 Growth Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| Viral coefficient | K-factor | >1.0 |
| Referral rate | % from referrals | >20% |
| NPS | Net Promoter Score | >50 |

---

## 9. Competitive Advantages

### 9.1 What Makes TBM Different

| Advantage | Description |
|-----------|-------------|
| **Thailand First** | เข้าใจตลาดไทย, ภาษา, วัฒนธรรม |
| **All-in-One** | รวมทุกอย่างไว้ที่เดียว |
| **Trust First** | Verification ที่เข้มงวด |
| **Local Network** | เชื่อมต่อ SCG, PTT, CP, etc. |
| **SME Focus** | ไม่เน้นแค่ Tech Startups |

### 9.2 Moat (Competitive Barrier)

1. **Network Effects** - ยิ่งมีคนใช้ ยิ่งมีค่า
2. **Data** - ข้อมูล deal flow ในไทย
3. **Trust** - Reputation built over time
4. **Relationships** - Partnership with associations

---

## 10. Legal & Compliance

### 10.1 Required Policies

- [ ] Terms of Service
- [ ] Privacy Policy
- [ ] Cookie Policy
- [ ] User Guidelines
- [ ] Dispute Resolution
- [ ] Intellectual Property

### 10.2 PDPA Compliance

**Data We Collect:**
- Email, name, phone
- ID document (encrypted)
- Business documents (encrypted)
- Activity logs

**User Rights:**
- Right to access
- Right to correction
- Right to deletion
- Right to portability
- Right to withdraw consent

---

## 11. Future Enhancements (Post-MVP)

| Feature | Description | Timeline |
|---------|-------------|----------|
| Mobile App | iOS + Android | M6-9 |
| Video Calls | Built-in meetings | M6 |
| Valuation Tools | AI business valuation | M9-12 |
| API | For third parties | M9-12 |
| Escrow | (If regulations allow) | M12+ |
| International | SE Asia expansion | M18+ |

---

## 12. Appendix

### A. User Interview Questions

1. คุณมีปัญหาเรื่อง [หาเงินทุน/หาหุ้นส่วน/ขายธุรกิจ] ไหม?
2. คุณใช้ช่องทางไหนในการแก้ปัญหา?
3. คุณจะยินดีจ่ายเท่าไหร่สำหรับบริการที่ดีกว่า?
4. อะไรคือสิ่งที่คุณต้องการมากที่สุด?
5. คุณกลัวอะไรมากที่สุดเกี่ยวกับการหาหุ้นส่วน/นักลงทุน?

### B. Competitor Feature Matrix

| Feature | AngelList | Crunchbase | TBM (MVP) |
|---------|-----------|------------|-----------|
| Investor matching | ✅ | ❌ | ✅ |
| Job board | ✅ | ❌ | ❌ |
| Company database | ✅ | ✅ | ❌ |
| Thailand focus | ❌ | ❌ | ✅ |
| Verification | ✅ | ✅ | ✅ |
| Messaging | ✅ | ❌ | ✅ |
| Free tier | ✅ | ✅ | ✅ |

---

*Document Version: 2.0*
*Last Updated: 2026-03-21*
