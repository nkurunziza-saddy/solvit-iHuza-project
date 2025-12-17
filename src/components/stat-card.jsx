import { IconCard } from "./icon-card";

export const StatCard = ({ value, label, icon: Icon, variant = "primary" }) => {
  const textStyles = {
    primary: "text-blue-700",
    purple: "text-purple-700",
    success: "text-emerald-700",
    warning: "text-amber-700",
    error: "text-rose-700",
    cyan: "text-cyan-700",
  };

  return (
    <div
      className={`px-5 py-6 bg-white border shadow-sm rounded-xl flex items-center gap-5 transition-all hover:shadow-md`}
    >
      <IconCard icon={Icon} variant={variant} size="lg" />
      <div className="flex flex-col gap-0.5">
        <h5 className={`text-2xl font-bold ${textStyles[variant]}`}>{value}</h5>
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
    </div>
  );
};
