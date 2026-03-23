"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface Listing {
  id: string;
  title: string;
  description: string;
  industry: string;
  valuation: number;
  target_amount: number;
  status: string;
  require_nda: boolean;
  view_count: number;
  created_at: string;
  user_id: string;
}

export default function MarketplacePage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: "equity",
    industry: "all",
    stage: "",
    capitalMin: 5000000,
    capitalMax: 500000000,
    region: "",
  });

  // Fetch listings from Supabase
  useEffect(() => {
    async function fetchListings() {
      try {
        const { data, error } = await supabase
          .from("listings")
          .select("*")
          .eq("status", "active")
          .order("created_at", { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          setListings(data);
        } else {
          // Mock data if no listings in DB
          setListings([
            {
              id: "1",
              title: "Premium Restaurant in Bangkok",
              description: "Well-established fine dining restaurant in Siam area",
              industry: "Food & Beverage",
              valuation: 25000000,
              target_amount: 15000000,
              status: "active",
              require_nda: true,
              view_count: 45,
              created_at: new Date().toISOString(),
              user_id: "1",
            },
          ]);
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
        // Fallback mock data
        setListings([
          {
            id: "1",
            title: "Premium Restaurant in Bangkok",
            description: "Well-established fine dining restaurant in Siam area",
            industry: "Food & Beverage",
            valuation: 25000000,
            target_amount: 15000000,
            status: "active",
            require_nda: true,
            view_count: 45,
            created_at: new Date().toISOString(),
            user_id: "1",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchListings();
  }, []);

  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `฿${(amount / 1000000).toFixed(0)}M`;
    }
    return `฿${amount.toLocaleString()}`;
  };

  // Mock featured listing (in real app, this would come from a featured flag in DB)
  const featuredListing = listings[0];
  const otherListings = listings.slice(1);

  return (
    <div className="min-h-screen bg-background text-on-background font-body antialiased">
      {/* TopNavBar */}
      <header className="bg-white/70 backdrop-blur-xl docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-blue-950">
            TBM Thailand
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-blue-900 border-b-2 border-blue-900 pb-1 font-label text-xs uppercase tracking-widest font-semibold"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-blue-800 transition-colors font-label text-xs uppercase tracking-widest font-semibold"
            >
              Valuation
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-blue-800 transition-colors font-label text-xs uppercase tracking-widest font-semibold"
            >
              Deal Flow
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-blue-800 transition-colors font-label text-xs uppercase tracking-widest font-semibold"
            >
              Portfolio
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/auth"
              className="text-slate-600 font-label text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors"
            >
              Login
            </Link>
            <button className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-5 py-2 rounded-xl text-xs uppercase tracking-widest font-semibold shadow-sm hover:translate-y-[-1px] transition-all">
              Get Verified
            </button>
          </div>
        </div>
      </header>

      <main className="flex min-h-screen max-w-screen-2xl mx-auto">
        {/* Filter Sidebar */}
        <aside className="w-72 hidden lg:flex flex-col p-8 gap-8 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto no-scrollbar">
          <div>
            <h2 className="text-label-md font-semibold text-on-surface-variant uppercase tracking-widest text-[10px] mb-6">
              Market Filters
            </h2>

            {/* Filter Group: Type */}
            <div className="mb-8">
              <label className="block text-title-md font-semibold mb-3 text-on-surface">
                Asset Type
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    checked={true}
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                    type="checkbox"
                  />
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">
                    Equity Deals
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                    type="checkbox"
                  />
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">
                    Debt Financing
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20"
                    type="checkbox"
                  />
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">
                    M&A / Buyout
                  </span>
                </label>
              </div>
            </div>

            {/* Filter Group: Industry */}
            <div className="mb-8">
              <label className="block text-title-md font-semibold mb-3 text-on-surface">
                Industry
              </label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-2.5 text-body-lg font-light focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                <option>All Industries</option>
                <option>FinTech</option>
                <option>Hospitality</option>
                <option>Real Estate</option>
                <option>Energy</option>
                <option>Consumer Retail</option>
                <option>Food & Beverage</option>
              </select>
            </div>

            {/* Filter Group: Stage */}
            <div className="mb-8">
              <label className="block text-title-md font-semibold mb-3 text-on-surface">
                Venture Stage
              </label>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 rounded-full bg-primary text-on-primary text-xs font-medium">
                  Seed
                </button>
                <button className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-container-highest transition-colors">
                  Series A
                </button>
                <button className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-container-highest transition-colors">
                  Series B
                </button>
                <button className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-container-highest transition-colors">
                  Growth
                </button>
              </div>
            </div>

            {/* Filter Group: Investment Range */}
            <div className="mb-8">
              <label className="block text-title-md font-semibold mb-3 text-on-surface">
                Capital Required
              </label>
              <div className="space-y-4">
                <input
                  className="w-full h-1.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                  type="range"
                  min="5000000"
                  max="500000000"
                  step="1000000"
                />
                <div className="flex justify-between text-[10px] font-semibold text-on-surface-variant uppercase tracking-tighter">
                  <span>฿5M</span>
                  <span>฿500M+</span>
                </div>
              </div>
            </div>

            {/* Filter Group: Location */}
            <div className="mb-8">
              <label className="block text-title-md font-semibold mb-3 text-on-surface">
                Region
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="w-4 h-4 border-outline-variant text-primary focus:ring-primary/20"
                    name="loc"
                    type="radio"
                  />
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">
                    Bangkok CBD
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="w-4 h-4 border-outline-variant text-primary focus:ring-primary/20"
                    name="loc"
                    type="radio"
                  />
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">
                    Eastern Seaboard
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="w-4 h-4 border-outline-variant text-primary focus:ring-primary/20"
                    name="loc"
                    type="radio"
                  />
                  <span className="text-body-lg font-light group-hover:text-primary transition-colors">
                    Northern Region
                  </span>
                </label>
              </div>
            </div>
          </div>
          <button className="mt-auto w-full py-3 bg-surface-container-low text-on-surface-variant font-label text-[10px] uppercase tracking-[0.2em] font-bold rounded-xl hover:bg-surface-container-high transition-all">
            Clear All Filters
          </button>
        </aside>

        {/* Marketplace Canvas */}
        <section className="flex-1 p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h1 className="text-display-lg leading-tight text-on-background mb-4">
                Investment <span className="text-primary italic">Marketplace</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
                Curated institutional deal flow across Southeast Asia. Every listing is pre-vetted by
                Aureus Capital analysts.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-surface-container-low p-1.5 rounded-full">
              <button className="bg-surface-container-lowest shadow-sm px-6 py-2 rounded-full text-xs font-semibold text-primary">
                All Deals
              </button>
              <button className="px-6 py-2 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors">
                Newest
              </button>
              <button className="px-6 py-2 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors">
                Trending
              </button>
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <>
              {/* Bento Grid Marketplace */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Featured Card (Large) */}
                {featuredListing && (
                  <div className="md:col-span-2 xl:col-span-2 group relative overflow-hidden bg-surface-container-lowest rounded-[2rem] p-8 transition-all hover:shadow-2xl hover:shadow-primary/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-primary/10 transition-colors"></div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-12">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center">
                            <span className="text-2xl">🏢</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-headline-md font-semibold text-on-surface">
                                {featuredListing.title}
                              </h3>
                              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                <span className="material-symbols-outlined text-[14px]">
                                  verified
                                </span>
                                Verified
                              </span>
                            </div>
                            <p className="text-label-md text-on-surface-variant uppercase tracking-widest">
                              {featuredListing.industry} • Series B
                            </p>
                          </div>
                        </div>
                        <span className="text-display-lg font-light text-primary/20 select-none">01</span>
                      </div>

                      <div className="grid grid-cols-3 gap-8 mb-12">
                        <div>
                          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                            Seeking
                          </p>
                          <p className="text-headline-md text-on-surface font-semibold">
                            {formatCurrency(featuredListing.target_amount)}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                            Location
                          </p>
                          <p className="text-headline-md text-on-surface font-semibold">Bangkok, TH</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2">
                            Valuation
                          </p>
                          <p className="text-headline-md text-on-surface font-semibold">
                            {formatCurrency(featuredListing.valuation)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-outline-variant/10 pt-8">
                        <div className="flex -space-x-3">
                          <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest bg-surface-container overflow-hidden"></div>
                          <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest bg-surface-container overflow-hidden"></div>
                          <div className="w-10 h-10 rounded-full border-2 border-surface-container-lowest bg-primary flex items-center justify-center text-on-primary text-[10px] font-bold">
                            +12
                          </div>
                        </div>
                        <Link
                          href={`/listing/${featuredListing.id}`}
                          className="flex items-center gap-2 group/btn font-label text-xs uppercase tracking-widest font-bold text-primary"
                        >
                          View Deal Deck
                          <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Small Cards */}
                {otherListings.length > 0 ? (
                  otherListings.map((listing, index) => (
                    <div
                      key={listing.id}
                      className="bg-surface-container-low rounded-[2rem] p-8 flex flex-col group hover:bg-surface-container-lowest transition-all hover:shadow-xl"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                          <span className="text-xl">📊</span>
                        </div>
                        <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-wider border border-outline-variant/10">
                          Growth
                        </span>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-title-md font-semibold text-on-surface mb-1">
                          {listing.title}
                        </h4>
                        <p className="text-body-lg text-on-surface-variant font-light">
                          {listing.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-6 border-t border-outline-variant/10">
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                              Target
                            </p>
                            <p className="text-title-md font-bold text-on-primary-container">
                              {formatCurrency(listing.target_amount)}
                            </p>
                          </div>
                          <Link
                            href={`/listing/${listing.id}`}
                            className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                          >
                            <span className="material-symbols-outlined">add</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  // Show placeholder cards when no additional listings
                  <>
                    <div className="bg-surface-container-low rounded-[2rem] p-8 flex flex-col group hover:bg-surface-container-lowest transition-all hover:shadow-xl">
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                          <span className="text-xl">🏦</span>
                        </div>
                        <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-wider border border-outline-variant/10">
                          Growth
                        </span>
                      </div>
                      <div className="mb-8">
                        <h4 className="text-title-md font-semibold text-on-surface mb-1">
                          NeoBank Siam
                        </h4>
                        <p className="text-body-lg text-on-surface-variant font-light">
                          Digital banking infrastructure for SME clusters in Thailand.
                        </p>
                      </div>
                      <div className="mt-auto pt-6 border-t border-outline-variant/10">
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                              Target
                            </p>
                            <p className="text-title-md font-bold text-on-primary-container">฿450M</p>
                          </div>
                          <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                            <span className="material-symbols-outlined">add</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-surface-container-low rounded-[2rem] p-8 flex flex-col group hover:bg-surface-container-lowest transition-all hover:shadow-xl">
                      <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center">
                          <span className="text-xl">🏨</span>
                        </div>
                        <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-wider border border-outline-variant/10">
                          Early
                        </span>
                      </div>
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-title-md font-semibold text-on-surface">
                            Oceanic Retreats
                          </h4>
                          <span className="material-symbols-outlined text-primary text-sm">
                            verified
                          </span>
                        </div>
                        <p className="text-body-lg text-on-surface-variant font-light">
                          Boutique eco-resort development in Krabi Archipelago.
                        </p>
                      </div>
                      <div className="mt-auto pt-6 border-t border-outline-variant/10">
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                              Target
                            </p>
                            <p className="text-title-md font-bold text-on-primary-container">฿85M</p>
                          </div>
                          <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                            <span className="material-symbols-outlined">add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Empty State */}
              {listings.length === 0 && !loading && (
                <div className="text-center py-20">
                  <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">
                    inventory_2
                  </span>
                  <h3 className="text-title-md font-semibold text-on-surface mb-2">
                    No listings found
                  </h3>
                  <p className="text-body-lg text-on-surface-variant">
                    Try adjusting your filters or check back later.
                  </p>
                </div>
              )}
            </>
          )}
        </section>
      </main>
    </div>
  );
}
