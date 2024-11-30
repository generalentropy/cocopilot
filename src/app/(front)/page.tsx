import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated)
    return (
      <div className="m-4">
        User Authenticated
        <Button>
          <LogoutLink>Se déconnecter</LogoutLink>
        </Button>
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-2">
      <div className="relative mb-5 h-28 w-28">
        <Image src="chicken.svg" alt="image poulet" fill priority />
      </div>

      <div className="font mb-4 max-w-xs text-center text-xl font-bold">
        Bienvenue, connectez-vous ou inscrivez-vous pour continuer.
      </div>

      <div className="mx-2 flex w-full max-w-xs flex-col gap-4">
        <Button variant="outline">
          <LoginLink>Se connecter</LoginLink>
        </Button>

        <Button className="bg-amber-500 transition-colors hover:bg-amber-600">
          <RegisterLink>Créer un compte</RegisterLink>
        </Button>
      </div>
    </div>
  );
}
