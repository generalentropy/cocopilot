import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function LoginCard() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Choissisez une option pour continuer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full bg-amber-500 transition-colors hover:bg-amber-600">
          <LoginLink> Se connecter</LoginLink>
        </Button>
        <Button className="w-full" variant="outline">
          <RegisterLink> S&apos;inscrire</RegisterLink>
        </Button>
      </CardContent>
    </Card>
  );
}
