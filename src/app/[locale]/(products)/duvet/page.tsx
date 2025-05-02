'use client'
import Image from 'next/image';
import ProductCarousel from '@/components/ProductCarousel';

const products = [
  {
    id: 1,
    image: "/images/Custom-Wholesale-Silk-Duvet-5.webp",
    title: "Printed Silk Bedding",
    description: "Sinosilk's printed silk bedding infuses your personality with the delicacy of Grade 6A silk satin. Whether you prefer bold designs or intricate patterns, we can reproduce them with precision in eco-conscious printing – our factory is equipped with top-rate machines and skilled technicians. Besides, our in-house artists are on hand at every point of your designing, solving any challenges you meet.",
    href: "/summer-duvet",
  },
  {
    id: 2,
    image: "/images/Custom-Wholesale-Silk-Duvet-6.webp",
    title: "Two-tone Silk Bedding",
    description: "Feeling monotonous about solid colors? Our two-tone silk bedding offers you the perfect solution. This collection of products assumes two colors respectively on their obverses and reverses. Thus, you can enjoy two using experiences from one set of silk bedding. If you waver on choosing your personal matching, contact us and we will give you advice based on your preferences and aesthetic perspective.",
    href: "/summer-duvet",
  },
  {
    id: 3,
    image: "/images/Custom-Wholesale-Silk-Duvet-1.webp",
    title: "Silk Jacquard Bedding",
    description: "Sinosilk's silk jacquard bedding boasts lustrous hues and subtle patterns that exude sophistication and glamour. The custom jacquard designs can add a unique touch of artistry, making silk bedding sets captivating masterpieces. Despite their visually stunning appeal, these beddings still furnish your sleep with incredible comfort.",
    href: "/summer-duvet",
  },
  {
    id: 4,
    image: "/images/Custom-Wholesale-Silk-Duvet-2.webp",
    title: "Classic Silk Duvet",
    description: "Our classic silk duvet is crafted from 100% mulberry silk, offering exceptional breathability and comfort for all seasons. The timeless design fits any bedroom style, while the natural silk filling ensures a restful night's sleep.",
    href: "/products/classic-silk-duvet",
  },
  {
    id: 5,
    image: "/images/Custom-Wholesale-Silk-Duvet-3.webp",
    title: "Luxury Silk Bedding Set",
    description: "Upgrade your bedroom with our luxury silk bedding set, including duvet, pillowcases, and sheets. Each piece is made from premium silk for a smooth, skin-friendly touch and elegant look, perfect for those who value both comfort and style.",
    href: "/products/luxury-silk-bedding-set",
  },
];

export default function WinterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center">
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
          <div className="">
            <h1 className="text-4xl text-white md:text-5xl font-bold  mb-6">
            Custom Wholesale Silk Duvet
            </h1>
            <ul className="text-white text-base space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 border border-white rounded-full mr-2" aria-hidden="true"></span>
                Indulge in the ultimate luxury and comfort
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 border border-white rounded-full mr-2" aria-hidden="true"></span>
                Hypoallergenic haven
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 border border-white rounded-full mr-2" aria-hidden="true"></span>
                Wake up to beautiful skin and hair
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 border border-white rounded-full mr-2" aria-hidden="true"></span>
                Long-lasting quality stands the test of time
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 border border-white rounded-full mr-2" aria-hidden="true"></span>
                Eco-Friendly Elegance
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 border border-white rounded-full mr-2" aria-hidden="true"></span>
                No MOQ, considerable discounts for bulk orders
              </li>
            </ul>
            <button className="bg-white text-gray-900 p-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Send Inquiry Now
            </button>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Elevating Sleep and Bedroom by Sinosilk's Bespoke Silk Duvet</h2>
            <p className="text-gray-600 text-lg mb-4 leading-8">
              Experience luxury with Taihu Snow's handmade 100% Mulberry Silk Duvet/Quilt, crafted from 6A Grade silk (16mm–25mm). Certified by OEKO-Tex Standard 100, this hypoallergenic, breathable, and temperature-regulating quilt is perfect for all seasons and ages. Available in customizable sizes (Twin, Queen, King, Super King) and colors (Ivory, Black, Pink, etc.), it's ideal for home, hotel, or travel use. With a soft, smooth texture, it promotes skin care and allergy relief. Minimum order of 30 pieces, with samples available. Proudly produced by Suzhou Taihu Snow Silk Co., Ltd., a leader in silk craftsmanship since 2002.
            </p>
            <p className="text-gray-600 text-lg leading-8">
              Experience luxury with Taihu Snow's handmade 100% Mulberry Silk Duvet/Quilt, crafted from 6A Grade silk (16mm–25mm). Certified by OEKO-Tex Standard 100, this hypoallergenic, breathable, and temperature-regulating quilt is perfect for all seasons and ages. Available in customizable sizes (Twin, Queen, King, Super King) and colors (Ivory, Black, Pink, etc.), it's ideal for home, hotel, or travel use. With a soft, smooth texture, it promotes skin care and allergy relief. Minimum order of 30 pieces, with samples available. Proudly produced by Suzhou Taihu Snow Silk Co., Ltd., a leader in silk craftsmanship since 2002.
            </p>
          </div>
        </div>
      </section>

      {/* Silk Duvets Collection Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Discover Our Curated Collection of Silk Duvets</h2>
            <p className="text-gray-600 text-lg mb-4 leading-8"> 
            Sinosilk offers a full range of silk bedding, available both as individual items and in sets. Made from 100% mulberry silk satin, our products come in various thickness options, including 16, 19, 22, 25, and 30 momme. Our silk bedding set allows for flexible combinations and matching. Typically, a set includes: 
            </p>
            <ul className="list-disc list-inside text-gray-600 text-lg mb-4 leading-8">
              <li>Silk Duvet</li>
              <li>Silk Pillowcase</li>
              <li>Silk Pillow</li>
            </ul>
            <ProductCarousel products={products} />
          </div>
        </div>
      </section>

      {/* Customized Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-4xl text-center font-bold text-gray-900 mb-6">Custom Details for Silk Bedding</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {/* Sizes Available */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {/* Ruler Icon */}
                  <svg width="56" height="56" fill="none" stroke="#D1A07A" strokeWidth="2" viewBox="0 0 56 56"><rect x="8" y="20" width="40" height="16" rx="4" stroke="#D1A07A" strokeWidth="2" fill="none"/><path d="M16 24v8M24 24v8M32 24v8M40 24v8" stroke="#D1A07A"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sizes Available</h3>
                <ul className="text-gray-700 text-base mb-2 text-left inline-block">
                  <li>You can custom silk bedding of common sizes:</li>
                  <li className="mt-2 list-disc list-inside">Silk pillowcases: Standard: 20" x 26"; Queen: 20" x 30"; King: 20" x 36"</li>
                  <li className="list-disc list-inside">Silk bed sheet: Twin: 66" x 96"; Full: 81" x 96"; Queen: 90" x 102"; King: 108" x 102"; California King: 102" x 110"</li>
                  <li className="list-disc list-inside">Silk duvet covers: Twin: 68" x 86"; Full/Queen: 90" x 94"; King: 104" x 94"; California King: 110" x 100"</li>
                </ul>
                <p className="text-gray-700 text-base">You can also customize other sizes tailored to your needs.</p>
              </div>
              {/* Embroidery & Stitching */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {/* Needle Icon */}
                  <svg width="56" height="56" fill="none" stroke="#D1A07A" strokeWidth="2" viewBox="0 0 56 56"><path d="M14 42L42 14M28 28l8-8" stroke="#D1A07A"/><circle cx="14" cy="42" r="4" stroke="#D1A07A"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Embroidery & Stitching</h3>
                <p className="text-gray-700 text-base">With our expert design support, you can have your personalized monograms, patterns, or designs embroidered or stitched on the silk bedding sets.</p>
              </div>
              {/* Closure & Edge of Silk Pillowcases */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {/* Pillowcase Icon */}
                  <svg width="56" height="56" fill="none" stroke="#D1A07A" strokeWidth="2" viewBox="0 0 56 56"><rect x="12" y="16" width="32" height="24" rx="6" stroke="#D1A07A"/><rect x="18" y="22" width="20" height="12" rx="3" stroke="#D1A07A"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Closure & Edge of Silk Pillowcases</h3>
                <p className="text-gray-700 text-base mb-2">By closure type, available options are envelope pillowcases and zipper pillowcases.</p>
                <p className="text-gray-700 text-base">By flange, available options are Oxford pillowcases, terse pillowcases, housewife pillowcases, and custom patterned flange.</p>
              </div>
              {/* Packaging & Labeling */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {/* Box Icon */}
                  <svg width="56" height="56" fill="none" stroke="#D1A07A" strokeWidth="2" viewBox="0 0 56 56"><rect x="12" y="16" width="32" height="24" rx="4" stroke="#D1A07A"/><path d="M12 24h32" stroke="#D1A07A"/><path d="M28 16v24" stroke="#D1A07A"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Packaging & Labeling</h3>
                <p className="text-gray-700 text-base mb-2">By default, our silk bedding set is packed with an Opp bag. Sinosilk also supplies various custom packaging services. We can assist in designing your tailor-made packages, like gift packaging.</p>
                <p className="text-gray-700 text-base mb-2">You can customize logos, labels, care labels, and more here cooperating with our professional designers. Rest assured that the outcomes will be of fine quality and valued sense based on your specific needs.</p>
                <p className="text-gray-700 text-base">Each Sinosilk's silk bedding set is manufactured with attention to detail to ensure functionality and aesthetics. Send us inquiries to experience the ultimate in style and dedication.</p>
              </div>
            </div>
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

      {/* Product Cards Section */}
      
      
    </>
  );
}
