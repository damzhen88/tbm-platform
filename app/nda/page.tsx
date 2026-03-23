"use client";

import { useState } from "react";
import Link from "next/link";

export default function NDAPage() {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSign = () => {
    setLoading(true);
    setTimeout(() => {
      setSigned(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="glass-nav shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-12 py-6">
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase font-headline">
            Aureus Capital <span className="text-primary font-light">| TBM</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-12 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-5xl text-primary">security</span>
          </div>
          <h1 className="text-4xl font-headline font-light tracking-tight text-on-surface mb-4">
            Non-Disclosure Agreement
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
            To access confidential information, please review and sign the NDA
          </p>
        </div>

        {/* NDA Document */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline/10 mb-8">
          <div className="p-6 bg-surface-container rounded-t-xl border-b border-outline/10">
            <h2 className="text-xl font-headline font-medium text-on-surface">Confidentiality Agreement</h2>
          </div>
          <div className="p-8 max-h-96 overflow-y-auto text-sm text-on-surface-variant space-y-4">
            <p>
              <strong>1. Definition of Confidential Information</strong><br />
              Confidential Information means any information disclosed by the Company to the Recipient, 
              whether orally, in writing, or by inspection, that is designated as confidential or 
              that reasonably should be understood to be confidential given the nature of the information.
            </p>
            <p>
              <strong>2. Obligations of Recipient</strong><br />
              The Recipient agrees to: (a) hold the Confidential Information in strict confidence; 
              (b) not disclose the Confidential Information to any third parties without prior written consent; 
              (c) use the Confidential Information solely for the purpose of evaluating a potential business transaction.
            </p>
            <p>
              <strong>3. Term</strong><br />
              This Agreement shall remain in effect for a period of two (2) years from the date of signing.
            </p>
            <p>
              <strong>4. Return of Information</strong><br />
              Upon termination of this Agreement, the Recipient shall return or destroy all Confidential Information.
            </p>
            <p>
              <strong>5. Governing Law</strong><br />
              This Agreement shall be governed by the laws of Thailand.
            </p>
          </div>
        </div>

        {/* Sign Section */}
        {signed ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <span className="material-symbols-outlined text-6xl text-green-600 mb-4">check_circle</span>
            <h2 className="text-2xl font-headline font-medium text-green-800 mb-2">NDA Signed Successfully!</h2>
            <p className="text-green-600 mb-6">You now have access to confidential documents</p>
            <Link 
              href="/data-room" 
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-label text-sm tracking-wider uppercase hover:bg-green-700 transition-colors"
            >
              Access Data Room →
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <label className="flex items-start gap-4 p-6 bg-surface-container rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
              <input type="checkbox" className="mt-1" required />
              <span className="text-sm text-on-surface-variant">
                I have read and agree to the terms of the Non-Disclosure Agreement above. 
                I understand that disclosing confidential information is prohibited.
              </span>
            </label>

            <button 
              onClick={handleSign}
              disabled={loading}
              className="w-full milled-button text-on-primary px-8 py-5 rounded-lg font-label text-sm tracking-widest uppercase shadow-xl hover:scale-[0.98] transition-transform disabled:opacity-50"
            >
              {loading ? "Processing..." : "Sign NDA Digitally"}
            </button>

            <p className="text-xs text-center text-on-surface-variant">
              By signing, you agree to be bound by the terms of this Agreement.
              Your digital signature is legally binding under Thai law.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
