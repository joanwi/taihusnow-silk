import { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import BenefitsSection from "@/components/BenefitsSection";
import CategoryGrid from "@/components/CategoryGrid";

export const metadata: Metadata = {
  title: "Taihu Silk - Premium Silk Duvets & Comforters",
  description: "Experience the luxury of natural silk for a better night's sleep with our premium silk duvets and comforters.",
};

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroCarousel />
      <CategoryGrid />
      <FeaturedProducts />
      <BenefitsSection />
    </div>
  );
} 