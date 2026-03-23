"use client";

import { ReactNode } from 'react';
import Link from 'next/link';

interface DesktopLayoutProps {
  children: ReactNode;
  currentPage?: string;
}

const navItems = [
  { label: 'Explore', href: '/explore', active: false },
  { label: 'For Investors', href: '#', active: false },
  { label: 'For Businesses', href: '#', active: false },
];

export default function DesktopLayout({ children, currentPage }: DesktopLayoutProps) {
  return (
    <div className="min-h-screen bg-[#f7f9fb]">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,40,142,0.08)]">
        <div className="flex justify-between items-center px-4 md:px-8 h-20 w-full max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4 md:gap-12">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00288e] to-[#006a61] flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-[#00288e]">ThaiCommerce</span>
            </Link>
            <div className="hidden md:flex gap-8">
              {navItems.map((item, i) => (
                <Link 
                  key={i}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    item.active 
                      ? 'text-[#00288e] border-b-2 border-[#00288e]' 
                      : 'text-[#444653] hover:text-[#00288e]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group hidden lg:block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#757684]">🔍</span>
              <input 
                className="pl-10 pr-4 py-2 bg-[#e6e8ea] border-none rounded-lg w-64 focus:ring-2 focus:ring-[#00288e]/20 transition-all"
                placeholder="Search opportunities..."
                type="text"
              />
            </div>
            <Link 
              href="/auth"
              className="text-[#00288e] font-bold hover:opacity-80 transition-all"
            >
              Login
            </Link>
            <Link 
              href="/auth"
              className="bg-[#00288e] text-white px-6 py-2.5 rounded-md font-bold shadow-sm hover:scale-[0.98] transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}