import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function checkQuantityStatus(quantity) {
  if (quantity <= 0) return "Out of Stock";
  else if (quantity <= 10) return "Low Stock";
  else if (quantity > 10) return "In Stock";
  else return "Unrecognized";
}
