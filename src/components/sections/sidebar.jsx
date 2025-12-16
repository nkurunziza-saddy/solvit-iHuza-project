import { Book, BoxIcon, Computer, Layers, UserIcon } from "lucide-react";
import React from "react";
import { IconCard } from "../icon-card";

const PAGES = [
  {
    label: "Dashboard",
    icon: Computer,
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
    <div>
      <div className="flex gap-2 items-center">
        <IconCard icon={BoxIcon} variant="primary" />
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg">iHuza</h4>
          <span className="text-xs">Inventory</span>
        </div>
      </div>
      <nav className="mt-6">
        <ul className="flex flex-col gap-4">
          {PAGES.map((page, index) => (
            <li key={index} className="hover:bg-primary-100 p-2 rounded">
              {page.icon && (
                <page.icon className="inline text-primary-50 w-4 h-4 mr-2" />
              )}
              {page.label}
              {page.count && (
                <span className="ml-2 text-xs">({page.count})</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
