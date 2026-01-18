import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // DOĞRUSU BU! (tailwindcss değil)

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vira",
  description: "Nostaljik Planlayıcı",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}