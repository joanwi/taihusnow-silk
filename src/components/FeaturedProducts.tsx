'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from './ui/button';

// Sample products data
const products = [
  {
    id: 1,
    name: 'Premium Silk Duvet - Queen',
    price: 299,
    image: '/images/product-1.jpg',
    slug: 'premium-silk-duvet-queen',
  },
  {
    id: 2,
    name: 'Luxury Silk Comforter - King',
    price: 349,
    image: '/images/product-2.jpg',
    slug: 'luxury-silk-comforter-king',
  },
  {
    id: 3,
    name: 'Silk Summer Weight Duvet',
    price: 259,
    image: '/images/product-3.jpg',
    slug: 'silk-summer-weight-duvet',
  },
  {
    id: 4,
    name: 'All-Season Silk Comforter',
    price: 329,
    image: '/images/product-4.jpg',
    slug: 'all-season-silk-comforter',
  },
];

export default function FeaturedProducts() {
  const t = useTranslations('featured');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">{t('title')}</h2>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            {t('viewAll')} →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                {/* Placeholder for product image */}
                <div className="w-full h-full bg-gray-200 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="secondary" className="mx-2">Quick View</Button>
                  <Button className="mx-2">Add to Cart</Button>
                </div>
              </div>
              
              <h3 className="font-medium text-lg mb-1">{product.name}</h3>
              <p className="text-gray-900 font-semibold">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 