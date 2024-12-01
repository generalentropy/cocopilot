import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { ReactNode } from "react";

export default async function DashboardLoayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="px-2 pt-2 lg:px-6">
      <DashboardHeader />
      {children}
    </div>
  );
}
