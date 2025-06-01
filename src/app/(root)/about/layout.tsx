import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "Luxe-Transformation",
  description: "luxe transformation landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
