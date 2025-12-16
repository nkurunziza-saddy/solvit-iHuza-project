import { BoxIcon, Computer } from "lucide-react";
import React from "react";
import { IconCard } from "../icon-card";

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
          <li className="hover:bg-primary-100 p-2 rounded">
            <Computer className="inline text-primary-50 w-4 h-4 mr-2" />
            Dashboard
          </li>
        </ul>
      </nav>
    </div>
  );
};
