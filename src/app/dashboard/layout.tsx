import { ReactNode } from "react";

export default async function DashboardLoayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div>{children}</div>;
}
