import { cva } from "class-variance-authority";
import { cn } from "../../utils";

const badgeVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center gap-1 rounded-full border border-transparent font-medium whitespace-nowrap transition-shadow px-2.5 py-1 text-xs",
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
        primary: "bg-primaryColor-100 text-primaryColor-700",
        accent: "bg-accent-100 text-accent-700",
        success: "bg-success/8 text-success-foreground",
        warning: "bg-warning/8 text-warning-foreground",
        error: "bg-destructive/8 text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const textToVariant = {
  Admin: "accent",
  Manager: "primary",
  Staff: "default",
  Active: "success",
  Inactive: "error",
  "In Stock": "success",
  "Low Stock": "warning",
  "Out of Stock": "error",
};

export const Badge = ({ variant = "default", text, className }) => {
  const resolvedVariant = textToVariant[text] || variant;

  return (
    <div className={cn(badgeVariants({ variant: resolvedVariant, className }))}>
      {text}
    </div>
  );
};
