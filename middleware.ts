import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

// 创建国际化中间件
export default createMiddleware({
  // 默认语言
  defaultLocale,
  // 支持的语言列表
  locales,
  // 只在非默认语言时添加前缀
  localePrefix: 'as-needed',
  // 禁用自动语言检测
  localeDetection: false
});

// 匹配所有应该国际化的路径
export const config = {
  matcher: [
    // 匹配所有路径，除了api、静态资源等
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // 包含根路径
    '/'
  ]
}; 