import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-14 items-center border-b px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <Image
          src="cocopilot-logo.svg"
          alt="cocopilot logo"
          width={34}
          height={34}
        />
        <span className="ml-2 text-2xl font-black">cocopilot</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#features"
        >
          Fonctionnalités
        </Link>

        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="#about"
        >
          A propos
        </Link>
      </nav>
    </header>
  );
}
