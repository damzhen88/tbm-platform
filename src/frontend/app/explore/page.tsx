"use client"

import { useState } from "react"
import Link from "next/link"

export default function ExplorePage() {
  const [selectedType, setSelectedType] = useState("all")

  // Mock listings data
  const listings = [
    {
      id: 1,
      type: "Fundraising",
      typeColor: "bg-[#00288e]/10 text-[#00288e]",
      company: "NexGen AgriTech",
      tagline: "AI-driven crop yield optimization for vertical farming solutions in urban Southeast Asia.",
      amount: "฿12,000,000",
      amountLabel: "Target Amount",
      stage: "Series A",
      location: "Bangkok, Thailand",
      industry: "Technology",
      verified: true
    },
    {
      id: 2,
      type: "Business for Sale",
      typeColor: "bg-orange-100 text-orange-700",
      company: "The Emerald Bistro",
      tagline: "Established high-end fusion restaurant in Old Town with 40% YoY growth.",
      amount: "฿25,500,000",
      amountLabel: "Asking Price",
      stage: "Profitable",
      location: "Chiang Mai, Thailand",
      industry: "F&B",
      verified: true
    },
    {
      id: 3,
      type: "Partner",
      typeColor: "bg-gray-100 text-gray-700",
      company: "Samui Wellness Hub",
      tagline: "Searching for a strategic healthcare management partner for a new medical tourism facility.",
      amount: "15% - 25%",
      amountLabel: "Equity Offered",
      stage: "Seed",
      location: "Phuket, Thailand",
      industry: "Healthcare",
      verified: false
    },
    {
      id: 4,
      type: "Fundraising",
      typeColor: "bg-[#00288e]/10 text-[#00288e]",
      company: "LogiFlow Thailand",
      tagline: "Smart logistics platform connecting SME warehouses with delivery networks across the Kingdom.",
      amount: "฿8,500,000",
      amountLabel: "Target Amount",
      stage: "Seed",
      location: "Bangkok, Thailand",
      industry: "Logistics",
      verified: true
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00288e] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: 'Manrope' }}>TBM PLATFORM</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/explore" className="text-[#00288e] font-semibold">Explore</Link>
            <Link href="#" className="text-gray-600 hover:text-[#00288e] font-medium">For Investors</Link>
            <Link href="#" className="text-gray-600 hover:text-[#00288e] font-medium">For Businesses</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-gray-700 font-medium hover:text-[#00288e]">Login</Link>
            <Link href="/auth" className="bg-[#00288e] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1e40af] transition-all">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold" style={{ fontFamily: 'Manrope' }}>Marketplace</h1>
              <p className="text-gray-500">Connect with Thai ventures, investors, and partners</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 px-4 py-2 bg-[#86f2e4] text-[#006a61] rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#006a61] rounded-full"></span>
                1,240 Verified Listings
              </span>
              <Link href="#" className="bg-[#00288e] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#1e40af] transition-all">
                + Create Listing
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Filters</h3>
                <button className="text-xs text-[#00288e] font-semibold">Clear All</button>
              </div>

              {/* Listing Type */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Listing Type</h4>
                <div className="space-y-2">
                  {["Fundraising", "Business for Sale", "Co-founder", "Partner"].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 text-[#00288e] rounded border-gray-300" 
                        defaultChecked={type === "Fundraising" || type === "Business for Sale"}
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Industry */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Industry</h4>
                <div className="flex flex-wrap gap-2">
                  {["Tech", "F&B", "Manufacturing", "Real Estate", "Healthcare"].map((ind, i) => (
                    <button
                      key={ind}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        i === 0
                          ? "bg-[#00288e] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stage */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Stage</h4>
                <select className="w-full bg-gray-100 border-0 rounded-lg text-sm py-3 px-4">
                  <option>All Stages</option>
                  <option>Idea</option>
                  <option>Pre-seed</option>
                  <option>Seed</option>
                  <option>Series A</option>
                  <option>Series B+</option>
                </select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Location</h4>
                <div className="space-y-2">
                  {["Bangkok", "Chiang Mai", "Phuket", "Pattaya"].map((loc) => (
                    <label key={loc} className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 text-[#00288e] rounded border-gray-300"
                        defaultChecked={loc === "Bangkok"}
                      />
                      <span className="text-sm">{loc}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Verified Toggle */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm font-medium">Verified Only</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00288e]"></div>
                </label>
              </div>
            </div>
          </aside>

          {/* Listings Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-500">Showing <span className="font-semibold text-gray-900">{listings.length}</span> listings</p>
              <select className="bg-transparent border border-gray-200 rounded-lg text-sm py-2 px-4">
                <option>Newest First</option>
                <option>Most Viewed</option>
                <option>Verified First</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {listings.map((listing) => (
                <div key={listing.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-gray-600 text-xl">
                          {listing.type === "Fundraising" ? "bolt" : listing.type === "Business for Sale" ? "restaurant" : "medical_services"}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {listing.verified && (
                          <span className="flex items-center gap-1 px-2 py-1 bg-[#86f2e4] text-[#006a61] rounded-full text-xs font-semibold">
                            <span className="material-symbols-outlined text-xs">verified</span>
                            Verified
                          </span>
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${listing.typeColor}`}>
                          {listing.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Manrope' }}>{listing.company}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{listing.tagline}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">{listing.amountLabel}</p>
                        <p className="font-bold text-[#00288e]">{listing.amount}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Stage</p>
                        <p className="font-semibold">{listing.stage}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {listing.location}
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 text-sm">{listing.industry}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
                    <button className={`w-full py-3 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                      listing.type === "Business for Sale" 
                        ? "border border-[#00288e] text-[#00288e] hover:bg-[#00288e] hover:text-white"
                        : "bg-[#00288e] text-white hover:bg-[#1e40af]"
                    }`}>
                      {listing.type === "Business for Sale" ? (
                        <>
                          <span className="material-symbols-outlined">lock</span>
                          Request NDA
                        </>
                      ) : listing.type === "Partner" ? (
                        "Send Proposal"
                      ) : (
                        <>
                          Connect with Founder
                          <span className="material-symbols-outlined">arrow_forward</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Concierge CTA */}
            <div className="mt-8 bg-[#00288e] rounded-xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#86f2e4]/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Manrope' }}>Can't find the perfect match?</h3>
                  <p className="text-[#dde1ff]/80 max-w-md">Our premium concierge service helps you find off-market opportunities tailored to your criteria.</p>
                </div>
                <button className="bg-white text-[#00288e] px-6 py-3 rounded-xl font-semibold hover:bg-[#dde1ff] transition-all whitespace-nowrap">
                  Explore Concierge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
