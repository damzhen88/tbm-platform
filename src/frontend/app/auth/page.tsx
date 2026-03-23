"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [role, setRole] = useState<"INVESTOR" | "BUSINESS_OWNER">("BUSINESS_OWNER")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const { signIn, signUp } = useAuth()
  const router = useRouter()

  // Form states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (isLogin) {
        const result = await signIn(email, password)
        if (result.success) {
          router.push("/dashboard")
        } else {
          setError(result.error || "Login failed")
        }
      } else {
        const result = await signUp({
          email,
          password,
          role,
          firstName,
          lastName,
        })
        if (result.success) {
          router.push("/dashboard")
        } else {
          setError(result.error || "Registration failed")
        }
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Branding */}
      <div className="hidden md:flex md:w-[45%] bg-[#00288e] relative overflow-hidden flex-col justify-between p-12 lg:p-16">
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#86f2e4]/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <Link href="/" className="text-2xl font-black text-white" style={{ fontFamily: 'Manrope' }}>TBM PLATFORM</Link>
        </div>

        <div className="relative z-10 max-w-lg">
          <span className="inline-block px-3 py-1 bg-[#006a61] text-white text-[10px] font-bold tracking-[0.05em] uppercase mb-6 rounded-sm">
            Verified Network
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: 'Manrope' }}>
            The Gateway to Thai Professional Synergy.
          </h1>
          <p className="text-[#dde1ff] text-base leading-relaxed">
            Connect with premium stakeholders, secure high-impact investments, and scale your operations within Thailand's most prestigious commercial ecosystem.
          </p>
        </div>

        {/* Stats */}
        <div className="relative z-10 flex gap-8">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Manrope' }}>2,400+</span>
            <span className="text-xs text-[#dde1ff] uppercase tracking-wider">Verified Businesses</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Manrope' }}>$1.2B</span>
            <span className="text-xs text-[#dde1ff] uppercase tracking-wider">Deals Connected</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Manrope' }}>98%</span>
            <span className="text-xs text-[#dde1ff] uppercase tracking-wider">Match Success</span>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full md:w-[55%] flex flex-col justify-center p-8 lg:p-16 bg-white">
        {/* Mobile Logo */}
        <div className="md:hidden mb-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#00288e] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl" style={{ fontFamily: 'Manrope' }}>TBM PLATFORM</span>
          </Link>
        </div>

        {/* Form Header */}
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Manrope' }}>Access the Portal</h2>
          <p className="text-gray-500 mb-8">Enter your credentials to continue</p>

          {/* Toggle Tabs */}
          <div className="flex bg-gray-100 rounded-lg p-1 mb-8">
            <button 
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 px-4 rounded-md font-semibold text-sm transition-all ${isLogin ? 'bg-white shadow-sm text-[#00288e]' : 'text-gray-500'}`}
            >
              Login
            </button>
            <button 
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 px-4 rounded-md font-semibold text-sm transition-all ${!isLogin ? 'bg-white shadow-sm text-[#00288e]' : 'text-gray-500'}`}
            >
              Register
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          {isLogin && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com" 
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-[#00288e]/20 text-sm"
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-[#00288e]/20 text-sm"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-[#00288e] rounded border-gray-300 focus:ring-[#00288e]/20" />
                  <span className="text-sm text-gray-500">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#00288e] font-semibold hover:underline">Forgot password?</a>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#00288e] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#1e40af] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Signing in...' : (
                  <>
                    Sign In to Dashboard
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Register Form */}
          {!isLogin && (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Role Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">I am a...</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole("INVESTOR")}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${role === "INVESTOR" ? 'border-[#00288e] bg-[#dde1ff]/20' : 'border-gray-200'}`}
                  >
                    <span className="material-symbols-outlined text-2xl mb-1 text-gray-600">trending_up</span>
                    <p className="text-xs font-semibold">Investor</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("BUSINESS_OWNER")}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${role === "BUSINESS_OWNER" ? 'border-[#00288e] bg-[#dde1ff]/20' : 'border-gray-200'}`}
                  >
                    <span className="material-symbols-outlined text-2xl mb-1 text-gray-600">storefront</span>
                    <p className="text-xs font-semibold">Business Owner</p>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                  <input 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Kritsada" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-[#00288e]/20 text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Kitsanapong" 
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-[#00288e]/20 text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com" 
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-[#00288e]/20 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a strong password" 
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-[#00288e]/20 text-sm"
                  required
                  minLength={8}
                />
                <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters</p>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#00288e] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#1e40af] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Creating account...' : (
                  <>
                    Create Professional Account
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-4 text-gray-400">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <button 
            type="button"
            className="w-full border-2 border-gray-200 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Trust Bar */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#006a61] text-sm">shield</span>
                <span>BANK GRADE SECURITY</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#006a61] text-sm">gavel</span>
                <span>REGULATORY COMPLIANT</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#006a61] text-sm">verified</span>
                <span>VERIFIED NETWORK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
