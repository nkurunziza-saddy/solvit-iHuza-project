import { Card } from "../base/card";
import { BoxIcon, AlertTriangleIcon, UserPlusIcon } from "lucide-react";
import { IconCard } from "../icon-card";
import { cn } from "../../utils";

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
    statusType: "success",
  },
  {
    label: "Product assigned to Michael Brown",
    details: "Apple MacBook Air M2 (PROD2024001)",
    date: "Dec 2, 2024",
    icon: BoxIcon,
    statusType: "success",
  },
  {
    label: "Product sent for maintenance",
    details: "HP Spectre x360 Screen replacement required",
    date: "Jan 16, 2024",
    icon: AlertTriangleIcon,
    statusType: "warning",
  },
  {
    label: "New user registered",
    details: "Amanda White Staff Member",
    date: "Jan 14, 2024",
    icon: UserPlusIcon,
    statusType: "primary",
  },
];

export const RecentActivity = () => {
  return (
    <Card title={"Recent Activities"} asideText={"View all"}>
      <div className="flex flex-col gap-1">
        {ACTIVITIES.map((activity, index) => (
          <div
            key={index}
            className={cn(
              "py-3 flex gap-4 items-start rounded-lg px-2 transition-colors",
              "hover:bg-muted/60"
            )}
          >
            <IconCard icon={activity.icon} variant={activity.statusType} />
            <div className="flex flex-col gap-1 flex-1">
              <h5 className="font-medium text-foreground">{activity.label}</h5>
              <p className="text-sm text-muted-foreground">
                {activity.details}
              </p>
              <span className="mt-1 text-muted-foreground/90 text-xs">
                {activity.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
