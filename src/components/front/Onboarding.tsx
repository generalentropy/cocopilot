import Image from "next/image";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "../ui/button";

export default function OnBoarding() {
  return (
    <div className="flex flex-grow flex-col justify-center">
      <section className="flex min-h-full items-center justify-center">
        <div className="flex justify-center px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div>
              <Image
                src="cocopilot-logo.svg"
                alt="cocopilot logo"
                width={110}
                height={110}
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Votre assistant tout-en-un
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Gérez votre poulailler, suivez la santé de vos animaux,
                monitorez votre production, obtenez des statistiques, planifiez
                les soins, tout cela en un seul endroit&nbsp;🪄
              </p>
            </div>
            <div className="space-x-4">
              <Button
                className="bg-amber-500 transition-colors hover:bg-amber-600"
                asChild
              >
                <RegisterLink>Commencer</RegisterLink>
              </Button>

              <Button asChild>
                <LoginLink>Déja un compte ?</LoginLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
