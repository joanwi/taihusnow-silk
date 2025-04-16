import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Wholesale Partnership Program - Taihu Silk',
  description: 'Join our wholesale partnership program for premium silk products with competitive advantages including customized production and comprehensive support.',
}

export default function WholesalePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl font-bold mb-6">Silk Duvet Wholesale Partnership Program</h1>
        <p className="text-gray-600 mb-8">
          As a professional silk duvet manufacturer with decades of experience, we offer premium silk bedding
          solutions for global buyers. Our wholesale partnership program provides you with competitive
          advantages including customized production, flexible ordering quantities, and comprehensive support.
        </p>
        <button className="bg-blue-700 text-white px-6 py-2 rounded">
          Contact Our Wholesale Specialist
        </button>
      </section>

      {/* How to Work With Us */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">How to Work With Us</h2>
        <p className="text-center text-gray-600 mb-8">Our simple four step collaboration process</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: 'Initial Inquiry',
              description: 'Submit your requirements via email or online form',
              details: ['Product specifications', 'Target markets and special requirements', 'Well respond within 24 hours']
            },
            {
              step: 2,
              title: 'Sample Confirmation',
              description: 'Ensure the product meets your expectations',
              details: ['Customization options and adjustments', 'Sample production time: 7-10 working days', 'International express delivery for your evaluation']
            },
            {
              step: 3,
              title: 'Order & Production',
              description: 'Seamless transition from contract to manufacturing',
              details: ['Terms', 'MOQ: 50pcs to initiate production', 'Production time: 20-45 days (depending on order volume)']
            },
            {
              step: 4,
              title: 'Quality Control & Delivery',
              description: 'Ensuring quality and timely delivery',
              details: ['100% pre-shipment quality inspection', 'Multiple logistics solutions', 'Track and trace until secure payment']
            }
          ].map((item) => (
            <div key={item.step} className="text-center p-6 border rounded-lg">
              <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <ul className="text-sm text-left">
                {item.details.map((detail, index) => (
                  <li key={index} className="mb-2">• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Minimum Order Quantities */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Minimum Order Quantities</h2>
        <p className="text-center text-gray-600 mb-8">We understand the needs of wholesalers of different scales and offer flexible ordering options</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="p-4 text-left">Product Category</th>
                <th className="p-4 text-left">Minimum Order Quantity</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: 'All-Season Silk Duvet', quantity: '150 pieces' },
                { category: 'Summer / Lightweight', quantity: '150 pieces' },
                { category: 'Winter Thick', quantity: '100 pieces' },
                { category: 'Hotel Collection', quantity: '200 pieces' }
              ].map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">{row.category}</td>
                  <td className="p-4">{row.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mixed Order Policy & Small Batch Solutions */}
      <section className="mb-16 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Mixed Order Policy</h3>
          <ul className="space-y-2">
            <li>• Combined orders of multiple products apply more flexible MOQs</li>
            <li>• Different sizes and styles can be mixed to reach total quantity</li>
            <li>• Special MOQ policies available for first-time cooperation</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Small Batch Solutions</h3>
          <ul className="space-y-2">
            <li>• Sample orders: 2-10 pieces/style</li>
            <li>• Limited batches tailored: 30-50 pieces/style</li>
            <li>• Reserved replenishment: Flexible based on long-term partnerships</li>
          </ul>
        </div>
      </section>

      {/* Sample Request */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Sample Request</h2>
        <p className="text-center text-gray-600 mb-8">We encourage clients to experience our product quality before placing large volume orders</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sample Request Process</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Complete the sample request form with detailed product specifications</li>
              <li>Pay for sample cost and international delivery</li>
              <li>Sample production (7-10 working days)</li>
              <li>International express delivery</li>
              <li>Feedback collection and adjustments (if needed)</li>
            </ol>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Sample Customization Options</h3>
            <ul className="space-y-2">
              <li>• Fabric material selection (silk, mulberry silk, etc.)</li>
              <li>• Silk filling weight customization</li>
              <li>• Size specification adjustments</li>
              <li>• Packaging and label customization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What grade of silk is used in your duvets?',
              a: 'We use high-grade long strand mulberry silk, the highest grade available, ensuring our products are lightweight, soft, and durable.'
            },
            {
              q: 'How long does it take from order to shipment?',
              a: 'Standard products typically require 20-25 days, while more custom products may need 30-45 days, depending on order size and product complexity.'
            },
            {
              q: 'What shipping methods do you offer?',
              a: 'We provide sea freight, air freight, and international express services, selecting the most appropriate method based on your time requirements and budget.'
            },
            {
              q: 'What payment methods do you accept?',
              a: 'T/T (wire transfer), L/C (letter of credit), PayPal for small orders, and Western Union. Large orders typically require a 30% deposit, with the 70% balance paid before shipment.'
            },
            {
              q: 'How do you handle quality issues?',
              a: 'We offer a comprehensive quality assurance policy. If quality issues arise, please provide photos and detailed descriptions, and well respond within 24 hours with solutions.'
            }
          ].map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Partners Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "Working with this silk duvet manufacturer has transformed our bedding collection. Their consistent quality and reliable delivery have made them our preferred supplier for all silk products.",
              author: "European Luxury Bedding Retailer",
              rating: 5
            },
            {
              text: "The custom silk duvets developed for our hotel chain have received outstanding guest feedback. Their attention to detail and ability to meet our specific requirements has exceeded our expectations.",
              author: "5-Star Hotel Chain Procurement Manager",
              rating: 5
            },
            {
              text: "From samples to bulk orders, their professional team met the entire process smooth and transparent. The product quality exceeded our expectations, and delivery was always on time.",
              author: "Australian Bedding Distributor",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
              <p className="font-semibold">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6">Start Your Wholesale Partnership Today</h2>
        <p className="text-gray-600 mb-8">
          Join the growing number of international businesses that trust our premium silk duvets. Our
          professional wholesale team is ready to support your business growth with exclusive products and
          services.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-700 text-white px-6 py-2 rounded">
            Schedule a Consultation
          </button>
          <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded">
            Download Wholesale Catalog
          </button>
          <button className="border border-blue-700 text-blue-700 px-6 py-2 rounded">
            Request Pricing
          </button>
        </div>
      </section>
    </div>
  )
}
