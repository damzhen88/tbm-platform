"use client";

import { useState } from "react";
import Link from "next/link";

export default function MarketplacePage() {
  const [filter, setFilter] = useState("all");
  
  const listings = [
    { id: 1, name: "NexGen AgriTech", type: "Fundraising", industry: "Agriculture", valuation: "฿45M", status: "Live", views: 1234 },
    { id: 2, name: "The Emerald Bistro", type: "For Sale", industry: "Food & Beverage", valuation: "฿85M", status: "Live", views: 892 },
    { id: 3, name: "Wellness Hub", type: "Partner", industry: "Healthcare", valuation: "฿120M", status: "Hot", views: 2156 },
    { id: 4, name: "TechLogix Solutions", type: "For Sale", industry: "Technology", valuation: "฿200M", status: "Live", views: 3421 },
    { id: 5, name: "AutoParts Factory", type: "For Sale", industry: "Manufacturing", valuation: "฿350M", status: "Live", views: 567 },
    { id: 6, name: "EcoEnergy Corp", type: "Fundraising", industry: "Energy", valuation: "฿500M", status: "New", views: 890 },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="glass-nav shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-12 py-6 flex justify-between items-center">
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase font-headline">
            Aureus Capital <span className="text-primary font-light">| TBM</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Home</Link>
            <Link href="/marketplace" className="text-sm text-primary font-medium">Marketplace</Link>
            <Link href="/dashboard" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Dashboard</Link>
            <Link href="/auth" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Login</Link>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-12 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-headline font-light tracking-tight text-on-surface mb-4">
            Marketplace
          </h1>
          <p className="text-lg text-on-surface-variant font-light">
            Browse curated investment opportunities across Thailand
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["all", "For Sale", "Fundraising", "Partner"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-full font-label text-sm tracking-wider whitespace-nowrap transition-all ${
                filter === type
                  ? "bg-primary text-on-primary shadow-lg"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {type === "all" ? "All Deals" : type}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface-container-low rounded-lg p-6">
            <div className="text-3xl font-headline font-semibold text-primary">{listings.length}</div>
            <div className="text-sm text-on-surface-variant uppercase tracking-wider">Total Listings</div>
          </div>
          <div className="bg-surface-container-low rounded-lg p-6">
            <div className="text-3xl font-headline font-semibold text-primary">฿1.3B</div>
            <div className="text-sm text-on-surface-variant uppercase tracking-wider">Total Value</div>
          </div>
          <div className="bg-surface-container-low rounded-lg p-6">
            <div className="text-3xl font-headline font-semibold text-primary">8</div>
            <div className="text-sm text-on-surface-variant uppercase tracking-wider">Industries</div>
          </div>
          <div className="bg-surface-container-low rounded-lg p-6">
            <div className="text-3xl font-headline font-semibold text-primary">89%</div>
            <div className="text-sm text-on-surface-variant uppercase tracking-wider">Match Rate</div>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings
            .filter(l => filter === "all" || l.type === filter)
            .map((listing) => (
              <Link 
                key={listing.id} 
                href={`/listing/${listing.id}`}
                className="group bg-surface-container-lowest rounded-lg overflow-hidden border border-outline/10 hover:shadow-xl hover:border-primary/30 transition-all"
              >
                {/* Card Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary-fixed/20 relative">
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-label ${
                      listing.status === "Hot" ? "bg-red-500 text-white" :
                      listing.status === "New" ? "bg-blue-500 text-white" :
                      "bg-primary/80 text-white"
                    }`}>
                      {listing.status}
                    </span>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs text-primary uppercase tracking-wider font-label">{listing.industry}</span>
                      <h3 className="text-xl font-headline font-medium text-on-surface group-hover:text-primary transition-colors">
                        {listing.name}
                      </h3>
                    </div>
                    <span className="text-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
                      {listing.type}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-outline/10">
                    <div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-wider">Valuation</div>
                      <div className="text-lg font-headline font-semibold text-primary">{listing.valuation}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-on-surface-variant">{listing.views.toLocaleString()} views</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
}
