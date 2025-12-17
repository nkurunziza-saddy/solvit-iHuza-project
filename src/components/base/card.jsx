import { Button } from "./button";
import { cn } from "../../utils";

export const Card = ({ children, title, asideText, className }) => {
  return (
    <div
      className={cn(
        "border bg-background rounded-xl shadow-sm overflow-hidden min-w-0",
        className
      )}
    >
      <div className="border-b flex justify-between px-5 py-4 items-center">
        {title && <h4 className="font-semibold text-foreground">{title}</h4>}
        {asideText && (
          <span className="text-sm text-muted-foreground cursor-pointer font-medium hover:text-foreground transition-colors">
            {asideText}
          </span>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export const SimpleCard = ({ children, title, asideText, className }) => {
  return (
    <div
      className={cn(
        "border bg-background rounded-xl shadow-sm overflow-hidden min-w-0",
        className
      )}
    >
      <div className="flex justify-between px-5 py-4 items-center border-b">
        {title && <h4 className="font-semibold text-foreground">{title}</h4>}
        {asideText && <Button size="sm">{asideText}</Button>}
      </div>
      <div className="">{children}</div>
    </div>
  );
};
