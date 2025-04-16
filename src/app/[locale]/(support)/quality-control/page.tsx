import Image from 'next/image';

export default function QualityControl() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Commitment Section */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              At Taihu Silk, quality is our core commitment. As a professional silk producer, 
              we understand that our customers expect nothing but the best. Our quality control 
              process is thorough, from selecting raw materials to the final product inspection, 
              ensuring every piece meets our rigorous standards.
            </p>
            <p className="text-gray-600">
              Through strict quality management and continuous improvement, we aim 
              to exceed our customers expectations. Our team of experienced professionals 
              works diligently to maintain the highest standards of quality at every step 
              of the production process.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/images/quality-control-1.jpg"
              alt="Quality Control Process"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Quality Standards</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">ISO 9001:2015 Certified</h3>
              <p className="text-gray-600">
                Our quality management system is certified to international standards, ensuring 
                consistent quality through documented processes and continuous improvement.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">OEKO-TEX® Standard 100</h3>
              <p className="text-gray-600">
                All our products are certified to OEKO-TEX® Standard 100, guaranteeing they are 
                free from harmful substances and safe for human use.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Environmental Standards</h3>
              <p className="text-gray-600">
                We maintain ISO 14001 environmental management standards, ensuring our production 
                processes are environmentally responsible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Quality Testing Process</h2>
        <p className="text-gray-600 mb-8">
          Every silk product undergoes a comprehensive series of tests and inspections throughout 
          the manufacturing process to ensure unmatched quality and performance.
        </p>
        
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Raw Material Testing</h3>
              <p className="text-gray-600">
                Incoming materials are thoroughly tested for fiber quality, purity, and color. 
                Only materials meeting our strict specifications advance to production.
              </p>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/images/quality-control-2.jpg"
                alt="Raw Material Testing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Physical Performance Testing</h3>
              <p className="text-gray-600">
                We conduct extensive physical testing on our fabrics, including tensile 
                strength measurement, fabric drape testing, durability testing, and more 
                to ensure optimal performance.
              </p>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/images/quality-control-3.jpg"
                alt="Physical Performance Testing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Chemical Safety Testing</h3>
              <p className="text-gray-600">
                All products undergo strict chemical testing to ensure they are free from 
                harmful substances and meet international safety standards.
              </p>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/images/quality-control-4.jpg"
                alt="Chemical Safety Testing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Final Product Inspection</h3>
              <p className="text-gray-600">
                Every finished product undergoes a comprehensive final inspection before 
                packaging. Our trained inspectors check for visual quality, defects, 
                measurements, and overall product presentation.
              </p>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/images/quality-control-5.jpg"
                alt="Final Product Inspection"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Metrics Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Our Quality by the Numbers</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">99.5%</div>
            <p className="text-gray-600">Quality Pass Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
            <p className="text-gray-600">Quality Tests</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">&lt;0.5%</div>
            <p className="text-gray-600">Return Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-gray-600">Inspection Coverage</p>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">State-of-the-Art Testing Equipment</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Our in-house laboratory is equipped with advanced testing equipment that allows 
              us to conduct comprehensive quality assessments throughout the production process.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="/images/testing-equipment.jpg"
              alt="Testing Equipment"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
