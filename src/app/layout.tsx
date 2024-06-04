import type { Metadata } from "next";
import "./globals.css";
import { cinzel, cinzel_decorative } from "./fonts";

export const metadata: Metadata = {
  title: "Lumière",
  description: "More than just a store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.className}`}>
      <body>
        <p>L U M I È R E</p>
        {children}
        <footer>
          Todos los derechos reservados © Lumière 2024
        </footer>
      </body>
    </html>
  );
}
