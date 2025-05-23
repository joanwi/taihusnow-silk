import {Link} from '@/i18n/navigation';
import Image from 'next/image';
import type { FC, MouseEvent } from 'react';
import { ContactButton } from '@/components/ContactButton';

export interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
  categories?: string[];
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ProductCard: FC<ProductCardProps> = ({ image, title, description, href, onButtonClick }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col h-full">
    <Link href={href} className="group flex-1 flex flex-col focus:outline-none">
      <div className="relative w-full h-48 sm:h-56 md:h-100">
        <Image src={image} alt={title} fill className="object-cover transition-transform group-hover:scale-105" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm flex-1">{description}</p>
      </div>
    </Link>
    <div className="px-6 pb-6">
      <ContactButton className="w-full bg-gray-200 hover:bg-gray-400 text-black font-semibold p-3 rounded-md transition-colors duration-300">
        Send Inquiry Now
      </ContactButton>
    </div>
  </div>
);

export default ProductCard; 