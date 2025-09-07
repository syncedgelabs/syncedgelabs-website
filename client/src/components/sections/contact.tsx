import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Rocket, Target, Headphones, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    needs: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    toast({
      title: "Strategy Call Scheduled!",
      description: "We'll contact you within 24 hours to schedule your consultation.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: "",
      industry: "",
      needs: ""
    });
  };

  const benefits = [
    {
      icon: Rocket,
      title: "Quick Setup",
      description: "Implementation in under 24 hours",
      gradient: "from-primary to-accent"
    },
    {
      icon: Target,
      title: "Custom Training",
      description: "AI trained specifically for your business",
      gradient: "from-accent to-purple-500"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Personal success manager included",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-text">Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Join leading fashion and real estate companies using SyncEdgeLabs to automate their customer communications and accelerate growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlassCard className="p-8">
            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    data-testid={`benefit-${index}`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="text-primary-foreground" size={20} />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="glass-card border-border focus:ring-primary"
                    required
                    data-testid="input-fullname"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="glass-card border-border focus:ring-primary"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="glass-card border-border focus:ring-primary"
                    required
                    data-testid="input-company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger className="glass-card border-border focus:ring-primary" data-testid="select-industry">
                      <SelectValue placeholder="Select Industry" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-border">
                      <SelectItem value="fashion">Fashion E-commerce</SelectItem>
                      <SelectItem value="realestate">Real Estate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="needs">Tell us about your automation needs</Label>
                <Textarea
                  id="needs"
                  placeholder="Describe your current challenges and automation goals..."
                  value={formData.needs}
                  onChange={(e) => handleInputChange("needs", e.target.value)}
                  className="glass-card border-border focus:ring-primary h-32 resize-none"
                  required
                  data-testid="textarea-needs"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 hover:opacity-90 transition-opacity"
                data-testid="button-schedule-call"
              >
                Schedule Strategy Call →
              </Button>
              
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Check className="text-primary mr-2" size={16} />
                  Free consultation
                </span>
                <span className="flex items-center">
                  <Check className="text-primary mr-2" size={16} />
                  No commitment
                </span>
                <span className="flex items-center">
                  <Check className="text-primary mr-2" size={16} />
                  Custom solution
                </span>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
