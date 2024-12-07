import Footer from "@/app/components/front/Footer";
import Header from "@/app/components/front/Header";
import { ReactNode } from "react";

export default async function FrontLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
