import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from '../i18n';

// 定义所有路由路径
export const pathnames = {
  '/': '/',
  '/products': '/products',
  '/about': '/about',
  '/contact': '/contact',
  '/blog': '/blog'
} as const;

// 创建支持国际化的导航工具函数
export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
}); 