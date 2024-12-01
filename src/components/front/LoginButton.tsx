"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../ui/button";

export default function LoginButton() {
  return (
    <Button asChild>
      <LoginLink>Déja un compte ?</LoginLink>
    </Button>
  );
}
