"use client";

import { useEffect, useState } from "react";
import { listingsApi } from "@/lib/supabase";

interface Listing {
  id: string;
  title: string;
  description: string;
  industry: string;
  target_amount: number;
  valuation: number;
  status: string;
  created_at: string;
}

export default function MarketplacePage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadListings();
  }, []);

  async function loadListings() {
    const { data, error } = await listingsApi.getAll({ status: "active" });
    if (!error && data) {
      setListings(data);
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">TBM Marketplace</h1>
          <nav className="flex gap-6">
            <a href="/" className="text-gray-600 hover:text-primary">Home</a>
            <a href="/marketplace" className="text-primary font-medium">Explore</a>
            <a href="/dashboard" className="text-gray-600 hover:text-primary">Dashboard</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Browse Deals</h2>
          <p className="text-gray-600 mt-2">Find your next investment opportunity</p>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <a
              key={listing.id}
              href={`/listing/${listing.id}`}
              className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100"
            >
              <div className="text-sm text-primary font-medium mb-2">{listing.industry}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{listing.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{listing.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500">Valuation</div>
                  <div className="text-lg font-bold text-primary">
                    ฿{(listing.valuation / 1000000).toFixed(0)}M
                  </div>
                </div>
                <div className="text-sm text-gray-500">{listing.status}</div>
              </div>
            </a>
          ))}
        </div>

        {listings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No listings found</p>
          </div>
        )}
      </main>
    </div>
  );
}
