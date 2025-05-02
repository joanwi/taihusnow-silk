"use client";
import useEmblaCarousel from 'embla-carousel-react';
import type { FC } from 'react';
import ProductCard, { ProductCardProps } from './ProductCard';
import { useCallback } from 'react';

interface ProductCarouselProps {
  products: ProductCardProps[];
}

const ProductCarousel: FC<ProductCarouselProps> = ({ products }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {products.map((p) => (
            <div
              className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
              key={p.id}
            >
              <ProductCard {...p} />
            </div>
          ))}
        </div>
      </div>
      {/* Left Arrow */}
      <button
        type="button"
        aria-label="Previous"
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hidden sm:block"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      {/* Right Arrow */}
      <button
        type="button"
        aria-label="Next"
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hidden sm:block"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      {/* Mobile arrows bottom center */}
      <div className="flex justify-center gap-8 mt-4 sm:hidden">
        <button
          type="button"
          aria-label="Previous"
          onClick={scrollPrev}
          className="bg-white rounded-full shadow p-2"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={scrollNext}
          className="bg-white rounded-full shadow p-2"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel; 