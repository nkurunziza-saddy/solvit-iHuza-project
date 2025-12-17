import { Book, BoxIcon, Computer, Layers, UserIcon } from "lucide-react";
import React from "react";
import { IconCard } from "../icon-card";
import { Badge } from "../badge";

const PAGES = [
  {
    label: "Dashboard",
    icon: Computer,
    isActive: true,
  },
  {
    label: "Users",
    icon: UserIcon,
    count: 116,
  },
  {
    label: "Products",
    icon: BoxIcon,
    count: 100,
  },
  {
    label: "Assignments",
    icon: Book,
    count: 10,
  },
  {
    label: "Categories",
    icon: Layers,
  },
];

export const Sidebar = () => {
  return (
    <div className="h-full">
      <div className="flex gap-2 items-center">
        <IconCard icon={BoxIcon} variant="primary" />
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg">iHuza</h4>
          <span className="text-xs">Inventory</span>
        </div>
      </div>
      <nav className="mt-6">
        <ul className="flex flex-col gap-2">
          {PAGES.map((page, index) => (
            <li
              key={index}
              className={`p-2 flex justify-between rounded ${
                page.isActive ? "bg-primary-300" : "hover:bg-primary-100 "
              }`}
            >
              <div className="flex text-sm items-center gap-1">
                {page.icon && (
                  <page.icon className="inline text-primary-50 size-3.5 mr-2" />
                )}
                {page.label}
              </div>
              {page.count && <Badge text={page.count} variant="muted" />}
            </li>
          ))}
        </ul>
      </nav>
      {/* <div className="bg-red-500 mt-auto">ok</div> */}
    </div>
  );
};
