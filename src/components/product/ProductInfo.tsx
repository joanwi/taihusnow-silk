'use client';
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { QuoteButton } from "../QuoteButton";

export interface Product {
  title: string;
  descriptions: string[];
  price: string;
  MOQ: string;
  sizes: string[];
  colors: string[];
  imagesUrl: string[];
}

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0, bgX: 0, bgY: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

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
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
            src={product.imagesUrl[selectedImage]}
            alt="Product Image"
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
                backgroundImage: `url(${product.imagesUrl[selectedImage]})`,
                backgroundPosition: `${magnifierPosition.bgX}% ${magnifierPosition.bgY}%`,
                backgroundSize: '400%',
                backgroundRepeat: 'no-repeat',
                zIndex: 10,
              }}
            />
          )}
        </div>

        {/* Thumbnail Navigation */}
        <div className="relative mt-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2">
              {product.imagesUrl.map((src, index) => (
                <CarouselItem key={index} className="pl-3 basis-1/5">
                  <div
                    className={`relative aspect-square cursor-pointer ${
                      selectedImage === index ? 'ring-2 ring-orange-500' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={src}
                      alt={`Product View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-10 flex items-center justify-center cursor-pointer bg-black/30 text-white" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-10 flex items-center justify-center cursor-pointer bg-black/30 text-white" />
          </Carousel>
        </div>
      </div>

      {/* Right: Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-12">{product.title}</h1>
        {/* Descriptions */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Descriptions</h2>
          <ul className="space-y-2">
            {product.descriptions.map((desc, index) => (
              <li key={index}>• {desc}</li>
            ))}
          </ul>
        </div>

        {/* Price and MOQ */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Price & MOQ</h2>
          <div className="mb-2">Price: {product.price}</div>
          <div className="">MOQ: {product.MOQ}</div>
        </div>

        {/* Size Selection */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Size</h2>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map((size, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded transition-colors ${
                  selectedSize === size ? 'border-orange-600 bg-orange-50 text-orange-700' : 'hover:border-orange-600'
                }`}
                onClick={() => setSelectedSize(size)}
                type="button"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Colors</h2>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className={`px-4 py-2 border rounded transition-colors ${
                  selectedColor === color ? 'border-orange-600 bg-orange-50 text-orange-700' : 'hover:border-orange-600'
                }`}
                onClick={() => setSelectedColor(color)}
                type="button"
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <QuoteButton
          productName={product.title}
          size={selectedSize}
          color={selectedColor}
          className="w-full bg-orange-600 text-white"
        >
          Request Quote
        </QuoteButton>
      </div>
    </div>
  );
} 