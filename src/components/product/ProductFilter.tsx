'use client'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { products } from '@/lib/products'
import ProductCard from './ProductCard'

export default function ProductFilter() {
  const t = useTranslations('products')
  const [activeFilter, setActiveFilter] = useState('all')

  const filterCategories = [
    { id: 'all', name: t('filter.all') },
    { id: 'all-season', name: t('filter.allSeason') },
    { id: 'winter', name: t('filter.winter') },
    { id: 'summer', name: t('filter.summer') },
    { id: 'hotel', name: t('filter.hotel') },
    { id: 'children', name: t('filter.children') }
  ]

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.categories.includes(activeFilter))

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 py-4 border-b">
        {filterCategories.map((category) => (
          <Button
            key={category.id}
            variant={category.id === activeFilter ? 'default' : 'outline'}
            className={`cursor-pointer ${category.id === activeFilter ? '' : 'hover:bg-primary/10'}`}
            onClick={() => setActiveFilter(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              href={product.href}
            />
          ))}
        </div>
      </div>
    </>
  )
} 