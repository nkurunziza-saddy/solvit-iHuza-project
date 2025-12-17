import React from "react";

export const Badge = ({ variant = "default", text }) => {
  const variantClasses = {
    default: "bg-blue-100 text-blue-800",
    muted: "bg-muted text-muted-foreground",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div
      className={`px-2 py-1 w-fit rounded-full text-xs font-medium ${variantClasses[variant]}`}
    >
      {text}
    </div>
  );
};
