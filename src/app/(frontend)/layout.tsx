import { ReactNode } from "react";

export default async function FrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="flex justify-center">{children}</div>;
}
