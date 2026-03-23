"use client";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="glass-nav shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-12 py-6">
          <div className="text-xl font-medium tracking-widest text-blue-950 uppercase font-headline">
            Aureus Capital <span className="text-primary font-light">| TBM</span>
          </div>
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto px-12 py-12">
        <h1 className="text-4xl font-headline font-light tracking-tight text-on-surface mb-8">Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-surface-container-lowest rounded-lg p-6 border border-outline/10">
            <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl font-headline font-medium text-on-surface text-center">User Profile</h2>
            <p className="text-center text-on-surface-variant">user@example.com</p>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest rounded-lg p-6 border border-outline/10">
              <h3 className="font-headline font-medium text-on-surface mb-4">Personal Info</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-on-surface-variant">Full Name</label>
                  <input type="text" value="User Name" className="w-full px-4 py-3 rounded-lg border border-outline bg-surface text-on-surface mt-1" />
                </div>
                <div>
                  <label className="text-sm text-on-surface-variant">Email</label>
                  <input type="email" value="user@example.com" className="w-full px-4 py-3 rounded-lg border border-outline bg-surface text-on-surface mt-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
