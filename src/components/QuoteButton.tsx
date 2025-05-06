'use client';

import { useState } from 'react';
import { Modal } from './ui/modal';
import { QuoteForm } from './QuoteForm';
import { Button } from './ui/button';

interface QuoteButtonProps {
  productName: string;
  size: string;
  color: string;
  className?: string;
  children?: React.ReactNode;
}

export function QuoteButton({ productName, size, color, className, children }: QuoteButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} className={className}>
        {children || 'Request Quote'}
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Request Quote">
        <QuoteForm productName={productName} size={size} color={color} />
      </Modal>
    </>
  );
} 