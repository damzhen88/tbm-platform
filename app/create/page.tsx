"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateListingPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const handleSubmit = () => {
    alert("Listing created successfully!");
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="bg-white/70 backdrop-blur-xl docked full-width top-0 sticky z-50">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-blue-950">TBM Thailand</div>
          <div className="flex items-center gap-4">
            <Link href="/auth" className="text-blue-900 font-semibold text-xs uppercase tracking-widest">Login</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-light tracking-tight text-on-surface mb-4">Create New Listing</h1>
          <p className="text-lg text-on-surface-variant">List your business on Thailand's premier matching platform</p>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= s ? "bg-primary text-white" : "bg-surface-container text-on-surface-variant"
                }`}>
                  {s}
                </div>
                {s < totalSteps && (
                  <div className={`w-32 h-1 mx-2 ${step > s ? "bg-primary" : "bg-surface-container"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className={step >= 1 ? "text-primary" : "text-on-surface-variant"}>Business Info</span>
            <span className={step >= 2 ? "text-primary" : "text-on-surface-variant"}>Financials</span>
            <span className={step >= 3 ? "text-primary" : "text-on-surface-variant"}>Documents</span>
            <span className={step >= 4 ? "text-primary" : "text-on-surface-variant"}>Review</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-6">Business Information</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-slate-500">Business Name *</label>
                <input type="text" placeholder="Enter your business name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-slate-500">Industry *</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary">
                    <option>Select Industry</option>
                    <option>Technology</option>
                    <option>Food & Beverage</option>
                    <option>Manufacturing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-slate-500">Listing Type *</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary">
                    <option>For Sale</option>
                    <option>Fundraising</option>
                    <option>Partner</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium uppercase tracking-wider text-slate-500">Description *</label>
                <textarea rows={5} placeholder="Describe your business..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary resize-none" />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-6">Financial Information</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-slate-500">Valuation (THB)</label>
                  <input type="text" placeholder="฿85,000,000" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium uppercase tracking-wider text-slate-500">Target Amount (THB)</label>
                  <input type="text" placeholder="฿15,000,000" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-6">Upload Documents</h2>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center">
                <span className="material-symbols-outlined text-5xl text-slate-400 mb-4">upload_file</span>
                <p className="text-slate-500 mb-2">Drag and drop files here, or click to browse</p>
                <p className="text-xs text-slate-400">PDF, DOC, XLS up to 10MB each</p>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-6">Review & Submit</h2>
              <div className="bg-surface-container rounded-xl p-6 space-y-4">
                <div className="flex justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-500">Business Name</span>
                  <span className="font-medium">Premium Restaurant</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-200">
                  <span className="text-slate-500">Industry</span>
                  <span className="font-medium">Food & Beverage</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-slate-500">Valuation</span>
                  <span className="font-medium">฿85,000,000</span>
                </div>
              </div>
              <label className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-slate-600">I confirm that all information provided is accurate and I agree to the Terms of Service.</span>
              </label>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
            <button 
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="px-6 py-3 rounded-xl font-medium text-sm uppercase tracking-wider bg-surface-container text-slate-500 hover:bg-surface-container-high disabled:opacity-50"
            >
              ← Back
            </button>
            {step < totalSteps ? (
              <button 
                onClick={() => setStep(step + 1)}
                className="px-8 py-3 rounded-xl font-medium text-sm uppercase tracking-wider bg-primary text-white shadow-md hover:shadow-lg transition-all"
              >
                Continue →
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 rounded-xl font-medium text-sm uppercase tracking-wider bg-green-600 text-white shadow-md hover:shadow-lg transition-all"
              >
                Submit Listing
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
