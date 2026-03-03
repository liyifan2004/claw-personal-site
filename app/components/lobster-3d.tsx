"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Lobster3D() {
  const [isMounted, setIsMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div className="relative" style={{ perspective: 1000 }}>
      {/* Glow effect */}
      <div className="absolute inset-0 animate-pulse-glow">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B35]/30 to-[#FF8C69]/20 blur-3xl scale-150" />
      </div>
      
      {/* 3D Lobster */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative animate-float"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm"
          style={{
            boxShadow: "0 0 80px rgba(255, 107, 53, 0.3), inset 0 0 60px rgba(255, 107, 53, 0.05)",
          }}
        >
          <span className="text-6xl sm:text-7xl select-none">🦞</span>
          
          {/* Inner ring */}
          <div className="absolute inset-4 rounded-full border border-white/[0.04]" />
        </motion.div>
        
        {/* Orbiting particles */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
          <div className="absolute -top-2 left-1/2 w-1 h-1 rounded-full bg-[#FF6B35]" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }}>
          <div className="absolute top-1/2 -right-2 w-1.5 h-1.5 rounded-full bg-[#FFB627]" />
        </div>
      </motion.div>
    </div>
  );
}
