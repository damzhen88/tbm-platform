"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<"INVESTOR" | "BUSINESS_OWNER">("BUSINESS_OWNER");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    // For now, just simulate auth
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="glass-nav shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-12 py-6 flex justify-between items-center">
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase font-headline">
            Aureus Capital <span className="text-primary font-light">| TBM</span>
          </div>
        </div>
      </header>

      <main className="flex min-h-screen">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-surface-container-low p-12 flex-col justify-between">
          <div className="space-y-8">
            <h1 className="text-5xl font-headline font-light tracking-tight text-on-surface">
              Join Thailand's Premier <br />
              <span className="text-primary-dim italic">Business Matching</span> Platform
            </h1>
            <p className="text-lg text-on-surface-variant font-light max-w-md">
              Connect with verified investors and business opportunities. 
              Experience institutional-grade matching with personalized concierge support.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-primary">verified</span>
              </div>
              <div>
                <div className="font-headline font-medium text-on-surface">Verified Members</div>
                <div className="text-sm text-on-surface-variant">250+ active investors</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-primary">security</span>
              </div>
              <div>
                <div className="font-headline font-medium text-on-surface">Secure Transactions</div>
                <div className="text-sm text-on-surface-variant">PDPA-compliant processes</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-primary">support_agent</span>
              </div>
              <div>
                <div className="font-headline font-medium text-on-surface">Concierge Support</div>
                <div className="text-sm text-on-surface-variant">24/7 dedicated advisors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full lg:w-1/2 p-12 flex items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-medium text-on-surface">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>
              <p className="text-on-surface-variant">
                {isLogin 
                  ? "Sign in to access your dashboard" 
                  : "Join our exclusive network of investors and business owners"
                }
              </p>
            </div>

            {/* Role Selection (only for register) */}
            {!isLogin && (
              <div className="space-y-3">
                <label className="text-sm font-label text-on-surface-variant uppercase tracking-wider">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setRole("INVESTOR")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      role === "INVESTOR" 
                        ? "border-primary bg-primary/5" 
                        : "border-outline/20 hover:border-primary/50"
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl text-primary block mb-2">trending_up</span>
                    <span className="font-headline font-medium text-on-surface block">Investor</span>
                    <span className="text-xs text-on-surface-variant">Looking to invest</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("BUSINESS_OWNER")}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      role === "BUSINESS_OWNER" 
                        ? "border-primary bg-primary/5" 
                        : "border-outline/20 hover:border-primary/50"
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl text-primary block mb-2">storefront</span>
                    <span className="font-headline font-medium text-on-surface block">Business Owner</span>
                    <span className="text-xs text-on-surface-variant">Selling my business</span>
                  </button>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-label text-on-surface-variant">First Name</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-label text-on-surface-variant">Last Name</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary"
                      placeholder="Smith"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-label text-on-surface-variant">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-label text-on-surface-variant">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-outline bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary"
                  placeholder="••••••••"
                  required
                  minLength={8}
                />
              </div>

              {error && (
                <div className="p-4 rounded-lg bg-error-container text-on-error-container text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full milled-button text-on-primary px-8 py-4 rounded-lg font-label text-sm tracking-widest uppercase shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform disabled:opacity-50"
              >
                {loading ? "Please wait..." : isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {/* Toggle */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {isLogin 
                  ? "Don't have an account? " 
                  : "Already have an account? "
                }
                <span className="text-primary font-medium">
                  {isLogin ? "Sign up" : "Sign in"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
