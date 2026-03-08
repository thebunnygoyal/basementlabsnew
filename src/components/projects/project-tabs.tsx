"use client";

import { useState } from "react";
import { ProjectGrid } from "./project-grid";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "active", label: "Active" },
  { id: "graduated", label: "Graduated" },
  { id: "pipeline", label: "Pipeline" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ProjectTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("active");

  const filtered = FEATURED_PROJECTS.filter((p) => p.status === activeTab);

  return (
    <div>
      {/* Tab bar */}
      <div className="flex items-center justify-center gap-1 mb-8 p-1 rounded-lg bg-surface/50 border border-white/[0.06] w-fit mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-5 py-2 rounded-md text-sm font-medium transition-all duration-150",
              activeTab === tab.id
                ? "bg-accent text-white shadow-sm"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <ProjectGrid projects={filtered} />
      ) : (
        <div className="text-center py-16">
          <p className="text-text-secondary">
            {activeTab === "pipeline"
              ? "New projects are being scouted. Check back soon."
              : "No projects in this category yet."}
          </p>
        </div>
      )}
    </div>
  );
}
