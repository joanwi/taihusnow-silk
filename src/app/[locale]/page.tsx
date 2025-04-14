import { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import BenefitsSection from "@/components/BenefitsSection";
import CategoryGrid from "@/components/CategoryGrid";
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Taihu Silk - Premium Silk Duvets & Comforters",
  description: "Experience the luxury of natural silk for a better night's sleep with our premium silk duvets and comforters.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />
      <CategoryGrid />
      <FeaturedProducts />
      <BenefitsSection />
      
      {/* How to Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">How to Work With Us</h2>
          <p className="text-center text-gray-600 mb-12">Our simple four-step collaboration process.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Initial Inquiry</h3>
              <div className="text-gray-600 space-y-2">
                <p>Submit your requirements via email or contact form</p>
                <ul className="text-sm">
                  <li>• Product types, specifications, and quantities</li>
                  <li>• Target market and special requirements</li>
                  <li>• Get response within 24 hours</li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Sample Confirmation</h3>
              <div className="text-gray-600 space-y-2">
                <p>Ensure the product meets your specification</p>
                <ul className="text-sm">
                  <li>• Customized samples based on your requirements</li>
                  <li>• Sample production time: 7-10 working days</li>
                  <li>• Professional express delivery for your evaluation</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Order & Production</h3>
              <div className="text-gray-600 space-y-2">
                <p>Seamless transition from contract to manufacturing</p>
                <ul className="text-sm">
                  <li>• Formal contract plus confirming order</li>
                  <li>• 30% deposit for initial production</li>
                  <li>• Production cycle: 20-25 days (depending on order volume)</li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Quality Control & Delivery</h3>
              <div className="text-gray-600 space-y-2">
                <p>Ensuring quality and timely delivery</p>
                <ul className="text-sm">
                  <li>• 100% QC inspection before shipment</li>
                  <li>• Complete QC reports and certification</li>
                  <li>• Flexible logistics solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimum Order Quantities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Minimum Order Quantities</h2>
          <p className="text-center text-gray-600 mb-12">We understand the needs of wholesalers of different scales and offer flexible ordering options.</p>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-900 text-white">
                    <th className="px-6 py-4 text-left">Product Category</th>
                    <th className="px-6 py-4 text-left">Minimum Order Quantity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">All Season Silk Duvets</td>
                    <td className="px-6 py-4">100 pieces</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Summer Lightweight</td>
                    <td className="px-6 py-4">150 pieces</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Winter Thick</td>
                    <td className="px-6 py-4">100 pieces</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Hotel Collection</td>
                    <td className="px-6 py-4">200 pieces</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Mixed Order Policy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Combined orders of multiple products enjoy more flexible MOQs</li>
                  <li>• Different sizes and styles can be mixed to reach total quantity</li>
                  <li>• Special MOQ policies available for first-time cooperation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Small Batch Solutions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sample orders: 5-10 pieces/style</li>
                  <li>• Market testing batches: 30-50 pieces/style</li>
                  <li>• Seasonal replenishment: Flexible based on long-term partnership</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/contact"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
              >
                Contact Us to Discuss Your Specific Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Request */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">Sample Request</h2>
          <p className="text-center text-gray-600 mb-12">We encourage clients to experience our product quality before placing large-volume orders.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Sample Request Process</h3>
              <ol className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="font-bold">1.</span>
                  <span>Complete the sample request form with detailed product specifications</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">2.</span>
                  <span>Pay for sample cost and international shipping</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">3.</span>
                  <span>Sample production (7-10 working days)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">4.</span>
                  <span>International express delivery</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">5.</span>
                  <span>Feedback collection and adjustments (if needed)</span>
                </li>
              </ol>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Sample Cost Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Standard product samples: Cost price + shipping</li>
                  <li>• Custom samples: Reasonable fees based on customization requirements</li>
                  <li>• Long-term partners: Sample costs can be deducted from subsequent bulk orders</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Sample Customization Options</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fabric material selection (silk, cotton/silk blend, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Silk filling weight customization</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Size specification adjustments</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Packaging and label customization</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link 
                  href="/contact?type=sample"
                  className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Request Samples Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Frequently Asked Questions</h2>
          
          {/* FAQ Categories */}
          <div className="flex justify-center gap-4 mb-8">
            {['Product', 'Orders', 'Logistics', 'Payment', 'After-Sales'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Q: What grade of silk is used in your duvets?</h3>
              <p className="text-gray-600">A: We use 6A grade long-strand mulberry silk, the highest grade available, ensuring our products are lightweight, soft, and durable.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Q: How long does it take from order to shipment?</h3>
              <p className="text-gray-600">A: Standard products typically require 20-30 days, while volume or custom products may need 30-45 days, depending on order size and product complexity.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Q: What shipping methods do you offer?</h3>
              <p className="text-gray-600">A: We provide sea freight, air freight, and international express services, selecting the most appropriate method based on your time requirements and budget.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Q: What payment methods do you accept?</h3>
              <p className="text-gray-600">A: T/T (wire transfer), L/C (letter of credit), PayPal (for small orders), and Western Union. Large orders typically require a 30% deposit, with the 70% balance paid before shipment.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Q: How do you handle quality issues?</h3>
              <p className="text-gray-600">A: We offer a comprehensive quality assurance policy. If quality issues arise, please provide photos and detailed descriptions, and we'll resolve either 24 hours with solutions.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/faq"
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              View More FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* What Our Partners Say */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">What Our Partners Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Working with this silk duvet manufacturer has transformed our bedding collection. Their consistent quality and reliable delivery have made them our preferred supplier."</p>
              <p className="font-semibold text-blue-900">— European Luxury Bedding Retailer</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"The custom silk duvets developed for our hotel chain have received outstanding guest feedback. Their attention to detail and ability to meet our specifications is exceptional."</p>
              <p className="font-semibold text-blue-900">— 5-Star Hotel Chain Procurement Manager</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"From samples to bulk orders, their professionalism has made the entire process smooth and transparent. The product quality exceeds our expectations, and our customers absolutely love them."</p>
              <p className="font-semibold text-blue-900">— Australian Bedding Distributor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Partnership */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Start Your Wholesale Partnership Today</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing number of international businesses that trust our expertise. Our professional wholesale team is ready to support your business growth with excellent products and services.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/catalog"
              className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              Download Wholesale Catalog
            </Link>
            <Link 
              href="/pricing"
              className="inline-block border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              Request Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 