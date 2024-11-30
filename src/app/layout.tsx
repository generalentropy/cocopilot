import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthProvider } from "./AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cocopilot 🐔",
  description: "Votre application de gestion de poulailler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="fr">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
