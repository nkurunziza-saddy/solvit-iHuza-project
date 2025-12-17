import { Card } from "../base/card";
import { Button } from "../base/button";
import { Users, Package, ClipboardCheck } from "lucide-react";
import { IconCard } from "../icon-card";
import { cn } from "../../utils";

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
    variant: "primary",
  },
  {
    label: "View Assignments",
    details: "View all product assignments",
    icon: ClipboardCheck,
    variant: "success",
  },
];

const bgVariant = {
  primary: "bg-primaryColor-50",
  success: "bg-success/8",
};

export const QuickActions = ({ children }) => {
  return (
    <Card title={"Quick Actions"} asideText={"View all"}>
      <div className="flex flex-col gap-2">
        {QUICK_ACTIONS.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex justify-between items-center p-2 rounded-lg transition-colors",
              bgVariant[item.variant]
            )}
          >
            <div className="flex gap-4 items-center">
              <IconCard
                icon={item.icon}
                variant={item.variant}
                className="bg-transparent"
              />
              <div className="flex flex-col gap-0.5">
                <h5 className="font-medium text-foreground">{item.label}</h5>
                <p className="text-sm text-muted-foreground">{item.details}</p>
              </div>
            </div>
            <Button variant="default" size="sm" className="py-1">
              Go
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
