import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Brain, MessageCircle, Zap, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Features() {
  const { ref, isInView } = useScrollAnimation();

  const features = [
    {
      icon: Brain,
      title: "Intelligent Email Triage",
      description: "AI-powered classification and routing of customer inquiries with contextual understanding and priority scoring.",
      metric: "94%",
      metricLabel: "Accuracy Rate",
      gradient: "from-primary to-accent"
    },
    {
      icon: MessageCircle,
      title: "Real-time Customer Support",
      description: "24/7 automated responses with natural language processing and seamless human handoff when needed.",
      metric: "1.8s",
      metricLabel: "Avg Response",
      gradient: "from-accent to-purple-500"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Smart automation of repetitive tasks including order management, scheduling, and follow-up sequences.",
      metric: "89%",
      metricLabel: "Task Automation",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights into customer interactions, performance metrics, and optimization opportunities.",
      metric: "Real-time",
      metricLabel: "Dashboards",
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Capabilities That <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sophisticated automation that understands your business and delights your customers
          </p>
        </motion.div>

        <div className="dashboard-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <GlassCard className="p-8 hover-glow h-full" hover data-testid={`feature-card-${index}`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="text-primary-foreground text-xl" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <div className="text-2xl font-bold gradient-text">
                    {feature.metric} <span className="text-sm text-muted-foreground">{feature.metricLabel}</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
