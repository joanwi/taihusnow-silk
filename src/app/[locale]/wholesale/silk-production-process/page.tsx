import {Link} from '@/i18n/navigation';
import { ContactButton } from '@/components/ContactButton';
import Breadcrumb from '@/components/Breadcrumb';

export default function SilkProductionProcess() {
  const processSteps = [
    {
      title: 'Silk Sourcing',
      description: 'We source premium Mulberry silk from certified suppliers, ensuring the highest quality cocoons for softness and strength.'
    },
    {
      title: 'Silk Reeling',
      description: 'The cocoons are carefully unraveled to produce long, continuous silk threads, maintaining their natural luster and durability.'
    },
    {
      title: 'Weaving and Filling',
      description: 'Our skilled artisans weave silk into smooth, breathable fabrics and fill duvets with pure silk floss for lightweight warmth.'
    },
    {
      title: 'Quality Control',
      description: 'Every product undergoes rigorous testing to meet OEKO-TEX standards, ensuring hypoallergenic and eco-friendly bedding.'
    },
    {
      title: 'Packaging',
      description: 'Products are packaged with care, with options for custom branding to support your business.'
    }
  ];

  const advantages = [
    {
      title: 'Sustainability',
      description: 'Our eco-conscious methods minimize waste and environmental impact.'
    },
    {
      title: 'Craftsmanship',
      description: 'Decades of expertise ensure precision in every stitch and seam.'
    },
    {
      title: 'Scalability',
      description: 'With advanced facilities, we produce over 50,000 units annually to meet your wholesale needs.'
    }
  ];

  return (
    <>
      <Breadcrumb items={[{ label: 'Wholesale', href: '/wholesale' }, { label: 'Silk Production Process', isCurrent: true }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Crafting Premium Silk Duvets and Bedding</h1>
        <p className="text-gray-600 max-w-3xl">
          At Taihu Silk, we take pride in producing the finest silk duvets and bedding using 100% Mulberry silk. 
          Our meticulous production process ensures exceptional quality, sustainability, and durability, 
          making us a trusted wholesale silk bedding supplier. Learn how we transform raw silk into luxurious products for your customers.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Production Process</h2>
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex gap-4 p-6 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-black text-white rounded-full font-medium">
                {index + 1}
              </div>
              <div>
                <h3 className="font-medium mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Why Our Process Stands Out</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Related Information</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link 
            href="/wholesale/private-label-silk-bedding"
            className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <h3 className="font-medium mb-2">Private Label Silk Bedding</h3>
            <p className="text-gray-600">Learn about our custom branding options for your business.</p>
          </Link>
          <Link 
            href="/wholesale/silk-duvet-manufacturer"
            className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <h3 className="font-medium mb-2">Silk Duvet Manufacturer</h3>
            <p className="text-gray-600">Discover our manufacturing capabilities and capacity.</p>
          </Link>
        </div>
      </section>

      <section className="text-center p-8 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Start Your Wholesale Partnership</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Interested in offering our premium silk products? Explore our minimum order quantities 
          or contact us to discuss your needs. We provide samples and marketing support to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/wholesale/minimum-order-quantities"
            className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            View MOQ Details
          </Link>
          <ContactButton />
        </div>
      </section>
      </>
  );
} 