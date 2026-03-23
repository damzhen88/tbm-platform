"use client"

import Link from "next/link"

export default function ListingDetailPage() {
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

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/explore" className="hover:text-[#00288e]">Marketplace</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link href="/explore?type=fundraising" className="hover:text-[#00288e]">Fundraising</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-gray-900">NexGen AgriTech</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#00288e]/10 text-[#00288e] rounded-full text-xs font-semibold">Series A</span>
                <span className="flex items-center gap-1 px-3 py-1 bg-[#86f2e4] text-[#006a61] rounded-full text-xs font-semibold">
                  <span className="material-symbols-outlined text-xs">verified</span>
                  Verified Business
                </span>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold mb-2" style={{ fontFamily: 'Manrope' }}>NexGen AgriTech Solutions</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-sm">Bangkok, Thailand</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">category</span>
                  <span className="text-sm">Technology • Agriculture</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  <span className="text-sm">Founded 2023</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="bg-[#00288e] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1e40af] transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">chat</span>
                  Connect with Founder
                </button>
                <button className="border border-[#00288e] text-[#00288e] px-6 py-3 rounded-xl font-semibold hover:bg-[#00288e] hover:text-white transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">event</span>
                  Schedule a Call
                </button>
                <button className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50">
                  <span className="material-symbols-outlined text-gray-500">bookmark_border</span>
                </button>
                <button className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50">
                  <span className="material-symbols-outlined text-gray-500">share</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-100 rounded-xl p-6 min-w-[280px]">
              <h3 className="font-semibold mb-4">Investment Overview</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Target Amount</span>
                  <span className="font-bold text-[#00288e] text-lg">฿12,000,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Pre-Money Valuation</span>
                  <span className="font-semibold">฿48,000,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">Equity Offered</span>
                  <span className="font-semibold">20%</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Minimum Investment</span>
                    <span className="font-semibold">฿500,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Manrope' }}>Business Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                NexGen AgriTech Solutions is pioneering the future of sustainable agriculture in Southeast Asia through AI-driven crop optimization for vertical farming. Our proprietary system increases crop yields by 40% while reducing water consumption by 60%.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We currently serve 15,000 farmers across Thailand, Vietnam, and Malaysia, with our AI platform processing over 2 million data points daily.
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-4">Investment Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#006a61] text-xl">check_circle</span>
                    <span className="text-gray-600">15,000+ active farmers on platform</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#006a61] text-xl">check_circle</span>
                    <span className="text-gray-600">22% profit margin (industry average: 8%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#006a61] text-xl">check_circle</span>
                    <span className="text-gray-600">12 proprietary patents</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Use of Funds */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-xl font-bold mb-6" style={{ fontFamily: 'Manrope' }}>Use of Funds</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">R&D - AI Platform Enhancement</span>
                    <span className="font-semibold">40%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00288e] rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Market Expansion</span>
                    <span className="font-semibold">35%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#006a61] rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">Operations & Team Growth</span>
                    <span className="font-semibold">15%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-28">
              <h3 className="font-bold mb-4" style={{ fontFamily: 'Manrope' }}>Interested in this opportunity?</h3>
              
              <div className="space-y-3 mb-6">
                <button className="w-full bg-[#00288e] text-white py-3 rounded-xl font-semibold hover:bg-[#1e40af] transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">chat</span>
                  Connect with Founder
                </button>
                <button className="w-full border border-[#006a61] text-[#006a61] py-3 rounded-xl font-semibold hover:bg-[#006a61] hover:text-white transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">event</span>
                  Schedule a Call
                </button>
                <button className="w-full border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">lock</span>
                  Request NDA
                </button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#86f2e4] rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#006a61] text-sm">shield</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Secure Transaction</p>
                    <p className="text-xs text-gray-500">Escrow protection available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
