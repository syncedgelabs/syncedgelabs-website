import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import Logo from "@/components/ui/logo";

export default function Footer() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <footer className="py-12 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 md:mb-0">
            <Logo size={32} showText={true} />
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-support"
            >
              Support
            </a>
          </div>
        </motion.div>
        <motion.div
          className="text-center mt-8 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p data-testid="copyright">&copy; 2024 SyncEdgeLabs. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
