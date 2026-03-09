"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Background() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // 生成随机粒子
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030303]">
      {/* 渐变网格 */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,53,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* 大渐变光晕 */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#FF6B35]/20 via-[#FF8C69]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#6366F1]/20 via-[#8B5CF6]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#FF6B35]/5 via-transparent to-transparent rounded-full blur-3xl" />

      {/* 粒子 */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `hsl(${(particle.id * 30) % 360}, 80%, 60%)`,
            boxShadow: `0 0 ${particle.size * 2}px currentColor`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 扫描线效果 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/2 to-transparent h-[200px]"
        animate={{ y: [-200, 1000] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* 噪点纹理 */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 动态几何边框 */}
      <div className="absolute top-8 right-8 w-32 h-32 border border-[#FF6B35]/20 rounded-lg rotate-12">
        <div className="absolute inset-2 border border-[#FF6B35]/10 rounded-md rotate-180" />
      </div>
      <div className="absolute bottom-16 left-8 w-24 h-24 border border-[#6366F1]/20 rounded-full">
        <div className="absolute inset-4 border border-[#6366F1]/10 rounded-full" />
      </div>

      {/* 装饰性线条 */}
      <svg className="absolute top-1/4 left-0 w-full h-[1px] opacity-10">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="url(#gradient)" strokeWidth="1" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
