import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AutoCarousel from "@/components/product/AutoCarousel";
import { ContactButton } from '@/components/ContactButton';
import ProductsBreadcrumb from '@/components/ProductsBreadcrumb';
const products = [
  {
    id: 1,
    image: "/images/Custom-Wholesale-Silk-Duvet-1.webp",
    title: "Printed Silk Bedding",
    description: "Sinosilk's printed silk bedding infuses your personality with the delicacy of Grade 6A silk satin. Whether you prefer bold designs or intricate patterns, we can reproduce them with precision in eco-conscious printing – our factory is equipped with top-rate machines and skilled technicians. Besides, our in-house artists are on hand at every point of your designing, solving any challenges you meet.",
    href: "/summer-duvet",
  },
  {
    id: 2,
    image: "/images/long-strand-mulberry-silk-duvet-1.webp",
    title: "Long Strand Mulberry Silk Duvet",
    description: "Feeling monotonous about solid colors? Our two-tone silk bedding offers you the perfect solution. This collection of products assumes two colors respectively on their obverses and reverses. Thus, you can enjoy two using experiences from one set of silk bedding. If you waver on choosing your personal matching, contact us and we will give you advice based on your preferences and aesthetic perspective.",
    href: "/long-strand-mulberry-silk-duvet",
  },
  {
    id: 3,
    image: "/images/luxury-silk-satin-bedding-pure-mulberry-silk-duvet-1.webp",
    title: "Luxury Silk Satin Bedding",
    description: "Sinosilk's silk jacquard bedding boasts lustrous hues and subtle patterns that exude sophistication and glamour. The custom jacquard designs can add a unique touch of artistry, making silk bedding sets captivating masterpieces. Despite their visually stunning appeal, these beddings still furnish your sleep with incredible comfort.",
    href: "/luxury-silk-satin-bedding-pure-mulberry-silk-duvet",
  },
  {
    id: 4,
    image: "/images/natural-soft-silk-quilt-1.webp",
    title: "Natural Soft Silk Quilt",
    description: "Our classic silk duvet is crafted from 100% mulberry silk, offering exceptional breathability and comfort for all seasons. The timeless design fits any bedroom style, while the natural silk filling ensures a restful night's sleep.",
    href: "/natural-soft-silk-quilt",
  },
  {
    id: 5,
    image: "/images/summer-mulberry-silk-print-duvet-1.webp",
    title: "Summer Mulberry Silk Print Duvet",
    description: "Upgrade your bedroom with our luxury silk bedding set, including duvet, pillowcases, and sheets. Each piece is made from premium silk for a smooth, skin-friendly touch and elegant look, perfect for those who value both comfort and style.",
    href: "/summer-mulberry-silk-print-duvet",
  },
];

const faqs = [
  {
    question: 'Is your fabric 100% mulberry silk?',
    answer: 'We use non-toxic 6a Grade 100% mulberry silk fabric.'
  },
  {
    question: 'DO you have OEKO-TEX and BSCI certification?',
    answer: 'Yes we have many certificates such as 3 national patents, 43 practical patents, and 1800 copyrights.'
  },
  {
    question: 'May I have a sample？',
    answer: 'We can offer samples.'
  },
  {
    question: 'What is your MOQ?',
    answer: 'MOQ is 30 PCS. No MOQ requirements for stock products. Please contact us to get a free sample.'
  },
  {
    question: "What is your company's production capacity?",
    answer: 'We have our own factory with more than 500 employees, annual sales of 1.1 million pieces of silk pillowcases, 1.2 million pieces of silk eye masks, 1.5 million pieces of silk hair accessories, etc.'
  },
  {
    question: 'What shipping method do you use?',
    answer: 'We have cooperated with UPS, DHL, FedEx, and other logistics companies for many years. We have a large export volume and the most favorable freight price.'
  },
  {
    question: 'What customized service do you provide?',
    answer: 'We provide product color, size, printing pattern, packaging box, label customization etc.'
  },
  {
    question: 'May I get a cheaper price?',
    answer: 'A workable discount will be given if there is a large quantity. More quantity, the less cost.'
  }
]

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
            <ContactButton className="bg-white hover:bg-gray-300 text-gray-900 font-semibold p-3 rounded-md transition-colors duration-300">
              Send Inquiry Now
            </ContactButton>
          </div>
        </div>
      </section>
      <div className="px-4 py-4">
        <ProductsBreadcrumb items={[
          { label: 'Products', href: '/products' },
          { label: 'Duvet', isCurrent: true },  
        ]} />
      </div>

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
            
            {/* AutoCarousel products */}
           <AutoCarousel products={products} />

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
                  <svg width="56" height="56" fill="none" stroke="#D1A07A" strokeWidth="2" viewBox="0 0 56 56"><rect x="8" y="20" width="40" height="16" rx="4" stroke="#D1A07A" strokeWidth="2" fill="none" /><path d="M16 24v8M24 24v8M32 24v8M40 24v8" stroke="#D1A07A" /></svg>
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
                  <svg width="56" height="56" fill="none" stroke="#D1A07A" strokeWidth="2" viewBox="0 0 56 56"><path d="M14 42L42 14M28 28l8-8" stroke="#D1A07A" /><circle cx="14" cy="42" r="4" stroke="#D1A07A" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Embroidery & Stitching</h3>
                <p className="text-gray-700 text-base">With our expert design support, you can have your personalized monograms, patterns, or designs embroidered or stitched on the silk bedding sets.</p>
              </div>
              {/* Closure & Edge of Silk Pillowcases */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {/* Pillowcase Icon */}
                  <svg width="56" height="56" fill="none" stroke="#D1A07A" strokeWidth="2" viewBox="0 0 56 56"><rect x="12" y="16" width="32" height="24" rx="6" stroke="#D1A07A" /><rect x="18" y="22" width="20" height="12" rx="3" stroke="#D1A07A" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Closure & Edge of Silk Pillowcases</h3>
                <p className="text-gray-700 text-base mb-2">By closure type, available options are envelope pillowcases and zipper pillowcases.</p>
                <p className="text-gray-700 text-base">By flange, available options are Oxford pillowcases, terse pillowcases, housewife pillowcases, and custom patterned flange.</p>
              </div>
              {/* Packaging & Labeling */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {/* Box Icon */}
                  <svg width="56" height="56" fill="none" stroke="#D1A07A" strokeWidth="2" viewBox="0 0 56 56"><rect x="12" y="16" width="32" height="24" rx="4" stroke="#D1A07A" /><path d="M12 24h32" stroke="#D1A07A" /><path d="M28 16v24" stroke="#D1A07A" /></svg>
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

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Benefits of Silk Bedding
              </h2>
              <ul className="space-y-4">
                <li>
                  <span className="font-bold text-gray-900">Lustrous sheen</span>
                  <span className="text-gray-600"> – The satin weave lends the bedding a soft, radiant sheen for an upscale, romantic look in the bedroom.</span>
                </li>
                <li>
                  <span className="font-bold text-gray-900">Impeccable appearance</span>
                  <span className="text-gray-600"> – Sinosilk incorporates your personal artistry with the supreme opulence of silk to the nines.</span>
                </li>
                <li>
                  <span className="font-bold text-gray-900">Unmatched comfortability</span>
                  <span className="text-gray-600"> – The silk bedding's softness cradles you in an opulent embrace akin to sleeping amidst the clouds. With its natural breathability and temperature-regulating properties, our silk beddings provide breathable comfort throughout the seasons.</span>
                </li>
                <li>
                  <span className="font-bold text-gray-900">Zero static</span>
                  <span className="text-gray-600"> – Due to the finest silk fabric, our beddings reduce friction and will effortlessly drape the skin. This characteristic promises users restful slumber.</span>
                </li>
                <li>
                  <span className="font-bold text-gray-900">Protection for hair and skin</span>
                  <span className="text-gray-600"> – Silk bedding caresses your skin and hair with a gentleness touch and it preserves the moisture in hair and skin, reducing friction, and preventing wrinkles and hair breakage.</span>
                </li>
              </ul>
              <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Send Inquiry Now
              </button>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/Custom-Wholesale-Silk-Duvet-2.webp"
                alt="Custom Wholesale Silk Duvet"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/Custom-Wholesale-Silk-Duvet-3.webp"
                alt="Silk Duvet Features"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Explore An Array Of Stunning Colors
              </h2>
              <p className="text-gray-600 mb-4">Here is a list of some popular colors for your reference when customizing your silk bedding:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Grey</li>
                <li>Black</li>
                <li>White</li>
                <li>Green</li>
                <li>Blue</li>
                <li>Pink</li>
                <li>Orange</li>
                <li>Champagne</li>
              </ul>
              <p className="text-gray-600">You can choose from classic neutrals or add a pop of color with shades of blush or navy blue. For more info about the color matching of silk bedding, send an inquiry and get expert advice from our pros.</p>
              <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Send Inquiry Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Sustainability and Safety Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Certified Sustainability and Safety
              </h2>
              <p className="text-gray-600 mb-4">
                Obtaining an OEKO-TEX® certification is assertive evidence that Sinosilk's silk bedding sets assure customers of safety and environmental friendliness. With this international accredit, we are taking another step forward in our mission to deliver exceptional quality while prioritizing customers' health and the environment.
              </p>
              <button className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Send Inquiry Now
              </button>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/Custom-Wholesale-Silk-Duvet-4.webp"
                alt="Custom Service"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Maintain Sinosilk's Silk Bedding? Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How to Maintain Sinosilk's Silk Bedding?
          </h2>
          <p className="text-gray-600 mb-4 text-center">To ensure the longevity and beauty of the silk bedding set, please follow these care instructions.</p>
          <ul className="list-disc list-inside text-gray-600 max-w-7xl mx-auto mb-4">
            <li><span className="font-bold">Washing:</span> Hand wash or machine wash on a gentle cycle with cold water. Please use a mild detergent special for silk. You should also avoid bleach or softeners in case they damage the silk fibers.</li>
            <li><span className="font-bold">Drying:</span> Do not wring or twist the silk bedding. Just lay it flat on a clean, dry towel to get rid of moisture, and then air it dry away from direct sunlight.</li>
            <li><span className="font-bold">Storing:</span> Store your silk bedding in a cool, dry cabinet and keep it in a breathable bag to protect it from dust and insects.</li>
            <li><span className="font-bold">Using:</span> Rotate your silk bedding regularly to ensure even wear. Keep the bedding away from rough surfaces to prevent snags.</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pb-16 bg-gray-50">
        <div className="container mx-auto p-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">FAQ</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
