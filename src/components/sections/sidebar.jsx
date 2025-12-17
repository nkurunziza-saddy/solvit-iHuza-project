import {
  Book,
  BoxIcon,
  Computer,
  Layers,
  UserIcon,
  LogOut,
  X,
} from "lucide-react";
import { IconCard } from "../icon-card";
import { cn } from "../../utils";

export const PAGES = [
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
    <div className="h-full flex flex-col">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <IconCard icon={BoxIcon} variant="primary-inverse" />
          <div className="flex flex-col">
            <h4 className="font-semibold text-lg">iHuza</h4>
            <span className="text-xs text-muted-foreground">Inventory</span>
          </div>
        </div>
      </div>
      <nav className="mt-6 flex-1 flex flex-col justify-between">
        <ul className="flex flex-col gap-2">
          {PAGES.map((page, index) => (
            <li
              key={index}
              className={cn(
                "p-2 cursor-pointer flex justify-between items-center rounded transition-colors",
                page.isActive
                  ? "bg-primaryColor-200/20 text-primaryColor-500"
                  : "hover:bg-primaryColor-100/20"
              )}
            >
              <div className="flex text-sm items-center gap-1">
                {page.icon && (
                  <page.icon
                    className={cn(
                      "inline size-3.5 mr-2 text-muted-foreground",
                      page.isActive && "text-primaryColor-500"
                    )}
                  />
                )}
                {page.label}
              </div>
              {page.count && (
                <div className="text-xs bg-muted text-muted-foreground rounded-full px-1.5 py-0.5">
                  {page.count}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <div className="cursor-pointer p-2 flex justify-between items-center rounded hover:bg-muted/60 transition-colors">
            <div className="flex text-sm items-center gap-1 text-muted-foreground">
              <LogOut className="inline size-3.5 mr-2" />
              Logout
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export function MobileSidebar({ open, setOpen }) {
  if (!open) return null;
  return (
    <div className="fixed sm:hidden top-0 right-0 left-0 w-dvw overflow-x-hidden z-40 h-screen bg-background p-4">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <IconCard icon={BoxIcon} variant="primary-inverse" />
          <div className="flex flex-col">
            <h4 className="font-semibold text-lg">iHuza</h4>
            <span className="text-xs text-muted-foreground">Inventory</span>
          </div>
        </div>
      </div>
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg"
        >
          <X className="size-4" />
        </button>
      )}
      <nav className="mt-6 h-[calc(100vh-6rem)] flex-1 flex flex-col justify-between">
        <ul className="flex flex-col gap-2">
          {PAGES.map((page, index) => (
            <li
              key={index}
              className={cn(
                "p-2 cursor-pointer flex justify-between items-center rounded transition-colors",
                page.isActive
                  ? "bg-primaryColor-200/20 text-primaryColor-500"
                  : "hover:bg-primaryColor-100/20"
              )}
            >
              <div className="flex text-sm items-center gap-1">
                {page.icon && (
                  <page.icon
                    className={cn(
                      "inline size-3.5 mr-2 text-muted-foreground",
                      page.isActive && "text-primaryColor-500"
                    )}
                  />
                )}
                {page.label}
              </div>
              {page.count && (
                <div className="text-xs bg-muted text-muted-foreground rounded-full px-1.5 py-0.5">
                  {page.count}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <div className="cursor-pointer p-2 flex justify-between items-center rounded hover:bg-muted/60 transition-colors">
            <div className="flex text-sm items-center gap-1 text-muted-foreground">
              <LogOut className="inline size-3.5 mr-2" />
              Logout
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
