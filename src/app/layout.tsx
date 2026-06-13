import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400"
})

export const metadata: Metadata = {
  title: "Fernando Personal Blog - Home"
};

type RootLayoutProps = {
  children: ReactNode;
}

export default function RootLayout({ children } : Readonly<RootLayoutProps>) {
  return (
    <html
      lang="pt-br"
      className="h-full antialiased">
      <body className={`${poppins.className} 
        min-h-full flex flex-col bg-blue-950`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}