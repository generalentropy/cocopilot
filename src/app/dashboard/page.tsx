import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DesktopMenu from "@/components/dashboard/DesktopMenu";
import Overview from "@/components/dashboard/Overview";

export default function DashboardRoute() {
  return (
    <>
      <DashboardHeader />
      <Overview />
      <DesktopMenu />
    </>
  );
}
