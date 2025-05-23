import { ProductInfo, type Product } from "@/components/product/ProductInfo";
import { AnchorNav, sections } from "@/components/product/AnchorNav";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productData: Product = {
  title: "Wholesale Handmade 100% Long Strand Mulberry Silk Duvet Silk Quilt",
  descriptions: [
    "Fabric: 100% grade 6A mulberry silk(16mm/19mm/22mm/25mm)",
    "Certified: OEKO-Tex Standard 100 Certification",
    "Multiple Benefits: Super soft, incredible cozy, and smooth yet breathable, infused with hydration to delivers intense long-lasting moisture keep skin and hair healthy, anti aging; anti-allergenic, no shifting perfect for allergy suffers.",
    "Sales Models: Wholesale/Sample",
  ],
  price: "$30 - $100 (Negotiable)",
  MOQ: "30 pcs",
  sizes: [
    "Twin (150×200cm)",
    "Full (180×220cm)",
    "Queen (200×230cm)",
    "King (220×240cm)",
    "Customized Size"
  ],
  colors: ["Ivory white", "Black", "Pink", "Beige", "Navy", "Baby blue", "Purple", "Green", "Rose", "Customized Color"],
  imagesUrl: [
    '/images/long-strand-mulberry-silk-duvet-1.webp',
    '/images/long-strand-mulberry-silk-duvet-2.webp',
    '/images/long-strand-mulberry-silk-duvet-3.webp',
    '/images/long-strand-mulberry-silk-duvet-4.webp',
    '/images/long-strand-mulberry-silk-duvet-5.webp',
    '/images/long-strand-mulberry-silk-duvet-6.webp',
  ]
};

const faqs = [
  {
    question: "Is your fabric 100% mulberry silk?",
    answer: "We use non-toxic 6a Grade 100% mulberry silk fabric."
  },
  {
    question: "DO you have OEKO-TEX and BSCI certification?",
    answer: "Yes we have many certificates such as 3 national patents, 43 practical patents, and 1800 copyrights."
  },
  {
    question: "May I have a sample?",
    answer: "We can offer samples."
  },
  {
    question: "What is your MOQ?",
    answer: "MOQ is 30 PCS. No MOQ requirements for stock products. Please contact us to get a free sample."
  },
  {
    question: "What is your company's production capacity?",
    answer: "We have our own factory with more than 500 employees, annual sales of 1.1 million pieces of silk pillowcases, 1.2 million pieces of silk eye masks, 1.5 million pieces of silk hair accessories, etc."
  },
  {
    question: "What shipping method do you use?",
    answer: "We have cooperated with UPS, DHL, FedEx, and other logistics companies for many years. We have a large export volume and the most favorable freight price."
  },
  {
    question: "What customized service do you provide?",
    answer: "We provide product color, size, printing pattern, packaging box, label customization etc."
  },
  {
    question: "May I get a cheaper price?",
    answer: "A workable discount will be given if there is a large quantity. More quantity, the less cost."
  }
];

export default function SummerDuvet() {

  return (
    <main>
      {/* Product Header Section */}
      <ProductInfo product={productData} />

      {/* Anchor Navigation */}
      <AnchorNav sections={sections} />

      {/* Product Description Section */}
      <section id="desc" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Product Description</h2>
          <div className="prose max-w-none">
            <p className="mb-4">
              Our best-selling Summer Mulberry Silk Duvet offers the perfect lightweight comfort for warm weather.
              Made from 100% Grade A long-strand mulberry silk with a premium cotton cover, this duvet provides
              exceptional temperature regulation and moisture-wicking properties, making it ideal for summer use.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Company Overview</h3>
            <p className="mb-4">
              Taihu Silk Co., Ltd. is a leading silk home textile manufacturer based in Suzhou, China, established in 2002.
              As the first listed silk company in Suzhou (stock code: 838262), we operate a 10,000+ square meter production
              plant with an annual capacity of over 300,000 silk quilts.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Production Capabilities</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>79-acre mulberry garden</li>
              <li>Complete production chain control from cocoons to finished products</li>
              <li>Exports to 50+ countries including USA, Russia, UK, Germany, Japan, and Canada</li>
              <li>3.53%–4.46% R&D investment (2019-2021)</li>
              <li>55 R&D personnel and multiple patents</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Customization & Wholesale</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom bulk orders available</li>
              <li>MOQ: 10-20 pieces (standard designs)</li>
              <li>MOQ: 100-150 pieces (custom designs)</li>
              <li>OEM/ODM services with 50+ global brand partnerships</li>
              <li>Free product images for store use (orders over $10,000)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Care Instructions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Avoid machine washing and tumble drying</li>
              <li>Spot clean with neutral detergent and cold water</li>
              <li>Professional dry cleaning recommended for large quilts</li>
              <li>Regular airing and duvet cover use recommended</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Quality Assurance</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>SGS, Intertek, and AI testing for all materials</li>
              <li>Multi-stage quality inspections</li>
              <li>20-day defect reporting window</li>
              <li>Manufacturer-covered return shipping for quality issues</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h2>
          <Image src="/images/taihu-snow-silk.webp" alt="Why Choose Us" width={1200} height={516} className="mx-auto" />
          <h3 className="text-xl font-semibold mt-8 mb-4">who are we</h3>
          <p className="mb-4">
            Taihu Snow Silk Co. Ltd is the leading company of silk home textilein China , located in Suzhou. We are also the first listed silk companyin Suzhou, stock code(838262) Our main products include silk pillowcase,silk eye mask, silkaccessories, silk bedding, silk pajamas , silk quilts and silk items for children. So far, we export silk products to over 50 countries, like the UnitedStates of America, Russia, Great Britain, Germany, Japan, Canada,Danmark, Korea, etc.
          </p>
          <Image src="/images/OEM-ODM-service.webp" alt="Why Choose Us" width={1200} height={400} className="mx-auto" />
          <Image src="/images/Detail.webp" alt="Why Choose Us" width={750} height={1083} className="mx-auto" />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pb-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

    </main>
  );
}
