"use client";

import { useEffect } from "react";

export default function PEMarketplacePage() {
  useEffect(() => {
    window.location.href = "/static/03-pe-marketplace.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
