import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ 
  target, 
  duration = 2000, 
  suffix = "", 
  prefix = "" 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, isInView } = useScrollAnimation();

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const startTime = Date.now();
      const endTime = startTime + duration;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        // Use easeOut curve for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = easeOut * target;
        
        setCount(currentCount);
        
        if (now < endTime) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, hasAnimated, target, duration]);

  const formatNumber = (num: number) => {
    if (target > 1000) {
      return Math.floor(num).toLocaleString();
    } else if (target % 1 !== 0) {
      return num.toFixed(1);
    } else {
      return Math.floor(num).toString();
    }
  };

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      data-testid="animated-counter"
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  );
}
