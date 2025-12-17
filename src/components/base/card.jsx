import { cva } from "class-variance-authority";
import { Button } from "./button";
import { cn } from "../../utils";

const cardVariants = cva(
  "border bg-background rounded-xl shadow-sm overflow-hidden min-w-0",
  {
    variants: {
      variant: {
        default: "",
        elevated: "shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const Card = ({ children, title, asideText, variant, className }) => {
  return (
    <div className={cn(cardVariants({ variant, className }))}>
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

export const SimpleCard = ({
  children,
  title,
  asideText,
  variant,
  className,
}) => {
  return (
    <div className={cn(cardVariants({ variant, className }))}>
      <div className="flex justify-between px-5 py-4 items-center border-b">
        {title && <h4 className="font-semibold text-foreground">{title}</h4>}
        {asideText && <Button size="sm">{asideText}</Button>}
      </div>
      <div className="">{children}</div>
    </div>
  );
};
