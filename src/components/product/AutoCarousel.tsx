'use client'
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
}

interface AutoCarouselProps {
  products: Product[];
}

export default function AutoCarousel({ products }: AutoCarouselProps) {
  return (
      <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {products.map((product) => (
          <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <ProductCard {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
    </Carousel>
  );
}
