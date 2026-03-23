"use client";

import { useState } from "react";
import Link from "next/link";

export default function DealRoomPage() {
  const [bidAmount, setBidAmount] = useState("");

  const handleBid = () => {
    if (bidAmount) {
      alert("Bid submitted successfully!");
      setBidAmount("");
    }
  };

  const bids = [
    { rank: 1, amount: "$12.5M", investor: "Investor A", date: "2 hours ago" },
    { rank: 2, amount: "$11.8M", investor: "Investor B", date: "5 hours ago" },
    { rank: 3, amount: "$10.5M", investor: "Investor C", date: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface">
      {/* Header */}
      <nav className="bg-white/70 backdrop-blur-xl docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-blue-950">TBM Thailand</div>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-blue-900 font-semibold text-xs uppercase tracking-widest">Login</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-screen-2xl mx-auto px-8 py-12">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/marketplace" className="text-slate-500 hover:text-blue-900">← Back to Marketplace</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bidding Panel */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Status */}
            <div className="bg-surface-container rounded-2xl p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-sm text-on-surface-variant uppercase tracking-wider mb-2">Current Highest Bid</p>
                  <p className="text-5xl font-medium text-primary">$12.5M</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-on-surface-variant uppercase tracking-wider mb-2">Time Remaining</p>
                  <p className="text-3xl font-medium text-red-600">23:45:12</p>
                </div>
              </div>
              <div className="bg-surface-container-high rounded-xl p-4 flex justify-between">
                <div>
                  <p className="text-xs text-on-surface-variant uppercase">Starting Price</p>
                  <p className="font-semibold">$8.0M</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase">Reserve Price</p>
                  <p className="font-semibold">$10.0M</p>
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant uppercase">Min Increment</p>
                  <p className="font-semibold">$500K</p>
                </div>
              </div>
            </div>

            {/* Place Bid */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold mb-6">Place Your Bid</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Bid Amount (USD)</label>
                  <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 text-xl font-medium focus:outline-none focus:border-primary"
                  />
                </div>
                <button 
                  onClick={handleBid}
                  disabled={!bidAmount}
                  className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-xl font-semibold text-sm uppercase tracking-widest shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                >
                  Submit Bid
                </button>
              </div>
            </div>

            {/* Bid History */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="px-8 py-4 bg-surface-container border-b border-slate-100">
                <h3 className="font-semibold">Bid History</h3>
              </div>
              <div className="divide-y divide-slate-100">
                {bids.map((bid) => (
                  <div key={bid.rank} className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        bid.rank === 1 ? "bg-yellow-100 text-yellow-700" :
                        bid.rank === 2 ? "bg-gray-100 text-gray-600" : "bg-amber-100 text-amber-700"
                      }`}>
                        {bid.rank}
                      </div>
                      <div>
                        <p className="font-medium">{bid.investor}</p>
                        <p className="text-xs text-slate-500">{bid.date}</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold text-primary">{bid.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h4 className="font-semibold mb-4">Auction Rules</h4>
              <div className="space-y-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">info</span>
                  Minimum increment: $500K
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                  Soft close: 5 min extension
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">security</span>
                  All bids are binding
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/data-room" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-primary">folder</span>
                  <span>Data Room</span>
                </Link>
                <Link href="/nda" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <span>View NDA</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
