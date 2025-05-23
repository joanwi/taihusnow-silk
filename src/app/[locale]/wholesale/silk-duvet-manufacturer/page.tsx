import {Link} from '@/i18n/navigation';
import { ContactButton } from '@/components/ContactButton';
import Breadcrumb from '@/components/Breadcrumb';

export default function SilkDuvetManufacturer() {
  const advantages = [
    {
      title: 'Premium Materials',
      description: 'We use only 100% Mulberry silk, known for its softness, breathability, and hypoallergenic properties.'
    },
    {
      title: 'Advanced Facilities',
      description: 'Our state-of-the-art factories produce over 50,000 units annually, ensuring consistent supply.'
    },
    {
      title: 'Sustainable Practices',
      description: 'Certified by OEKO-TEX, our eco-friendly production minimizes environmental impact.',
      link: {
        text: 'Learn about our process',
        href: '/wholesale/silk-production-process'
      }
    },
    {
      title: 'Customization Options',
      description: 'From custom sizes to private labeling, we tailor products to your needs.',
      links: [
        {
          text: 'OEM/ODM Services',
          href: '/wholesale/oem-odm-silk'
        },
        {
          text: 'Private Label Options',
          href: '/wholesale/private-label-silk-bedding'
        }
      ]
    }
  ];

  const capabilities = [
    {
      title: 'Product Range',
      description: 'Silk duvets, bedding sets, pillowcases, and accessories, all crafted with precision.'
    },
    {
      title: 'Flexible MOQs',
      description: 'We offer competitive minimum order quantities to suit businesses of all sizes.',
      link: {
        text: 'View MOQ details',
        href: '/wholesale/minimum-order-quantities'
      }
    },
    {
      title: 'Global Logistics',
      description: 'We ship to markets worldwide with reliable delivery timelines of 4-6 weeks.'
    },
    {
      title: 'Support Services',
      description: 'From samples to marketing materials, we provide everything you need to succeed.'
    }
  ];

  const steps = [
    'Reach Out: Contact us to discuss your requirements.',
    'Request Samples: Evaluate our quality with sample orders (fees apply).',
    'Place Your Order: Confirm your order, and we\'ll deliver premium silk duvets to your specifications.'
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Wholesale', href: '/wholesale' }, { label: 'Silk Duvet Manufacturer', isCurrent: true }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Your Trusted Partner for Premium Silk Duvets</h1>
        <p className="text-gray-600 max-w-3xl">
          Taihu Silk is a leading silk duvet manufacturer, delivering high-quality 100% Mulberry silk duvets 
          and bedding to wholesale partners worldwide. With advanced production facilities and a commitment 
          to sustainability, we provide reliable, luxurious products for distributors, retailers, and hospitality businesses.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Why We're a Leading Silk Duvet Manufacturer</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">{advantage.title}</h3>
              <p className="text-gray-600 mb-4">{advantage.description}</p>
              {advantage.link && (
                <Link 
                  href={advantage.link.href}
                  className="text-black hover:underline"
                >
                  {advantage.link.text} →
                </Link>
              )}
              {advantage.links && (
                <div className="space-y-2">
                  {advantage.links.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      className="block text-black hover:underline"
                    >
                      {link.text} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Wholesale Capabilities</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability.title} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">{capability.title}</h3>
              <p className="text-gray-600 mb-4">{capability.description}</p>
              {capability.link && (
                <Link 
                  href={capability.link.href}
                  className="text-black hover:underline"
                >
                  {capability.link.text} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Start Your Partnership</h2>
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

      <section className="text-center p-8 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Partner with Us Today</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Elevate your product offerings with our luxury silk duvets. Contact our wholesale team 
          for a consultation. We respond within 24 hours and provide full support to ensure your success.
        </p>
        <ContactButton />
      </section>
    </>
  );
} 