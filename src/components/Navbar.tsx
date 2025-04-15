'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import DropdownMenu from './DropdownMenu';

export default function Navbar() {
  const t = useTranslations('navigation');
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 判断页面是否有深色背景的 hero 部分
  const hasDarkHero = ['/', '/products', '/contact'].includes(pathname);

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

  // 导航栏样式逻辑
  const getNavbarStyle = () => {
    if (scrolled) {
      return 'bg-white shadow-md';
    }
    return hasDarkHero ? 'bg-transparent' : 'bg-white shadow-md';
  };

  // 文字颜色逻辑
  const getTextColor = () => {
    if (scrolled) {
      return 'text-gray-900';
    }
    return hasDarkHero ? 'text-white' : 'text-gray-900';
  };

  // 链接颜色逻辑
  const getLinkColor = () => {
    if (scrolled) {
      return 'text-gray-600 hover:text-gray-900';
    }
    return hasDarkHero ? 'text-white hover:text-gray-200' : 'text-gray-600 hover:text-gray-900';
  };

  const productItems = [
    { label: 'All Products', href: '/products' },
    { label: 'Winter', href: '/winter' },
    { label: 'B', href: '/products/b' },
    { label: 'C', href: '/products/c' },
  ];

  const supportItems = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Quality Control', href: '/quality-control' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Wholesale', href: '/wholesale' },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${getNavbarStyle()}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className={`text-xl font-bold ${getTextColor()}`}>
              Taihu Silk
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`transition-colors ${getLinkColor()}`}>
              {t('home')}
            </Link>
            <DropdownMenu
              label={t('products')}
              items={productItems}
              linkColor={getLinkColor()}
            />
            <DropdownMenu
              label="Support"
              items={supportItems}
              linkColor={getLinkColor()}
            />
            <Link href="/contact" className={`transition-colors ${getLinkColor()}`}>
              {t('contact')}
            </Link>
            <Link href="#" className={`transition-colors ${getLinkColor()}`}>
              {t('blog')}
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher scrolled={scrolled || !hasDarkHero} />
          </div>
          
          <div className="md:hidden">
            <button className={`p-2 rounded-md ${
              scrolled || !hasDarkHero
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