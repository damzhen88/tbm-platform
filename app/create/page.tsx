"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    window.location.href = "/static/05-create-listing.html";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
