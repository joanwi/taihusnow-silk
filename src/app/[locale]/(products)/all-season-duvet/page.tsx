import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function WinterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/Custom-Wholesale-Silk-Duvet-1.webp"
            alt="Custom Wholesale Silk Duvet"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold  mb-6">
            Custom Wholesale Silk Duvet
            </h1>
            <p className="text-lg  mb-8">
            OEKO-Tex & 100% Mulberry Silk & Washable
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Send Inquiry
            </button>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <p className="text-gray-600 text-lg leading-8">
              Experience luxury with Taihu Snow's handmade 100% Mulberry Silk Duvet/Quilt, crafted from 6A Grade silk (16mm–25mm). Certified by OEKO-Tex Standard 100, this hypoallergenic, breathable, and temperature-regulating quilt is perfect for all seasons and ages. Available in customizable sizes (Twin, Queen, King, Super King) and colors (Ivory, Black, Pink, etc.), it's ideal for home, hotel, or travel use. With a soft, smooth texture, it promotes skin care and allergy relief. Minimum order of 30 pieces, with samples available. Proudly produced by Suzhou Taihu Snow Silk Co., Ltd., a leader in silk craftsmanship since 2002.
            </p>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/Custom-Wholesale-Silk-Duvet-2.webp"
                alt="Custom Wholesale Silk Duvet"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Silk Duvet Details
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Material:</span>
                  <span className="text-gray-600">100% Mulberry Silk, 6A Grade</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Fabric Options:</span>
                  <span className="text-gray-600">16mm, 19mm, 22mm, 25mm</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Colors:</span>
                  <span className="text-gray-600">Ivory, Black, Pink, Beige, Navy, Blue, Purple, Green, Rose Gold, Grey, Red, or customized colors</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Sizes:</span>
                  <span className="text-gray-600">Twin, Queen, King, Super King, or customized sizes</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Season:</span>
                  <span className="text-gray-600">All Season</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Weight:</span>
                  <span className="text-gray-600">Customizable</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Usage:</span>
                  <span className="text-gray-600">Home, Hotel, Hospital, Travel, Camping</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Age Group:</span>
                  <span className="text-gray-600">Baby, Children, Middle-Aged, Aged</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Certifications:</span>
                  <span className="text-gray-600">OEKO-Tex Standard 100, BSCI</span>
                </li>
              </ul>
              <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Send Inquiry Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Silk Duvet Features
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Material:</span>
                  <span className="text-gray-600">Handmade 100% Mulberry Silk Quilt</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Health Benefits:</span>
                  <span className="text-gray-600">Hypoallergenic, suitable for asthma and allergy relief</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Comfort:</span>
                  <span className="text-gray-600">Breathable, soft, smooth, and comfortable</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Skin Care:</span>
                  <span className="text-gray-600">Anti-aging and beneficial for skin care</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Temperature Control:</span>
                  <span className="text-gray-600">Temperature-regulating for hot and cold sleepers</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Gift Option:</span>
                  <span className="text-gray-600">High-quality craftsmanship, ideal for gifting on occasions like Thanksgiving, Christmas, or anniversaries</span>
                </li>
              </ul>
              <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Send Inquiry Now
              </button>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/Custom-Wholesale-Silk-Duvet-3.webp"
                alt="Silk Duvet Features"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/Custom-Wholesale-Silk-Duvet-4.webp"
                alt="Custom Service"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Custom Service
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Bulk price:</span>
                  <span className="text-gray-600">$30-$100/Negotiable</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">MOQ:</span>
                  <span className="text-gray-600">30 pieces; no MOQ for stock products</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Samples:</span>
                  <span className="text-gray-600">Samples offered, sample fee refunded in subsequent orders</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Production:</span>
                  <span className="text-gray-600">Over 300,000 pieces annually</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-gray-900">Shipping:</span>
                  <span className="text-gray-600">Cooperation with UPS, DHL, FedEx, and other logistics companies for favorable freight prices</span>
                </li>
              </ul>
              <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Send Inquiry Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Different Types of Silk Duvet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Thermal Silk Pajama Set',
                image: '/images/winter/thermal-pajama.jpg',
              },
              {
                title: 'Winter Silk Robe',
                image: '/images/winter/silk-robe.jpg',
              },
              {
                title: 'Quilted Silk Nightgown',
                image: '/images/winter/nightgown.jpg',
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">Is your fabric 100% mulberry silk?</p>
                <p className="text-gray-600">We use non-toxic 6a Grade 100% mulberry silk fabric.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">DO you have OEKO-TEX and BSCI certification?</p>
                <p className="text-gray-600">Yes we have many certificates such as 3 national patents, 43 practical patents, and 1800 copyrights.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">May I have a sample？</p>
                <p className="text-gray-600">We can offer samples.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">What is your MOQ?</p>
                <p className="text-gray-600">MOQ is 30 PCS. No MOQ requirements for stock products. Please contact us to get a free sample.</p>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">What is your company's production capacity?</p>
                <p className="text-gray-600">We have our own factory with more than 500 employees, annual sales of 1.1 million pieces of silk pillowcases, 1.2 million pieces of silk eye masks, 1.5 million pieces of silk hair accessories, etc.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">What shipping method do you use?</p>
                <p className="text-gray-600">We have cooperated with UPS, DHL, FedEx, and other logistics companies for many years. We have a large export volume and the most favorable freight price.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">What customized service do you provide?</p>
                <p className="text-gray-600">We provide product color, size, printing pattern, packaging box, label customization etc.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">May I get a cheaper price?</p>
                <p className="text-gray-600">A workable discount will be given if there is a large quantity. More quantity, the less cost.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
