"use client";

import Link from "next/link";

export default function DashboardPage() {
  const stats = [
    { label: "Active Listings", value: "3", icon: "business" },
    { label: "Total Views", value: "1,247", icon: "visibility" },
    { label: "Messages", value: "12", icon: "chat" },
    { label: "Connections", value: "28", icon: "people" },
  ];

  const matches = [
    { 
      id: 1, 
      name: "Araya Tech Solutions", 
      subtitle: "Custom ERP & Cloud Integration Experts",
      match: "98%",
      industry: ["TECH & AI", "SYSTEMS", "GOV-TECH"],
      desc: "Specializing in localizing global enterprise frameworks for the Thai regulatory landscape. Proven track record with SET50 companies.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2J1xUx08VkiQHoWNZIkG5piMSKJbSGrMnBUQ3ncChGQH7KBsmKQ7vs-oZyRHvW9fF6HqPdiRLesgTX832VyEXCZZ8X-Dqqi5Po-jfOryuJoPXb7Nsio_gUr4wwhlPj7eQJ7tQ7RLXlVtL1GE65Bd2pU99boeHvdFso3tibsNL9yhwDQvLnk6wXwt0D8ShsiDhbcvPdzB2BKwW9i8kglF6dSH2TcDulJjSkk7C2A69l8NgzElhVkEokAplxV8zOR7x0QuPXdYHCJk",
      verified: true,
      large: true
    },
    { 
      id: 2, 
      name: "Vayu Growth Partners", 
      subtitle: "Marketing, Brand Localization & Scale",
      match: "94%",
      industry: ["GROWTH", "FMCG"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVXSDwSAP36k9k7nlGOr1oQ3oKETvxxffOMZzeTFq-KtHHoypRp_AWY7izEYqfNnmUWxL_7gWMNd9uFML3wKkZlPJ_Y_wIpQQS49oev4q0aeIw3FLGLoMEXDnH8aG0N2Sww0lPYsq-vODFCfXIrgX06R8VUaE2RRWmqXOe7nOCttCCNU-Ypc7Qy1erMVlxblkZaMDlsiO-viKjVWq7CubuL_Mqkk9FWSqx95HkfrsmouyltwLiXaqf3R68kFDXDoD4KL7zo9aAzyE",
      verified: false,
      large: false
    },
    { 
      id: 3, 
      name: "Oceanic Logistics Co.", 
      subtitle: "Cross-border E-commerce Operations",
      match: "91%",
      industry: ["LOGISTICS", "B2B"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6PUS8z44rOVjxi1tRmHTh8rsr1hcGwt5aTDKXVVpclNk4YH3VZhmr7CV_b1VWj-CaxBPiANVT32O89P79jPqWV0p4riVzLkwDL98Nx4yKC9xrHjEID711jwn-4HTZ9wMJZW-hAYMQJKCviw5J_NU_9Zv1-4BGQS1B_Vs6Whz_u2VASad8-Zw4TJsuvua-cHhj5xyrsVgLY77XJ8Z50GwhqyCiMc7G3VUaF0_oIlEHBuVR9-t_4UGVRPN_y42BMEvKBavqZksKh-w",
      verified: false,
      large: false
    },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center px-8 h-16 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-xl font-medium tracking-tighter text-blue-950">TBM</span>
            <div className="hidden md:flex items-center gap-6 font-light tracking-wide text-blue-900">
              <Link href="/marketplace" className="text-slate-500 hover:text-blue-900 transition-colors">Marketplace</Link>
              <Link href="/dashboard" className="text-blue-700 border-b-2 border-blue-700 pb-1">Partner Hub</Link>
              <Link href="/matches" className="text-slate-500 hover:text-blue-900 transition-colors">Matches</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-blue-50/50 rounded-full transition-all duration-300 active:scale-90">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <Link href="/profile" className="p-2 text-slate-500 hover:bg-blue-50/50 rounded-full transition-all duration-300 active:scale-90">
              <span className="material-symbols-outlined">account_circle</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col py-8 px-4 h-screen w-64 fixed left-0 top-16 bg-slate-50/80 backdrop-blur-xl border-r border-slate-100 z-40 overflow-y-auto">
        <div className="mb-10 px-4">
          <h2 className="text-lg font-semibold text-blue-900">Management</h2>
          <p className="text-xs text-slate-400 font-light">Institutional Suite</p>
        </div>
        <div className="space-y-2 flex-grow">
          <Link href="/dashboard" className="bg-white text-blue-900 rounded-xl shadow-sm font-medium px-4 py-3 flex items-center gap-3">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            <span className="text-sm">Overview</span>
          </Link>
          <Link href="/matches" className="bg-white text-blue-900 rounded-xl shadow-sm font-medium px-4 py-3 flex items-center gap-3">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
            <span className="text-sm">Matches</span>
          </Link>
          <Link href="/data-room" className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-900">folder</span>
            <span className="font-light text-sm">Documents</span>
          </Link>
          <Link href="/messages" className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-900">chat_bubble</span>
            <span className="font-light text-sm">Messages</span>
          </Link>
          <Link href="/profile" className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:translate-x-1 transition-transform group">
            <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-900">settings</span>
            <span className="font-light text-sm">Settings</span>
          </Link>
        </div>
        <div className="mt-auto p-4 bg-surface-container-low rounded-xl">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-2">Concierge Support</p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary-container text-sm">support_agent</span>
            </div>
            <div className="text-xs">
              <p className="font-medium">Private Advisor</p>
              <p className="text-slate-500">Online</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 mt-16 p-8 min-h-screen">
        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-light text-primary-dim tracking-tight mb-4">Partner Marketplace</h1>
            <p className="text-on-surface-variant text-lg font-light leading-relaxed">Curating institutional-grade business matches across Thailand's primary growth sectors.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-medium text-slate-600">142 New Matches Found</span>
            </div>
          </div>
        </header>

        {/* Search Bar */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-grow min-w-[300px] relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">search</span>
              <input className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/15 focus:ring-primary/40 rounded-full py-4 pl-12 pr-6 text-sm transition-all shadow-sm" placeholder="Search by name, industry, or specific competency..." type="text"/>
            </div>
            <button className="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container-high text-on-surface px-6 py-4 rounded-full transition-all">
              <span className="material-symbols-outlined text-sm">tune</span>
              <span className="text-sm font-medium">Advanced Filters</span>
            </button>
          </div>
        </section>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Filter Sidebar */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-surface-container-low p-6 rounded-xl space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Focus Sectors</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary/30 bg-surface-container-lowest border-outline-variant/30" type="checkbox"/>
                    <span className="text-sm font-light text-on-surface group-hover:text-primary transition-colors">Tech & AI Solutions</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded text-primary focus:ring-primary/30 bg-surface-container-lowest border-outline-variant/30" type="checkbox"/>
                    <span className="text-sm font-light text-on-surface group-hover:text-primary transition-colors">Operational Scaling</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded text-primary focus:ring-primary/30 bg-surface-container-lowest border-outline-variant/30" type="checkbox"/>
                    <span className="text-sm font-light text-on-surface group-hover:text-primary transition-colors">Market Growth</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded text-primary focus:ring-primary/30 bg-surface-container-lowest border-outline-variant/30" type="checkbox"/>
                    <span className="text-sm font-light text-on-surface group-hover:text-primary transition-colors">Logistics Infrastructure</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Trust Level</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs text-on-surface-variant mb-2">
                    <span>Verification Tier</span>
                    <span className="font-medium text-primary">Institutional</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-4/5 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Expertise keywords</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-[11px] font-medium text-slate-600 rounded-full shadow-sm">SaaS</span>
                  <span className="px-3 py-1 bg-white text-[11px] font-medium text-slate-600 rounded-full shadow-sm">Supply Chain</span>
                  <span className="px-3 py-1 bg-white text-[11px] font-medium text-slate-600 rounded-full shadow-sm">Bangkok</span>
                  <span className="px-3 py-1 bg-white text-[11px] font-medium text-slate-600 rounded-full shadow-sm">Series B+</span>
                </div>
              </div>
            </div>
            {/* Testimonial */}
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] group">
              <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDUAiF_3TJMzy8T_1C1KHM4cQgtSErrGKg_phoqRGvA4ed92S2tlL5_j5-Iq_6FHhfMM-FI-opm_KdWIhG_o3wNA7_w6Sy4VOhxePl8aMjwoLY6-mlEgJ2t5QUedGcF6Eck06bvVPlL7UagFfaoJ-qy7Gns3258AIZk0NuUA3oz1SROiLyS_MYfwD0UzvqFKKV-njU7813KZl-OsNJlgQX571H0vV0rtD4drjLxWyc6O_WYIMiRU5XJU9j9qFTQWnUGIaTAK7Fme8" alt="Building" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                <p className="text-white font-light text-sm italic mb-2">"TBM has been instrumental in our regional expansion."</p>
                <p className="text-white/70 text-xs font-medium uppercase tracking-widest">VP Operations, Siam Digital</p>
              </div>
            </div>
          </aside>

          {/* Match Cards */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Large Card */}
            {matches[0] && (
              <div className="md:col-span-2 group bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300 rounded-xl overflow-hidden flex flex-col md:flex-row relative">
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-lg">{matches[0].match} Match</div>
                </div>
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src={matches[0].image} alt={matches[0].name} />
                </div>
                <div className="md:w-3/5 p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-light text-primary-dim mb-1">{matches[0].name}</h2>
                      <p className="text-on-surface-variant text-sm font-light">{matches[0].subtitle}</p>
                    </div>
                    {matches[0].verified && <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {matches[0].industry.map((tag, i) => (
                      <span key={i} className="text-[10px] font-semibold text-slate-500 bg-surface-container-high px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                  <p className="text-on-surface text-sm font-light leading-relaxed mb-8">{matches[0].desc}</p>
                  <div className="mt-auto flex gap-4">
                    <button className="bg-primary hover:bg-primary-dim text-white px-8 py-3 rounded-md text-sm font-medium transition-all shadow-md active:scale-95">Inquire</button>
                    <button className="bg-surface-container-highest text-on-surface px-8 py-3 rounded-md text-sm font-medium hover:bg-surface-container-high transition-all active:scale-95">View Profile</button>
                  </div>
                </div>
              </div>
            )}

            {/* Small Cards */}
            {matches.slice(1).map((match) => (
              <div key={match.id} className="group bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300 rounded-xl overflow-hidden p-6 relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm overflow-hidden">
                    <img className="w-full h-full object-cover" src={match.image} alt={match.name} />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-primary mb-1 uppercase tracking-widest">{match.match} Match</div>
                    <span className="material-symbols-outlined text-outline-variant" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </div>
                <h3 className="text-xl font-light text-primary-dim mb-2">{match.name}</h3>
                <p className="text-on-surface-variant text-xs font-light mb-4">{match.subtitle}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {match.industry.map((tag, i) => (
                    <span key={i} className="text-[9px] font-bold text-slate-400 border border-outline-variant/20 px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
                <button className="w-full py-3 bg-white text-primary text-xs font-semibold rounded-md shadow-sm border border-slate-100 hover:border-primary/30 transition-all">View Full Metrics</button>
              </div>
            ))}

            {/* CTA Card */}
            <div className="md:col-span-2 bg-gradient-to-r from-surface-container-low to-primary-container/20 rounded-xl p-8 flex items-center justify-between gap-8 border border-white/40">
              <div className="max-w-md">
                <h4 className="text-lg font-medium text-primary-dim mb-2">Personalized Concierge Search</h4>
                <p className="text-sm font-light text-on-surface-variant">Cannot find your ideal partner? Our institutional advisors can perform a custom, manual search within our offline network.</p>
              </div>
              <button className="whitespace-nowrap bg-white/50 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold text-primary border border-white hover:bg-white/80 transition-all shadow-sm">
                Request Advisory
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Concierge HUD */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(70,95,136,0.3)] hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
        </button>
      </div>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg z-50 px-6 py-3 flex justify-around items-center">
        <Link href="/matches" className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
          <span className="text-[10px] font-medium">Matches</span>
        </Link>
        <Link href="/marketplace" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-medium">Explore</span>
        </Link>
        <Link href="/messages" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">mail</span>
          <span className="text-[10px] font-medium">Messages</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 text-slate-400">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-medium">Account</span>
        </Link>
      </nav>
    </div>
  );
}