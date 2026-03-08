import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "active" | "graduated" | "pipeline" | "chain";

const variants: Record<BadgeVariant, string> = {
  default: "bg-surface border-white/10 text-text-secondary",
  active: "bg-status-active/10 border-status-active/20 text-status-active",
  graduated: "bg-accent/10 border-accent/20 text-accent",
  pipeline: "bg-status-pipeline/10 border-status-pipeline/20 text-status-pipeline",
  chain: "bg-surface border-white/10 text-text-secondary font-mono",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
