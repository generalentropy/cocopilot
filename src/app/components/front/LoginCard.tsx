import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

export default function LoginCard() {
  return (
    <Card className="mx-auto w-full max-w-md sm:p-8">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Choisissez une option pour continuer
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          size="lg"
          className="w-full bg-amber-500 transition-colors hover:bg-amber-600"
          asChild
        >
          <LoginLink> Se connecter</LoginLink>
        </Button>
        <Button size="lg" className="w-full" variant="outline" asChild>
          <RegisterLink> S&apos;inscrire</RegisterLink>
        </Button>
      </CardContent>
    </Card>
  );
}
