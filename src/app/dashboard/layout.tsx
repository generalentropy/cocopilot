import { TailwindIndicator } from "@/components/dashboard/TailwindIndicator";
import { ReactNode } from "react";

export default async function DashboardLoayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid h-screen grid-cols-[300px_1fr] grid-rows-[60px_1fr]">
      <TailwindIndicator />
      {children}
    </div>
  );
}
