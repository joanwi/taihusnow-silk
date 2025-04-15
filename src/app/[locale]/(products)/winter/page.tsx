import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function WinterPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/winter/hero-bg.jpg"
            alt="Winter Collection"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Winter Silk Collection
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Experience the luxurious warmth and comfort of our premium silk sleepwear, specially designed for the winter season.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Request For Latest Price
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Wholesale Winter Silk Collection
            </h2>
            <p className="text-gray-600 mb-8">
              Our winter silk collection combines luxury with warmth, offering you the perfect balance of comfort and elegance. Each piece is carefully crafted using the finest quality silk, enhanced with special thermal properties to keep you cozy during the cold season.
            </p>
          </div>
        </div>
      </section>

      {/* Product Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Different Types of Winter Silk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Thermal Silk Pajama Set',
                image: '/images/winter/thermal-pajama.jpg',
                price: '$89.99'
              },
              {
                title: 'Winter Silk Robe',
                image: '/images/winter/silk-robe.jpg',
                price: '$79.99'
              },
              {
                title: 'Quilted Silk Nightgown',
                image: '/images/winter/nightgown.jpg',
                price: '$69.99'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-80">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">From {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/winter/comfort.jpg"
                alt="Comfort"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Eternal Comfort - Winter Silk
              </h2>
              <p className="text-gray-600 mb-6">
                Our winter silk collection features innovative thermal technology while maintaining the luxurious feel of pure silk. The unique weaving process creates small air pockets that trap warmth, providing natural insulation without bulk.
              </p>
              <ul className="space-y-4">
                {[
                  'Temperature regulating properties',
                  'Breathable and moisture-wicking',
                  'Hypoallergenic material',
                  'Durable and long-lasting'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Send Inquiry Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Silk Pillowcase',
                image: '/images/winter/pillowcase.jpg'
              },
              {
                title: 'Silk Bonnet',
                image: '/images/winter/bonnet.jpg'
              },
              {
                title: 'Silk Scrunchie',
                image: '/images/winter/scrunchie.jpg'
              },
              {
                title: 'Silk Headband',
                image: '/images/winter/headband.jpg'
              }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center text-gray-900 font-medium">
                  {product.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
