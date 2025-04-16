'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Link, usePathname } from '@/i18n/navigation';
import { useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { routing } from '@/i18n/routing';

export default function Navbar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 判断是否在首页（支持多语言路径）
  const isHomePage = routing.locales.some(locale => pathname === `/${locale}`) || pathname === '/';

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
    if (isHomePage && !scrolled) {
      return 'bg-transparent';
    }
    return 'bg-white shadow-md';
  };

  // 文字颜色逻辑
  const getTextColor = () => {
    if (isHomePage && !scrolled) {
      return 'text-white';
    }
    return 'text-gray-900';
  };

  // 链接颜色逻辑
  const getLinkColor = () => {
    if (isHomePage && !scrolled) {
      return 'text-white hover:text-gray-200';
    }
    return 'text-gray-600 hover:text-gray-900';
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
          
          {/* 桌面端导航 */}
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
            <LanguageSwitcher scrolled={scrolled || !isHomePage} />
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                scrolled || !isHomePage
                  ? 'text-gray-500 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:text-gray-200 hover:bg-white/10'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端下拉菜单 */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 w-full bg-white shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkColor()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <div className="px-3 py-2">
                <div className={`text-base font-medium ${getLinkColor()}`}>
                  {t('products')}
                </div>
                <div className="mt-2 space-y-1">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-sm ${getLinkColor()}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <div className={`text-base font-medium ${getLinkColor()}`}>
                  Support
                </div>
                <div className="mt-2 space-y-1">
                  {supportItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-sm ${getLinkColor()}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkColor()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <Link
                href="#"
                className={`block px-3 py-2 rounded-md text-base font-medium ${getLinkColor()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('blog')}
              </Link>
              <div className="px-3 py-2">
                <LanguageSwitcher scrolled={scrolled || !isHomePage} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 