import { BoxIcon, Layers, AlertTriangleIcon, UserIcon } from "lucide-react";
import { StatCard } from "../stat-card";
import { useData } from "../../contexts/data-context";

export const StatSection = () => {
  const { getStats } = useData();
  const stats = getStats();

  const statItems = [
    {
      label: "Total Users",
      value: String(stats.totalUsers),
      icon: UserIcon,
      variant: "primary",
    },
    {
      label: "Total Products",
      value: String(stats.totalProducts),
      icon: BoxIcon,
      variant: "primary",
    },
    {
      label: "Categories",
      value: String(stats.totalCategories),
      icon: Layers,
      variant: "accent",
    },
    {
      label: "Low Stock Alert",
      value: String(stats.lowStockProducts),
      icon: AlertTriangleIcon,
      variant: "warning",
    },
  ];

  return (
    <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {statItems.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
};
