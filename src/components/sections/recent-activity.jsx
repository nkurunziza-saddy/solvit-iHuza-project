import React from "react";
import { Card } from "../card";
import { BoxIcon, InfoIcon, UserIcon } from "lucide-react";
import { IconCard } from "../icon-card";

const ACTIVITIES = [
  {
    label: "Product added to inventory",
    details: "MacBook Pro 16 M3 (PROD2024001)",
    date: "Dec 4, 2024",
    icon: BoxIcon,
    statusType: "primary",
  },
  {
    label: "Product assigned to Sarah Johnson",
    details: "Dell ThinkPad X1 Carbon (PROD2024001)",
    date: "Dec 3, 2024",
    icon: BoxIcon,
    statusType: "primary",
  },
  {
    label: "Product assigned to Michael Brown",
    details: "Apple MacBook Air M2 (PROD2024001)",
    date: "Dec 2, 2024",
    icon: BoxIcon,
    statusType: "primary",
  },
  {
    label: "Product sent for maintenance",
    details: "HP Spectre x360 Screen replacement required",
    date: "Jan 16, 2024",
    icon: InfoIcon,
    statusType: "warning",
  },
  {
    label: "New user registered",
    details: "Amanda White Staff Member",
    date: "Jan 14, 2024",
    icon: UserIcon,
    statusType: "success",
  },
];

export const RecentActivity = () => {
  return (
    <Card title={"Recent activities"} asideText={"View all"}>
      {ACTIVITIES.map((activity, index) => (
        <div key={index} className="py-2 flex gap-4 items-start">
          <IconCard icon={activity.icon} variant={activity.statusType} />
          <div className="flex flex-col gap-1">
            <h5 className="font-medium">{activity.label}</h5>
            <p className="text-sm text-gray-600">{activity.details}</p>
            <span className="mt-1 text-gray-400 text-xs">{activity.date}</span>
          </div>
        </div>
      ))}
    </Card>
  );
};
