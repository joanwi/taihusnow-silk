'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';

// Sample carousel items
const carouselItems = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    alt: 'Luxurious silk duvet in bedroom setting',
    bgColor: 'bg-[#f8f4e9]',
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    alt: 'Close-up of silk comforter texture',
    bgColor: 'bg-[#e9f0f8]',
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    alt: 'Person sleeping peacefully under silk comforter',
    bgColor: 'bg-[#f8e9f0]',
  },
];

export default function HeroCarousel() {
  const t = useTranslations('hero');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${item.bgColor}`}
        >
          <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between h-full">
              <div className="md:w-1/2 text-center md:text-left py-8 md:py-0">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('title')}</h1>
                <p className="text-lg mb-6 max-w-md">{t('subtitle')}</p>
                <Button className="px-8 py-6 text-base">{t('cta')}</Button>
              </div>
              <div className="md:w-1/2 relative h-full flex items-center justify-center">
                {/* Placeholder for image - in production this would be an actual image */}
                <div className="w-full h-64 md:h-[400px] bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 