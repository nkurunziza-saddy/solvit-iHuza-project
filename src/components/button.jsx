import React from "react";

export const Button = ({
  variant = "default",
  className,
  children,
  size = "md",
}) => {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-700 hover:bg-gray-100",
    link: "text-blue-600 underline hover:text-blue-700",
    danger: "bg-rose-600 text-white hover:bg-rose-700 shadow-sm",
    "danger-ghost": "text-rose-600 hover:bg-rose-50",
    success: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };

  return (
    <button
      className={`rounded-lg font-medium transition-colors ${
        variants[variant]
      } ${sizes[size]} ${className || ""}`}
    >
      {children}
    </button>
  );
};
