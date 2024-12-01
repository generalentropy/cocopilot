"use client";

import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function DashboardRoute() {
  return (
    <div>
      Dashboard
      <Button asChild>
        <LogoutLink>Se déconnecter</LogoutLink>
      </Button>
    </div>
  );
}
