import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/taihu-snow-silk.webp"
          alt="About Us with Suzhou Taihu Snow Silk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container prose md:prose-lg mx-auto px-4 sm:px-6 lg:px-8">
          <h2 >Our Story</h2>
          <p>A journey of excellence in the textile industry since 1995</p>
          <p >
            Founded in 1995 in Suzhou, The historic center of China's silk industry. With our years of manufacturing technology in premium quality silk products and excellent service, we have grown into a leading global manufacturer and supplier.
          </p>
          <p >
            With over 25 years of experience, we combine traditional craftsmanship with modern technology to create masterpieces all products that meet the highest standards. Our state-of-the-art facility spans over 10,000 square meters and employs more than 200 skilled workers dedicated to quality and innovation.
          </p>
          <p>
            Our products are distributed to over 100 countries worldwide, with a strong presence in North America, Europe, Japan, South Korea, and Australia. We pride ourselves on being a trusted supplier to luxury hotels, high-end retailers, and discerning individual customers worldwide.
          </p>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Journey</h2>
          <p className="text-center text-gray-500 mb-12">Key milestones in our development as a leading silk manufacturer</p>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500"></div>

            {/* Timeline Items */}
            {[
              {
                year: '1995',
                content: 'Started business as a small family workshop in Suzhou, focusing on traditional silk craftsmanship'
              },
              {
                year: '2002',
                content: 'First major orders by Japan and South Korea clients, marking our expansion into the new equipment'
              },
              {
                year: '2007',
                content: 'Achieved both ISO 9001 certification and Oeko-Tex Standard 100 certification'
              },
              {
                year: '2012',
                content: 'Expanded to European and North American markets, built our first modern production plant'
              },
              {
                year: '2018',
                content: 'Introduced smart equipment in 10,000 sqm upgraded production automated silk fiber processing equipment'
              },
              {
                year: '2020',
                content: 'Advanced R&D capabilities to create new products, expanded distribution with new markets'
              },
              {
                year: '2023',
                content: 'Set the world record for the largest silk fabric roll, 8.5-yard production capacity reached 1 million meters'
              }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center mb-12">
                <div className="flex-1 text-right pr-8">
                  {index % 2 === 0 && (
                    <>
                      <h3 className="font-bold text-blue-600">{item.year}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </>
                  )}
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  {index % 2 === 1 && (
                    <>
                      <h3 className="font-bold text-blue-600">{item.year}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-center text-gray-500 mb-12">The principles that guide our business practices</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We are committed to excellence in every aspect of our business, from the materials we use to our customer service. We continuously strive to exceed expectations and deliver the best possible products.',
                icon: '🌟'
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and fairness. We build trust through ethical practices and keeping our promises to customers, employees, and partners.',
                icon: '🤝'
              },
              {
                title: 'Sustainability',
                description: 'We are committed to environmentally responsible practices throughout our production process. We minimize waste, reduce energy consumption, and strive to make a positive impact.',
                icon: '🌱'
              },
              {
                title: 'Innovation',
                description: 'We embrace innovation in our product and processes. We invest in cutting-edge technology and continuously improve to stay ahead in a competitive market.',
                icon: '💡'
              },
              {
                title: 'Partnership',
                description: 'We believe in building long-term relationships with our partners and customers. Through collaboration, mutual respect, and shared success, we grow together.',
                icon: '🤲'
              },
              {
                title: 'Passion',
                description: 'We are passionate about silk textile. We pursue artistry and dedication in every piece we create, sharing the luxury of silk with the world.',
                icon: '❤️'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Facilities</h2>
          <p className="text-center text-gray-500 mb-12">Take a walkthrough of our state of the art manufacturing facility</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              '/images/about/facility-1.jpg',
              '/images/about/facility-2.jpg',
              '/images/about/facility-3.jpg',
              '/images/about/facility-4.jpg',
              '/images/about/facility-5.jpg',
              '/images/about/facility-6.jpg'
            ].map((src, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Facility image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Leadership Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Leadership Team</h2>
          <p className="text-center text-gray-500 mb-12">Meet the people behind our success</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: 'David Lee',
                position: 'Founder & CEO',
                image: '/images/about/leader-1.jpg'
              },
              {
                name: 'Sarah Wilson',
                position: 'Chief Operations Officer',
                image: '/images/about/leader-2.jpg'
              },
              {
                name: 'Michael Chen',
                position: 'Production Director',
                image: '/images/about/leader-3.jpg'
              },
              {
                name: 'Emily Zhang',
                position: 'Quality Control Manager',
                image: '/images/about/leader-4.jpg'
              }
            ].map((leader, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-gray-600">{leader.position}</p>
                <div className="flex justify-center space-x-2 mt-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Our Certifications</h2>
          <p className="text-center text-gray-500 mb-12">International standards that validate our commitment to quality</p>

          <div className="flex justify-center space-x-12">
            {[
              {
                name: 'ISO 9001',
                image: '/images/about/cert-1.png'
              },
              {
                name: 'Oeko-Tex',
                image: '/images/about/cert-2.png'
              },
              {
                name: 'Quality',
                image: '/images/about/cert-3.png'
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
