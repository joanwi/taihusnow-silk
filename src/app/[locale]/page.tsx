import { Metadata } from "next";
import { Link } from '@/i18n/navigation'; 
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Taihu Silk - Premium Silk Duvets & Comforters",
  description: "Experience the luxury of natural silk for a better night's sleep with our premium silk duvets and comforters.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full h-[700px] bg-gray-600">
        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Premium Silk Duvets for Global Wholesale
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            25+ Years of Excellence in Manufacturing High-Quality Silk Bedding Products
          </p>
          <Link 
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose SilkLux</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We combine traditional craftsmanship with modern technology to deliver premium silk duvets to global markets
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">25+ Years Experience</h3>
              <p className="text-gray-600">
                Quarter-century of expertise in silk manufacturing and global distribution
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">International Certifications</h3>
              <p className="text-gray-600">
                Oeko-Tex Standard 100, ISO 9001, and organic certifications
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Customization Capability</h3>
              <p className="text-gray-600">
                Tailored solutions for various markets with custom specifications
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Global Logistics</h3>
              <p className="text-gray-600">
                Efficient shipping to 50+ countries with reliable delivery times
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Explore our premium silk duvet collections designed for various seasons and needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-amber-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">All-Season Silk Duvet</h3>
                <p className="text-gray-600 mb-4">
                  Perfect balance of warmth and breathability for year-round comfort
                </p>
                <Link 
                  href="/products/all-season"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Winter Thick Silk Duvet</h3>
                <p className="text-gray-600 mb-4">
                  Extra filling for superior warmth during cold winter months
                </p>
                <Link 
                  href="/products/winter"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-slate-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hotel Collection</h3>
                <p className="text-gray-600 mb-4">
                  Premium silk duvets designed specifically for luxury hospitality
                </p>
                <Link 
                  href="/products/hotel"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600/90">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold mb-2">500,000+</div>
              <div className="text-lg">Annual Production Capacity</div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Export Countries</div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold mb-2">300+</div>
              <div className="text-lg">Global Partners</div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Feedback from our valued wholesale partners around the world
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-6">
                "SilkLux has been our trusted supplier for over 5 years. Their consistent quality and reliable delivery have made them an invaluable partner for our bedding business."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Robert Johnson</div>
                  <div className="text-gray-600 text-sm">Luxury Bedding Co., USA</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-6">
                "The customization options provided by SilkLux allowed us to create a unique product line that has become our bestseller. Their attention to detail is exceptional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Sophia Müller</div>
                  <div className="text-gray-600 text-sm">European Home Textiles, Germany</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-6">
                "As a high-end hotel chain, we demand the best for our guests. SilkLux's hotel collection has exceeded our expectations in both quality and durability."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">Hiroshi Tanaka</div>
                  <div className="text-gray-600 text-sm">Luxury Hotels Group, Japan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Latest News</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Stay updated with our company developments and industry insights
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">March 15, 2025</div>
                <h3 className="text-xl font-semibold mb-2">SilkLux to Exhibit at Heimtextil 2025</h3>
                <p className="text-gray-600 mb-4">
                  Visit our booth to explore our latest silk duvet collections and meet our team.
                </p>
                <Link 
                  href="/news/heimtextil-2025"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">February 28, 2025</div>
                <h3 className="text-xl font-semibold mb-2">New Organic Silk Collection Launched</h3>
                <p className="text-gray-600 mb-4">
                  Our latest eco-friendly silk duvet collection has received GOTS certification.
                </p>
                <Link 
                  href="/news/organic-collection"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">January 10, 2025</div>
                <h3 className="text-xl font-semibold mb-2">SilkLux Expands Production Capacity</h3>
                <p className="text-gray-600 mb-4">
                  New state-of-the-art facility increases our annual production by 30%.
                </p>
                <Link 
                  href="/news/expansion"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 