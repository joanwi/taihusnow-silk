'use client';

import React from 'react';
import {Link, usePathname} from '@/i18n/navigation';

interface NavItem {
  title: string;
  href: string;
}

interface AsideNavProps {
  items: NavItem[];
}

export function AsideNav({ items }: AsideNavProps) {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 shrink-0">
      <nav className="md:fixed">
        <ul className="space-y-2">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={`block p-2 rounded-lg transition-colors duration-300
                    ${isActive ? 'bg-primary text-secondary' : 'text-primary hover:bg-secondary hover:text-primary'}
                  `}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
} 