import React from "react";
import { Badge } from "./badge";

export const ProductCard = ({ name, status, category, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm boorder p-4">
      <div className="flex justify-between items-center">
        <h5>{name}</h5>
        <Badge text={status} />
      </div>
      <div className="flex flex-col gap-0.5 text-gray-500">
        <p className="text-sm">{category}</p>
        <p className="text-xs ">{date}</p>
      </div>
    </div>
  );
};
