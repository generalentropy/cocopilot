import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function DashboardLoayout({
  children,
}: {
  children: ReactNode;
}) {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/auth");

  return <div>{children}</div>;
}
