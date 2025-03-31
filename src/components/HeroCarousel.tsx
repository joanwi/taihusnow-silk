'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type TextPosition = 'left' | 'center' | 'right';

// Sample carousel items with titles and descriptions
const carouselItems = [
  {
    id: 1,
    image: '/images/silk-duvet-1.jpg', 
    titleKey: 'slide1Title',
    subtitleKey: 'slide1Subtitle',
    ctaKey: 'slide1Cta',
    textColor: 'text-white',
    textPosition: 'center' as TextPosition,
    bgColor: 'bg-neutral-100', // 背景色，以防图片加载失败
    overlay: 'bg-black/30' // 叠加层，增强文本可读性
  },
  {
    id: 2,
    image: '/images/silk-duvet-2.jpg',
    titleKey: 'slide2Title',
    subtitleKey: 'slide2Subtitle',
    ctaKey: 'slide2Cta',
    textColor: 'text-black',
    textPosition: 'left' as TextPosition,
    bgColor: 'bg-neutral-200',
    overlay: 'bg-white/10'
  },
  {
    id: 3,
    image: '/images/silk-duvet-3.jpg',
    titleKey: 'slide3Title',
    subtitleKey: 'slide3Subtitle', 
    ctaKey: 'slide3Cta',
    textColor: 'text-white',
    textPosition: 'right' as TextPosition,
    bgColor: 'bg-neutral-300',
    overlay: 'bg-black/40'
  },
];

export default function HeroCarousel() {
  const t = useTranslations('hero');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  // Function to get text alignment class based on position
  const getTextAlignmentClass = (position: TextPosition): string => {
    switch (position) {
      case 'left': return 'text-left items-start';
      case 'right': return 'text-right items-end';
      default: return 'text-center items-center'; // center
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Slides */}
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Slide Background */}
          <div className={`absolute inset-0 ${item.bgColor}`}>
            {/* Use a div as fallback in case images aren't available yet */}
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}></div>
            
            {/* Image component - uncomment when images are available */}
            {/* <Image 
              src={item.image}
              alt={t(item.titleKey)}
              fill
              className="object-cover"
              priority={index === 0}
            /> */}
          </div>
          
          {/* Slide Content */}
          <div className={`absolute inset-0 flex items-center justify-center ${item.overlay}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className={`flex flex-col justify-center h-full max-w-xl mx-auto md:mx-0 ${getTextAlignmentClass(item.textPosition)}`}>
                <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${item.textColor}`}>
                  {t(item.titleKey)}
                </h1>
                <p className={`text-lg md:text-xl mb-8 ${item.textColor}`}>
                  {t(item.subtitleKey)}
                </p>
                <Button className="px-8 py-6 text-base font-medium uppercase">
                  {t(item.ctaKey)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 