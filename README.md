# TBM Platform - Thailand Business Matching

A B2B platform connecting Thai businesses with investors.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build
```

## 🌐 Deployment to Vercel

### 1. Connect to Vercel
```bash
npm i -g vercel
vercel login
vercel
```

### 2. Environment Variables
Set these in Vercel Dashboard → Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key |

### 3. Deploy
```bash
vercel --prod
```

## 📁 Project Structure

```
├── app/                    # Next.js 15 App Router pages
│   ├── page.tsx           # Home
│   ├── marketplace/        # Browse listings
│   ├── dashboard/          # User dashboard
│   ├── auth/              # Login/Register
│   ├── create/             # Create listing
│   ├── listing/[id]/      # Listing detail
│   ├── data-room/          # Secure documents
│   ├── nda/               # NDA signing
│   └── deal-room/          # Auction/negotiation
├── lib/                    # Utilities
│   └── supabase.ts         # Supabase client
├── public/static/          # Static HTML pages
└── styles/                 # Tailwind config
```

## 🛠 Tech Stack

- **Frontend**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Deployment**: Vercel

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page |
| Marketplace | `/marketplace` | Browse deals |
| Dashboard | `/dashboard` | User dashboard |
| Auth | `/auth` | Login/Register |
| Create | `/create` | Create listing |
| Listing | `/listing/[id]` | Deal details |
| Data Room | `/data-room` | VDR access |
| NDA | `/nda` | NDA signing |
| Deal Room | `/deal-room` | Auction |

## 🔐 Supabase Setup

1. Create a Supabase project
2. Run the SQL schema to create tables
3. Enable Row Level Security (RLS)
4. Configure authentication

## 📄 License

MIT
