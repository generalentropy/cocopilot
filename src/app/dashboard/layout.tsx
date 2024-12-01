import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { TailwindIndicator } from "@/components/dashboard/TailwindIndicator";
import { ReactNode } from "react";

export default async function DashboardLoayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex justify-center border px-2">
      <TailwindIndicator />
      <DashboardHeader />
      {children}
    </div>
  );
}
