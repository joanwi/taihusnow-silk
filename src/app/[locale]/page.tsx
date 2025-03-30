import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedProducts from "@/components/FeaturedProducts";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Taihu Silk - Premium Silk Duvets & Comforters",
  description: "Experience the luxury of natural silk for a better night's sleep with our premium silk duvets and comforters.",
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroCarousel />
      <FeaturedProducts />
      <BenefitsSection />
      <Footer />
    </main>
  );
} 