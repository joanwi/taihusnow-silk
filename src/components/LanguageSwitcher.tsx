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
            ? 'bg-primary/60 text-secondary border-secondary/30 hover:border-secondary/70 focus:ring-2 focus:ring-secondary/50'
            : 'bg-primary/60 text-secondary border-secondary/30 hover:border-secondary/70 focus:ring-2 focus:ring-secondary/50'
        }`}
        value={locale}
        onChange={handleChange}
      >
        <option value="en" className="bg-primary/60 text-secondary">English</option>
        <option value="zh" className="bg-primary/60 text-secondary">简体中文</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <svg className="h-4 w-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
} 