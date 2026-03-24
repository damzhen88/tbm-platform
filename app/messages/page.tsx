"use client";

import Link from "next/link";
import { useState } from "react";

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(0);

  const conversations = [
    { id: 1, name: "Kasem Bunnag", role: "Listing Director", lastMessage: "Thank you for your interest in EcoStream...", time: "2h ago", unread: 2, avatar: "K" },
    { id: 2, name: "Somchai Pra-ert", role: "Founder - EcoStream", lastMessage: "Happy to discuss the expansion plans...", time: "1d ago", unread: 0, avatar: "S" },
    { id: 3, name: "Aureus Concierge", role: "Support Team", lastMessage: "Your NDA has been approved. You...", time: "2d ago", unread: 1, avatar: "A" },
  ];

  const messages = [
    { id: 1, from: "Kasem Bunnag", text: "Hello! Thank you for your interest in EcoStream Logistics. How can I assist you today?", time: "10:30 AM", isOwn: false },
    { id: 2, from: "You", text: "Hi Kasem, I'd like to learn more about their expansion plans to the Eastern Seaboard.", time: "10:35 AM", isOwn: true },
    { id: 3, from: "Kasem Bunnag", text: "Great question! I've attached the detailed expansion roadmap. They plan to open 3 new hubs in Chonburi, Rayong, and Pattaya by Q4 2025.", time: "10:42 AM", isOwn: false },
    { id: 4, from: "Kasem Bunnag", text: "Would you like to schedule a call with the founder to discuss further?", time: "10:43 AM", isOwn: false },
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-slate-200/50 bg-slate-50 flex flex-col p-6 space-y-8 z-50">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-blue-900">Aureus Capital</span>
          <span className="font-['Lexend'] text-sm font-light text-blue-900">Premium Concierge</span>
        </div>
        <button className="w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary py-3 rounded-xl font-medium shadow-sm transition-transform active:scale-95">
          New Request
        </button>
        <nav className="flex-1 space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-['Lexend'] text-sm font-light">Dashboard</span>
          </Link>
          <Link href="/marketplace" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">account_balance</span>
            <span className="font-['Lexend'] text-sm font-light">Investments</span>
          </Link>
          <Link href="/messages" className="flex items-center gap-3 px-4 py-3 bg-white text-blue-900 shadow-sm rounded-lg font-medium transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">mail</span>
            <span className="font-['Lexend'] text-sm font-light">Messages</span>
          </Link>
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-['Lexend'] text-sm font-light">Settings</span>
          </Link>
        </nav>
        <div className="pt-6 border-t border-slate-200 space-y-2">
          <Link href="#" className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">help</span>
            <span className="font-['Lexend'] text-sm font-light">Support</span>
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-2 text-slate-500 hover:text-blue-700 transition-transform duration-200 hover:translate-x-1">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-['Lexend'] text-sm font-light">Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen flex">
        {/* Conversation List */}
        <div className="w-96 border-r border-slate-200 bg-white flex flex-col">
          <div className="p-6 border-b border-slate-100">
            <h1 className="text-2xl font-semibold text-on-surface">Messages</h1>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv, i) => (
              <button 
                key={conv.id} 
                onClick={() => setActiveChat(i)}
                className={`w-full p-6 border-b border-slate-100 text-left hover:bg-surface-container-low transition-colors ${activeChat === i ? 'bg-surface-container-low' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold">
                    {conv.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-semibold text-on-surface">{conv.name}</p>
                      <span className="text-xs text-on-surface-variant">{conv.time}</span>
                    </div>
                    <p className="text-xs text-primary mb-1">{conv.role}</p>
                    <p className="text-sm text-on-surface-variant truncate">{conv.lastMessage}</p>
                  </div>
                  {conv.unread > 0 && (
                    <span className="w-5 h-5 bg-primary text-on-primary text-xs font-bold rounded-full flex items-center justify-center">{conv.unread}</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-surface-container-low">
          {/* Chat Header */}
          <div className="p-6 bg-white border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold">
                {conversations[activeChat].avatar}
              </div>
              <div>
                <p className="font-semibold text-on-surface">{conversations[activeChat].name}</p>
                <p className="text-xs text-primary">{conversations[activeChat].role}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-xl hover:bg-surface-container-low">
                <span className="material-symbols-outlined">videocam</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-xl hover:bg-surface-container-low">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-md ${msg.isOwn ? 'bg-primary text-on-primary rounded-2xl rounded-br-md' : 'bg-white text-on-surface rounded-2xl rounded-bl-md'} p-6 shadow-sm`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-2 ${msg.isOwn ? 'text-on-primary/70' : 'text-on-surface-variant'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex gap-4">
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-surface-container-low rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="px-6 py-3 bg-primary text-on-primary rounded-xl font-label text-xs uppercase tracking-widest font-bold hover:bg-primary-dim transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Concierge HUD */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="bg-glass rounded-2xl shadow-xl border border-white/20 p-4 flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Concierge Online</span>
            <span className="text-xs font-light text-on-surface">Awaiting your instruction.</span>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}