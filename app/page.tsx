"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm shadow-primary/5 transition-all duration-300">
        <div className="flex justify-between items-center px-12 py-6 w-full max-w-screen-2xl mx-auto">
          {/* Logo */}
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase font-headline">
            Aureus Capital <span className="text-primary font-light">| TBM</span>
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-12 font-Lexend font-light tracking-tight">
            <Link href="/marketplace" className="text-blue-700 border-b-2 border-blue-700 pb-1">
              Marketplace
            </Link>
            <a href="#" className="text-slate-500 hover:text-blue-900 transition-all">Insights</a>
            <a href="#" className="text-slate-500 hover:text-blue-900 transition-all">Concierge</a>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link href="/auth" className="text-slate-500 font-label text-xs tracking-widest uppercase hover:text-primary transition-colors">
              Login
            </Link>
            <Link href="/auth" className="milled-button text-on-primary px-8 py-3 rounded-md font-label text-xs tracking-widest uppercase shadow-lg shadow-primary/20 hover:scale-95 duration-200">
              Inquire
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-12 lg:px-24 overflow-hidden">
          {/* Background */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-surface-container-low asymmetric-clip -z-10">
            <div 
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200')"
              }}
            />
          </div>

          <div className="max-w-4xl space-y-12">
            {/* Label */}
            <div className="space-y-4">
              <span className="text-xs tracking-[0.3em] uppercase font-medium text-primary font-label">
                Strategic Acquisitions
              </span>
              
              <h1 className="text-6xl md:text-8xl font-headline font-light leading-[1.1] tracking-tighter text-on-surface">
                Boutique Business <br />
                <span className="text-primary-dim italic font-normal">Matching</span> In Thailand.
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
              Facilitating elite transitions between visionary founders and sophisticated global capital. 
              Experience the Zurich-standard digital concierge for the Thai market.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link href="/create" className="group flex items-center gap-4 milled-button text-on-primary px-10 py-5 rounded-md font-label text-sm tracking-widest uppercase shadow-xl shadow-primary/25">
                I Want to Sell
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link href="/marketplace" className="flex items-center gap-4 bg-surface-container-highest text-on-surface px-10 py-5 rounded-md font-label text-sm tracking-widest uppercase hover:bg-surface-bright transition-all">
                I Want to Invest
              </Link>
            </div>
          </div>

          {/* Watermark */}
          <div className="absolute bottom-10 right-10 select-none pointer-events-none">
            <span className="text-[12rem] font-headline font-bold text-primary-fixed-dim/20 leading-none">TBM</span>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-surface-container-low py-32 px-12 lg:px-24">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-headline font-light tracking-tight text-on-surface">
                The Premier Ecosystem <br/>for Institutional Growth
              </h2>
              <p className="text-on-surface-variant font-light text-lg">
                Our curated approach ensures that every match is not just a transaction, 
                but a strategic alignment of values and vision.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-2">
                <div className="text-6xl font-headline font-light text-primary">42</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Active Listings</div>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-headline font-light text-primary">₿2.4B</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Total Value</div>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-headline font-light text-primary">89%</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-6xl font-headline font-light text-primary">127</div>
                <div className="text-sm text-on-surface-variant uppercase tracking-wider">Active Investors</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-32 px-12 lg:px-24">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-4xl font-headline font-light tracking-tight text-on-surface mb-16">
              Featured Opportunities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden border border-outline/10 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary-fixed/30" />
                <div className="p-6 space-y-4">
                  <span className="text-xs uppercase tracking-wider text-primary font-label">Food & Beverage</span>
                  <h3 className="text-xl font-headline font-medium text-on-surface">
                    Premium Restaurant Chain - Bangkok
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    Award-winning fine dining with 5 locations across prime Bangkok districts.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline/10">
                    <div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-wider">Valuation</div>
                      <div className="text-lg font-headline font-semibold text-primary">฿85M</div>
                    </div>
                    <Link href="/listing/1" className="text-xs uppercase tracking-wider text-primary hover:underline font-label">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden border border-outline/10 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary-fixed/30" />
                <div className="p-6 space-y-4">
                  <span className="text-xs uppercase tracking-wider text-primary font-label">Technology</span>
                  <h3 className="text-xl font-headline font-medium text-on-surface">
                    SaaS Platform - Regional Scale
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    B2B logistics software with enterprise clients across SEA.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline/10">
                    <div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-wider">Valuation</div>
                      <div className="text-lg font-headline font-semibold text-primary">฿120M</div>
                    </div>
                    <Link href="/listing/2" className="text-xs uppercase tracking-wider text-primary hover:underline font-label">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden border border-outline/10 hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-tertiary/20 to-tertiary-fixed/30" />
                <div className="p-6 space-y-4">
                  <span className="text-xs uppercase tracking-wider text-primary font-label">Manufacturing</span>
                  <h3 className="text-xl font-headline font-medium text-on-surface">
                    Automotive Parts Factory
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    ISO-certified manufacturer supplying major automotive brands.
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline/10">
                    <div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-wider">Valuation</div>
                      <div className="text-lg font-headline font-semibold text-primary">฿200M</div>
                    </div>
                    <Link href="/listing/3" className="text-xs uppercase tracking-wider text-primary hover:underline font-label">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/marketplace" className="inline-flex items-center gap-2 text-primary font-label text-sm tracking-widest uppercase hover:underline">
                View All Listings
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-32 px-12 lg:px-24 bg-surface-container">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">verified_user</span>
                </div>
                <h3 className="text-lg font-headline font-medium text-on-surface">Verified Listings</h3>
                <p className="text-sm text-on-surface-variant">Every business is vetted by our team</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">security</span>
                </div>
                <h3 className="text-lg font-headline font-medium text-on-surface">Secure Transactions</h3>
                <p className="text-sm text-on-surface-variant">NDA-protected data rooms</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">support_agent</span>
                </div>
                <h3 className="text-lg font-headline font-medium text-on-surface">Concierge Support</h3>
                <p className="text-sm text-on-surface-variant">Personal advisors for every deal</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">account_balance</span>
                </div>
                <h3 className="text-lg font-headline font-medium text-on-surface">Legal Framework</h3>
                <p className="text-sm text-on-surface-variant">PDPA-compliant processes</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-12 lg:px-24 bg-primary text-on-primary">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-headline font-light tracking-tight">
              Ready to Close Your Next Deal?
            </h2>
            <p className="text-xl text-on-primary/80 font-light max-w-2xl mx-auto">
              Join Thailand's most exclusive business matching platform. 
              Connect with serious investors and verified opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link href="/create" className="bg-on-primary text-primary px-10 py-5 rounded-md font-label text-sm tracking-widest uppercase shadow-xl hover:scale-95 transition-transform">
                List Your Business
              </Link>
              <Link href="/marketplace" className="border-2 border-on-primary text-on-primary px-10 py-5 rounded-md font-label text-sm tracking-widest uppercase hover:bg-on-primary/10 transition-all">
                Explore Opportunities
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-12 lg:px-24 bg-on-surface text-on-inverse-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-lg font-headline tracking-widest uppercase">
              Aureus Capital <span className="text-primary">| TBM</span>
            </div>
            <div className="flex gap-8 text-sm text-on-inverse-surface/70">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="text-sm text-on-inverse-surface/50">
              © 2026 TBM Platform. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
