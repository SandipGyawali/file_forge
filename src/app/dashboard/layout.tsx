import { Header } from "@/components/ui/header";
import SideBarLeft from "@/components/ui/sidebar/sidebar-left";
import SidebarRight from "@/components/ui/sidebar/sidebar-right";
import { ReactNode } from "react";

// px-6 lg:px-24
function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dashboard-container flex flex-row justify-between w-full">
      <SideBarLeft />
      <div className="dashboard-wrapper w-full">
        <Header />
        {children}
      </div>
      <SidebarRight />
    </div>
  );
}

export default DashboardLayout;
