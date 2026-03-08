import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6",
        hover && "transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:border-white/10",
        className
      )}
    >
      {children}
    </div>
  );
}
