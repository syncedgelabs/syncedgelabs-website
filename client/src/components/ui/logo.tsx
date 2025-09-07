import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function Logo({ className = "", size = 32, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Background Circle with Gradient */}
          <motion.circle
            cx="20"
            cy="20"
            r="18"
            fill="url(#logoGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          />
          
          {/* Neural Network Nodes */}
          <motion.circle
            cx="12"
            cy="14"
            r="2"
            fill="rgba(255,255,255,0.9)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.circle
            cx="28"
            cy="14"
            r="2"
            fill="rgba(255,255,255,0.9)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.circle
            cx="20"
            cy="26"
            r="2"
            fill="rgba(255,255,255,0.9)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          <motion.circle
            cx="20"
            cy="8"
            r="2"
            fill="rgba(255,255,255,0.9)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
          
          {/* Neural Network Connections */}
          <motion.path
            d="M12 14 L28 14"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <motion.path
            d="M12 14 L20 26"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          />
          <motion.path
            d="M28 14 L20 26"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          />
          <motion.path
            d="M20 8 L12 14"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          />
          <motion.path
            d="M20 8 L28 14"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
          
          {/* Central AI Core */}
          <motion.circle
            cx="20"
            cy="17"
            r="3"
            fill="rgba(255,255,255,0.95)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 300 }}
          />
          
          {/* Pulsing Effect */}
          <motion.circle
            cx="20"
            cy="17"
            r="3"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ 
              scale: [1, 1.5, 1], 
              opacity: [1, 0, 1] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: 1.5
            }}
          />
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(177, 95%, 45%)" />
              <stop offset="50%" stopColor="hsl(173, 100%, 40%)" />
              <stop offset="100%" stopColor="hsl(159, 100%, 36%)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      
      {showText && (
        <motion.span
          className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
        >
          SyncEdgeLabs
        </motion.span>
      )}
    </div>
  );
}