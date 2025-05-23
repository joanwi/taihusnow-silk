import { Link } from '@/i18n/navigation';
import { useState } from 'react';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  linkColor: string;
}

export default function DropdownMenu({ label, items, linkColor }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`${linkColor} transition-colors duration-900 h-16 px-4 flex items-center cursor-pointer`}
      >
        {label}
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`
        absolute top-full left-1/2 -translate-x-1/2 pt-2
        ${isOpen ? 'block' : 'hidden'}
      `}>
        {/* 不可见的连接区域 */}
        <div className="absolute h-2 w-full -top-2"></div>

        <div className={`
          relative
          w-56 rounded-lg
          bg-primary/80 backdrop-blur-md
          shadow-lg shadow-primary/20
          transition-all duration-200 transform origin-top
          ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}>
          <div 
            className="relative py-2"
            role="menu" 
            aria-orientation="vertical"
          >
            {/* 顶部小三角 */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-primary/80"></div>
            
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-6 py-2.5 text-sm text-secondary hover:text-primary hover:bg-secondary transition-colors"
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 