import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as BaseToaster } from "sonner";
import { useTheme } from "../../contexts/theme-context";

const Toaster = ({ ...props }) => {
  const { theme = "light" } = useTheme();

  return (
    <BaseToaster
      theme={theme}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={{
        "--normal-bg": "var(--color-card)",
        "--normal-text": "var(--color-foreground)",
        "--normal-border": "var(--color-border)",
        "--success-bg": "var(--color-success)",
        "--success-text": "var(--color-success-foreground)",
        "--success-border": "var(--color-success)",
        "--error-bg": "var(--color-destructive)",
        "--error-text": "var(--color-destructive-foreground)",
        "--error-border": "var(--color-destructive)",
        "--warning-bg": "var(--color-warning)",
        "--warning-text": "var(--color-warning-foreground)",
        "--warning-border": "var(--color-warning)",
        "--border-radius": "0.75rem",
      }}
      {...props}
    />
  );
};

export { Toaster };
