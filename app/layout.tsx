import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { AOSInit } from "@/libs/Aos";




// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxe-Transformation",
  description: "luxe transformation landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`relative overflow-hidden h-screen text-white w-full md:p-2 font-MyFont`}>
      <AOSInit />
        <Header />
       {children}
   </body>
   </html>
  );
}
