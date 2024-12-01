"use client";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../ui/button";

export default function RegisterButton() {
  return (
    <Button
      className="bg-amber-500 transition-colors hover:bg-amber-600"
      asChild
    >
      <RegisterLink>Commencer</RegisterLink>
    </Button>
  );
}
