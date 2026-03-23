"use client";

import { useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [listings] = useState([
    { id: 1, name: "NexGen AgriTech", type: "Fundraising", status: "Live", views: 1234, location: "Bangkok" },
    { id: 2, name: "The Emerald Bistro", type: "For Sale", status: "Live", views: 892, location: "Chiang Mai" },
    { id: 3, name: "Wellness Hub", type: "Partner", status: "Pending", views: 456, location: "Phuket" },
  ]);

  const stats = {
    activeListings: 3,
    totalViews: 2582,
    messages: 12,
    connections: 47,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Closed": return "bg-gray-100 text-gray-800";
      default: return "bg-surface-container text-on-surface-variant";
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="glass-nav shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-12 py-6 flex justify-between items-center">
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase font-headline">
            Aureus Capital <span className="text-primary font-light">| TBM</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/auth" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
              Log out
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-12 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-medium text-on-surface">
            Welcome back, <span className="text-primary">Kit</span>
          </h1>
          <p className="text-on-surface-variant">Here's what's happening with your listings</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-surface-container-lowest rounded-lg p-6 border border-outline/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant uppercase tracking-wider font-label">Active Listings</span>
              <span className="material-symbols-outlined text-primary">storefront</span>
            </div>
            <div className="text-3xl font-headline font-semibold text-on-surface">{stats.activeListings}</div>
          </div>
          <div className="bg-surface-container-lowest rounded-lg p-6 border border-outline/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant uppercase tracking-wider font-label">Total Views</span>
              <span className="material-symbols-outlined text-primary">visibility</span>
            </div>
            <div className="text-3xl font-headline font-semibold text-on-surface">{stats.totalViews.toLocaleString()}</div>
          </div>
          <div className="bg-surface-container-lowest rounded-lg p-6 border border-outline/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant uppercase tracking-wider font-label">Messages</span>
              <span className="material-symbols-outlined text-primary">mail</span>
            </div>
            <div className="text-3xl font-headline font-semibold text-on-surface">{stats.messages}</div>
          </div>
          <div className="bg-surface-container-lowest rounded-lg p-6 border border-outline/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-on-surface-variant uppercase tracking-wider font-label">Connections</span>
              <span className="material-symbols-outlined text-primary">people</span>
            </div>
            <div className="text-3xl font-headline font-semibold text-on-surface">{stats.connections}</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/create" className="bg-primary text-on-primary rounded-lg p-6 hover:bg-primary-dim transition-colors flex items-center gap-4">
            <span className="material-symbols-outlined text-3xl">add_circle</span>
            <div>
              <div className="font-headline font-medium">Create New Listing</div>
              <div className="text-sm text-on-primary/80">List your business or fundraising</div>
            </div>
          </Link>
          <Link href="/marketplace" className="bg-surface-container-lowest rounded-lg p-6 border border-outline/10 hover:border-primary transition-colors flex items-center gap-4">
            <span className="material-symbols-outlined text-3xl text-primary">search</span>
            <div>
              <div className="font-headline font-medium text-on-surface">Browse Opportunities</div>
              <div className="text-sm text-on-surface-variant">Explore investment options</div>
            </div>
          </Link>
          <Link href="/data-room" className="bg-surface-container-lowest rounded-lg p-6 border border-outline/10 hover:border-primary transition-colors flex items-center gap-4">
            <span className="material-symbols-outlined text-3xl text-primary">folder_special</span>
            <div>
              <div className="font-headline font-medium text-on-surface">Data Room</div>
              <div className="text-sm text-on-surface-variant">Access confidential documents</div>
            </div>
          </Link>
        </div>

        {/* Listings Table */}
        <div className="bg-surface-container-lowest rounded-lg border border-outline/10 overflow-hidden">
          <div className="p-6 border-b border-outline/10 flex justify-between items-center">
            <h2 className="text-xl font-headline font-medium text-on-surface">Your Listings</h2>
            <Link href="/create" className="text-sm text-primary hover:underline font-label">
              + Add New
            </Link>
          </div>
          <table className="w-full">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-label text-on-surface-variant uppercase tracking-wider">Business</th>
                <th className="text-left px-6 py-4 text-sm font-label text-on-surface-variant uppercase tracking-wider">Type</th>
                <th className="text-left px-6 py-4 text-sm font-label text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-4 text-sm font-label text-on-surface-variant uppercase tracking-wider">Views</th>
                <th className="text-left px-6 py-4 text-sm font-label text-on-surface-variant uppercase tracking-wider">Location</th>
                <th className="text-right px-6 py-4 text-sm font-label text-on-surface-variant uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline/10">
              {listings.map((listing) => (
                <tr key={listing.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-headline font-medium text-on-surface">{listing.name}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{listing.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-label ${getStatusColor(listing.status)}`}>
                      {listing.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{listing.views.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-on-surface-variant">{listing.location}</td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/listing/${listing.id}`} className="text-sm text-primary hover:underline">
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
