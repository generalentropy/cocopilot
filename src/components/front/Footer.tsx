import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-2 py-6 sm:flex-row sm:px-4 md:px-6">
      <p className="text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} cocopilot - Votre assistant de poulailler
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <Link
          className="text-xs underline-offset-4 hover:underline"
          href="/cgu"
        >
          Conditions d&apos;utilisation
        </Link>
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
          Confidentialité
        </Link>
      </nav>
    </footer>
  );
}
