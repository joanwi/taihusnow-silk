import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wholesale Silk Bedding Sets: Taihu Snow Silk Bed Set Deals",
  description: "Find wholesale silk bedding sets & Taihu Snow silk bed set deals. Shop mulberry silk options & customize your silk bedding needs here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
