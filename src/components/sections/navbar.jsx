import { BellIcon, MoonIcon, SettingsIcon, UserIcon } from "lucide-react";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="w-full p-4 border-b flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <div className="text-xl font-bold">Dashboard</div>
        <span className="text-sm text-muted-foreground">
          Welcome back admin
        </span>
      </div>
      <div className="flex gap-7 items-center">
        <MoonIcon className="size-4.5" />
        <SettingsIcon className="size-4.5" />
        <div>
          <BellIcon className="size-4.5" />
        </div>
        <div className="flex gap-1 items-center ml-2">
          <span className="mr-2 text-sm">user@gmail.com</span>
          <div className="text-sm bg-blue-500 text-white rounded-full p-2 flex justify-center items-center">
            <UserIcon className="size-4 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};
