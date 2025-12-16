import React from "react";

export const Button = ({
  variant = "default",
  className,
  children,
  size = "md",
}) => {
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-blue-500 text-blue-500 hover:bg-blue-50",
    ghost: "text-blue-500 hover:bg-blue-50",
    link: "text-blue-500 underline hover:text-blue-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    "danger-ghost": "text-red-500 hover:bg-red-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };
  return (
    <button
      className={`rounded-lg ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};
