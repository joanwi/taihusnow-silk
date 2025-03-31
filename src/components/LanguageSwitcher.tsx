'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

export default function LanguageSwitcher({ scrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.replace(pathname, { locale: newLocale });
  };
  
  return (
    <div className="relative inline-block text-left">
      <select 
        className={`border rounded px-3 py-1.5 pr-8 appearance-none cursor-pointer text-sm font-medium focus:outline-none ${
          scrolled 
            ? 'bg-white text-gray-800 border-gray-300 hover:border-gray-400 focus:ring-2 focus:ring-gray-200'
            : 'bg-transparent text-white border-white/30 hover:border-white/70 focus:ring-2 focus:ring-white/50'
        }`}
        value={locale}
        onChange={handleChange}
      >
        <option value="en" className="bg-gray-800 text-white">English</option>
        <option value="zh" className="bg-gray-800 text-white">简体中文</option>
        <option value="de" className="bg-gray-800 text-white">Deutsch</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg className={`h-4 w-4 ${scrolled ? 'text-gray-800' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
} 