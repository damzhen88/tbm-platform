"use client";

import { useState } from "react";
import Link from "next/link";

export default function NDAPage() {
  const [agreed, setAgreed] = useState(false);
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSign = async () => {
    if (!agreed) return;
    setLoading(true);
    // Simulate signing
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSigned(true);
    setLoading(false);
  };

  if (signed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-8">
        <div className="max-w-2xl text-center space-y-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <span className="material-symbols-outlined text-6xl text-green-600">check_circle</span>
          </div>
          <h1 className="text-4xl font-light">NDA Signed Successfully</h1>
          <p className="text-on-surface-variant">You now have access to the confidential data room.</p>
          <Link href="/data-room" className="inline-block bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-widest">
            Access Data Room
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="bg-white/70 backdrop-blur-xl docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-blue-950">Aureus Capital</div>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-blue-900 font-semibold text-xs uppercase tracking-widest">Login</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-5xl text-primary">security</span>
          </div>
          <h1 className="text-4xl font-light tracking-tight text-on-surface mb-4">
            Confidential Access Request
          </h1>
          <p className="text-lg text-on-surface-variant">
            This listing requires NDA confirmation before accessing sensitive information.
          </p>
        </div>

        {/* NDA Document */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="bg-surface-container px-8 py-4 border-b border-slate-100">
            <h2 className="font-semibold">Non-Disclosure Agreement</h2>
          </div>
          <div className="p-8 h-64 overflow-y-auto text-sm text-on-surface-variant space-y-4">
            <p><strong>1. Definition of Confidential Information</strong><br/>Confidential Information means any information disclosed by the Company to the Recipient.</p>
            <p><strong>2. Obligations of Recipient</strong><br/>The Recipient agrees to hold the Confidential Information in strict confidence.</p>
            <p><strong>3. Term</strong><br/>This Agreement shall remain in effect for a period of two (2) years from the date of signing.</p>
            <p><strong>4. Governing Law</strong><br/>This Agreement shall be governed by the laws of Thailand.</p>
          </div>
        </div>

        {/* Agreement Checkbox */}
        <label className="flex items-start gap-4 p-6 bg-surface-container rounded-xl cursor-pointer hover:bg-surface-container-high transition-colors mb-8">
          <input 
            type="checkbox" 
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-outline text-primary" 
          />
          <span className="text-sm text-on-surface-variant">
            I have read and agree to the terms of the Non-Disclosure Agreement. 
            I understand that disclosing confidential information is prohibited.
          </span>
        </label>

        {/* Sign Button */}
        <button 
          onClick={handleSign}
          disabled={!agreed || loading}
          className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-5 rounded-xl font-semibold text-sm uppercase tracking-widest shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Processing..." : "Sign NDA Digitally"}
        </button>
      </main>
    </div>
  );
}
