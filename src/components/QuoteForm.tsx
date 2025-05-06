'use client';

import { useState } from 'react';

interface QuoteFormProps {
  productName: string;
  size: string;
  color: string;
}

export function QuoteForm({ productName, size, color }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    quantity: '30',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (value: string) => {
    setFormData(prev => ({ ...prev, quantity: value }));
  };

  const handleQuantityBlur = () => {
    const num = Number(formData.quantity);
    if (isNaN(num) || num < 30) {
      setFormData(prev => ({ ...prev, quantity: '30' }));
    }
  };

  const handleQuantityStep = (step: number) => {
    const num = Number(formData.quantity) || 30;
    setFormData(prev => ({ ...prev, quantity: String(Math.max(30, num + step)) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let num = Number(formData.quantity);
    if (isNaN(num) || num < 30) num = 30;
    // TODO: handle submit
    console.log({ ...formData, quantity: num, productName, size, color });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      {/* Product Info */}
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm font-medium text-gray-700">Product</label>
        <input type="text" value={productName} readOnly className="flex-1 rounded-md border-gray-300 bg-gray-100" />
      </div>
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm font-medium text-gray-700">Size</label>
        <input type="text" value={size} readOnly className="flex-1 rounded-md border-gray-300 bg-gray-100" />
      </div>
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm font-medium text-gray-700">Color</label>
        <input type="text" value={color} readOnly className="flex-1 rounded-md border-gray-300 bg-gray-100" />
      </div>
      <div className="flex items-center gap-4">
        <label className="w-24 text-sm font-medium text-gray-700">Quantity</label>
        <div className="flex items-center gap-2 flex-1">
          <button type="button" className="w-8 h-8 rounded bg-gray-200" onClick={() => handleQuantityStep(-1)}>-</button>
          <input
            type="number"
            name="quantity"
            min={30}
            value={formData.quantity}
            onChange={e => handleQuantityChange(e.target.value)}
            onBlur={handleQuantityBlur}
            className="w-20 rounded-md border-gray-300 text-center"
          />
          <button type="button" className="w-8 h-8 rounded bg-gray-200" onClick={() => handleQuantityStep(1)}>+</button>
        </div>
      </div>
      {/* User Info */}
      <div className="flex items-center gap-4">
        <label htmlFor="name" className="w-24 text-sm font-medium text-gray-700">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="email" className="w-24 text-sm font-medium text-gray-700">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="phone" className="w-24 text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="flex items-center gap-4">
        <label htmlFor="company" className="w-24 text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div className="flex gap-4">
        <label htmlFor="message" className="w-24 text-sm font-medium text-gray-700 pt-2">Your Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="mx-auto block cursor-pointer bg-[#B4A183] text-white py-2 px-4 rounded-md hover:bg-[#9A8B73] focus:outline-none focus:ring-2 focus:ring-[#B4A183] focus:ring-offset-2 transition-colors duration-200"
      >
        Send Quote
      </button>
    </form>
  );
} 