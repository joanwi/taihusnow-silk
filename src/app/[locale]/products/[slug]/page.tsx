import { products } from '@/lib/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ContactForm } from '@/components/ContactForm';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

type PageProps = {
  params: { slug: string; locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ProductDetailPage({ params }: PageProps) {
  const { slug, locale } = params;
  const t = useTranslations('products');
  const product = products.find((p) => p.slug === params.slug);
  

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 pt-24">
      {/* 面包屑导航 */}
      <nav className="flex items-center space-x-2 py-4 text-sm text-gray-600">
        <Link href="/" className="flex items-center hover:text-primary transition-colors">
          <Home size={16} className="mr-1" />
          {t('breadcrumb.home')}
        </Link>
        <ChevronRight size={16} />
        <Link href="/products" className="hover:text-primary transition-colors">
          {t('breadcrumb.products')}
        </Link>
        <ChevronRight size={16} />
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 产品图片区域 */}
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* 产品信息区域 */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-600">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>

          {/* 规格参数 */}
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">产品规格</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium">材质</h3>
                <p className="text-gray-600">100% 桑蚕丝</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium">尺寸</h3>
                <p className="text-gray-600">200x230cm</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium">重量</h3>
                <p className="text-gray-600">1.5kg</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium">适用季节</h3>
                <p className="text-gray-600">{product.categories.join(', ')}</p>
              </div>
            </div>
          </div>

          {/* 联系表单 */}
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">联系我们</h2>
            <ContactForm productName={product.name} />
          </div>
        </div>
      </div>

      {/* 相关产品推荐 */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">相关产品</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter((p) => p.id !== product.id && p.categories.some(cat => product.categories.includes(cat)))
            .slice(0, 3)
            .map((relatedProduct) => (
              <div key={relatedProduct.id} className="border rounded-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{relatedProduct.name}</h3>
                  <p className="text-gray-600">${relatedProduct.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
} 