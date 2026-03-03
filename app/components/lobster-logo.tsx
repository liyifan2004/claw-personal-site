"use client";

import { motion } from "framer-motion";

export function LobsterLogo({ className = "" }: { className?: string }) {
  return (
    <motion.svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        <linearGradient id="lobsterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#FF8C69" />
        </linearGradient>
      </defs>
      
      <motion.path 
        d="M50 15 C45 15, 40 20, 40 28 C40 32, 42 35, 45 37 L45 45 C42 46, 38 48, 35 52 C32 56, 30 62, 30 68 C30 75, 32 80, 35 83 C38 86, 42 87, 45 85 L45 82 C42 83, 40 82, 38 80 C36 78 35 74 35 68 C35 63 36 58 38 55 C40 52 43 50 45 49 L45 70 C45 75, 47 78, 50 78 C53 78, 55 75, 55 70 L55 49 C57 50, 60 52, 62 55 C64 58, 65 63, 65 68 C65 74, 64 78, 62 80 C60 82, 58 83, 55 82 L55 85 C58 87, 62 86, 65 83 C68 80, 70 75, 70 68 C70 62, 68 56, 65 52 C62 48, 58 46, 55 45 L55 37 C58 35, 60 32, 60 28 C60 20, 55 15, 50 15 Z" 
        fill="url(#lobsterGradient)"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.path 
        d="M35 52 C30 50, 22 48, 18 50 C14 52, 12 56, 12 60 C12 64, 14 67, 18 68 C22 69, 28 67, 32 62 L35 58 Z" 
        fill="url(#lobsterGradient)"
        animate={{ rotate: [-5, 0, -5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "35px 52px" }}
      />
      
      <motion.path 
        d="M65 52 C70 50, 78 48, 82 50 C86 52, 88 56, 88 60 C88 64, 86 67, 82 68 C78 69, 72 67, 68 62 L65 58 Z" 
        fill="url(#lobsterGradient)"
        animate={{ rotate: [5, 0, 5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "65px 52px" }}
      />
      
      <motion.path 
        d="M45 20 Q40 10, 35 8 M55 20 Q60 10, 65 8" 
        stroke="url(#lobsterGradient)" 
        strokeWidth="2" 
        strokeLinecap="round" 
        fill="none"
        animate={{ rotate: [2, 0, 2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "center 20px" }}
      />
      
      <circle cx="44" cy="28" r="2" fill="#020202"/>
      <circle cx="56" cy="28" r="2" fill="#020202"/>
    </motion.svg>
  );
}
