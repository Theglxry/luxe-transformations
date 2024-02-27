import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { AOSInit } from "@/libs/Aos";
import ReduxProvider from "@/libs/state/reduxProvider";

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
      <body
        className={`relative h-screen text-white w-full md:p-4 md:px-8 font-MyFont overflow-x-hidden`}
      >
        <ReduxProvider>
          <AOSInit />
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
