import { useState } from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  faqs: FaqItem[];
}

export default function Accordion({ faqs }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, idx) => (
        <div key={faq.question}>
          <button
            type="button"
            className="w-full flex justify-between items-center py-5 px-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary font-semibold text-base md:text-lg text-gray-900"
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
            onClick={() => handleToggle(idx)}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-5 h-5 ml-2 transition-transform duration-200 ${openIndex === idx ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {openIndex === idx && (
            <div
              id={`faq-panel-${idx}`}
              className="px-4 pb-5 text-gray-600 text-sm md:text-base"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 