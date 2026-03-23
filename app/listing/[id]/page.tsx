"use client";

import { use } from "react";
import Link from "next/link";

export default function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const listing = {
    id: id,
    name: "Premium Restaurant Chain - Bangkok",
    type: "For Sale",
    industry: "Food & Beverage",
    valuation: "฿85M",
    equity: "100%",
    location: "Bangkok",
    revenue: "฿45M/year",
    ebitda: "฿12M",
    founded: "2018",
    employees: "85",
    status: "Live",
  };

  return (
    <div className="min-h-screen bg-surface">
      <header className="glass-nav shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-12 py-6 flex justify-between items-center">
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase font-headline">
            Aureus Capital <span className="text-primary font-light">| TBM</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/marketplace" className="text-sm text-on-surface-variant hover:text-primary">← Back to Marketplace</Link>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-12 py-8">
        <div className="mb-6 text-sm text-on-surface-variant">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/marketplace" className="hover:text-primary">Marketplace</Link>
          <span className="mx-2">/</span>
          <span className="text-on-surface">{listing.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs text-primary uppercase tracking-wider font-label">{listing.industry}</span>
                <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-800 font-label">{listing.status}</span>
              </div>
              <h1 className="text-4xl font-headline font-light tracking-tight text-on-surface mb-4">
                {listing.name}
              </h1>
              <p className="text-lg text-on-surface-variant">📍 {listing.location}</p>
            </div>

            <div className="bg-surface-container rounded-xl p-8">
              <h2 className="text-xl font-headline font-medium text-on-surface mb-6">Investment Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm text-on-surface-variant uppercase tracking-wider mb-2">Valuation</div>
                  <div className="text-2xl font-headline font-semibold text-primary">{listing.valuation}</div>
                </div>
                <div>
                  <div className="text-sm text-on-surface-variant uppercase tracking-wider mb-2">Revenue</div>
                  <div className="text-2xl font-headline font-semibold text-primary">{listing.revenue}</div>
                </div>
                <div>
                  <div className="text-sm text-on-surface-variant uppercase tracking-wider mb-2">EBITDA</div>
                  <div className="text-2xl font-headline font-semibold text-primary">{listing.ebitda}</div>
                </div>
                <div>
                  <div className="text-sm text-on-surface-variant uppercase tracking-wider mb-2">Equity</div>
                  <div className="text-2xl font-headline font-semibold text-primary">{listing.equity}</div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline/10">
              <h2 className="text-xl font-headline font-medium text-on-surface mb-6">Business Overview</h2>
              <p className="text-on-surface-variant">
                Award-winning fine dining restaurant chain with 5 prime locations across Bangkok.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container rounded-xl p-8 sticky top-24">
              <h3 className="text-lg font-headline font-medium text-on-surface mb-6">Interested?</h3>
              <Link href="/nda" className="block w-full bg-primary text-on-primary px-6 py-4 rounded-lg text-center font-label text-sm tracking-widest uppercase shadow-lg hover:bg-primary-dim transition-colors">
                Request NDA Access
              </Link>
              <Link href="/data-room" className="block w-full bg-surface-container text-on-surface px-6 py-4 rounded-lg text-center font-label text-sm tracking-widest uppercase mt-4 hover:bg-surface-container-high transition-colors">
                View Data Room
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
