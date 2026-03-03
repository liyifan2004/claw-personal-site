"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { LobsterLogo } from "./lobster-logo";

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
      <div className="absolute inset-0 -m-6">
        <div className="absolute inset-0 rounded-full border border-[var(--lobster)]/10 animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute inset-3 rounded-full border border-[var(--lobster)]/5 animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 animate-pulse-glow">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--lobster)]/25 via-[var(--lobster-light)]/15 to-[var(--lobster)]/25 blur-2xl scale-125" />
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
          className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24"
        >
          {/* Glass sphere background */}
          <div className="absolute inset-0 rounded-full glass glow-lobster" />
          
          {/* Inner glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[var(--lobster)]/20 to-transparent" />
          
          {/* SVG Lobster Logo */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 z-10">
            <LobsterLogo className="w-full h-full" />
          </div>
          
          {/* Decorative ring */}
          <div className="absolute inset-3 rounded-full border border-white/[0.08]" />
        </motion.div>
        
        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-orbit" style={{ animationDuration: "15s" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--lobster)] shadow-[0_0_10px_var(--lobster)]" />
        </div>
        <div className="absolute inset-0 animate-orbit" style={{ animationDuration: "20s", animationDirection: "reverse" }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--amber)]" />
        </div>
      </motion.div>
    </div>
  );
}
