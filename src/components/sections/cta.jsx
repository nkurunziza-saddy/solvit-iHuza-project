import { Check, CheckCircle, CheckCircle2, Layout } from "lucide-react";
import React from "react";
import { IconCard } from "../icon-card";

export const CTA = () => {
  return (
    <div className="p-8 rounded-2xl bg-blue-700 flex items-start gap-4">
      <IconCard
        icon={Layout}
        variant="primary"
        className={"text-white bg-blue-500"}
        size="lg"
      />
      <div className="flex flex-col gap-0.5">
        <h5 className="text-xl text-white">
          iHUZA INVENTORY - System Overview
        </h5>
        <span className="text-xs text-white/80">
          Monitor your iHUZA inventory and product assignments in real-time.
        </span>
        <div className="text-sm mt-5 text-white flex items-center gap-2">
          <CheckCircle className="inline size-5 mr-1 text-green-500" />
          All system operational
        </div>
      </div>
    </div>
  );
};
