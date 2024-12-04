"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { menuData } from "@/app/lib/menu";

const getTitleFromPath = (path: string) => {
  for (const group of menuData.navMain) {
    for (const item of group.items) {
      if (item.url === path) {
        return item.title;
      }
    }
  }
  return null;
};

export default function BreadcrumbNav() {
  const pathname = usePathname();

  // Découper l'URL en segments
  const pathSegments = pathname.split("/").filter((segment) => segment); // Enlever les segments vides

  // Générer les breadcrumbs
  const breadcrumbs = pathSegments.map((_, index) => {
    const currentPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const title = getTitleFromPath(currentPath);
    const isLast = index === pathSegments.length - 1;

    return (
      <React.Fragment key={currentPath}>
        {index > 0 && <BreadcrumbSeparator />}
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>
              {title || decodeURIComponent(currentPath)}
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink asChild>
              <Link href={currentPath}>
                {title || decodeURIComponent(currentPath)}
              </Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      </React.Fragment>
    );
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>{breadcrumbs}</BreadcrumbList>
    </Breadcrumb>
  );
}
