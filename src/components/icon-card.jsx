import { cva } from "class-variance-authority";
import { cn } from "../utils";

const iconCardVariants = cva("flex rounded-lg justify-center items-center", {
  variants: {
    variant: {
      default: "bg-muted text-muted-foreground",
      primary: "bg-primaryColor-50 text-primaryColor-600",
      success: "bg-success/16 text-success-foreground",
      warning: "bg-warning/16 text-warning-foreground",
      error: "bg-destructive/16 text-destructive-foreground",
      ghost: "bg-transparent text-muted-foreground",
      "primary-inverse": "bg-primaryColor-500 text-background",
    },
    size: {
      sm: "size-6 p-1",
      md: "size-8 p-1.5",
      lg: "size-10 p-2",
    },
    type: {
      filled: "",
      outline: "border-none bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    type: "filled",
  },
});

const iconSizeMap = {
  sm: "size-3",
  md: "size-4",
  lg: "size-5",
};

export const IconCard = ({
  icon: Icon,
  variant,
  size = "md",
  type,
  className,
}) => {
  return (
    <div className={cn(iconCardVariants({ variant, size, type, className }))}>
      <Icon className={iconSizeMap[size]} />
    </div>
  );
};

export { iconCardVariants };
