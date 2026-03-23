"use client";

export default function MessagesPage() {
  const messages = [
    { from: "TBM Concierge", text: "Your listing has been viewed 50 times today.", time: "2 min ago" },
    { from: "Investor A", text: "Interested in your listing. Can we schedule a call?", time: "1 hour ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <aside className="h-full w-64 fixed left-0 top-0 bg-slate-50 flex flex-col p-6 gap-8 z-40 border-r border-slate-100">
        <span className="text-lg font-bold text-blue-900 uppercase">Aureus Private</span>
        <nav className="flex flex-col gap-4 mt-4">
          <a href="/dashboard" className="flex items-center gap-3 p-3 text-slate-500 text-sm uppercase">Dashboard</a>
          <a href="/messages" className="flex items-center gap-3 p-3 bg-white text-blue-900 shadow-sm rounded-lg text-sm uppercase">Messages</a>
        </nav>
      </aside>
      <main className="ml-64 min-h-screen p-12">
        <h1 className="text-4xl font-light mb-8">Messages</h1>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100">
          {messages.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <span className="material-symbols-outlined text-6xl mb-4">inbox</span>
              <p>No messages yet</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {messages.map((m, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50">
                  <div>
                    <p className="font-medium">{m.from}</p>
                    <p className="text-sm text-slate-500">{m.text}</p>
                  </div>
                  <span className="text-xs text-slate-400">{m.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
