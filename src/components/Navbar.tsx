'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

export default function Navbar() {
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productItems = [
    { label: 'All Products', href: '/products' },
    { label: 'All Season Duvet', href: '/all-season-duvet' },
    { label: 'Duvet', href: '/duvet' },
    { label: '2-Summer Duvet', href: '/summer-duvet' },
    { label: '3-Long Strand Mulberry Silk Duvet', href: '/long-strand-mulberry-silk-duvet' },
    { label: '4-Luxury Silk Satin Bedding', href: '/luxury-silk-satin-bedding-pure-mulberry-silk-duvet'},
    { label: '5-Natural Soft Silk Quilt', href: '/natural-soft-silk-quilt'},
    { label: '6-Summer Mulberry Silk Print Duvet', href: '/summer-mulberry-silk-print-duvet'},
  ];

  const howtoItems = [
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Quality Control', href: '/quality-control' },
    { label: 'Certifications', href: '/certifications' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Taihu Silk
            </Link>
          </div>
          
          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('home')}
            </Link>
            <Link href="/about-us" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link>
            <DropdownMenu
              label={t('products')}
              items={productItems}
              linkColor="text-gray-600 hover:text-gray-900"
            />
            <DropdownMenu
              label='How to custom'
              items={howtoItems}
              linkColor="text-gray-600 hover:text-gray-900"
            />
            <Link href="/wholesale" className="text-gray-600 hover:text-gray-900 transition-colors">Wholesale</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('contact')}
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('blog')}
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher scrolled={true} />
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100"
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
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-600 hover:text-gray-900">
                  {t('products')}
                </div>
                <div className="mt-2 space-y-1">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-600 hover:text-gray-900">
                  How to custom
                </div>
                <div className="mt-2 space-y-1">
                  {howtoItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-gray-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('blog')}
              </Link>
              <div className="px-3 py-2">
                <LanguageSwitcher scrolled={true} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 