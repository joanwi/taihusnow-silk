import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] })

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen bg-gray-50 flex flex-col`}>
        <NextIntlClientProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 