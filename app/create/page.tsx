"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateListingPage() {
  const [step, setStep] = useState(1);
  
  const handleSubmit = () => {
    alert("Listing created successfully!");
    window.location.href = "/dashboard";
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

      <main className="max-w-4xl mx-auto px-12 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-headline font-light tracking-tight text-on-surface mb-4">
            Create New Listing
          </h1>
          <p className="text-lg text-on-surface-variant">
            List your business on Thailand's premier matching platform
          </p>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-headline font-medium ${
                  step >= s ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant"
                }`}>
                  {s}
                </div>
                {s < 4 && (
                  <div className={`w-24 h-1 mx-2 ${
                    step > s ? "bg-primary" : "bg-surface-container"
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm font-label">
            <span className={step >= 1 ? "text-primary" : "text-on-surface-variant"}>Business Info</span>
            <span className={step >= 2 ? "text-primary" : "text-on-surface-variant"}>Financials</span>
            <span className={step >= 3 ? "text-primary" : "text-on-surface-variant"}>Documents</span>
            <span className={step >= 4 ? "text-primary" : "text-on-surface-variant"}>Review</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline/10">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-headline font-medium text-on-surface mb-6">Business Information</h2>
              
              <div className="space-y-2">
                <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Business Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your business name"
                  className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Industry *</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary">
                    <option>Select Industry</option>
                    <option>Food & Beverage</option>
                    <option>Technology</option>
                    <option>Manufacturing</option>
                    <option>Healthcare</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Listing Type *</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary">
                    <option>Select Type</option>
                    <option>For Sale</option>
                    <option>Fundraising</option>
                    <option>Partner</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Location *</label>
                <input 
                  type="text" 
                  placeholder="Business location"
                  className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Description *</label>
                <textarea 
                  rows={5}
                  placeholder="Describe your business..."
                  className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary resize-none"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-headline font-medium text-on-surface mb-6">Financial Information</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Valuation (THB)</label>
                  <input 
                    type="text" 
                    placeholder="฿85,000,000"
                    className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Annual Revenue (THB)</label>
                  <input 
                    type="text" 
                    placeholder="฿45,000,000"
                    className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">EBITDA (THB)</label>
                  <input 
                    type="text" 
                    placeholder="฿12,000,000"
                    className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Equity Offered</label>
                  <input 
                    type="text" 
                    placeholder="100%"
                    className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-headline font-medium text-on-surface mb-6">Upload Documents</h2>
              
              <div className="border-2 border-dashed border-outline rounded-xl p-12 text-center">
                <span className="material-symbols-outlined text-5xl text-on-surface-variant mb-4">upload_file</span>
                <p className="text-on-surface-variant mb-2">Drag and drop files here, or click to browse</p>
                <p className="text-xs text-on-surface-variant">PDF, DOC, XLS up to 10MB each</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">Required Documents</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <span className="flex-1 text-on-surface">Financial Statements</span>
                    <span className="text-xs text-on-surface-variant">Not uploaded</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-surface-container rounded-lg">
                    <span className="material-symbols-outlined text-primary">description</span>
                    <span className="flex-1 text-on-surface">Pitch Deck</span>
                    <span className="text-xs text-on-surface-variant">Not uploaded</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-headline font-medium text-on-surface mb-6">Review & Submit</h2>
              
              <div className="bg-surface-container rounded-lg p-6 space-y-4">
                <div className="flex justify-between py-3 border-b border-outline/10">
                  <span className="text-on-surface-variant">Business Name</span>
                  <span className="font-headline font-medium text-on-surface">Premium Restaurant Chain</span>
                </div>
                <div className="flex justify-between py-3 border-b border-outline/10">
                  <span className="text-on-surface-variant">Industry</span>
                  <span className="font-headline font-medium text-on-surface">Food & Beverage</span>
                </div>
                <div className="flex justify-between py-3 border-b border-outline/10">
                  <span className="text-on-surface-variant">Valuation</span>
                  <span className="font-headline font-medium text-on-surface">฿85,000,000</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-on-surface-variant">Documents</span>
                  <span className="font-headline font-medium text-on-surface">0 uploaded</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-sm text-on-surface-variant">
                  I confirm that all information provided is accurate and I agree to the Terms of Service and Privacy Policy.
                </label>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-between mt-8 pt-6 border-t border-outline/10">
            <button 
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              className="px-6 py-3 rounded-lg font-label text-sm tracking-wider uppercase bg-surface-container text-on-surface-variant hover:bg-surface-container-high disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Back
            </button>
            {step < 4 ? (
              <button 
                onClick={() => setStep(step + 1)}
                className="px-8 py-3 rounded-lg font-label text-sm tracking-wider uppercase milled-button text-on-primary shadow-lg hover:scale-[0.98] transition-transform"
              >
                Continue →
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 rounded-lg font-label text-sm tracking-wider uppercase bg-green-600 text-white shadow-lg hover:scale-[0.98] transition-transform"
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
