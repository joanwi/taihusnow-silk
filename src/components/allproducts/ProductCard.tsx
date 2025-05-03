import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

interface ProductCardProps {
  slug: string
  name: string
  description: string
  image: string
  price: number
}

export default function ProductCard({ slug, name, description, image, price }: ProductCardProps) {
  const t = useTranslations('products')

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => window.location.href = `/products/${slug}`}
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">${price}</span>
          <Button variant="outline" size="sm" className="cursor-pointer">
            {t('view')}
          </Button>
        </div>
      </div>
    </div>
  )
} 