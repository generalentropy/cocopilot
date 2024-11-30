import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OnBoarding() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="logo.svg"
            alt="cocopilot logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="ml-2 text-2xl font-black">cocopilot</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
        </nav>
      </header>
      <div className="flex-col flex-grow">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48 justify-center items-center flex min-h-full">
          <div className="flex justify-center px-4 md:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Image
                src="logo.svg"
                alt="cocopilot logo"
                width={100}
                height={100}
              />
              <div className="space-y-2 ">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Votre assistant tout-en-un
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Gérez votre poulailler, suivez la santé de vos animaux,
                  trackez votre production, obtenez des statistiques, planifiez
                  les soins, tout ça en un seul endroit.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button className="" variant="outline">
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} cocopilot - Votre gestionnaire de
          poulailler 🐔
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Conditions d&apos;utilisation
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Confidentialité
          </Link>
        </nav>
      </footer>
    </div>
  );
}
