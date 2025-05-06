
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ContactForm } from './ContactForm';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#F5F1EA] pt-10 pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-gray-800 text-xl font-bold mb-4">Taihu Silk</h3>
            <p className="text-gray-600 mb-4">
              Premium silk bedding products for the best nights sleep youve ever experienced.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-800 text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Shop</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">FAQs</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Shipping Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Returns & Exchanges</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Payment Methods</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 text-xl font-bold mb-4">Contact Us</h3>
            <ContactForm />
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-4">
            <p className="text-gray-600 text-center">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
} 