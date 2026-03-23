# TBM UI Prompts
## Ready-to-use prompts for v0.dev

---

## 🚀 Quick Start

1. ไปที่ **v0.dev**
2. Copy prompt ด้านล่าง
3. รอ generate
4. Export code

---

## 📄 Page 1: Landing Page

```
Create a modern, professional B2B landing page for "TBM" (Thailand Business Matching Platform).

**What is TBM:**
A marketplace platform connecting Thai businesses with investors, co-founders, and partners. Think "dating app for business deals."

**Target Users:**
- SME owners seeking funding or partners
- Investors looking for deal flow
- Business brokers
- People looking for co-founders

**Key Features to Highlight:**
1. Verification System (trust badges)
2. Multiple Listing Types (Fundraising, Business Sale, Co-founder, Partner)
3. Smart Matching
4. Thai Market Focus
5. Secure Messaging

**Sections Required:**
1. **Navbar** - Logo, Navigation (Explore, For Investors, For Businesses, Login, Sign Up), CTA button
2. **Hero** - Headline, Subheadline, 2 CTA buttons (Get Started Free, I Want to Invest), Trust badges
3. **Stats** - "500+ Businesses", "200+ Investors", "100+ Deals Closed"
4. **How It Works** - 4 steps: Create Profile → Browse/Match → Connect → Deal
5. **Features** - Verification, Smart Search, Messaging, Dashboard
6. **Listings Preview** - Show sample listing cards
7. **Testimonials** - 2-3 user quotes
8. **CTA Section** - Final call to action
9. **Footer** - Links, Copyright

**Design Requirements:**
- Professional, trustworthy B2B look
- Color scheme: Deep Blue (#1E40AF) primary, Teal (#0D9488) secondary
- Clean, modern, minimal
- Include subtle hover animations
- Mobile responsive
- Use Tailwind CSS
- Thai and English text acceptable

**Tech Stack:**
- Next.js 15
- React 19
- Tailwind CSS
```

---

## 📄 Page 2: Explore / Browse Page

```
Create a browse/explore page for TBM (Thailand Business Matching Platform).

**Page Purpose:**
Allow users to search and filter business listings.

**Layout:**
- Fixed Header (logo, search, user menu)
- Left Sidebar (filters)
- Main Content (listing cards grid)
- Right Sidebar (promotional/similar)

**Filter Sidebar:**
1. **Listing Type** (checkboxes)
   - Fundraising
   - Business for Sale
   - Co-founder Wanted
   - Partner Wanted
   
2. **Industry** (checkboxes)
   - Technology
   - Food & Beverage
   - Manufacturing
   - Real Estate
   - Healthcare
   - E-commerce
   - Other
   
3. **Stage** (checkboxes)
   - Idea/Pre-seed
   - Seed
   - Series A
   - Series B+
   - Bootstrap/Profitable
   
4. **Location** (dropdown)
   - Bangkok
   - Chiang Mai
   - Phuket
   - Other Thailand
   
5. **Investment Range** (slider/selects)
   - Under 1M THB
   - 1-5M THB
   - 5-10M THB
   - 10-50M THB
   - 50M+ THB
   
6. **Verification Filter** (toggle)
   - Verified only

**Listing Card Components:**
- Company logo/avatar
- Company name & tagline
- Listing type badge (color coded)
- Key metrics (amount, stage, location)
- Verification badge (if verified)
- View count, message count
- "Connect" button

**Main Content:**
- Search bar at top
- Sort dropdown (Newest, Most Viewed, Relevant)
- Grid of 12 listing cards
- Pagination at bottom

**Design:**
- Clean, professional
- Blue/Teal primary colors
- Clear visual hierarchy
- Mobile responsive with collapsible sidebar
- Tailwind CSS
```

---

## 📄 Page 3: Listing Detail Page

```
Create a detailed business listing page for TBM platform.

**Purpose:**
Show full details of a listing so potential investors/buyers can make decision.

**Layout:**
- Header (standard)
- Main Content (left, 70%)
- Sidebar (right, 30%)

**Main Content Sections:**

1. **Header Section**
   - Listing title
   - Type badge (Fundraising/Sale/Co-founder/Partner)
   - Verification badge
   - Company name
   - Location + Posted date

2. **Overview Card**
   - Brief description (2-3 paragraphs)
   - Key highlights in bullet points

3. **Details Grid**
   - Industry
   - Business Stage
   - Location
   - Founded Year
   - Employee Count

4. **Financial Info** (for fundraising/sale)
   - Asking Amount / Fundraising Amount
   - Valuation
   - Revenue (if available)
   - Use of Funds

5. **Team Section**
   - Founder photos (2-3)
   - Names and roles
   - Brief background

6. **Documents Section**
   - Pitch Deck (download button)
   - Financial Statements (if available)
   - Business Plan (if available)

7. **Similar Listings**
   - 3 related listings cards

**Sidebar (Contact CTA):**
- Profile card of lister
- Verification badges displayed
- "Connect" primary button
- "Message" secondary button
- "Save" tertiary button
- Share buttons

**Design:**
- Professional, detailed
- Clear information hierarchy
- Trust-building elements (badges, verification)
- Clear CTAs
- Tailwind CSS
```

---

## 📄 Page 4: User Dashboard

```
Create a user dashboard for TBM platform.

**Purpose:**
Let users manage their listings, messages, and track performance.

**Layout:**
- Sidebar navigation (left)
- Main content (right)

**Sidebar:**
- Logo
- Nav items: Dashboard, My Listings, Messages, Bookmarks, Profile, Settings
- User avatar + name at bottom

**Main Content:**

1. **Welcome Section**
   - "Welcome back, [Name]"
   - Quick stats summary

2. **Stats Cards Row (4 cards)**
   - Total Listings
   - Total Views
   - Total Messages
   - Connections Made

3. **Quick Actions**
   - "Create New Listing" button
   - "View Messages" button

4. **My Listings Section**
   - Table/List of user's listings
   - Columns: Title, Type, Status, Views, Messages, Actions
   - Edit/Delete buttons per row

5. **Recent Messages Preview**
   - Last 5 messages
   - Sender name, preview text, time

6. **Profile Completeness**
   - Progress bar
   - Missing items to complete

**Design:**
- Professional dashboard look
- Data-focused
- Clear navigation
- Action-oriented buttons
- Tailwind CSS
```

---

## 📄 Page 5: Auth Pages (Login/Register)

```
Create a modern auth page for TBM platform.

**Page:** Combined Login/Register with tabs

**Layout:**
- Centered card on gradient background
- Logo at top
- Tab switcher (Login / Register)

**Login Form:**
- Email input
- Password input
- "Remember me" checkbox
- "Forgot password?" link
- Login button (primary)
- Divider with "or"
- Google OAuth button
- "Don't have account? Sign up" link

**Register Form:**
- Tab selection: I'm an Investor / I'm a Business Owner / I'm Seeking Co-founder
- Name inputs (First, Last)
- Email input
- Password input
- Confirm password
- Terms checkbox
- Register button (primary)
- Google OAuth button
- "Already have account? Login" link

**Design:**
- Clean, minimal
- Trust-building (security badges)
- Clear form labels
- Validation feedback
- Tailwind CSS
- Mobile responsive
```

---

## 📄 Page 6: Profile Settings

```
Create a profile settings page for TBM platform.

**Sections:**

1. **Profile Information**
   - Avatar upload
   - Full name
   - Email (read-only)
   - Phone
   - Location (dropdown)
   - LinkedIn URL
   - Bio/About

2. **For Business Owners:**
   - Company Name
   - Company Website
   - Company Registration Number
   - Industry
   - Business Description

3. **For Investors:**
   - Investor Type (Angel/VC/PE/Corporate)
   - Investment Range (Min-Max)
   - Preferred Industries
   - Investment Thesis

4. **Verification Status**
   - Email: Verified ✓
   - Identity: Pending/Verified
   - Business: Pending/Verified
   - "Verify Now" buttons

5. **Account Settings**
   - Change password
   - Notification preferences
   - Privacy settings
   - Delete account

**Design:**
- Sectioned form layout
- Clear save buttons
- Verification status prominent
- Tailwind CSS
```

---

## 🎨 Design System Specs

**Colors:**
- Primary: #1E40AF (Deep Blue)
- Secondary: #0D9488 (Teal)
- Accent: #F59E0B (Amber)
- Background: #F8FAFC
- Surface: #FFFFFF
- Text: #1E293B
- Muted: #64748B

**Fonts:**
- Headings: Inter Bold (700)
- Body: Inter Regular (400)
- Thai: Prompt / Sarabun

**Border Radius:**
- Small: 4px
- Medium: 8px
- Large: 12px
- XL: 16px
- Full: 9999px

**Spacing:**
- Base unit: 4px
- Common: 8, 12, 16, 24, 32, 48, 64

---

*Last Updated: 2026-03-21*
