'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const productImages = [
  '/images/summer-duvet-1.webp',
  '/images/summer-duvet-2.webp',
  '/images/summer-duvet-3.webp',
  '/images/summer-duvet-4.webp',
  '/images/summer-duvet-5.webp',
  '/images/summer-duvet-6.webp',
];

export default function SummerDuvet() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0, bgX: 0, bgY: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const handleMouseMoveImage = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;
    
    const magnifierSize = 200;
    const boundedX = Math.min(Math.max(x - magnifierSize/2, 0), width - magnifierSize);
    const boundedY = Math.min(Math.max(y - magnifierSize/2, 0), height - magnifierSize);
    
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;
    
    setMagnifierPosition({ 
      x: boundedX,
      y: boundedY,
      bgX,
      bgY
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        {/* Product Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left: Image Gallery */}
          <div className="relative">
            {/* Main Image with Magnifier */}
            <div 
              className="relative aspect-square bg-amber-50 overflow-hidden cursor-crosshair"
              onMouseEnter={() => setShowMagnifier(true)}
              onMouseLeave={() => setShowMagnifier(false)}
              onMouseMove={handleMouseMoveImage}
            >
              <Image
                src={productImages[selectedImage]}
                alt="Summer Silk Duvet"
                fill
                className="object-cover"
                priority
              />
              {showMagnifier && (
                <div 
                  className="absolute pointer-events-none"
                  style={{
                    width: '200px',
                    height: '200px',
                    left: `${magnifierPosition.x}px`,
                    top: `${magnifierPosition.y}px`,
                    border: '2px solid #ddd',
                    backgroundColor: 'white',
                    backgroundImage: `url(${productImages[selectedImage]})`,
                    backgroundPosition: `${magnifierPosition.bgX}% ${magnifierPosition.bgY}%`,
                    backgroundSize: '400%',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 10,
                  }}
                />
              )}
              <span className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded">
                BEST SELLER
              </span>
            </div>

            {/* Thumbnail Navigation */}
            <div className="relative mt-4">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/30 z-10">
                <button 
                  onClick={() => {
                    if (thumbnailsRef.current) {
                      thumbnailsRef.current.scrollLeft -= 200;
                    }
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-10 flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeftIcon className="w-6 h-6 stroke-2 text-white" />
                </button>
              </div>
              
              <div 
                ref={thumbnailsRef}
                className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth"
              >
                {productImages.map((src, index) => (
                  <div
                    key={index}
                    className={`relative shrink-0 w-32 h-32 cursor-pointer ${
                      selectedImage === index ? 'ring-2 ring-orange-500' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={src}
                      alt={`Summer Silk Duvet View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-8 bg-black/30 z-10">
                <button 
                  onClick={() => {
                    if (thumbnailsRef.current) {
                      thumbnailsRef.current.scrollLeft += 200;
                    }
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-10 flex items-center justify-center cursor-pointer"
                >
                  <ChevronRightIcon className="w-6 h-6 stroke-2 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Wholesale OEKO-Tex 100% Mulberry Pink Summer Duvet</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-600">Product ID: SLD-AS400</span>
              <div className="flex items-center">
                <span className="text-blue-600">4.9/5</span>
                <span className="text-gray-600 ml-1">(120 reviews)</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-2xl text-blue-600 font-semibold mb-1">$45.00 - $75.00</div>
              <div className="text-gray-600">MOQ: 100 pcs</div>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h2 className="font-semibold mb-4">Key Features:</h2>
              <ul className="space-y-2">
                <li>• 100% Grade A long-strand mulberry silk filling</li>
                <li>• 300 GSM filling weight - ideal for summer</li>
                <li>• 300 thread count 100% cotton sateen cover</li>
                <li>• Box-stitched design prevents silk shifting</li>
                <li>• Temperature regulating and moisture-wicking</li>
                <li>• Oeko-Tex Standard 100 certified</li>
              </ul>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <h2 className="font-semibold mb-4">Size:</h2>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 border rounded hover:border-blue-600">
                  Twin (150×200cm)
                </button>
                <button className="px-4 py-2 border rounded bg-blue-600 text-white">
                  Queen (200×230cm)
                </button>
                <button className="px-4 py-2 border rounded hover:border-blue-600">
                  King (220×240cm)
                </button>
                <button className="px-4 py-2 border rounded hover:border-blue-600">
                  Custom Size
                </button>
              </div>
            </div>

            {/* Cover Material */}
            <div className="mb-8">
              <h2 className="font-semibold mb-4">Cover Material:</h2>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 border rounded bg-blue-600 text-white">
                  100% Cotton
                </button>
                <button className="px-4 py-2 border rounded hover:border-blue-600">
                  Cotton Silk Blend
                </button>
                <button className="px-4 py-2 border rounded hover:border-blue-600">
                  100% Silk
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Wholesale Quote
            </Link>
          </div>
        </div>

        {/* Detailed Description Section */}
        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Our best-selling Summer Mulberry Silk Duvet offers the perfect lightweight comfort for warm weather. 
              Made from 100% Grade A long-strand mulberry silk with a premium cotton cover, this duvet provides 
              exceptional temperature regulation and moisture-wicking properties, making it ideal for summer use.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Company Overview</h3>
            <p className="mb-4">
              Taihu Silk Co., Ltd. is a leading silk home textile manufacturer based in Suzhou, China, established in 2002. 
              As the first listed silk company in Suzhou (stock code: 838262), we operate a 10,000+ square meter production 
              plant with an annual capacity of over 300,000 silk quilts.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Production Capabilities</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>79-acre mulberry garden</li>
              <li>Complete production chain control from cocoons to finished products</li>
              <li>Exports to 50+ countries including USA, Russia, UK, Germany, Japan, and Canada</li>
              <li>3.53%–4.46% R&D investment (2019-2021)</li>
              <li>55 R&D personnel and multiple patents</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Customization & Wholesale</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom bulk orders available</li>
              <li>MOQ: 10-20 pieces (standard designs)</li>
              <li>MOQ: 100-150 pieces (custom designs)</li>
              <li>OEM/ODM services with 50+ global brand partnerships</li>
              <li>Free product images for store use (orders over $10,000)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Care Instructions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Avoid machine washing and tumble drying</li>
              <li>Spot clean with neutral detergent and cold water</li>
              <li>Professional dry cleaning recommended for large quilts</li>
              <li>Regular airing and duvet cover use recommended</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Quality Assurance</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>SGS, Intertek, and AI testing for all materials</li>
              <li>Multi-stage quality inspections</li>
              <li>20-day defect reporting window</li>
              <li>Manufacturer-covered return shipping for quality issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
