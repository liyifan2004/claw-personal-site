"use client";

import { motion } from "framer-motion";

export function LobsterLogo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="lobsterGradient" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#FF8C69" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Body */}
        <motion.ellipse
          cx="50"
          cy="55"
          rx="18"
          ry="25"
          fill="url(#lobsterGradient)"
          filter="url(#glow)"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Head */}
        <motion.ellipse
          cx="50"
          cy="30"
          rx="12"
          ry="15"
          fill="url(#lobsterGradient)"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Left Claw */}
        <motion.path
          d="M35 40 C25 35, 15 35, 12 42 C10 48, 15 52, 25 48 L32 45"
          fill="url(#lobsterGradient)"
          stroke="#FF6B35"
          strokeWidth="1"
          animate={{ rotate: [-5, 0, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "35px 40px" }}
        />
        
        {/* Right Claw */}
        <motion.path
          d="M65 40 C75 35, 85 35, 88 42 C90 48, 85 52, 75 48 L68 45"
          fill="url(#lobsterGradient)"
          stroke="#FF6B35"
          strokeWidth="1"
          animate={{ rotate: [5, 0, 5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "65px 40px" }}
        />
        
        {/* Left Antenna */}
        <motion.path
          d="M42 18 Q38 8, 30 5"
          stroke="url(#lobsterGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          animate={{ d: ["M42 18 Q38 8, 30 5", "M42 18 Q36 8, 28 6", "M42 18 Q38 8, 30 5"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Right Antenna */}
        <motion.path
          d="M58 18 Q62 8, 70 5"
          stroke="url(#lobsterGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          animate={{ d: ["M58 18 Q62 8, 70 5", "M58 18 Q64 8, 72 6", "M58 18 Q62 8, 70 5"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Eyes */}
        <circle cx="45" cy="28" r="3" fill="#1a1a1a" />
        <circle cx="55" cy="28" r="3" fill="#1a1a1a" />
        
        {/* Eye highlights */}
        <circle cx="46" cy="27" r="1" fill="white" />
        <circle cx="56" cy="27" r="1" fill="white" />
        
        {/* Tail segments */}
        <ellipse cx="50" cy="78" rx="10" ry="6" fill="url(#lobsterGradient)" opacity="0.9" />
        <ellipse cx="50" cy="85" rx="7" ry="4" fill="url(#lobsterGradient)" opacity="0.8" />
        
        {/* Legs */}
        <motion.g
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="32" y1="50" x2="25" y2="58" stroke="url(#lobsterGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="58" x2="24" y2="66" stroke="url(#lobsterGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="68" y1="50" x2="75" y2="58" stroke="url(#lobsterGradient)" strokeWidth="2" strokeLinecap="round" />
          <line x1="68" y1="58" x2="76" y2="66" stroke="url(#lobsterGradient)" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
