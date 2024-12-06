import { AppSidebar } from "@/components/dashboard/sidebar/App-sidebar";
import BreadcrumbNav from "@/components/dashboard/Breadcrumb-nav";
import { TailwindIndicator } from "@/components/dashboard/TailwindIndicator";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUserData } from "../actions/user";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const queryClient = new QueryClient();
  console.log("Prefecth in layout");
  await queryClient.prefetchQuery({
    queryKey: ["userData"],
    queryFn: () => getUserData(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SidebarProvider>
        <TailwindIndicator />
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbNav />
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </HydrationBoundary>
  );
}
