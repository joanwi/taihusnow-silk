import Link from 'next/link';
import Image from 'next/image';
import type { FC, MouseEvent } from 'react';

export interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ProductCard: FC<ProductCardProps> = ({ image, title, description, href, onButtonClick }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
    <Link href={href} className="group flex-1 flex flex-col cursor-pointer focus:outline-none">
      <div className="relative w-full h-48 sm:h-56 md:h-100">
        <Image src={image} alt={title} fill className="object-cover transition-transform group-hover:scale-105" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
      </div>
    </Link>
    <div className="px-6 pb-6">
      <button
        type="button"
        className="w-full border border-primary text-primary py-2 rounded transition-colors font-medium hover:bg-primary hover:text-white focus:outline-none"
        onClick={onButtonClick}
      >
        Send Inquiry Now
      </button>
    </div>
  </div>
);

export default ProductCard; 