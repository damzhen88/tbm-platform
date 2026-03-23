import { useState, useEffect } from 'react';

export const breakpoints = {
  mobile: 768,
  tablet: 1024,
};

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export function useResponsive() {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Set initial width
    setWidth(window.innerWidth);
    
    // Update device type based on width
    const updateDevice = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      
      if (newWidth < breakpoints.mobile) {
        setDevice('mobile');
      } else if (newWidth < breakpoints.tablet) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    // Add event listener
    window.addEventListener('resize', updateDevice);
    
    // Initial check
    updateDevice();

    // Cleanup
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return {
    device,
    width,
    isMobile: device === 'mobile',
    isTablet: device === 'tablet',
    isDesktop: device === 'desktop',
  };
}

export default useResponsive;