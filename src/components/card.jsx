import React from "react";
import { Button } from "./button";

export const Card = ({ children, title, asideText }) => {
  return (
    <div className="border bg-white rounded-lg shadow-sm">
      <div className="border-b flex justify-between p-4 items-center">
        {title && <h4 className="font-semibold">{title}</h4>}
        {asideText && (
          <span className="text-sm text-gray-500">{asideText}</span>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export const SimpleCard = ({ children, title, asideText }) => {
  return (
    <div className="border bg-white border-gray-200 rounded-lg shadow-sm">
      <div className="flex justify-between p-4 items-center">
        {title && <h4 className="font-semibold">{title}</h4>}
        {asideText && <Button>{asideText}</Button>}
      </div>
      <div className="">{children}</div>
    </div>
  );
};
