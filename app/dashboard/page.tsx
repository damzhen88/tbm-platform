"use client";

import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { label: "Active Listings", value: "3", icon: "business" },
    { label: "Total Views", value: "1,247", icon: "visibility" },
    { label: "Messages", value: "12", icon: "chat" },
    { label: "Connections", value: "28", icon: "people" },
  ];

  const listings = [
    { title: "Premium Restaurant in Bangkok", status: "Active", views: 450, price: "฿25M" },
    { title: "EcoStream Logistics", status: "Active", views: 320, price: "฿48M" },
    { title: "Tech Startup Series A", status: "Pending", views: 180, price: "฿15M" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* SideNavBar */}
      <aside className="h-full w-64 fixed left-0 top-0 bg-slate-50 flex flex-col p-6 gap-8 z-40 border-r border-slate-100">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold text-blue-900 uppercase tracking-widest font-headline">Aureus Private</span>
          <span className="font-Lexend text-xs tracking-wide uppercase text-slate-400">Elite Tier</span>
        </div>
        <nav className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-3 p-3 bg-white text-blue-900 shadow-sm rounded-lg font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </div>
          <Link href="/marketplace" className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">payments</span>
            <span>Investments</span>
          </Link>
          <Link href="/data-room" className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">description</span>
            <span>Documents</span>
          </Link>
          <div className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">support_agent</span>
            <span>Advisor</span>
          </div>
        </nav>
        <div className="mt-auto flex flex-col gap-4">
          <button className="bg-primary hover:bg-primary-dim text-on-primary py-3 rounded-md font-label text-xs tracking-widest uppercase transition-all shadow-md">
            Concierge HUD
          </button>
          <Link href="/" className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen p-12">
        <header className="mb-12">
          <h1 className="text-4xl font-light tracking-tight mb-2">Dashboard</h1>
          <p className="text-slate-500">Welcome back. Here's your portfolio overview.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="material-symbols-outlined text-2xl text-primary">{stat.icon}</span>
              </div>
              <p className="text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Listings Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-8 py-4 bg-surface-container border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-semibold">Your Listings</h3>
            <Link href="/create" className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary-dim transition-colors">
              + New Listing
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-8 py-4">Listing</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Views</th>
                  <th className="px-8 py-4">Valuation</th>
                  <th className="px-8 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {listings.map((listing, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-8 py-4 font-medium">{listing.title}</td>
                    <td className="px-8 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        listing.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {listing.status}
                      </span>
                    </td>
                    <td className="px-8 py-4">{listing.views}</td>
                    <td className="px-8 py-4 font-semibold">{listing.price}</td>
                    <td className="px-8 py-4">
                      <Link href={`/listing/1`} className="text-primary hover:underline text-sm">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
