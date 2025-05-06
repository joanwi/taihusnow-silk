'use client';

import { useState } from 'react';
import { Modal } from './ui/modal';
import { Button } from './ui/button';
import { ContactForm } from './ContactForm';

interface ContactButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export function ContactButton({ className, children }: ContactButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {children || 'Contact Us'}
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Contact Us"
      >
        <ContactForm />
      </Modal>
    </>
  );
} 