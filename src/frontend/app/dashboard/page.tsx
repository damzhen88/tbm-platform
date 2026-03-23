"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()
  const [listings, setListings] = useState<any[]>([])
  const [stats, setStats] = useState({
    activeListings: 0,
    totalViews: 0,
    messages: 0,
    connections: 0
  })

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth")
    }
  }, [user, loading, router])

  // Mock data for demo
  useEffect(() => {
    setListings([
      { id: 1, name: "NexGen AgriTech", type: "Fundraising", status: "Live", views: 1234, location: "Bangkok" },
      { id: 2, name: "The Emerald Bistro", type: "For Sale", status: "Live", views: 892, location: "Chiang Mai" },
      { id: 3, name: "Wellness Hub", type: "Partner", status: "Pending", views: 456, location: "Phuket" },
    ])
    setStats({
      activeListings: 4,
      totalViews: 2847,
      messages: 12,
      connections: 48
    })
  }, [])

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00288e]"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo & Profile */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00288e] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <span className="font-bold text-sm block" style={{ fontFamily: 'Manrope' }}>TBM PLATFORM</span>
                <span className="text-xs text-gray-500">Business Portal</span>
              </div>
            </Link>
          </div>
          
          {/* User */}
          <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-xl">
            <div className="w-10 h-10 bg-[#00288e] rounded-full flex items-center justify-center text-white font-semibold">
              {user.email?.[0]?.toUpperCase() || 'U'}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{user.email?.split('@')[0]}</p>
              <p className="text-xs text-gray-500">{user.role === 'BUSINESS_OWNER' ? 'Business Owner' : 'Investor'}</p>
            </div>
            <button className="text-gray-400">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            <li>
              <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#dde1ff] text-[#00288e] font-semibold">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/explore" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 font-medium">
                <span className="material-symbols-outlined">inventory_2</span>
                <span className="text-sm">Explore</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 font-medium">
                <span className="material-symbols-outlined">chat</span>
                <span className="text-sm">Messages</span>
                <span className="ml-auto bg-[#006a61] text-white text-[10px] px-2 py-0.5 rounded-full">3</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 font-medium">
                <span className="material-symbols-outlined">bookmark</span>
                <span className="text-sm">Bookmarks</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 font-medium">
                <span className="material-symbols-outlined">person</span>
                <span className="text-sm">Profile</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 font-medium">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Create Listing */}
        <div className="p-4 border-t border-gray-200">
          <Link href="#" className="flex items-center justify-center gap-2 w-full bg-[#00288e] text-white py-3 rounded-xl font-semibold hover:bg-[#1e40af] transition-all">
            <span className="material-symbols-outlined">add</span>
            Post a Listing
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{ fontFamily: 'Manrope' }}>
                Welcome back, {user.email?.split('@')[0]} 👋
              </h1>
              <p className="text-gray-500">Here's what's happening with your listings today.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <span className="material-symbols-outlined text-gray-500">notifications</span>
              </button>
              <button 
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-semibold text-sm hover:bg-gray-200"
              >
                <span className="material-symbols-outlined text-sm">logout</span>
                Sign Out
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Active Listings */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#00288e]/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#00288e]">inventory_2</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +15%
                </span>
              </div>
              <p className="text-3xl font-bold mb-1" style={{ fontFamily: 'Manrope' }}>{stats.activeListings}</p>
              <p className="text-sm text-gray-500">Active Listings</p>
            </div>

            {/* Total Views */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#006a61]/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#006a61]">visibility</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +23%
                </span>
              </div>
              <p className="text-3xl font-bold mb-1" style={{ fontFamily: 'Manrope' }}>{stats.totalViews.toLocaleString()}</p>
              <p className="text-sm text-gray-500">Total Views</p>
            </div>

            {/* Messages */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-purple-600">chat</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-orange-600 font-semibold">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  3 unread
                </span>
              </div>
              <p className="text-3xl font-bold mb-1" style={{ fontFamily: 'Manrope' }}>{stats.messages}</p>
              <p className="text-sm text-gray-500">Messages</p>
            </div>

            {/* Connections */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-600">group</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +8%
                </span>
              </div>
              <p className="text-3xl font-bold mb-1" style={{ fontFamily: 'Manrope' }}>{stats.connections}</p>
              <p className="text-sm text-gray-500">Connections</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Listings Table */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="font-bold text-lg" style={{ fontFamily: 'Manrope' }}>Active Listings</h2>
                <Link href="#" className="text-sm text-[#00288e] font-semibold hover:underline">View All</Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Listing</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Views</th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {listings.map((listing) => (
                      <tr key={listing.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#00288e]/10 rounded-lg flex items-center justify-center">
                              <span className="material-symbols-outlined text-[#00288e] text-sm">bolt</span>
                            </div>
                            <div>
                              <p className="font-semibold text-sm">{listing.name}</p>
                              <p className="text-xs text-gray-500">{listing.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-[#00288e]/10 text-[#00288e] rounded-full text-xs font-semibold">{listing.type}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`flex items-center gap-1 text-xs font-semibold ${listing.status === 'Live' ? 'text-green-600' : 'text-yellow-600'}`}>
                            <span className={`w-2 h-2 rounded-full ${listing.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                            {listing.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">{listing.views.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <span className="material-symbols-outlined text-gray-400">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h2 className="font-bold text-lg" style={{ fontFamily: 'Manrope' }}>Recent Messages</h2>
                <Link href="#" className="text-sm text-[#00288e] font-semibold hover:underline">View All</Link>
              </div>
              
              <div className="divide-y divide-gray-100">
                {[
                  { name: "Somchai Invest", initial: "S", time: "2h ago", preview: "Hi, I'm interested in your AgriTech..." },
                  { name: "Pim Local VC", initial: "P", time: "5h ago", preview: "Great opportunity! Would love to..." },
                  { name: "Angel Investor TH", initial: "A", time: "1d ago", preview: "I've reviewed your pitch deck..." },
                ].map((msg, i) => (
                  <Link key={i} href="#" className="block px-6 py-4 hover:bg-gray-50">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#00288e] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {msg.initial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-sm truncate">{msg.name}</p>
                          <span className="text-xs text-gray-400">{msg.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{msg.preview}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Premium Upgrade */}
              <div className="p-6 bg-[#00288e] text-white m-4 rounded-xl">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Upgrade to Pro</h3>
                    <p className="text-xs text-[#dde1ff]">Unlock unlimited listings & analytics</p>
                  </div>
                </div>
                <button className="w-full bg-white text-[#00288e] py-2.5 rounded-lg font-semibold text-sm hover:bg-[#dde1ff] transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Trust Score: 92%
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm text-gray-500">
                <span className="material-symbols-outlined text-sm">add</span>
                Quick Post
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm text-gray-500">
                <span className="material-symbols-outlined text-sm">analytics</span>
                Analytics
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 text-sm text-gray-500">
                <span className="material-symbols-outlined text-sm">support</span>
                Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
