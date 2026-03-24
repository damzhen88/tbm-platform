"use client";

import Link from "next/link";

export default function ExecutiveDashboardPage() {
  const stats = [
    { label: "Active Listings", value: "12", change: "+2 since last month", icon: "list_alt" },
    { label: "Total Views", value: "1.4k", change: "Global institutional traffic", icon: "visibility" },
    { label: "Connections", value: "08", change: "Direct LP inquiries", icon: "hub" },
  ];

  const recentDeals = [
    { title: "London Core Office Portfolio", desc: "Off-market acquisition of 4 Grade-A assets in the City of London. Direct divestment from Sovereign Wealth Fund.", type: "Urgent Opportunity", tag: "primary" },
    { title: "Tech Series C", desc: "Secondary shares available in $2B Fintech unicorn. Direct seller.", type: "Quick View", tag: "tertiary" },
    { title: "Swiss Hospitality", desc: "Luxury resort redevelopment in Gstaad. Equity partnership 15% IRR.", type: "Quick View", tag: "primary" },
  ];

  const listings = [
    { title: "Luxury Eco-Resort - Phuket", type: "Hospitality", status: "Active", views: 482, date: "Mar 15" },
    { title: "Tech Logistics Hub - EEC", type: "Infrastructure", status: "Active", views: 128, date: "Mar 12" },
    { title: "Organic Coffee Chain - Bangkok", type: "F&B", status: "Under Review", views: 891, date: "Mar 10" },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm shadow-blue-900/5 transition-all duration-300">
        <div className="flex justify-between items-center px-12 py-6 w-full max-w-screen-2xl mx-auto">
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase">Aureus Capital</div>
          <div className="hidden md:flex gap-10 font-light tracking-tight items-center">
            <Link href="/marketplace" className="text-slate-500 hover:text-blue-900 transition-all duration-300">Marketplace</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-900 transition-all duration-300">Insights</Link>
            <Link href="#" className="text-slate-500 hover:text-blue-900 transition-all duration-300">Concierge</Link>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-blue-900 text-sm font-light uppercase tracking-widest">Login</button>
            <button className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-8 py-2.5 rounded-md shadow-sm hover:scale-95 duration-200 ease-out font-medium tracking-wide">Inquire</button>
          </div>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="h-full w-64 fixed left-0 top-0 bg-slate-50 flex flex-col p-6 gap-8 pt-28 hidden lg:flex">
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary overflow-hidden">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVlVvh8jkNpHSUZgTWf0bcXYcqt8uguwMdNvGf1Y7C7xmxSF0P0gSAHXaWppg_Ha3F_jsNl0NrB1hPR2qJQZV6KvMCJNOxG2gmPmPSAAJtKVWZ0P_tOjB8f_1BMxLs0wHGQkhrjFCgAaLOb-dy9rWI5PktamcevR7Pg0jjpaZ0mB2v8UHtErEUrwjKnXqmI-6Gr1rfOmFnpbCIKhW5sf46yM8ulrNSIZ4m28MlEE-kLj170ueuZ_yUK14Psg1YU3BxsV7A583bg50" alt="Profile" />
          </div>
          <div>
            <p className="text-sm font-bold text-blue-900 leading-tight">Aureus Private</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Elite Tier</p>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <Link href="/executive-dashboard" className="flex items-center gap-4 p-3 bg-white text-blue-900 shadow-sm rounded-lg transition-transform hover:translate-x-1 duration-500">
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span className="text-sm font-medium tracking-wide uppercase">Dashboard</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 p-3 text-slate-400 hover:text-slate-600 transition-transform hover:translate-x-1 duration-500">
            <span className="material-symbols-outlined text-xl">payments</span>
            <span className="text-sm font-medium tracking-wide uppercase">Investments</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 p-3 text-slate-400 hover:text-slate-600 transition-transform hover:translate-x-1 duration-500">
            <span className="material-symbols-outlined text-xl">sell</span>
            <span className="text-sm font-medium tracking-wide uppercase">Divestments</span>
          </Link>
          <Link href="/data-room" className="flex items-center gap-4 p-3 text-slate-400 hover:text-slate-600 transition-transform hover:translate-x-1 duration-500">
            <span className="material-symbols-outlined text-xl">description</span>
            <span className="text-sm font-medium tracking-wide uppercase">Documents</span>
          </Link>
          <Link href="#" className="flex items-center gap-4 p-3 text-slate-400 hover:text-slate-600 transition-transform hover:translate-x-1 duration-500">
            <span className="material-symbols-outlined text-xl">support_agent</span>
            <span className="text-sm font-medium tracking-wide uppercase">Advisor</span>
          </Link>
        </nav>
        <div className="space-y-2 pt-6 border-t border-slate-200">
          <Link href="/profile" className="flex items-center gap-4 p-3 text-slate-400 hover:text-slate-600 transition-transform hover:translate-x-1 duration-500">
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="text-sm font-medium tracking-wide uppercase">Settings</span>
          </Link>
          <Link href="/" className="flex items-center gap-4 p-3 text-slate-400 hover:text-slate-600 transition-transform hover:translate-x-1 duration-500">
            <span className="material-symbols-outlined text-xl">logout</span>
            <span className="text-sm font-medium tracking-wide uppercase">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-32 px-8 lg:px-12 pb-24 max-w-screen-2xl">
        {/* Hero Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-light tracking-tight text-on-surface mb-2">Executive Partner <span className="font-medium text-primary">HUD</span></h1>
          <p className="text-on-surface-variant font-light max-w-2xl">Welcome back, Marcus. Your private equity portfolio is currently performing 4.2% above the benchmark for Q3.</p>
        </header>

        {/* Portfolio Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between h-44 hover:bg-surface-container-lowest transition-all duration-300 group">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">{stat.label}</span>
                <span className="material-symbols-outlined text-primary/30 group-hover:text-primary transition-colors">{stat.icon}</span>
              </div>
              <div>
                <p className="text-4xl font-light mb-1">{stat.value}</p>
                <p className="text-xs text-on-surface-variant font-light">{stat.change}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Quick Actions & Recent Deals Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Recent Deal Alerts */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Large Deal Card */}
            <div className="bg-surface-container-low rounded-xl overflow-hidden md:col-span-2 relative h-80 flex flex-col justify-end p-8 group">
              <div className="absolute inset-0 z-0">
                <img className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxEiVPa7s8IGS4Z-V5UAiRq6k7AOrAzMqacBkAxzsbeDPze2vNMTyl-XjL_Tc0R3P6hQ4UIKC6E6Ig_P1ySmSElDYLMd5off0-LFFzSwGpwA7PYDRC4GqIwxcqg74r41CBiuN7xZzhpkgKkpfz3nMEUWzcOEjtoyOf_uqQz6u_x-1wD0X8P1184Wq-aBjpjkFNoLYqMrVThUtxOVpWNdjsPCtwmO3cTDybt3XRm9C2S2tofRIzHfRbDYuULwSytCNwd-ndGXc0rQ4" alt="Building" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">Urgent Opportunity</span>
                <h3 className="text-2xl font-light mb-2">London Core Office Portfolio</h3>
                <p className="text-on-surface-variant text-sm font-light max-w-md">Off-market acquisition of 4 Grade-A assets in the City of London. Direct divestment from Sovereign Wealth Fund.</p>
                <button className="mt-6 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all">View Memorandum <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
              </div>
            </div>
            {/* Small Deal Cards */}
            {recentDeals.slice(1).map((deal, i) => (
              <div key={i} className="bg-surface-container-low p-8 rounded-xl hover:bg-surface-container-lowest transition-all">
                <span className={`material-symbols-outlined mb-4 ${deal.tag === 'tertiary' ? 'text-tertiary' : 'text-primary'}`}>{deal.tag === 'tertiary' ? 'bolt' : 'real_estate_agent'}</span>
                <h4 className="text-lg font-medium mb-1">{deal.title}</h4>
                <p className="text-sm text-on-surface-variant font-light">{deal.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions Panel */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10">
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface mb-8">Partner Actions</h3>
              <div className="space-y-4">
                <Link href="/create" className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-high rounded-lg group transition-all">
                  <span className="text-sm font-medium">Create New Listing</span>
                  <span className="material-symbols-outlined text-primary group-hover:rotate-90 transition-transform">add</span>
                </Link>
                <Link href="/messages" className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-high rounded-lg group transition-all">
                  <span className="text-sm font-medium">Message Concierge</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">chat_bubble</span>
                </Link>
                <button className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-high rounded-lg group transition-all">
                  <span className="text-sm font-medium">Download Q3 Report</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-y-1 transition-transform">download</span>
                </button>
              </div>
            </div>
            {/* Market Pulse */}
            <div className="bg-primary p-8 rounded-xl text-on-primary relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-medium mb-2">Market Pulse</h3>
                <p className="text-sm opacity-80 font-light mb-6">Real-time sentiment tracking for private capital flows in the APAC region.</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-1 bg-on-primary/20 rounded-full overflow-hidden">
                    <div className="w-[72%] h-full bg-on-primary"></div>
                  </div>
                  <span className="text-xs font-bold">72% Bullish</span>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 text-on-primary/10 select-none">
                <span className="material-symbols-outlined text-9xl">trending_up</span>
              </div>
            </div>
          </div>
        </div>

        {/* My Listings Table */}
        <div className="bg-surface-container-low rounded-xl p-8">
          <h3 className="text-xl font-light mb-6">My <span className="font-semibold">Listings</span></h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-surface-container-high">
                  <th className="px-4 py-5 font-medium text-on-surface-variant text-sm uppercase">Title</th>
                  <th className="px-4 py-5 font-medium text-on-surface-variant text-sm uppercase">Type</th>
                  <th className="px-4 py-5 font-medium text-on-surface-variant text-sm uppercase">Status</th>
                  <th className="px-4 py-5 font-medium text-on-surface-variant text-sm uppercase">Views</th>
                  <th className="px-4 py-5 font-medium text-on-surface-variant text-sm uppercase">Date</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((item, i) => (
                  <tr key={i} className="border-b border-surface-container-high/50 hover:bg-surface-bright transition-colors">
                    <td className="px-4 py-6 font-medium text-primary">{item.title}</td>
                    <td className="px-4 py-6 text-sm font-light">{item.type}</td>
                    <td className="px-4 py-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{item.status}</span>
                    </td>
                    <td className="px-4 py-6 text-sm">{item.views}</td>
                    <td className="px-4 py-6 text-sm text-on-surface-variant">{item.date}</td>
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