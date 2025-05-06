import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Contact Details</h2>
              
              {/* Phone */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Sales & Support: +86 123 4567 8910</p>
                  <p>Wholesale Department: +86 123 4567 8911</p>
                  <p>Office Hours: Monday-Friday, 9:00 AM - 6:00 PM (GMT+8)</p>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>General Inquiries: info@silkduvet.com</p>
                  <p>Wholesale: wholesale@silkduvet.com</p>
                  <p>Customer Support: support@silkduvet.com</p>
                </div>
              </div>

              {/* Headquarters */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Headquarters
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Silk Industrial Park, Building A5</p>
                  <p>123 Silk Road, Suzhou</p>
                  <p>Jiangsu Province, 215000</p>
                  <p>China</p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217358.47845124814!2d120.43796566279163!3d31.298974238333207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b3a5d7f5e0b2b7%3A0x47e575a8fa9c0201!2sSuzhou%2C%20Jiangsu%2C%20China!5e0!3m2!1sen!2sus!4v1710400631669!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Offices Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* China Office */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">China Headquarters</h3>
              <div className="space-y-2 text-gray-600">
                <p>Silk Industrial Park, Building A5</p>
                <p>123 Silk Road, Suzhou</p>
                <p>Jiangsu Province, 215000</p>
                <p>Phone: +86 123 4567 8910</p>
                <p>Email: info@silkduvet.com</p>
              </div>
            </div>

            {/* Europe Office */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Europe Office</h3>
              <div className="space-y-2 text-gray-600">
                <p>Textile Business Center</p>
                <p>45 Market Street</p>
                <p>London, EC2A 4PQ</p>
                <p>United Kingdom</p>
                <p>Phone: +44 20 1234 5678</p>
                <p>Email: europe@silkduvet.com</p>
              </div>
            </div>

            {/* North America Office */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">North America Office</h3>
              <div className="space-y-2 text-gray-600">
                <p>Bedding Solutions Inc.</p>
                <p>789 Business Avenue, Suite 300</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <p>Phone: +1 212 555 6789</p>
                <p>Email: usa@silkduvet.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Frequently Asked Contact Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Q: How quickly can I expect a response to my inquiry?</h3>
              <p className="text-gray-600">A: We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our sales team directly.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Q: How can I request product samples?</h3>
              <p className="text-gray-600">A: You can request samples by selecting "Sample Request" in the inquiry type of our contact form, or by emailing wholesale@silkduvet.com with your specific requirements.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Q: Do you have representatives who can visit our location?</h3>
              <p className="text-gray-600">A: Yes, for significant wholesale opportunities, our representatives can arrange visits to your location. Please contact our wholesale department to discuss this option.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Q: How can I find the status of my inquiry or order?</h3>
              <p className="text-gray-600">A: For inquiries about order status, please email support@silkduvet.com with your order number or contact your assigned account manager directly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
