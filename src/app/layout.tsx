import type { Metadata } from "next";
import { Lato, Lustria } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const lato = Lato({
  weight: ["400", "700"],
  subsets:['latin']
});

export const lustria = Lustria({
  weight: ["400"],
  subsets:['latin']
});




export const metadata: Metadata = {
  title: "Peace Akoja Portfolio",
  description: "A simple, but arty portfolio for THE frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className=" scroll-smooth overflow-x-hidden">
      <body className={`${lato.className} bg-customWhite`}>
        <Nav/>
        {children}
        </body>
    </html>
  );
}
