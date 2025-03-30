import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from '@/navigation';

export default function Navbar() {
  const t = useTranslations('navigation');

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Taihu Silk
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('home')}
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('products')}
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('about')}
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('contact')}
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              {t('blog')}
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Cart (0)
            </Button>
          </div>
          
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100">
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