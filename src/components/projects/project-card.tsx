import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";

interface Project {
  name: string;
  chain: string;
  description: string;
  status: string;
}

const statusVariant: Record<string, "active" | "graduated" | "pipeline"> = {
  active: "active",
  graduated: "graduated",
  pipeline: "pipeline",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <span className="font-mono text-xs text-accent font-bold">
              {project.name.split(" ")[1]?.[0] || "P"}
            </span>
          </div>
          <div>
            <h3 className="font-heading text-sm font-medium">{project.name}</h3>
            <Badge variant="chain">{project.chain}</Badge>
          </div>
        </div>
        <Badge variant={statusVariant[project.status] || "default"}>
          {project.status}
        </Badge>
      </div>
      <p className="text-sm text-text-secondary flex-1">{project.description}</p>
    </GlassCard>
  );
}
