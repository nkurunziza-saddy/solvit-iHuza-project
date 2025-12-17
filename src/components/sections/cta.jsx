import { CheckCircle, Layout } from "lucide-react";
import React from "react";
import { IconCard } from "../icon-card";

export const CTA = () => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 flex items-start gap-4 shadow-lg shadow-blue-500/20">
      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
        <Layout className="size-6 text-white" />
      </div>
      <div className="flex flex-col gap-1">
        <h5 className="text-xl font-semibold text-white">
          iHUZA INVENTORY - System Overview
        </h5>
        <span className="text-sm text-white/80">
          Monitor your iHUZA inventory and product assignments in real-time.
        </span>
        <div className="text-sm mt-4 text-white flex items-center gap-2 px-3 py-1.5 w-fit">
          <CheckCircle className="inline size-4 text-emerald-400" />
          <span>All systems operational</span>
        </div>
      </div>
    </div>
  );
};
