import React from "react";
import { Card } from "../card";
import { Button } from "../button";
import { User, Users } from "lucide-react";
import { IconCard } from "../icon-card";

const QUICK_ACTIONS = [
  {
    label: "View Users",
    details: "View all registered users",
    icon: Users,
  },
  {
    label: "View Products",
    details: "View all registered products",
    icon: Users,
  },
  {
    label: "View Assignments",
    details: "View all product assignments",
    icon: Users,
  },
];
export const QuickActions = () => {
  return (
    <Card title={"Recent activities"} asideText={"View all"}>
      {QUICK_ACTIONS.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <div key={index} className="py-2 flex gap-4 items-center">
            <IconCard icon={item.icon} variant="primary" type="outline" />
            <div className="flex flex-col gap-1">
              <h5 className="font-medium">{item.label}</h5>
              <p className="text-sm text-gray-600">{item.details}</p>
            </div>
          </div>
          <Button variant="secondary" size="sm">
            Go
          </Button>
        </div>
      ))}
    </Card>
  );
};
