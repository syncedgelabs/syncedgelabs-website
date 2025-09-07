import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Package, RotateCcw, Ruler, TrendingUp, Target, Home, Calendar, BarChart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Solutions() {
  const { ref, isInView } = useScrollAnimation();

  const fashionFeatures = [
    {
      icon: Package,
      title: "Order Intelligence",
      description: "Automated order status updates and tracking",
      metric: "92% faster resolution",
      color: "text-primary"
    },
    {
      icon: RotateCcw,
      title: "Returns Automation",
      description: "Streamlined return processing",
      metric: "78% self-service rate",
      color: "text-accent"
    },
    {
      icon: Ruler,
      title: "Size Consultation",
      description: "AI-powered sizing recommendations",
      metric: "85% accuracy rate",
      color: "text-purple-400"
    },
    {
      icon: TrendingUp,
      title: "Inventory Alerts",
      description: "Smart stock notifications",
      metric: "43% fewer stockouts",
      color: "text-green-400"
    }
  ];

  const realEstateFeatures = [
    {
      icon: Target,
      title: "Lead Qualification",
      description: "Intelligent lead scoring and routing",
      metric: "2.4x qualified leads",
      color: "text-primary"
    },
    {
      icon: Home,
      title: "Property Intelligence",
      description: "Instant property and market data",
      metric: "24/7 availability",
      color: "text-accent"
    },
    {
      icon: Calendar,
      title: "Showing Coordination",
      description: "Automated scheduling system",
      metric: "58% fewer no-shows",
      color: "text-purple-400"
    },
    {
      icon: BarChart,
      title: "Market Insights",
      description: "Real-time market analysis",
      metric: "Real-time analysis",
      color: "text-green-400"
    }
  ];

  return (
    <section id="solutions" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry-Specialized <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Purpose-built AI modules for fashion e-commerce and real estate professionals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Fashion E-commerce */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8 hover-glow h-full" hover data-testid="solution-fashion">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">👗</span>
                </div>
                <h3 className="text-2xl font-bold">Fashion E-commerce Intelligence</h3>
              </div>
              <p className="text-muted-foreground mb-8">
                Automated customer service for fashion brands and online retailers
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {fashionFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} data-testid={`fashion-feature-${index}`}>
                      <div className="flex items-center mb-2">
                        <Icon className={`${feature.color} mr-2`} size={16} />
                        <span className="font-semibold">{feature.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                      <span className={`${feature.color} font-semibold`}>{feature.metric}</span>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* Real Estate */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassCard className="p-8 hover-glow h-full" hover data-testid="solution-realestate">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold">Real Estate Intelligence</h3>
              </div>
              <p className="text-muted-foreground mb-8">
                Automated lead management and client communication for real estate professionals
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {realEstateFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} data-testid={`realestate-feature-${index}`}>
                      <div className="flex items-center mb-2">
                        <Icon className={`${feature.color} mr-2`} size={16} />
                        <span className="font-semibold">{feature.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                      <span className={`${feature.color} font-semibold`}>{feature.metric}</span>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
