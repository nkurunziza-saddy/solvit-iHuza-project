import React from "react";

export const Badge = ({ variant = "default", text }) => {
  const variantClasses = {
    default: "bg-blue-100 text-blue-700",
    primary: "bg-blue-100 text-blue-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    error: "bg-rose-100 text-rose-700",
    purple: "bg-purple-100 text-purple-700",
    cyan: "bg-cyan-100 text-cyan-700",
    // Role-based badges
    Admin: "bg-purple-100 text-purple-700",
    Manager: "bg-blue-100 text-blue-700",
    Staff: "bg-gray-100 text-gray-700",
    // Status-based badges
    Active: "bg-emerald-100 text-emerald-700",
    Inactive: "bg-gray-100 text-gray-500",
    // Stock status badges
    "In Stock": "bg-emerald-100 text-emerald-700",
    "Low Stock": "bg-amber-100 text-amber-700",
    "Out of Stock": "bg-rose-100 text-rose-700",
  };

  const badgeClass =
    variantClasses[text] || variantClasses[variant] || variantClasses.default;

  return (
    <div
      className={`px-2.5 py-1 w-fit rounded-full text-xs font-medium ${badgeClass}`}
    >
      {text}
    </div>
  );
};
