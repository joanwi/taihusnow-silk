import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactWidget from '@/components/ContactWidget';
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
    redirect('/en');
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className} min-h-screen bg-gray-50 flex flex-col`}>
      <head>
        <meta name="robots" content="noindex" />
      </head>
        <NextIntlClientProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col pt-16">
              {children}
            </main>
            <Footer />
            <ContactWidget />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 