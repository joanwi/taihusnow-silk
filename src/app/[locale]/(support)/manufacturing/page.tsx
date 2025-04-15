import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ManufacturingPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Premium Silk Direct Manufacturing
              </h1>
              <p className="text-gray-600 mb-6">
                With over 25 years of experience in silk textile, we develop and deliver high-quality silk products that are trusted by luxury hotels and retailers worldwide. Our commitment to excellence starts from the raw material selection and continues through every step of the manufacturing process.
              </p>
              <p className="text-gray-600">
                Our state-of-the-art facility combines traditional craftsmanship with modern technology to produce silk products that meet the highest quality standards. Every piece we create is a testament to our dedication to quality and innovation.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/manufacturing/hero.jpg"
                alt="Silk Manufacturing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Manufacturing Process
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Our silk production process follows a meticulous journey that ensures consistent quality and exceptional performance. Each step is carefully monitored and controlled.
          </p>

          <div className="space-y-24">
            {[
              {
                step: 'STEP 01',
                title: 'Material Selection',
                description: 'We source the highest quality raw silk from the most reputable suppliers in China. Each batch undergoes rigorous testing to ensure it meets our quality standards and is perfect for the intended end use.',
                image: '/images/manufacturing/step1.jpg'
              },
              {
                step: 'STEP 02',
                title: 'Engineering Process',
                description: 'Our engineering team uses advanced software to design the perfect fabric structure. By combining traditional knowledge with modern technology, we create optimal specifications for each product type.',
                image: '/images/manufacturing/step2.jpg'
              },
              {
                step: 'STEP 03',
                title: 'Silk Monitoring & Testing',
                description: 'Every batch of silk undergoes comprehensive testing in our state-of-the-art laboratory. We monitor factors like tensile strength, color fastness, and durability to ensure consistent quality.',
                image: '/images/manufacturing/step3.jpg'
              },
              {
                step: 'STEP 04',
                title: 'Silk Mass Processing',
                description: 'The initial silk processing step during which we optimize the raw material properties. This includes cleaning, degumming, and preparing the silk for further processing.',
                image: '/images/manufacturing/step4.jpg'
              },
              {
                step: 'STEP 05',
                title: 'Weaving & Material Control',
                description: 'Our skilled artisans operate advanced looms to create intricate patterns and textures. Each piece is carefully monitored during production to maintain consistent quality.',
                image: '/images/manufacturing/step5.jpg'
              },
              {
                step: 'STEP 06',
                title: 'Quality & Finishing',
                description: 'The final stage involves a thorough quality check of the finished fabric. Each piece undergoes multiple inspections to ensure it meets our high standards before packaging.',
                image: '/images/manufacturing/step6.jpg'
              }
            ].map((step, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="relative h-[400px]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <span className="text-blue-600 font-medium">{step.step}</span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <span className="text-blue-600 font-medium">{step.step}</span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="relative h-[400px]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Standards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Quality Control Standards
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Quality is at the heart of everything we do. Our comprehensive quality control system ensures that each silk product meets our strict standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Raw Material Inspection',
                description: 'Every batch of raw materials undergoes strict testing for quality and purity. We only accept materials that meet our exacting standards.',
                icon: '🔍'
              },
              {
                title: 'In-Process Quality Checks',
                description: 'Regular quality checks throughout the manufacturing process ensure consistency and identify any potential issues early.',
                icon: '⚡'
              },
              {
                title: 'Weight & Density Testing',
                description: 'Each fabric batch undergoes rigorous testing to ensure consistent weight and thickness throughout.',
                icon: '⚖️'
              },
              {
                title: 'Process Performance Testing',
                description: 'Continuous monitoring of production parameters ensures consistent quality across all batches.',
                icon: '📊'
              },
              {
                title: 'Material Management Testing',
                description: 'We test for color fastness, shrinkage, and durability to ensure our products maintain their quality over time.',
                icon: '🧪'
              },
              {
                title: 'Final Inspection',
                description: 'Every product undergoes a comprehensive final inspection before packaging and shipping.',
                icon: '✅'
              }
            ].map((standard, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{standard.title}</h3>
                <p className="text-gray-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Manufacturing Facilities
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Take a virtual tour through our state-of-the-art manufacturing facilities and experience the making of our silk products firsthand.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Quality Control Laboratory',
                image: '/images/manufacturing/lab.jpg'
              },
              {
                title: 'Advanced Testing Department',
                image: '/images/manufacturing/testing.jpg'
              },
              {
                title: 'Production Department',
                image: '/images/manufacturing/production.jpg'
              },
              {
                title: 'Packaging Department',
                image: '/images/manufacturing/packaging.jpg'
              }
            ].map((facility, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-lg font-semibold">{facility.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Certifications
          </h2>
          <p className="text-center text-gray-500 mb-12">
            Our commitment to quality has earned us multiple certifications from renowned standards and testing bodies.
          </p>

          <div className="flex justify-center space-x-12">
            {[
              {
                name: 'ISO 9001',
                image: '/images/manufacturing/cert-1.png'
              },
              {
                name: 'Oeko-Tex',
                image: '/images/manufacturing/cert-2.png'
              }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-900 font-medium">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
