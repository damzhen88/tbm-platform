"use client";

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileLayoutProps {
  children?: ReactNode;
  currentPage?: string;
  mobileContent?: ReactNode;
}

const navItems = [
  { label: 'Explore', icon: '🔍', href: '/explore', key: 'explore' },
  { label: 'Dashboard', icon: '📊', href: '/dashboard', key: 'dashboard' },
  { label: 'Listings', icon: '📋', href: '/dashboard', key: 'listings' },
];

export default function MobileLayout({ children, currentPage, mobileContent }: MobileLayoutProps) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // Determine active nav item based on pathname
  const getActiveKey = () => {
    if (pathname?.includes('/dashboard')) return 'dashboard';
    if (pathname?.includes('/explore')) return 'explore';
    if (pathname?.includes('/listing')) return 'listings';
    return 'explore';
  };

  const activeKey = getActiveKey();

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#2a3439]">
      {/* Mobile Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm h-16 flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <span className="text-xl">☰</span>
          <span className="text-xl font-bold uppercase tracking-widest text-[#00288e]">TBM</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#e8eff3] flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-[#dde1ff] flex items-center justify-center text-[#00288e] font-bold text-xs">
            U
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-24 px-6 max-w-md mx-auto">
        {mobileContent || children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full h-20 bg-white flex justify-around items-center px-4 pb-safe z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] border-t border-slate-100">
        {navItems.map((item) => (
          <Link 
            key={item.key}
            href={item.href}
            className={`flex flex-col items-center justify-center rounded-xl px-4 py-1 transition-transform active:scale-95 ${
              activeKey === item.key
                ? 'text-[#00288e] bg-slate-50' 
                : 'text-slate-400'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[11px] font-medium mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}