import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};


// import createMiddleware from 'next-intl/middleware';
// import { locales, defaultLocale } from '../i18n';

// export default createMiddleware({
//   defaultLocale,
//   locales,
//   localePrefix: 'as-needed',
//   localeDetection: false
// });

// export const config = {
//   matcher: [
//     '/((?!api|_next|_vercel|.*\\..*).*)',
//     '/'
//   ]
// }; 