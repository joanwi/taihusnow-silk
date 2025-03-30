'use client';

import { useTranslations } from 'next-intl';

export default function BenefitsSection() {
  const t = useTranslations('benefits');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#f8f4e9] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12h-8v8H3V3h18z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('comfort.title')}</h3>
            <p className="text-gray-600">{t('comfort.description')}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#e9f0f8] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4v16m4-4l-4 4-4-4m0-8l4-4 4 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('temperature.title')}</h3>
            <p className="text-gray-600">{t('temperature.description')}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#f8e9f0] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 14a5 5 0 0 0-10 0" />
                <line x1="12" y1="9" x2="12" y2="11" />
                <circle cx="12" cy="14" r="5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('hypoallergenic.title')}</h3>
            <p className="text-gray-600">{t('hypoallergenic.description')}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-[#f0f8e9] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M7 11l3 3 7-7"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('durable.title')}</h3>
            <p className="text-gray-600">{t('durable.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 