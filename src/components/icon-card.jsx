import React from "react";

export const IconCard = ({
  icon: Icon,
  variant = "default",
  size = "md",
  type = "filled",
  className,
}) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-purple-100 text-purple-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
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
