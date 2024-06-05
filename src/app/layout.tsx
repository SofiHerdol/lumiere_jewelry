import type { Metadata } from "next";
import "./globals.css";
import { cinzel, cinzel_decorative } from "./fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import TopWrapper from "./components/topwrapper";

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
      <body className="flex flex-col h-screen w-full">
        <TopWrapper />
        <Navbar />
        <main className="flex-grow"> {children} </main>
        <Footer />
      </body>
    </html>
  );
}
