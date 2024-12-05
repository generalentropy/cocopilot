import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./AuthProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Cocopilot - Votre assistant de poulailler",
  description: "Cocopilot - Votre assistant de poulailler",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="fr">
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
