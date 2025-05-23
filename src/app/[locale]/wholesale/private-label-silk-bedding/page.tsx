import {Link} from '@/i18n/navigation';
import { ContactButton } from '@/components/ContactButton';
import Breadcrumb from '@/components/Breadcrumb';

export default function PrivateLabelSilkBedding() {
  const services = [
    {
      title: 'Branded Packaging',
      description: 'Customize packaging with your logo, colors, and design for a professional presentation.'
    },
    {
      title: 'Product Customization',
      description: 'Choose from our range of silk duvets, bedding sets, and pillowcases, tailored to your brand\'s specifications.'
    },
    {
      title: 'Marketing Support',
      description: 'We provide high-quality product images, descriptions, and brochures to boost your sales.'
    },
    {
      title: 'Scalable Production',
      description: 'From small batches to large orders, we meet your needs with precision.',
      link: {
        text: 'Check our MOQ details',
        href: '/wholesale/minimum-order-quantities'
      }
    }
  ];

  const benefits = [
    {
      title: 'Premium Quality',
      description: 'Made from 100% Mulberry silk, our products are soft, breathable, and OEKO-TEX certified.',
      link: {
        text: 'Learn about our process',
        href: '/wholesale/silk-production-process'
      }
    },
    {
      title: 'Brand Enhancement',
      description: 'Our private label solutions help you create a cohesive, luxury brand identity.'
    },
    {
      title: 'Global Reach',
      description: 'With a robust supply chain, we ship to markets worldwide.',
      link: {
        text: 'View our capabilities',
        href: '/wholesale/silk-duvet-manufacturer'
      }
    },
    {
      title: 'Flexible MOQs',
      description: 'We offer tailored MOQs for private label orders to suit your business size.'
    }
  ];

  const steps = [
    'Contact Us: Reach out to discuss your branding needs.',
    'Design Your Line: Work with our team to select products and customize packaging.',
    'Sample Review: Order samples to ensure quality aligns with your brand vision.',
    'Launch Your Brand: Place your order, and we\'ll deliver your branded products on time.'
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Wholesale', href: '/wholesale' }, { label: 'Private Label Silk Bedding', isCurrent: true }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Build Your Brand with Taihu Silk</h1>
        <p className="text-gray-600 max-w-3xl">
          At Taihu Silk, we empower businesses to create their own luxury silk bedding lines through our private label services. 
          As a trusted silk duvet manufacturer, we offer high-quality 100% Mulberry silk products with your branding, 
          helping you stand out in the competitive bedding market.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Private Label Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.link && (
                <Link 
                  href={service.link.href}
                  className="text-black hover:underline"
                >
                  {service.link.text} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Benefits of Our Private Label Program</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              {benefit.link && (
                <Link 
                  href={benefit.link.href}
                  className="text-black hover:underline"
                >
                  {benefit.link.text} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How to Get Started</h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-black text-white rounded-full font-medium">
                {index + 1}
              </div>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Related Information</h2>
        <Link 
          href="/wholesale/oem-odm-silk"
          className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <h3 className="font-medium mb-2">OEM/ODM Silk</h3>
          <p className="text-gray-600">Explore additional customization options for your brand.</p>
        </Link>
      </section>

      <section className="text-center p-8 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Launch Your Silk Bedding Brand Today</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Ready to create a luxury bedding line? Contact our team to start your private label journey. 
          We respond within 24 hours and provide full support to bring your vision to life.
        </p>
        <ContactButton />
      </section>
    </>
  );
} 