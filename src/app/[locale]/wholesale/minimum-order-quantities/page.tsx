import { ContactButton } from '@/components/ContactButton';
import Breadcrumb from '@/components/Breadcrumb';

export default function MinimumOrderQuantities() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Wholesale', href: '/wholesale' }, { label: 'Minimum Order Quantities', isCurrent: true }]} />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Minimum Order Quantities</h1>
        <p className="text-gray-600">
          At Taihu Silk, we specialize in crafting premium silk duvets and bedding for wholesale partners worldwide. 
          Our products, made from 100% Mulberry silk, offer unmatched luxury, comfort, and sustainability.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our MOQ Policy</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Standard Products</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Silk Duvets: 100 units per style/size</li>
              <li>Silk Bedding Sets: 50 sets per design</li>
              <li>Silk Pillowcases: 200 units per color/size</li>
              <li>Other Silk Products: 150 units per item</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Flexible Options</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Mixed Orders: Total MOQ of 300 units</li>
              <li>Custom Orders: Contact for specific requirements</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Choose Our Silk Products?</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Quality & Sustainability</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>100% Mulberry silk</li>
              <li>OEKO-TEX certified</li>
              <li>Hypoallergenic and durable</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Business Benefits</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>50,000+ units annual capacity</li>
              <li>OEM/ODM services available</li>
              <li>Private labeling support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How to Start a Partnership</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Process</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Contact our team</li>
              <li>Request samples</li>
              <li>Finalize details</li>
              <li>Place your order</li>
            </ol>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Support</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Marketing materials provided</li>
              <li>High-quality product images</li>
              <li>Product brochures</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Can I order below the MOQ?</h3>
            <p>For first-time partners, we may offer flexible terms on a case-by-case basis.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">What is the production lead time?</h3>
            <p>Standard orders typically take 4-6 weeks, depending on order size and customization.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Do you provide samples?</h3>
            <p>Yes, samples are available for a nominal fee, with shipping costs covered by the buyer.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
            <p>We accept bank transfers and major credit cards. A 30% deposit is required upon order confirmation.</p>
          </div>
        </div>
      </section>

      <section className="text-center p-8 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Start Your Wholesale Journey Today</h2>
        <p className="mb-4">Contact our wholesale team to discuss your needs. We respond to all inquiries within 24 hours.</p>
        <ContactButton />
      </section>
    </>
  );
} 