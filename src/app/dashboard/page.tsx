import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DesktopSidebar from "@/components/dashboard/DesktopSidebar";
import Overview from "@/components/dashboard/Overview";

export default function DashboardRoute() {
  return (
    <>
      <DashboardHeader />
      <Overview />
      <DesktopSidebar />
    </>
  );
}
