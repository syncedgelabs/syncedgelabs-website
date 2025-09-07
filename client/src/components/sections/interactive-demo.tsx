import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import PerformanceChart from "@/components/charts/performance-chart";

export default function InteractiveDemo() {
  const { ref, isInView } = useScrollAnimation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<"fashion" | "realestate">("fashion");

  const handleProcessing = () => {
    setIsProcessing(true);
    setShowResponse(false);
    
    setTimeout(() => {
      setShowResponse(true);
      setIsProcessing(false);
    }, 3000);
  };

  const industries = {
    fashion: {
      emoji: "👗",
      label: "Fashion",
      message: "Hi, I placed order #LF284 but haven't received tracking info. When will it ship?",
      response: "Hi! Your order #LF284 is confirmed and will ship within 24 hours. Tracking info will be sent to your email. Is there anything else I can help you with?"
    },
    realestate: {
      emoji: "🏠",
      label: "Real Estate",
      message: "I'm interested in the 3BR house on Maple Street. Can I schedule a viewing for this weekend?",
      response: "I'd be happy to help you schedule a viewing! The property at 123 Maple Street is available this Saturday at 2 PM or Sunday at 10 AM. Which works better for you?"
    }
  };

  const processingSteps = [
    "Analyzing intent...",
    "Retrieving data...",
    "Generating response..."
  ];

  return (
    <section className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience AI in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how our intelligent assistant handles real customer inquiries with precision and context
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Customer Inquiry Processing</h3>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant={selectedIndustry === "fashion" ? "default" : "outline"}
                    onClick={() => setSelectedIndustry("fashion")}
                    className={`px-4 py-2 text-sm ${
                      selectedIndustry === "fashion" 
                        ? "bg-primary/20 text-primary border-primary" 
                        : "bg-secondary text-secondary-foreground"
                    }`}
                    data-testid="button-fashion-demo"
                  >
                    {industries.fashion.emoji} {industries.fashion.label}
                  </Button>
                  <Button
                    size="sm"
                    variant={selectedIndustry === "realestate" ? "default" : "outline"}
                    onClick={() => setSelectedIndustry("realestate")}
                    className={`px-4 py-2 text-sm ${
                      selectedIndustry === "realestate" 
                        ? "bg-primary/20 text-primary border-primary" 
                        : "bg-secondary text-secondary-foreground"
                    }`}
                    data-testid="button-realestate-demo"
                  >
                    {industries.realestate.emoji} {industries.realestate.label}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <GlassCard className="p-4">
                  <div className="text-sm text-muted-foreground mb-2">Customer Message</div>
                  <div className="text-foreground">{industries[selectedIndustry].message}</div>
                </GlassCard>
                
                <Button
                  onClick={handleProcessing}
                  disabled={isProcessing}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-process-ai"
                >
                  {isProcessing ? "Processing..." : "Process with AI"}
                </Button>
                
                <AnimatePresence>
                  {isProcessing && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2"
                    >
                      {processingSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 1 }}
                          className="flex items-center space-x-3"
                          data-testid={`processing-step-${index}`}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-sm">{index + 1}. {step}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <AnimatePresence>
                  {showResponse && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-4"
                    >
                      <GlassCard className="p-4" data-testid="ai-response-card">
                        <div className="text-sm text-muted-foreground mb-2">AI Response</div>
                        <div className="text-foreground mb-3">{industries[selectedIndustry].response}</div>
                        <div className="flex flex-wrap gap-4 text-xs">
                          <span className="text-primary">✓ Intent: Recognized</span>
                          <span className="text-accent">⚡ Response Time: 1.8s</span>
                          <span className="text-green-500">✓ 98% Confidence</span>
                        </div>
                      </GlassCard>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </GlassCard>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4">Live Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">+24%</div>
                  <div className="text-xs text-muted-foreground">Automation Rate Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">-31%</div>
                  <div className="text-xs text-muted-foreground">Response Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">+67</div>
                  <div className="text-xs text-muted-foreground">Hours Saved Weekly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">+12%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction Increase</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4">Email Processing Volume</h3>
              <PerformanceChart />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
