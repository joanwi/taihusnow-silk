'use client';
import { useState, useEffect } from "react";
import { ProductInfo, type Product } from "@/components/product/ProductInfo";
import Image from "next/image";

const productData: Product = {
  title: "wholesale Luxury Oeko-Tex Qualified Luxury Silk Satin Bedding Pure Mulberry Silk Duvet",
  descriptions: [
    "Fabric: 100% grade 6A mulberry silk(16mm/19mm/22mm/25mm)",
    "Certified: OEKO-Tex Standard 100 Certification",
    "Multiple Benefits: Super soft, incredible cozy, and smooth yet breathable, infused with hydration to delivers intense long-lasting moisture keep skin and hair healthy, anti aging; anti-allergenic, no shifting perfect for allergy suffers.",
    "Sales Models: Wholesale/Sample",
  ],
  price: "$50 - $200 (Negotiable)",
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
    '/images/luxury-silk-satin-bedding-pure-mulberry-silk-duvet-1.webp',
    '/images/luxury-silk-satin-bedding-pure-mulberry-silk-duvet-2.webp',
    '/images/luxury-silk-satin-bedding-pure-mulberry-silk-duvet-3.webp',
    '/images/luxury-silk-satin-bedding-pure-mulberry-silk-duvet-4.webp',
    '/images/luxury-silk-satin-bedding-pure-mulberry-silk-duvet-5.webp',
    '/images/luxury-silk-satin-bedding-pure-mulberry-silk-duvet-6.webp',
  ]
};

const sections = [
  { id: "desc", label: "Product Description" },
  { id: "why", label: "Why Choose Us" },
  { id: "faq", label: "FAQ" },
];

export default function SummerDuvet() {
  const [active, setActive] = useState("desc");

  useEffect(() => {
    const handleScroll = () => {
      let current = "desc";
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = sec.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:px-8">
        {/* Product Header Section */}
        <ProductInfo product={productData} />

        {/* Anchor Navigation */}
        <nav className="sticky top-16 z-40 bg-white border-t border-gray-200 flex justify-center py-3">
          <ul className="flex gap-4 md:gap-8">
            {sections.map((sec) => (
              <li key={sec.id}>
                <button
                  type="button"
                  className={`text-gray-700 font-medium px-3 py-1 rounded focus:outline-none transition-colors ${
                    active === sec.id ? "bg-gray-100 text-blue-600" : "hover:bg-gray-100"
                  }`}
                  onClick={() =>
                    document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {sec.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

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
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <p className="font-bold text-gray-900 mb-2">Q1: Is your fabric 100% mulberry silk?</p>
                <p className="text-gray-700">A: We use non-toxic 6a Grade 100% mulberry silk fabric.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q2: DO you have OEKO-TEX and BSCI certification?</p>
                <p className="text-gray-700">A: Yes we have many certificates such as 3 national patents, 43 practical patents, and 1800 copyrights.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q3: May I have a sample?</p>
                <p className="text-gray-700">A: We can offer samples.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q4: What is your MOQ?</p>
                <p className="text-gray-700">A: MOQ is 30 PCS. No MOQ requirements for stock products. Please contact us to get a free sample.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q5: What is your company's production capacity?</p>
                <p className="text-gray-700">A: We have our own factory with more than 500 employees, annual sales of 1.1 million pieces of silk pillowcases, 1.2 million pieces of silk eye masks, 1.5 million pieces of silk hair accessories, etc.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q6: What shipping method do you use?</p>
                <p className="text-gray-700">A: We have cooperated with UPS, DHL, FedEx, and other logistics companies for many years. We have a large export volume and the most favorable freight price.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q7: What customized service do you provide?</p>
                <p className="text-gray-700">A: We provide product color, size, printing pattern, packaging box, label customization etc.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Q8: May I get a cheaper price?</p>
                <p className="text-gray-700">A: A workable discount will be given if there is a large quantity. More quantity, the less cost.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
