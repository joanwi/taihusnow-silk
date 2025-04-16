import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Certifications - Taihu Silk',
  description: 'View our comprehensive portfolio of certifications and industry recognition that demonstrate our commitment to quality and excellence.',
}

export default function CertificationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Commitment to Excellence Section */}
      <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h1>
          <p className="text-gray-600 mb-4">
            At Taihu, we take excellence in the highest standard of quality, sustainability
            and ethical manufacturing. Our commitment to excellence has been recognized
            through various certifications and industry awards.
          </p>
          <p className="text-gray-600">
            These certifications and awards verify our dedication to maintaining the
            highest quality standards while implementing environmentally friendly and
            socially responsible standards while supporting ethical business practices.
          </p>
        </div>
        <div className="bg-gray-200 aspect-video rounded-lg"></div>
      </section>

      {/* Our Certifications Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Certifications</h2>
        <p className="text-gray-600 mb-8">
          We maintain a comprehensive portfolio of international certifications that validate our commitment to quality, sustainability, and ethical manufacturing practices.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'ISO/IEC 17025 Certificate',
              description: 'International standard for testing and calibration laboratories, ensuring our quality control processes meet the highest standards.',
              validUntil: 'Valid through 2024'
            },
            {
              title: 'ISO 9001 Certificate',
              description: 'Demonstrates our commitment to consistently delivering products and services that meet customer and regulatory requirements.',
              validUntil: 'Valid through 2025'
            },
            {
              title: 'ISO 14001 Certificate',
              description: 'Recognizes our environmental management system and commitment to reducing our environmental impact.',
              validUntil: 'Valid through 2024'
            },
            {
              title: 'REACH Certificate',
              description: 'Confirms our compliance with EU regulations for chemical safety and responsible production.',
              validUntil: 'Valid through 2024'
            },
            {
              title: 'GOTS Certificate',
              description: 'Global Organic Textile Standard certification verifying our commitment to organic and sustainable textile production.',
              validUntil: 'Valid through 2024'
            },
            {
              title: 'BSCI Certificate',
              description: 'Business Social Compliance Initiative certification demonstrating our commitment to fair and ethical labor practices.',
              validUntil: 'Valid through 2024'
            }
          ].map((cert, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="bg-blue-100 h-40 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
              <p className="text-sm text-blue-600">{cert.validUntil}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Awards & Recognition Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Industry Awards & Recognition</h2>
        <p className="text-gray-600 mb-8">
          Our commitment to excellence has been recognized with numerous awards from industry organizations and trade associations.
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right">
                <h3 className="font-bold text-xl mb-2">2023</h3>
                <h4 className="font-semibold mb-2">Best Sustainable Textile Manufacturer</h4>
                <p className="text-gray-600">
                  Awarded for our unwavering commitment to sustainable practices and environmentally conscious production methods.
                </p>
              </div>
              <div className="bg-gray-200 aspect-video rounded-lg"></div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 aspect-video rounded-lg md:order-1"></div>
              <div>
                <h3 className="font-bold text-xl mb-2">2022</h3>
                <h4 className="font-semibold mb-2">Excellence in Export Quality</h4>
                <p className="text-gray-600">
                  Recognized for maintaining exceptional standards in export quality and customer satisfaction across international markets.
                </p>
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right">
                <h3 className="font-bold text-xl mb-2">2021</h3>
                <h4 className="font-semibold mb-2">Innovation in Textile Processing</h4>
                <p className="text-gray-600">
                  Awarded by the China Textile Forum for our pioneering silk processing methods that enhance the natural properties of silk while maintaining sustainability.
                </p>
              </div>
              <div className="bg-gray-200 aspect-video rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Industry Recognition</h2>
        <p className="text-gray-600 mb-8">
          Our products and innovative processes have been recognized by leading industry publications and organizations.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Featured in Textile Review Magazine',
              date: '2023',
              description: '"One of the most innovative sustainable textile manufacturers..." - International Textile Review'
            },
            {
              title: 'Home Textiles Today Top Supplier',
              date: '2023',
              description: '"Setting industry trends through innovative products and sustainable practices..." - Home Textiles Today'
            },
            {
              title: 'Hospitality Design Preferred Supplier',
              date: '2022',
              description: 'Recognized for excellence in hospitality textile solutions'
            },
            {
              title: 'Sustainable Business Awards Finalist',
              date: '2022',
              description: 'Shortlisted for environmental innovation'
            }
          ].map((recognition, index) => (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold">{recognition.title}</h3>
                <span className="text-sm text-gray-500">{recognition.date}</span>
              </div>
              <p className="text-gray-600">{recognition.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
