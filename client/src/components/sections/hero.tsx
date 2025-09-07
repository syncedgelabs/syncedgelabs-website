import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Play } from "lucide-react";
import AnimatedCounter from "@/components/animations/counter";
import PerformanceChart from "@/components/charts/performance-chart";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center hero-bg pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your Business with
              <span className="gradient-text block">Intelligent Automation</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium AI Virtual Assistant platform transforming customer experience for fashion e-commerce and real estate companies worldwide.
            </motion.p>

            {/* Stats Counter */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text counter">
                  <AnimatedCounter target={127} />
                </div>
                <div className="text-sm text-muted-foreground">Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text counter">
                  <AnimatedCounter target={284637} />
                </div>
                <div className="text-sm text-muted-foreground">Emails Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text counter">
                  <AnimatedCounter target={99.2} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all px-8 py-4"
                data-testid="button-watch-demo"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="glass-card hover-glow border-transparent px-8 py-4"
                data-testid="button-book-consultation"
              >
                Book Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="lg:animate-float"
          >
            <GlassCard className="p-6" hover>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Live Analytics Dashboard</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Success Rate</span>
                  <span className="text-2xl font-bold gradient-text">98.2%</span>
                </div>
                
                <PerformanceChart />
                
                <div className="grid grid-cols-2 gap-4">
                  <GlassCard className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">Response Time</div>
                    <div className="text-lg font-semibold">1.8s</div>
                  </GlassCard>
                  <GlassCard className="p-4">
                    <div className="text-xs text-muted-foreground mb-1">Automation Rate</div>
                    <div className="text-lg font-semibold">94%</div>
                  </GlassCard>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
