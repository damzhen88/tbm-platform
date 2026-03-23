"use client";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* SideNavBar */}
      <aside className="h-full w-64 fixed left-0 top-0 bg-slate-50 flex flex-col p-6 gap-8 z-40 border-r border-slate-100">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold text-blue-900 uppercase tracking-widest font-headline">Aureus Private</span>
          <span className="font-Lexend text-xs tracking-wide uppercase text-slate-400">Elite Tier</span>
        </div>
        <nav className="flex flex-col gap-4 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </Link>
          <div className="flex items-center gap-3 p-3 bg-white text-blue-900 shadow-sm rounded-lg font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">person</span>
            <span>Profile</span>
          </div>
          <Link href="/data-room" className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">description</span>
            <span>Documents</span>
          </Link>
        </nav>
        <div className="mt-auto flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3 p-3 text-slate-500 hover:text-slate-600 font-Lexend text-sm tracking-wide uppercase cursor-pointer">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen p-12">
        <header className="mb-12">
          <h1 className="text-4xl font-light tracking-tight mb-2">Profile & KYC</h1>
          <p className="text-slate-500">Manage your account and verification status.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-primary">person</span>
            </div>
            <h2 className="text-xl font-semibold text-center mb-1">Kit Kritsadak</h2>
            <p className="text-slate-500 text-center mb-6">kit@tbm.com</p>
            <div className="flex justify-center">
              <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Verified</span>
            </div>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-slate-500">Full Name</label>
                  <input type="text" defaultValue="Kit Kritsadak" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-slate-500">Email</label>
                  <input type="email" defaultValue="kit@tbm.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-slate-500">Phone</label>
                  <input type="tel" defaultValue="+66 610 089 585" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-slate-500">Company</label>
                  <input type="text" defaultValue="SK INTER FRUIT" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary" />
                </div>
              </div>
              <button className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-medium text-sm uppercase tracking-wider hover:bg-primary-dim transition-colors">
                Save Changes
              </button>
            </div>

            {/* KYC Status */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-lg font-semibold mb-6">Verification Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-green-600">check_circle</span>
                    <div>
                      <p className="font-medium">Email Verified</p>
                      <p className="text-sm text-slate-500">Your email has been verified</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-medium">Verified</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-yellow-600">pending</span>
                    <div>
                      <p className="font-medium">Identity Verification</p>
                      <p className="text-sm text-slate-500">Upload your ID documents</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-medium">Complete</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-slate-400">account_balance</span>
                    <div>
                      <p className="font-medium">Bank Verification</p>
                      <p className="text-sm text-slate-500">Connect your bank account</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-slate-200 text-slate-600 rounded-lg text-sm font-medium">Connect</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
