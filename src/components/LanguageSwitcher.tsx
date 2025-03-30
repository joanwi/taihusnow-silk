'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';

export default function LanguageSwitcher() {
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
        className="px-2 py-1 rounded border border-gray-300 text-sm"
        value={locale}
        onChange={handleChange}
      >
        <option value="en">EN</option>
        <option value="zh">中文</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
} 