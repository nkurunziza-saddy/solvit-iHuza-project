import { IconCard } from "./icon-card";

export const StatCard = ({ value, label, icon: Icon }) => {
  return (
    <div className="px-4.5 border py-6 bg-white shadow-sm rounded-lg flex items-center gap-5">
      <IconCard icon={Icon} variant="primary" size="lg" />
      <div className="flex flex-col gap-0.5">
        <h5 className="text-2xl font-semibold">{value}</h5>
        <span className="text-xs">{label}</span>
      </div>
    </div>
  );
};
