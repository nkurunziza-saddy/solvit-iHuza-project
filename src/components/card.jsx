import React from "react";
import { Button } from "./button";

export const Card = ({ children, title, asideText }) => {
  return (
    <div className="border bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="border-b flex justify-between px-5 py-4 items-center">
        {title && <h4 className="font-semibold text-gray-900">{title}</h4>}
        {asideText && (
          <span className="text-sm text-muted-foreground cursor-pointer font-medium">
            {asideText}
          </span>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

export const SimpleCard = ({ children, title, asideText }) => {
  return (
    <div className="border bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex justify-between px-5 py-4 items-center border-b">
        {title && <h4 className="font-semibold text-gray-900">{title}</h4>}
        {asideText && <Button size="sm">{asideText}</Button>}
      </div>
      <div className="">{children}</div>
    </div>
  );
};
