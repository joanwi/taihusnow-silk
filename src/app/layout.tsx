import "./globals.css";
import { Inter } from "next/font/google";
import { locales } from "../../i18n";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taihu Silk - Premium Silk Duvets & Comforters",
  description: "Experience the luxury of natural silk for a better night's sleep with our premium silk duvets and comforters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
