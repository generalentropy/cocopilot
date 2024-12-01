import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DesktopMenu from "@/components/dashboard/DesktopMenu";
import Overview from "@/components/dashboard/Overview";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function DashboardRoute() {
  return (
    <>
      <DashboardHeader />
      <Overview />
      <DesktopMenu />
    </>
  );
}
