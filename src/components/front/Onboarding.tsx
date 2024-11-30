import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OnBoarding() {
  return (
    <div className="flex flex-grow flex-col justify-center">
      <section className="flex min-h-full items-center justify-center">
        <div className="flex justify-center px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div>
              <Image
                src="logo-mini.svg"
                alt="cocopilot logo"
                width={100}
                height={100}
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Votre assistant tout-en-un
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Gérez votre poulailler, suivez la santé de vos animaux, trackez
                votre production, obtenez des statistiques, planifiez les soins,
                et tout cela en un seul endroit&nbsp;🪄
              </p>
            </div>
            <div className="space-x-4">
              <Button
                className="bg-amber-500 transition-colors hover:bg-amber-600"
                asChild
              >
                <Link href="/dashboard">Commencer</Link>
              </Button>
              <Button variant="outline">En savoir plus</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
