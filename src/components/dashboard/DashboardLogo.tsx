import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Image from "next/image";

export default function DashboardLogo() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex p-2">
        <Image
          src="/cocopilot-logo.svg"
          alt="cocopilot logo"
          width={34}
          height={34}
        />
        <span className="ml-2 text-2xl font-black">cocopilot</span>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
