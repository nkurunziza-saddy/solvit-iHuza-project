import { Sidebar } from "./components/sections/sidebar";
import { Navbar } from "./components/sections/navbar";
import { CTA } from "./components/sections/cta";
import { RecentlyAddedProducts } from "./components/sections/recently-added-products";
import { Users } from "./components/sections/users";
import { RecentActivity } from "./components/sections/recent-activity";
import { QuickActions } from "./components/sections/quick-actions";
import { StatSection } from "./components/sections/stat-section";

function App() {
  return (
    <div className="flex">
      <div className="w-60 h-screen p-4 border-r">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col">
        <Navbar />
        <main className="bg-neutral-50 p-6 overflow-x-hidden flex flex-col gap-6">
          <CTA />
          <StatSection />
          <RecentlyAddedProducts />
          <Users />
          <div className="grid grid-cols-1 gap-4 items-start sm:grid-cols-2">
            <RecentActivity />
            <QuickActions />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
