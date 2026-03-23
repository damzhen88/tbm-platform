"use client";

import { useState } from "react";
import Link from "next/link";

export default function DealRoomPage() {
  const [bidAmount, setBidAmount] = useState("");
  const [bidding, setBidding] = useState(false);

  const handleBid = () => {
    setBidding(true);
    setTimeout(() => setBidding(false), 1500);
  };

  const bids = [
    { rank: 1, amount: "฿92M", investor: "Investor A", date: "2 hours ago" },
    { rank: 2, amount: "฿88M", investor: "Investor B", date: "5 hours ago" },
    { rank: 3, amount: "฿85M", investor: "Investor C", date: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="glass-nav shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-12 py-6 flex justify-between items-center">
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase font-headline">
            Aureus Capital <span className="text-primary font-light">| TBM</span>
          </div>
          <Link href="/marketplace" className="text-sm text-on-surface-variant hover:text-primary">
            ← Back
          </Link>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-12 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-2">
            <Link href="/marketplace" className="hover:text-primary">Marketplace</Link>
            <span>/</span>
            <span>Deal Room</span>
          </div>
          <h1 className="text-3xl font-headline font-light tracking-tight text-on-surface">
            Premium Restaurant Chain - Auction
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bidding Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Status */}
            <div className="bg-surface-container rounded-xl p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm text-on-surface-variant uppercase tracking-wider mb-2">Current Highest Bid</div>
                  <div className="text-5xl font-headline font-bold text-primary">฿92M</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-on-surface-variant uppercase tracking-wider mb-2">Time Remaining</div>
                  <div className="text-3xl font-headline font-semibold text-red-600">23:45:12</div>
                </div>
              </div>
              <div className="bg-surface-container-high rounded-lg p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Starting Price</span>
                  <span className="font-headline font-medium text-on-surface">฿70M</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-on-surface-variant">Reserve Price</span>
                  <span className="font-headline font-medium text-on-surface">฿80M</span>
                </div>
              </div>
            </div>

            {/* Place Bid */}
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline/10">
              <h3 className="text-xl font-headline font-medium text-on-surface mb-6">Place Your Bid</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Bid Amount (THB)</label>
                  <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-4 py-4 rounded-lg border border-outline bg-surface-container text-on-surface text-2xl font-headline focus:outline-none focus:border-primary mt-2"
                  />
                </div>
                <button
                  onClick={handleBid}
                  disabled={!bidAmount || bidding}
                  className="w-full milled-button text-on-primary px-8 py-5 rounded-lg font-label text-sm tracking-widest uppercase shadow-xl hover:scale-[0.98] transition-transform disabled:opacity-50"
                >
                  {bidding ? "Submitting..." : "Submit Bid"}
                </button>
              </div>
            </div>

            {/* Bid History */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline/10 overflow-hidden">
              <div className="p-6 bg-surface-container">
                <h3 className="font-headline font-medium text-on-surface">Bid History</h3>
              </div>
              <div className="divide-y divide-outline/10">
                {bids.map((bid, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-headline font-bold ${
                        bid.rank === 1 ? "bg-yellow-100 text-yellow-700" :
                        bid.rank === 2 ? "bg-gray-200 text-gray-600" :
                        "bg-amber-100 text-amber-700"
                      }`}>
                        {bid.rank}
                      </div>
                      <div>
                        <div className="font-headline font-medium text-on-surface">{bid.investor}</div>
                        <div className="text-xs text-on-surface-variant">{bid.date}</div>
                      </div>
                    </div>
                    <div className="text-xl font-headline font-bold text-primary">{bid.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info */}
            <div className="bg-surface-container rounded-xl p-6">
              <h4 className="font-headline font-medium text-on-surface mb-4">Auction Rules</h4>
              <div className="space-y-3 text-sm text-on-surface-variant">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">info</span>
                  Minimum bid increment: ฿1M
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                  Soft close: 5 min extension if bid in last 2 min
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-sm text-primary">security</span>
                  All bids are binding
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-surface-container rounded-xl p-6">
              <h4 className="font-headline font-medium text-on-surface mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/data-room" className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-primary">folder</span>
                  <span className="text-on-surface">Data Room</span>
                </Link>
                <Link href="/nda" className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-primary">description</span>
                  <span className="text-on-surface">View NDA</span>
                </Link>
                <Link href="/messages" className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-primary">chat</span>
                  <span className="text-on-surface">Message Seller</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
