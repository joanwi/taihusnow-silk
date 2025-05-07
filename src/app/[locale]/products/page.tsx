import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import ProductFilter from '@/components/product/ProductFilter'
import ProductsBreadcrumb from '@/components/ProductsBreadcrumb'

export default function ProductsPage() {
  const t = useTranslations('products')

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <Image
          src="/images/products-hero.jpg"
          alt="Silk Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl md:text-2xl mb-8">{t('subtitle')}</p>
          </div>
        </div>
      </div>

      {/* Navigation and Filters */}
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <ProductsBreadcrumb items={[
          { label: 'Products', isCurrent: true },
        ]} />

        {/* Products Filter and Grid */}
        <ProductFilter />
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-2">{t('pure')}</h3>
              <p className="text-gray-600">{t('pure_desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">500+</div>
              <h3 className="text-xl font-semibold mb-2">{t('clients')}</h3>
              <p className="text-gray-600">{t('clients_desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">10+</div>
              <h3 className="text-xl font-semibold mb-2">{t('years')}</h3>
              <p className="text-gray-600">{t('years_desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <Image
          src="/images/cta-bg.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('cta_title')}</h2>
            <p className="text-xl mb-8">{t('cta_desc')}</p>
            <Button size="lg" className="text-lg px-8">
              {t('contact')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 