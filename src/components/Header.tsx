'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '@/i18n/navigation';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  const t = useTranslations('navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productItems = [
    { label: 'All Products', href: '/products' },
    { label: 'Duvet', href: '/products/duvet' },
    { label: '2-Summer Duvet', href: '/products/summer-duvet' },
    { label: '3-Long Strand Mulberry Silk Duvet', href: '/products/long-strand-mulberry-silk-duvet' },
    { label: '4-Luxury Silk Satin Bedding', href: '/products/luxury-silk-satin-bedding-pure-mulberry-silk-duvet'},
    { label: '5-Natural Soft Silk Quilt', href: '/products/natural-soft-silk-quilt'},
    { label: '6-Summer Mulberry Silk Print Duvet', href: '/products/summer-mulberry-silk-print-duvet'},
    { label: '7-Mulberry Silk Filled Comforter', href: '/products/mulberry-silk-filled-comforter'},
    { label: '8-Embroidery White Silk Filled Duvet', href: '/products/embroidery-white-silk-filled-duvet'},
    { label: '9-Print White Silk Quilt Comforter', href: '/products/print-white-silk-quilt-comforter'},
    { label: '10-Ice Cream Silk Summer Comforter', href: '/products/ice-cream-silk-summer-comforter'},
    { label: '11-Silk Quilt Blanket', href: '/products/silk-quilt-blanket'},
    { label: '12-Orchid Embroidery Silk Quilt Comforter', href: '/products/orchid-embroidery-silk-quilt-comforter'},
    { label: '13-Custom Silk Throw Blanket', href: '/products/custom-silk-throw-blanket'},
  ];

  const wholesaleItems = [
    { label: 'Silk Duvet Manufacturer', href: '/wholesale/silk-duvet-manufacturer' },
    { label: 'Private Label Silk Bedding', href: '/wholesale/private-label-silk-bedding' },
    { label: 'OEM/ODM Silk', href: '/wholesale/oem-odm-silk' },
    { label: 'Minimum Order Quantities', href: '/wholesale/minimum-order-quantities' },
    { label: 'Silk Production Process', href: '/wholesale/silk-production-process' },
  ];

  const supportItems = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Silk Quality', href: '/silk-quality' },
  ];

  const blogItems = [
    { label: 'News', href: '/news' },
    { label: 'Guides', href: '/guides' },
    { label: 'Silk Materials', href: '/silk-materials' },
    { label: 'Silk Care', href: '/silk-care' },
    { label: 'Compare', href: '/compare' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-primary text-secondary shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold h-16 px-4 flex items-center transition-colors duration-900 hover:text-primary hover:bg-secondary">
              Taihu Silk
            </Link>
          </div>
          
          {/* desktop navigation */}
          <nav className="hidden md:flex items-center" aria-label="Main navigation">
            <Link href="/" className="transition-colors duration-900 h-16 flex items-center px-4 hover:text-primary hover:bg-secondary">
              {t('home')}
            </Link>
            <DropdownMenu
              label={t('products')}
              items={productItems}
              linkColor="hover:text-primary hover:bg-secondary"
            />
             <DropdownMenu
              label= "Wholesale"
              items={wholesaleItems}
              linkColor="hover:text-primary hover:bg-secondary"
            />
             <DropdownMenu
              label= "Support"
              items={supportItems}
              linkColor="hover:text-primary hover:bg-secondary"
            />
            <Link href="/contact-us" className="transition-colors duration-900 h-16 flex items-center px-4 hover:text-primary hover:bg-secondary">
              Contact Us
            </Link>
            <DropdownMenu
              label= "Blog"
              items={blogItems}
              linkColor="hover:text-primary hover:bg-secondary"
            />
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher scrolled={true} />
          </div>
          
          {/* mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-secondary hover:text-primary hover:bg-secondary transition-colors duration-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 w-full bg-secondary shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900">
                  {t('products')}
                </div>
                <div className="mt-2 space-y-1">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-sm text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900">
                    Support
                </div>
                <div className="mt-2 space-y-1">
                  {supportItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-sm text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact-us"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary hover:bg-secondary/80 transition-colors duration-900"
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