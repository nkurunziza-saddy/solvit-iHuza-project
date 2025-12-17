import React from "react";
import { Card } from "../card";
import { Button } from "../button";
import { Users, Package, ClipboardCheck } from "lucide-react";
import { IconCard } from "../icon-card";

const QUICK_ACTIONS = [
  {
    label: "View Users",
    details: "View all registered users",
    icon: Users,
    variant: "primary",
  },
  {
    label: "View Products",
    details: "View all registered products",
    icon: Package,
    variant: "purple",
  },
  {
    label: "View Assignments",
    details: "View all product assignments",
    icon: ClipboardCheck,
    variant: "success",
  },
];

export const QuickActions = () => {
  const bgVariant = {
    primary: "bg-blue-50 text-blue-700",
    purple: "bg-purple-50 text-purple-700",
    success: "bg-emerald-50 text-emerald-700",
  };
  return (
    <Card title={"Quick Actions"} asideText={"View all"}>
      <div className="flex flex-col gap-2">
        {QUICK_ACTIONS.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              bgVariant[item.variant]
            } justify-between items-center p-2 rounded-lg hover:bg-muted/60 transition-colors`}
          >
            <div className="flex gap-4 items-center">
              <IconCard icon={item.icon} variant={item.variant} />
              <div className="flex flex-col gap-0.5">
                <h5 className="font-medium text-gray-900">{item.label}</h5>
                <p className="text-sm text-muted-foreground">{item.details}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className={`${bgVariant[item.variant]}`}
            >
              Go
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
