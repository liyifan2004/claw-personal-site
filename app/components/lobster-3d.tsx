"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function Lobster3D() {
  const [isMounted, setIsMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

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
      {/* Outer glow rings */}
      <div className="absolute inset-0 -m-8">
        <div className="absolute inset-0 rounded-full border border-[#FF6B35]/10 animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute inset-4 rounded-full border border-[#FF6B35]/5 animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 animate-pulse-glow">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF6B35]/25 via-[#FF8C69]/15 to-[#FF6B35]/25 blur-2xl scale-125" />
      </div>
      
      {/* 3D Lobster container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28"
        >
          {/* Glass sphere background */}
          <div className="absolute inset-0 rounded-full glass glow-lobster" />
          
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#FF6B35]/20 to-transparent" />
          
          {/* Lobster emoji */}
          <motion.span 
            className="relative text-5xl sm:text-6xl select-none z-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🦞
          </motion.span>
          
          {/* Decorative ring */}
          <div className="absolute inset-3 rounded-full border border-white/[0.08]" />
        </motion.div>
        
        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "15s" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF6B35] shadow-[0_0_10px_#FF6B35]" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FFB627]" />
        </div>
      </motion.div>
    </div>
  );
}
