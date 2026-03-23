"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import ResponsiveLayout from "@/layouts/ResponsiveLayout";

// Mock profile data
const mockProfiles: Record<string, {
  type: "business" | "investor";
  name: string;
  tagline: string;
  description: string;
  industry: string[];
  stage: string;
  location: string;
  founded: string;
  employees: string;
  revenue?: string;
  valuation?: string;
  funding?: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  team: { name: string; role: string; image: string }[];
  documents: { name: string; type: string }[];
  connections: number;
  verified: boolean;
}> = {
  "1": {
    type: "business",
    name: "ThaiFoodTech Co.",
    tagline: "AI-Powered Restaurant Management Platform",
    description: "We are a leading food tech company revolutionizing how Thai restaurants operate. Our AI-powered platform helps 500+ restaurants across Thailand automate their operations, reduce waste, and increase profitability. Founded by ex-Grab and Line executives, we have strong connections in the Thai F&B ecosystem.",
    industry: ["Technology", "Food & Beverage", "AI/ML"],
    stage: "Series A",
    location: "Bangkok, Thailand",
    founded: "2022",
    employees: "25",
    revenue: "THB 15M ARR",
    valuation: "THB 150M",
    funding: "THB 20M (Seed)",
    tags: ["AI", "SaaS", "B2B", "FoodTech"],
    metrics: [
      { label: "Monthly Revenue", value: "THB 1.2M" },
      { label: "Growth (MoM)", value: "15%" },
      { label: "Customers", value: "500+" },
      { label: "NPS Score", value: "72" },
    ],
    team: [
      { name: "Somchai S.", role: "CEO & Co-founder", image: "👨‍💼" },
      { name: "Siriporn T.", role: "CTO & Co-founder", image: "👩‍💻" },
      { name: "Krit N.", role: "VP Sales", image: "👨‍💼" },
    ],
    documents: [
      { name: "Pitch Deck 2026.pdf", type: "PDF" },
      { name: "Financial Statements Q4.pdf", type: "PDF" },
      { name: "Product Demo.mp4", type: "VIDEO" },
    ],
    connections: 45,
    verified: true,
  },
  "2": {
    type: "investor",
    name: "Vittaya Venture Partners",
    tagline: "Early-Stage VC Focused on Thai Tech",
    description: "We are a Bangkok-based venture capital firm investing in early-stage technology companies across Southeast Asia. With over 10 years of experience and THB 500M AUM, we help founders scale their businesses in the Thai market and beyond.",
    industry: ["Technology", "FinTech", "E-commerce", "HealthTech"],
    stage: "Seed - Series A",
    location: "Bangkok, Thailand",
    founded: "2015",
    employees: "8",
    tags: ["VC", "Active Investor", "Thesis-driven"],
    metrics: [
      { label: "AUM", value: "THB 500M" },
      { label: "Portfolio Size", value: "25 companies" },
      { label: "Avg Check Size", value: "THB 5-20M" },
      { label: "Exit IRR", value: "35%" },
    ],
    team: [
      { name: "Dr. Prasert S.", role: "Managing Partner", image: "👨‍💼" },
      { name: "Pimon L.", role: "Principal", image: "👩‍💼" },
    ],
    documents: [
      { name: "Investment Thesis 2026.pdf", type: "PDF" },
      { name: "Portfolio Overview.pdf", type: "PDF" },
    ],
    connections: 120,
    verified: true,
  },
};

export default function ProfilePage() {
  const params = useParams();
  const id = params.id as string;
  const profile = mockProfiles[id] || mockProfiles["1"];
  const [activeTab, setActiveTab] = useState<"overview" | "team" | "documents" | "metrics">("overview");

  return (
    <ResponsiveLayout>
      <div className="min-h-screen bg-[#f7f9fb]">
        {/* Header Banner */}
        <div className="h-48 md:h-64 bg-gradient-to-r from-[#00288e] to-[#006a61]"></div>

        <div className="max-w-5xl mx-auto px-4 -mt-20">
          {/* Profile Header Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-[#00288e] to-[#006a61] flex items-center justify-center text-4xl md:text-5xl text-white font-bold">
                {profile.type === "business" ? "🏢" : "💼"}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-[#00288e]">{profile.name}</h1>
                  {profile.verified && (
                    <span className="bg-[#86f2e4] text-[#006a61] px-2 py-1 rounded-full text-xs font-bold">✓ VERIFIED</span>
                  )}
                </div>
                <p className="text-lg text-[#444653] mb-4">{profile.tagline}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {profile.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#f0f4f8] text-[#444653] rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-[#666]">
                  <span className="flex items-center gap-1">📍 {profile.location}</span>
                  <span className="flex items-center gap-1">🏢 {profile.industry.join(", ")}</span>
                  <span className="flex items-center gap-1">📅 Founded {profile.founded}</span>
                  <span className="flex items-center gap-1">👥 {profile.employees} employees</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <button className="bg-[#00288e] text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-all">
                  Request Intro
                </button>
                <button className="border-2 border-[#00288e] text-[#00288e] px-6 py-3 rounded-lg font-bold hover:bg-[#00288e] hover:text-white transition-all">
                  Save Profile
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {profile.metrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl font-bold text-[#00288e]">{metric.value}</div>
                <div className="text-sm text-[#666]">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            <div className="flex border-b overflow-x-auto">
              {(["overview", "team", "documents", "metrics"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-semibold capitalize transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-[#00288e] text-white"
                      : "text-[#666] hover:bg-[#f7f9fb]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6 md:p-8">
              {activeTab === "overview" && (
                <div>
                  <h3 className="text-xl font-bold text-[#00288e] mb-4">About</h3>
                  <p className="text-[#444653] leading-relaxed mb-6">{profile.description}</p>
                  
                  {profile.type === "business" && (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-[#f7f9fb] p-4 rounded-xl">
                        <div className="text-sm text-[#666] mb-1">Valuation</div>
                        <div className="text-xl font-bold text-[#00288e]">{profile.valuation}</div>
                      </div>
                      <div className="bg-[#f7f9fb] p-4 rounded-xl">
                        <div className="text-sm text-[#666] mb-1">Funding Raised</div>
                        <div className="text-xl font-bold text-[#006a61]">{profile.funding}</div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "team" && (
                <div>
                  <h3 className="text-xl font-bold text-[#00288e] mb-4">Team Members</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {profile.team.map((member) => (
                      <div key={member.name} className="bg-[#f7f9fb] p-4 rounded-xl text-center">
                        <div className="text-4xl mb-2">{member.image}</div>
                        <div className="font-bold text-[#00288e]">{member.name}</div>
                        <div className="text-sm text-[#666]">{member.role}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "documents" && (
                <div>
                  <h3 className="text-xl font-bold text-[#00288e] mb-4">Documents</h3>
                  <div className="space-y-3">
                    {profile.documents.map((doc) => (
                      <div key={doc.name} className="flex items-center justify-between bg-[#f7f9fb] p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {doc.type === "PDF" ? "📄" : "🎬"}
                          </span>
                          <div>
                            <div className="font-semibold text-[#00288e]">{doc.name}</div>
                            <div className="text-sm text-[#666]">{doc.type}</div>
                          </div>
                        </div>
                        <button className="text-[#006a61] font-semibold hover:underline">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "metrics" && (
                <div>
                  <h3 className="text-xl font-bold text-[#00288e] mb-4">Performance Metrics</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {profile.metrics.map((metric) => (
                      <div key={metric.label} className="bg-[#f7f9fb] p-4 rounded-xl">
                        <div className="text-sm text-[#666] mb-1">{metric.label}</div>
                        <div className="text-2xl font-bold text-[#00288e]">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
            <div className="flex justify-around p-3">
              <button className="flex flex-col items-center gap-1 text-[#666]">
                <span>📨</span>
                <span className="text-xs">Message</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-[#00288e]">
                <span>💾</span>
                <span className="text-xs">Save</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-[#666]">
                <span>📤</span>
                <span className="text-xs">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
}
