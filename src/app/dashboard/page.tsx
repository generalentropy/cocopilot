import Animals from "@/components/dashboard/Animals";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function DashboardRoute() {
  return (
    <div>
      Dashboard
      <Button asChild>
        <LogoutLink>Se déconnecter</LogoutLink>
      </Button>
      <Animals />
    </div>
  );
}
