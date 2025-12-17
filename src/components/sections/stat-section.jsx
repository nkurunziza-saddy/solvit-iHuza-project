import { BoxIcon, CheckIcon, InfoIcon, UserIcon } from "lucide-react";
import React from "react";
import { StatCard } from "../stat-card";

const STATS = [
  {
    label: "Total Users",
    value: "116",
    icon: UserIcon,
  },
  {
    label: "Total Products",
    value: "100",
    icon: BoxIcon,
  },
  {
    label: "Assigned Products",
    value: "10",
    icon: CheckIcon,
  },
  {
    label: "Unassigned Products",
    value: "90",
    icon: InfoIcon,
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
