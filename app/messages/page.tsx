"use client";

import { useState } from "react";
import ResponsiveLayout from "@/layouts/ResponsiveLayout";

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isRead: boolean;
  hasAttachment?: boolean;
}

interface Conversation {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  userTitle: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  isOnline: boolean;
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    userId: "101",
    userName: "Dr. Prasert S.",
    userTitle: "Managing Partner, Vittaya Venture",
    userAvatar: "👨‍💼",
    lastMessage: "I'd like to learn more about your Series A plans...",
    timestamp: "2 min ago",
    unread: 2,
    isOnline: true,
  },
  {
    id: "2",
    userId: "102",
    userName: "Siriporn T.",
    userTitle: "CTO, ThaiFoodTech Co.",
    userAvatar: "👩‍💻",
    lastMessage: "Thanks for the intro! Let's schedule a call.",
    timestamp: "1 hour ago",
    unread: 0,
    isOnline: false,
  },
  {
    id: "3",
    userId: "103",
    userName: "Kittipong W.",
    userTitle: "Angel Investor",
    userAvatar: "👨‍💼",
    lastMessage: "Great meeting you at the event yesterday!",
    timestamp: "Yesterday",
    unread: 0,
    isOnline: true,
  },
  {
    id: "4",
    userId: "104",
    userName: "Pimon L.",
    userTitle: "Principal, Inno Capital",
    userAvatar: "👩‍💼",
    lastMessage: "Could you share your latest pitch deck?",
    timestamp: "2 days ago",
    unread: 0,
    isOnline: false,
  },
];

const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "m1",
      senderId: "101",
      senderName: "Dr. Prasert S.",
      senderAvatar: "👨‍💼",
      content: "Hi! I saw your profile on TBM. Impressive traction!",
      timestamp: "10:30 AM",
      isRead: true,
    },
    {
      id: "m2",
      senderId: "me",
      senderName: "You",
      senderAvatar: "🦞",
      content: "Thank you! We'd love to chat about potential synergy.",
      timestamp: "10:32 AM",
      isRead: true,
    },
    {
      id: "m3",
      senderId: "101",
      senderName: "Dr. Prasert S.",
      senderAvatar: "👨‍💼",
      content: "I'd like to learn more about your Series A plans. What's your current round structure?",
      timestamp: "10:45 AM",
      isRead: false,
    },
    {
      id: "m4",
      senderId: "101",
      senderName: "Dr. Prasert S.",
      senderAvatar: "👨‍💼",
      content: "I've attached our investment thesis for 2026.",
      timestamp: "10:46 AM",
      isRead: false,
      hasAttachment: true,
    },
  ],
};

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1");
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const currentConversation = mockConversations.find(c => c.id === selectedConversation);
  const messages = selectedConversation ? mockMessages[selectedConversation] || [] : [];

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    // In real app, would send to API
    setNewMessage("");
  };

  return (
    <ResponsiveLayout>
      <div className="h-[calc(100vh-64px)] bg-[#f7f9fb] flex">
        {/* Conversations List */}
        <div className={`w-full md:w-96 bg-white border-r flex flex-col ${
          selectedConversation ? "hidden md:flex" : "flex"
        }`}>
          {/* Search Header */}
          <div className="p-4 border-b">
            <h1 className="text-2xl font-bold text-[#00288e] mb-4">Messages</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 bg-[#f7f9fb] rounded-xl border-0 focus:ring-2 focus:ring-[#00288e] outline-none"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666]">🔍</span>
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {mockConversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`w-full p-4 flex items-start gap-3 hover:bg-[#f7f9fb] transition-colors text-left border-b ${
                  selectedConversation === conv.id ? "bg-[#f7f9fb]" : ""
                }`}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00288e] to-[#006a61] flex items-center justify-center text-xl">
                    {conv.userAvatar}
                  </div>
                  {conv.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-[#00288e] truncate">{conv.userName}</span>
                    <span className="text-xs text-[#666]">{conv.timestamp}</span>
                  </div>
                  <p className="text-sm text-[#666] truncate">{conv.lastMessage}</p>
                  <p className="text-xs text-[#999] truncate">{conv.userTitle}</p>
                </div>
                {conv.unread > 0 && (
                  <div className="bg-[#00288e] text-white text-xs font-bold px-2 py-1 rounded-full">
                    {conv.unread}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        {selectedConversation && currentConversation ? (
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="bg-white border-b p-4 flex items-center gap-4">
              <button 
                onClick={() => setSelectedConversation(null)}
                className="md:hidden text-[#00288e]"
              >
                ← Back
              </button>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00288e] to-[#006a61] flex items-center justify-center text-lg">
                  {currentConversation.userAvatar}
                </div>
                {currentConversation.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="font-bold text-[#00288e]">{currentConversation.userName}</div>
                <div className="text-sm text-[#666]">{currentConversation.userTitle}</div>
              </div>
              <button className="p-2 hover:bg-[#f7f9fb] rounded-lg">
                📞
              </button>
              <button className="p-2 hover:bg-[#f7f9fb] rounded-lg">
                🎬
              </button>
              <button className="p-2 hover:bg-[#f7f9fb] rounded-lg">
                ⋮
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.senderId === "me" ? "justify-end" : "justify-start"}`}
                >
                  {msg.senderId !== "me" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00288e] to-[#006a61] flex items-center justify-center text-sm mr-2 flex-shrink-0">
                      {msg.senderAvatar}
                    </div>
                  )}
                  <div className={`max-w-[70%] ${
                    msg.senderId === "me" 
                      ? "bg-[#00288e] text-white rounded-2xl rounded-br-sm" 
                      : "bg-white border shadow-sm rounded-2xl rounded-bl-sm"
                  } p-3`}>
                    <p className="text-sm">{msg.content}</p>
                    {msg.hasAttachment && (
                      <div className={`mt-2 p-2 rounded-lg flex items-center gap-2 ${
                        msg.senderId === "me" ? "bg-[#0033a5]" : "bg-[#f7f9fb]"
                      }`}>
                        <span>📎</span>
                        <span className="text-sm underline">Investment_Thesis_2026.pdf</span>
                      </div>
                    )}
                    <div className={`text-xs mt-1 ${
                      msg.senderId === "me" ? "text-blue-200" : "text-[#999]"
                    }`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="bg-white border-t p-4">
              <div className="flex items-center gap-2 mb-2">
                <button className="p-2 hover:bg-[#f7f9fb] rounded-lg">📎</button>
                <button className="p-2 hover:bg-[#f7f9fb] rounded-lg">🖼️</button>
                <button className="p-2 hover:bg-[#f7f9fb] rounded-lg">📄</button>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 px-4 py-3 bg-[#f7f9fb] rounded-xl border-0 focus:ring-2 focus:ring-[#00288e] outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="bg-[#00288e] text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💬</div>
              <h2 className="text-xl font-bold text-[#00288e] mb-2">Select a conversation</h2>
              <p className="text-[#666]">Choose a conversation from the list to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </ResponsiveLayout>
  );
}
