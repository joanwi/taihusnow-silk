'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

const categories = [
  {
    id: 'silk-pillowcase',
    titleKey: 'silkPillowcase',
    image: '/images/categories/silk-pillowcase.jpg',
    href: '/products/silk-pillowcase'
  },
  {
    id: 'silk-eye-mask',
    titleKey: 'silkEyeMask',
    image: '/images/categories/silk-eye-mask.jpg',
    href: '/products/silk-eye-mask'
  },
  {
    id: 'silk-bonnet',
    titleKey: 'silkBonnet',
    image: '/images/categories/silk-bonnet.jpg',
    href: '/products/silk-bonnet'
  },
  {
    id: 'silk-accessories',
    titleKey: 'silkAccessories',
    image: '/images/categories/silk-accessories.jpg',
    href: '/products/silk-accessories'
  },
  {
    id: 'silk-scrunchies',
    titleKey: 'silkScrunchies',
    image: '/images/categories/silk-scrunchies.jpg',
    href: '/products/silk-scrunchies'
  }
];

export default function CategoryGrid() {
  const t = useTranslations('categories');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={category.href}
              className="group relative block aspect-[4/5] overflow-hidden rounded-lg bg-gray-100"
            >
              {/* 图片容器 */}
              <div className="absolute inset-0">
                <div className="relative h-full w-full">
                  {/* 使用 div 作为占位符，实际项目中替换为 Image 组件 */}
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                </div>
              </div>
              
              {/* 渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* 文字内容 */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  {t(category.titleKey)}
                </h3>
                <p className="text-white/90 mt-2 opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  {t(`${category.titleKey}Description`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 