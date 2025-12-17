import React from "react";
import { Badge } from "./badge";
import { BoxIcon } from "lucide-react";

export const ProductCard = ({ name, status, category, date }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow`}
    >
      <div className="flex justify-between items-start mb-1">
        <h5 className="font-medium text-gray-900 text-sm">{name}</h5>

        <Badge text={status} />
      </div>
      <div className="flex flex-col text-gray-500">
        <p className="text-sm">{category}</p>
        <p className="text-xs mt-0.5">{date}</p>
      </div>
    </div>
  );
};
