import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "11",
  description: "fgd"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
