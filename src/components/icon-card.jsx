import React from "react";

export const IconCard = ({
  icon: Icon,
  variant = "default",
  size = "md",
  type = "filled",
  className,
}) => {
  const variants = {
    default: "bg-gray-100 text-gray-700",
    primary: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    secondary: "bg-purple-100 text-purple-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    error: "bg-rose-100 text-rose-700",
    cyan: "bg-cyan-100 text-cyan-700",
    ghost: "bg-transparent text-gray-600",
  };
  const sizes = {
    sm: "size-6",
    md: "size-8",
    lg: "size-10",
  };
  const types = {
    outline: "border-none bg-transparent",
    filled: "",
  };
  return (
    <div
      className={`flex rounded-lg justify-center items-center p-2 ${variants[variant]} ${sizes[size]} ${types[type]} ${className}`}
    >
      <Icon className="size-4" />
    </div>
  );
};
