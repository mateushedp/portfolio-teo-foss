import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teodora Foss | Psicóloga",
  description:
    "Um espaço seguro e acolhedor para redescobrir sua força interior e cultivar uma vida com mais clareza e propósito.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body className="font-sans bg-cream text-text-main antialiased">
        {children}
      </body>
    </html>
  );
}