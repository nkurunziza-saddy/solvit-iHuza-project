import { cn } from "../utils";
import { IconCard } from "./icon-card";

export const StatCard = ({
  value,
  label,
  icon: Icon,
  variant = "primary",
  className,
}) => {
  return (
    <div
      className={cn(
        "px-5 py-6 bg-background border shadow-sm rounded-xl flex items-center gap-5 transition-all hover:shadow-md",
        className
      )}
    >
      <IconCard icon={Icon} variant={variant} size="lg" />
      <div className="flex flex-col gap-0.5">
        <h5 className={`text-2xl font-bold`}>{value}</h5>
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
    </div>
  );
};
