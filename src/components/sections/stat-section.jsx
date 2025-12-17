import { BoxIcon, CheckIcon, AlertCircleIcon, UserIcon } from "lucide-react";
import { StatCard } from "../stat-card";

const STATS = [
  {
    label: "Total Users",
    value: "116",
    icon: UserIcon,
    variant: "primary",
  },
  {
    label: "Total Products",
    value: "89",
    icon: BoxIcon,
    variant: "primary",
  },
  {
    label: "Assigned Products",
    value: "76",
    icon: CheckIcon,
    variant: "success",
  },
  {
    label: "Unassigned Products",
    value: "13",
    icon: AlertCircleIcon,
    variant: "warning",
  },
];

export const StatSection = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};
