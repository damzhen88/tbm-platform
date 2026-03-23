"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-950 mb-2">Aureus Capital</h1>
          <p className="text-slate-500">{isLogin ? "Welcome back" : "Create your account"}</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          {/* Tab Switcher */}
          <div className="flex mb-8 bg-surface-container rounded-xl p-1">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${isLogin ? "bg-white shadow-sm text-primary" : "text-slate-500"}`}
            >
              Login
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${!isLogin ? "bg-white shadow-sm text-primary" : "text-slate-500"}`}
            >
              Sign Up
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-dim text-white py-4 rounded-xl font-semibold text-sm uppercase tracking-widest shadow-md hover:shadow-lg transition-all">
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-primary font-medium">
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
