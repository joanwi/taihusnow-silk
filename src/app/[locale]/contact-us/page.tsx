import Image from 'next/image';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Reach Us</h2>
              
              {/* Phone */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>+86 123 4567 8910</p>
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
                  <p>info@silkduvet.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="mb-2">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Address
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>No. 2428, Zhenze 318 National Road</p>
                  <p>Suzhou, Jiangsu</p>
                  <p>China</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-6">Location</h2>
          <div className="h-[600px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8120.289431546677!2d120.50338600000002!3d30.91959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b340ed1591ad4f%3A0xfc838ec26440573a!2z6IuP5bee5aSq5rmW6Zuq5Lid57u45a625bGF5pyJ6ZmQ5YWs5Y-4!5e1!3m2!1sen!2shk!4v1746668227595!5m2!1sen!2shk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">How quickly can I expect a response to my inquiry?</h3>
              <p className="text-gray-600">We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our sales team directly.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">How can I request product samples?</h3>
              <p className="text-gray-600">You can request samples by selecting "Sample Request" in the inquiry type of our contact form, or by emailing wholesale@silkduvet.com with your specific requirements.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Do you have representatives who can visit our location?</h3>
              <p className="text-gray-600">Yes, for significant wholesale opportunities, our representatives can arrange visits to your location. Please contact our wholesale department to discuss this option.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">How can I find the status of my inquiry or order?</h3>
              <p className="text-gray-600">For inquiries about order status, please email support@silkduvet.com with your order number or contact your assigned account manager directly.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
