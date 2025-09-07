import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Pricing() {
  const { ref, isInView } = useScrollAnimation();

  const plans = [
    {
      name: "Starter",
      price: 297,
      description: "Perfect for growing businesses",
      features: [
        "5,000 emails/month",
        "Basic automation",
        "Email support",
        "Standard integrations",
        "Analytics dashboard"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Professional",
      price: 497,
      description: "Advanced features for scaling teams",
      features: [
        "25,000 emails/month",
        "Advanced AI features",
        "Priority support",
        "Custom workflows",
        "Advanced analytics",
        "API access"
      ],
      buttonText: "Book Demo",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: 797,
      description: "Full-scale automation solution",
      features: [
        "Unlimited emails",
        "Custom AI training",
        "Dedicated support",
        "White-label options",
        "Advanced integrations",
        "Custom reporting"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that scales with your business growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <GlassCard 
                className={`p-8 hover-glow h-full ${plan.popular ? 'border-2 border-primary' : ''}`} 
                hover
                data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">
                  ${plan.price}<span className="text-sm text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-primary mr-3" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.buttonVariant === 'default' 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'glass-card hover-glow border-transparent'
                  }`}
                  data-testid={`button-${plan.name.toLowerCase()}-plan`}
                >
                  {plan.buttonText}
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
