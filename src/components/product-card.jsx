import { Badge } from "./base/badge";
import { cn } from "../utils";

export const ProductCard = ({ name, status, category, date, className }) => {
  return (
    <div
      className={cn(
        "bg-background rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow",
        className
      )}
    >
      <div className="flex justify-between items-start mb-1">
        <h5 className="font-medium text-foreground text-sm">{name}</h5>
        <Badge text={status} />
      </div>
      <div className="flex flex-col text-muted-foreground">
        <p className="text-sm">{category}</p>
        <p className="text-xs mt-1 text-muted-foreground/85">{date}</p>
      </div>
    </div>
  );
};
