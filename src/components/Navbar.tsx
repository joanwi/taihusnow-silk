'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const t = useTranslations('navigation');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-xl font-bold ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Taihu Silk
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`transition-colors ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}>
              {t('home')}
            </Link>
            <Link href="#" className={`transition-colors ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}>
              {t('products')}
            </Link>
            <Link href="#" className={`transition-colors ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}>
              {t('about')}
            </Link>
            <Link href="#" className={`transition-colors ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}>
              {t('contact')}
            </Link>
            <Link href="#" className={`transition-colors ${
              scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}>
              {t('blog')}
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher scrolled={scrolled} />
          </div>
          
          <div className="md:hidden">
            <button className={`p-2 rounded-md ${
              scrolled 
                ? 'text-gray-500 hover:text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:text-gray-200 hover:bg-white/10'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 