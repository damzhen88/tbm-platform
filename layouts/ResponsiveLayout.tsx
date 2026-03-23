"use client";

import { ReactNode, useEffect, useState } from 'react';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

interface ResponsiveLayoutProps {
  children?: ReactNode;
  currentPage?: string;
}

export default function ResponsiveLayout({ children, currentPage }: ResponsiveLayoutProps) {
  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDevice('mobile');
      } else if (width < 1024) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (device === 'mobile') {
    return <MobileLayout currentPage={currentPage}>{children}</MobileLayout>;
  }

  return <DesktopLayout currentPage={currentPage}>{children}</DesktopLayout>;
}