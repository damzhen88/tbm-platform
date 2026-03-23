"use client";

import { useState } from "react";
import ResponsiveLayout from "@/layouts/ResponsiveLayout";
import { useRouter } from "next/navigation";

interface Match {
  id: string;
  name: string;
  type: "investor" | "business" | "partner";
  title: string;
  avatar: string;
  matchScore: number;
  reason: string;
  tags: string[];
  location: string;
  lastActive: string;
}

const mockMatches: Match[] = [
  {
    id: "1",
    name: "Vittaya Venture Partners",
    type: "investor",
    title: "VC - Series A Focus",
    avatar: "💼",
    matchScore: 95,
    reason: "Invests in your industry & stage",
    tags: ["Tech", "Series A", "THB 10-50M"],
    location: "Bangkok",
    lastActive: "Active now",
  },
  {
    id: "2",
    name: "Inno Capital",
    type: "investor",
    title: "Angel Network",
    avatar: "👼",
    matchScore: 88,
    reason: "Looking for SaaS companies",
    tags: ["SaaS", "Seed", "THB 5-15M"],
    location: "Bangkok",
    lastActive: "2 hours ago",
  },
  {
    id: "3",
    name: "TechServe Solutions",
    type: "partner",
    title: "Strategic Partner - Distribution",
    avatar: "🤝",
    matchScore: 82,
    reason: "Complementary customer base",
    tags: ["B2B", "Enterprise", "50M+ users"],
    location: "Chonburi",
    lastActive: "1 day ago",
  },
  {
    id: "4",
    name: "FoodDelivery Co.",
    type: "business",
    title: "Series B - Scaling",
    avatar: "🏢",
    matchScore: 78,
    reason: "Similar growth trajectory",
    tags: ["FoodTech", "Series B", "THB 100M+"],
    location: "Bangkok",
    lastActive: "3 days ago",
  },
  {
    id: "5",
    name: "Thai Angels Network",
    type: "investor",
    title: "Angel Syndicate",
    avatar: "👼",
    matchScore: 75,
    reason: "Active in food & beverage",
    tags: ["F&B", "Pre-Seed", "THB 1-5M"],
    location: "Bangkok",
    lastActive: "5 hours ago",
  },
];

export default function MatchesPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<"all" | "investor" | "business" | "partner">("all");
  const [sortBy, setSortBy] = useState<"score" | "recent">("score");

  const filteredMatches = mockMatches
    .filter(m => filter === "all" || m.type === filter)
    .sort((a, b) => sortBy === "score" ? b.matchScore - a.matchScore : 0);

  const getMatchColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 75) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "investor": return "💰";
      case "business": return "🏢";
      case "partner": return "🤝";
      default: return "👤";
    }
  };

  return (
    <ResponsiveLayout>
      <div className="min-h-screen bg-[#f7f9fb]">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#00288e] mb-2">AI Matches</h1>
            <p className="text-[#666]">
              Based on your profile and preferences, we found {filteredMatches.length} potential matches
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex gap-2 flex-wrap">
                {(["all", "investor", "business", "partner"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-lg font-semibold capitalize transition-colors ${
                      filter === f
                        ? "bg-[#00288e] text-white"
                        : "bg-[#f7f9fb] text-[#666] hover:bg-[#e8eef5]"
                    }`}
                  >
                    {f === "all" ? "All" : f === "investor" ? "Investors" : f === "business" ? "Businesses" : "Partners"}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#666]">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "score" | "recent")}
                  className="px-3 py-2 bg-[#f7f9fb] rounded-lg border-0 outline-none focus:ring-2 focus:ring-[#00288e]"
                >
                  <option value="score">Match Score</option>
                  <option value="recent">Recent Activity</option>
                </select>
              </div>
            </div>
          </div>

          {/* Match Cards */}
          <div className="space-y-4">
            {filteredMatches.map((match) => (
              <div
                key={match.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => router.push(`/profile/${match.id}`)}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Avatar & Score */}
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00288e] to-[#006a61] flex items-center justify-center text-3xl">
                        {match.avatar}
                      </div>
                      <div className={`absolute -top-2 -right-2 w-8 h-8 ${getMatchColor(match.matchScore)} text-white rounded-full flex items-center justify-center text-xs font-bold`}>
                        {match.matchScore}%
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-[#00288e]">{match.name}</h3>
                          <span className="text-xl">{getTypeIcon(match.type)}</span>
                        </div>
                        <p className="text-[#666]">{match.title}</p>
                      </div>
                      <span className="text-sm text-green-600 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {match.lastActive}
                      </span>
                    </div>

                    <p className="text-[#006a61] text-sm mb-3">
                      ✨ {match.reason}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {match.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-[#f7f9fb] text-[#666] rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/messages?user=${match.id}`);
                        }}
                        className="bg-[#00288e] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all text-sm"
                      >
                        Request Intro
                      </button>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="border border-[#00288e] text-[#00288e] px-4 py-2 rounded-lg font-semibold hover:bg-[#f7f9fb] transition-all text-sm"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredMatches.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#00288e] mb-2">No matches found</h3>
              <p className="text-[#666] mb-4">Try adjusting your filters or update your profile</p>
              <button className="bg-[#00288e] text-white px-6 py-3 rounded-lg font-bold">
                Update Preferences
              </button>
            </div>
          )}

          {/* Mobile FAB */}
          <div className="fixed bottom-6 right-6 md:hidden">
            <button className="w-14 h-14 bg-[#00288e] text-white rounded-full shadow-lg flex items-center justify-center text-2xl">
              🎯
            </button>
          </div>
        </div>
      </div>
    </ResponsiveLayout>
  );
}
