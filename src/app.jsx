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
    <div className="flex min-h-screen w-full">
      <aside className="hidden md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 border-r bg-background z-40">
        <div className="flex-1 p-4 overflow-y-auto">
          <Sidebar />
        </div>
      </aside>

      <div className="flex-1 flex flex-col w-full md:pl-60">
        <header className="sticky top-0 z-30 bg-background">
          <Navbar />
        </header>

        <main className="flex-1 bg-muted/50 p-4 md:p-6 flex flex-col gap-6 w-full">
          <CTA />
          <StatSection />
          <RecentlyAddedProducts />
          <Users />
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-2">
            <RecentActivity />
            <QuickActions />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
