import {Link} from '@/i18n/navigation';
import { ContactButton } from '@/components/ContactButton';
import Breadcrumb from '@/components/Breadcrumb';

export default function WholesalePage() {
  const solutions = [
    {
      title: 'Silk Production Process',
      href: '/wholesale/silk-production-process',
      description: 'Discover how we craft our premium silk products with precision and care.'
    },
    {
      title: 'Minimum Order Quantities',
      href: '/wholesale/minimum-order-quantities',
      description: 'Understand our MOQ policies for efficient and cost-effective ordering.'
    },
    {
      title: 'OEM/ODM Silk',
      href: '/wholesale/oem-odm-silk',
      description: 'Explore our custom manufacturing capabilities for tailored silk solutions.'
    },
    {
      title: 'Private Label Silk Bedding',
      href: '/wholesale/private-label-silk-bedding',
      description: 'Learn how we help you create your own branded silk bedding line.'
    },
    {
      title: 'Silk Duvet Manufacturer',
      href: '/wholesale/silk-duvet-manufacturer',
      description: 'See why we\'re a trusted partner for high-quality silk duvet production.'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Wholesale', isCurrent: true }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Partner with Taihu Silk</h1>
        <p className="text-gray-600 max-w-3xl">
          Welcome to Taihu Silk, a leading supplier of premium silk duvets and bedding for wholesale partners worldwide. 
          Specializing in 100% Mulberry silk, we deliver luxury, comfort, and sustainability to distributors, retailers, 
          and hospitality businesses. Our wholesale program is designed to provide high-quality silk products, flexible 
          ordering options, and exceptional support to elevate your brand.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Why Choose Our Wholesale Program?</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Unmatched Quality</h3>
            <p className="text-gray-600">
              Crafted from 100% Mulberry silk, our duvets and bedding sets offer superior softness, 
              breathability, and hypoallergenic properties.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Eco-Conscious Production</h3>
            <p className="text-gray-600">
              Certified by OEKO-TEX, our sustainable manufacturing ensures environmentally responsible products.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Customization Expertise</h3>
            <p className="text-gray-600">
              From private labeling to bespoke designs, we offer OEM/ODM services to meet your unique needs.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Reliable Supply Chain</h3>
            <p className="text-gray-600">
              With a production capacity of over 50,000 units annually, we ensure timely delivery for all orders.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Explore Our Wholesale Solutions</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link 
              key={solution.href}
              href={solution.href}
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-medium mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center p-8 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Ready to bring luxury silk bedding to your customers? We offer sample orders, 
          marketing materials, and logistics support to ensure your success. 
          Reach out today for a response within 24 hours.
        </p>
        <ContactButton />
      </section>
    </>
  );
}
