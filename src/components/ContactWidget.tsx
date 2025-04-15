'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactWidget() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contacts = [
    {
      id: 'phone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      value: '+1234567890',
      href: 'tel:+1234567890'
    },
    {
      id: 'whatsapp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
        </svg>
      ),
      value: '+1234567890',
      href: 'https://wa.me/1234567890'
    },
    {
      id: 'email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      value: 'carol@taihunow.com',
      href: 'mailto:carol@taihunow.com'
    }
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-3">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="relative"
            onMouseEnter={() => setHoveredItem(contact.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link
              href={contact.href}
              className="flex items-center"
            >
              <div className="w-10 h-10 bg-gray-200/80 backdrop-blur-sm hover:bg-green-500 text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                {contact.icon}
              </div>
              {hoveredItem === contact.id && (
                <div className="absolute left-0 transform -translate-x-full -translate-y-1/2 top-1/2 mr-2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap flex items-center">
                    <span>{contact.value}</span>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 transform">
                      <div className="border-8 border-transparent border-l-green-500"></div>
                    </div>
                  </div>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 