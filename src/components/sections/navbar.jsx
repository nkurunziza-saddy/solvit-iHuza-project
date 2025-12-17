import {
  BellIcon,
  MenuIcon,
  MoonIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { cn } from "../../utils";
import { MobileSidebar } from "./sidebar";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full p-4 border-b flex justify-between items-center bg-background">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 hover:bg-muted rounded-lg"
        >
          <MenuIcon className="size-5" />
        </button>
        <MobileSidebar open={open} setOpen={setOpen} />
        <div className="flex flex-col gap-0.5">
          <div className="text-lg md:text-xl font-bold">Dashboard</div>
          <span className="text-xs md:text-sm text-muted-foreground hidden sm:block">
            Welcome back admin
          </span>
        </div>
      </div>
      <div className="flex gap-4 md:gap-7 items-center">
        <MoonIcon className="size-4 md:size-4.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors" />
        <SettingsIcon className="size-4 md:size-4.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors hidden sm:block" />
        <div className="relative">
          <BellIcon className="size-4 md:size-4.5 cursor-pointer text-muted-foreground hover:text-foreground transition-colors" />
          <span className="absolute -top-1 -right-1 size-2 bg-destructive rounded-full"></span>
        </div>
        <div className="flex gap-1 items-center ml-2">
          <span className="mr-2 text-sm hidden lg:block">user@gmail.com</span>
          <div className="text-sm bg-primaryColor-500 text-background rounded-full p-2 flex justify-center items-center">
            <UserIcon className="size-4" />
          </div>
        </div>
      </div>
    </nav>
  );
};
