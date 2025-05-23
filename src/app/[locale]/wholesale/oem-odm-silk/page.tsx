import {Link} from '@/i18n/navigation';
import { ContactButton } from '@/components/ContactButton';
import Breadcrumb from '@/components/Breadcrumb';

export default function OemOdmSilk() {
  const services = [
    {
      title: 'Custom Designs',
      description: 'Create unique silk duvets, bedding sets, or accessories tailored to your specifications, including sizes, colors, and patterns.'
    },
    {
      title: 'Private Labeling',
      description: 'Add your brand logo or packaging to our premium silk products.',
      link: {
        text: 'Learn more about private labeling',
        href: '/wholesale/private-label-silk-bedding'
      }
    },
    {
      title: 'Material Options',
      description: 'Choose from various silk grades, weights, and finishes to meet your market\'s needs.'
    },
    {
      title: 'Prototyping',
      description: 'We develop samples to ensure your vision is realized before full production.'
    }
  ];

  const advantages = [
    {
      title: 'Expertise',
      description: 'With years of experience, we deliver high-quality silk products that meet global standards.'
    },
    {
      title: 'Flexibility',
      description: 'From small-scale trials to large orders, we adapt to your requirements.',
      link: {
        text: 'View MOQ details',
        href: '/wholesale/minimum-order-quantities'
      }
    },
    {
      title: 'Quality Assurance',
      description: 'All products are OEKO-TEX certified, ensuring safety and sustainability.',
      link: {
        text: 'Learn about our process',
        href: '/wholesale/silk-production-process'
      }
    },
    {
      title: 'Fast Turnaround',
      description: 'Our efficient production ensures lead times of 4-6 weeks for most orders.'
    }
  ];

  const steps = [
    'Share Your Vision: Contact us with your design ideas or specifications.',
    'Sample Development: Request prototypes to review quality and design.',
    'Production: Confirm your order, and we\'ll handle manufacturing and delivery.'
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Wholesale', href: '/wholesale' }, { label: 'OEM/ODM Silk', isCurrent: true }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Customize Your Silk Products with Taihu Silk</h1>
        <p className="text-gray-600 max-w-3xl">
          As a leading silk duvet manufacturer, Taihu Silk offers comprehensive OEM (Original Equipment Manufacturing) 
          and ODM (Original Design Manufacturing) services for wholesale partners. Whether you need custom sizes, 
          unique designs, or branded silk bedding, we provide tailored solutions to elevate your brand in the luxury bedding market.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our OEM/ODM Services</h2>
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
        <h2 className="text-2xl font-semibold">Why Choose Our OEM/ODM Services?</h2>
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
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How to Begin</h2>
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
          href="/wholesale/silk-duvet-manufacturer"
          className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <h3 className="font-medium mb-2">Silk Duvet Manufacturer</h3>
          <p className="text-gray-600">Learn more about our production capabilities and manufacturing strength.</p>
        </Link>
      </section>

      <section className="text-center p-8 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Let's Create Together</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Ready to launch your custom silk bedding line? Reach out to our team for a consultation. 
          We respond within 24 hours and provide marketing materials to support your brand.
        </p>
        <ContactButton />
      </section>
    </>
  );
} 