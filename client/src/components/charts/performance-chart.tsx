import { motion } from "framer-motion";

export default function PerformanceChart() {
  const chartData = [
    { height: 16, delay: 0 },
    { height: 24, delay: 0.1 },
    { height: 20, delay: 0.2 },
    { height: 32, delay: 0.3 },
    { height: 28, delay: 0.4 },
    { height: 18, delay: 0.5 },
    { height: 24, delay: 0.6 }
  ];

  return (
    <div className="grid grid-cols-7 gap-1 h-32 items-end" data-testid="performance-chart">
      {chartData.map((bar, index) => (
        <motion.div
          key={index}
          className="chart-bar bg-gradient-to-t from-primary/50 to-primary rounded-t cursor-pointer"
          style={{ height: `${bar.height * 4}px` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ 
            delay: bar.delay, 
            duration: 0.6, 
            ease: "easeOut" 
          }}
          whileHover={{ 
            scaleY: 1.1, 
            filter: "brightness(1.2)",
            transition: { duration: 0.2 }
          }}
          data-testid={`chart-bar-${index}`}
        />
      ))}
    </div>
  );
}
