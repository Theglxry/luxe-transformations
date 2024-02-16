import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import { AOSInit } from "@/libs/Aos";
import ReduxProvider from "@/libs/state/reduxProvider";

export const metadata: Metadata = {
  title: "DEBUG-Luxe-Transformation",
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
        className={`relative overflow-hidden h-screen text-white w-full md:p-2 font-MyFont`}
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
