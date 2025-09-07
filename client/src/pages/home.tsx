import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import InteractiveDemo from "@/components/sections/interactive-demo";
import Solutions from "@/components/sections/solutions";
import Pricing from "@/components/sections/pricing";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import FloatingMetrics from "@/components/animations/floating-metrics";

export default function Home() {
  return (
    <div className="bg-background text-foreground relative">
      <FloatingMetrics />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Features />
        <InteractiveDemo />
        <Solutions />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
