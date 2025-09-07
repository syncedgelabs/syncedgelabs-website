import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingMetric {
  id: number;
  text: string;
  x: number;
  y: number;
  size: 'sm' | 'md' | 'lg';
  type: 'stat' | 'benefit' | 'metric';
  color: string;
}

export default function FloatingMetrics() {
  const [metrics, setMetrics] = useState<FloatingMetric[]>([]);

  const aiMetrics = [
    { text: "94% Accuracy", type: "stat", color: "text-primary" },
    { text: "+2.4x Leads", type: "benefit", color: "text-accent" },
    { text: "1.8s Response", type: "metric", color: "text-green-400" },
    { text: "89% Automation", type: "stat", color: "text-purple-400" },
    { text: "-31% Response Time", type: "benefit", color: "text-blue-400" },
    { text: "78% Self-Service", type: "metric", color: "text-pink-400" },
    { text: "+67 Hours Saved", type: "benefit", color: "text-yellow-400" },
    { text: "24/7 Availability", type: "stat", color: "text-cyan-400" },
    { text: "98.2% Success Rate", type: "metric", color: "text-primary" },
    { text: "+12% Satisfaction", type: "benefit", color: "text-green-500" },
    { text: "43% Less Stockouts", type: "stat", color: "text-orange-400" },
    { text: "58% Less No-shows", type: "benefit", color: "text-indigo-400" },
  ];

  useEffect(() => {
    const generateMetrics = () => {
      const newMetrics: FloatingMetric[] = [];
      
      for (let i = 0; i < 8; i++) {
        const metric = aiMetrics[Math.floor(Math.random() * aiMetrics.length)];
        newMetrics.push({
          id: i,
          text: metric.text,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: ['sm', 'md', 'lg'][Math.floor(Math.random() * 3)] as 'sm' | 'md' | 'lg',
          type: metric.type as 'stat' | 'benefit' | 'metric',
          color: metric.color
        });
      }
      
      setMetrics(newMetrics);
    };

    generateMetrics();
    const interval = setInterval(generateMetrics, 15000); // Refresh every 15 seconds

    return () => clearInterval(interval);
  }, []);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'sm': return 'text-xs px-2 py-1';
      case 'md': return 'text-sm px-3 py-1.5';
      case 'lg': return 'text-base px-4 py-2';
      default: return 'text-sm px-3 py-1.5';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {metrics.map((metric) => (
        <motion.div
          key={metric.id}
          className={`absolute floating-metric rounded-full ${getSizeClasses(metric.size)} ${metric.color} font-semibold metric-glow ai-pulse`}
          style={{
            left: `${metric.x}%`,
            top: `${metric.y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0.4, 0.7, 0],
            scale: [0, 1.1, 1, 1.05, 0],
            x: [0, Math.random() * 120 - 60, Math.random() * 80 - 40],
            y: [0, Math.random() * 100 - 50, Math.random() * 60 - 30],
            rotate: [0, Math.random() * 360, Math.random() * 720]
          }}
          transition={{
            duration: 15 + Math.random() * 10, // 15-25 seconds
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 8
          }}
        >
          {metric.text}
        </motion.div>
      ))}
      
      {/* AI Brain Animation */}
      <motion.div
        className="absolute top-1/3 right-1/4 opacity-15 ai-pulse"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 0.9, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 35, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg width="140" height="140" viewBox="0 0 140 140" className="text-primary">
          <circle cx="70" cy="70" r="60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <circle cx="70" cy="70" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="70" cy="70" r="30" fill="currentColor" opacity="0.1" />
          
          {/* Neural nodes with glow */}
          <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.8" className="animate-pulse" />
          <circle cx="90" cy="50" r="4" fill="currentColor" opacity="0.8" className="animate-pulse" />
          <circle cx="50" cy="90" r="4" fill="currentColor" opacity="0.8" className="animate-pulse" />
          <circle cx="90" cy="90" r="4" fill="currentColor" opacity="0.8" className="animate-pulse" />
          <circle cx="70" cy="30" r="4" fill="currentColor" opacity="0.8" className="animate-pulse" />
          <circle cx="70" cy="110" r="4" fill="currentColor" opacity="0.8" className="animate-pulse" />
          <circle cx="30" cy="70" r="4" fill="currentColor" opacity="0.8" className="animate-pulse" />
          <circle cx="110" cy="70" r="4" fill="currentColor" opacity="0.8" className="animate-pulse" />
          
          {/* Enhanced Connections */}
          <path d="M50 50 L90 50 L90 90 L50 90 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M70 30 L70 110 M30 70 L110 70" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M50 50 L90 90 M90 50 L50 90" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
        </svg>
      </motion.div>
      
      {/* Enhanced Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 opacity-10 geometric-float"
        animate={{
          rotate: -360,
          x: [0, 80, -40, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-32 h-32 border-2 border-accent rounded-2xl floating-metric"></div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 opacity-12 ai-pulse"
        animate={{
          rotate: 360,
          scale: [1, 1.4, 0.8, 1.2, 1],
          x: [0, -30, 40, 0],
          y: [0, 20, -25, 0],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 11, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="w-20 h-20 border-2 border-purple-400 rounded-full floating-metric"></div>
      </motion.div>
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/2 left-1/6 opacity-8"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 0.7, 1.3, 1],
          x: [0, 60, -20, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full opacity-60"></div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 left-2/3 opacity-10"
        animate={{
          rotate: [0, -270, -360],
          scale: [1, 1.5, 0.5, 1],
          x: [0, -70, 30, 0],
          y: [0, 50, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      >
        <div className="w-4 h-16 bg-gradient-to-b from-accent to-purple-500 rounded-full opacity-40"></div>
      </motion.div>
    </div>
  );
}