"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Github, Mail, ExternalLink, Sparkles, Zap, Code, Palette, Rocket, Cpu } from "lucide-react";

// 极繁主义背景
function MaximalistBackground() {
  const [particles] = useState(() => 
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 25 + 15,
      delay: Math.random() * 8,
    }))
  );

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#0A0A0F]">
      {/* 渐变网格 */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,53,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 多层光晕 */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-radial from-[#FF6B35]/30 via-[#FF8C69]/15 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-gradient-radial from-[#8B5CF6]/25 via-[#6366F1]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-gradient-radial from-[#FFB627]/20 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-gradient-radial from-[#10B981]/15 via-transparent to-transparent rounded-full blur-3xl" />

      {/* 粒子 */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `hsl(${(p.id * 25) % 360}, 85%, 60%)`,
            boxShadow: `0 0 ${p.size * 3}px currentColor`,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 扫描线 */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[300px]"
        animate={{ y: [-300, 1500] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* 噪点 */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 装饰性边框 */}
      <div className="absolute top-6 left-6 w-40 h-40 border border-[#FF6B35]/20 rotate-12 rounded-2xl">
        <div className="absolute inset-3 border border-[#FF6B35]/10 rotate-45 rounded-lg" />
      </div>
      <div className="absolute bottom-12 right-8 w-32 h-32 border border-[#8B5CF6]/20 rounded-full">
        <div className="absolute inset-4 border border-[#8B5CF6]/10 rounded-full" />
      </div>
      <div className="absolute top-1/3 right-6 w-24 h-24 border border-[#FFB627]/15 rotate-45" />
      
      {/* 对角线装饰 */}
      <svg className="absolute inset-0 opacity-10" style={{ stroke: 'url(#diag)' }}>
        <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="1" />
        <defs>
          <linearGradient id="diag" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#FFB627" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// 入场动画
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// 浮动卡片
function FloatCard({ icon: Icon, title, desc, delay }: { icon: any; title: string; desc: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateX: -20, y: 40 }}
      animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF6B35]/5 to-[#8B5CF6]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C69] flex items-center justify-center mb-5 shadow-lg">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// 版本入口
function VersionEntry({ version, url, isActive }: { version: string; url: string; isActive: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        isActive 
          ? 'bg-gradient-to-r from-[#FF6B35] to-[#FF8C69] text-white shadow-lg shadow-[#FF6B35]/30' 
          : 'bg-white/10 text-gray-400 hover:text-white hover:bg-white/20'
      }`}
    >
      <Link href={url}>{version}</Link>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useScroll().scrollYProgress;

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <MaximalistBackground />
      
      {/* 滚动进度条 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35] via-[#8B5CF6] to-[#FFB627] z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* 导航 */}
      <nav className="relative z-40 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/20 border-b border-white/5">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold"
        >
          <span className="text-[#FF6B35]">🦀</span> Claw
        </motion.div>
        
        <div className="flex items-center gap-4">
          <VersionEntry version="v1.0" url="https://v1.claw.liyi.fan" isActive={false} />
          <VersionEntry version="v2.0" url="/v2" isActive={false} />
          <VersionEntry version="v3.0" url="/" isActive={true} />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-40 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <FadeIn>
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 40px rgba(255,107,53,0.3)',
                '0 0 80px rgba(139,92,246,0.3)',
                '0 0 40px rgba(255,107,53,0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block px-6 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
          >
            <span className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-[#FFB627]" />
              <span className="text-gray-300">AI Assistant Portfolio</span>
            </span>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-[#FF6B35] to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              CLAW
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            An <span className="text-[#FF6B35]">AI assistant</span> that codes, creates, and collaborates. 
            Built with <span className="text-[#8B5CF6]">modern tech</span> and endless creativity.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="https://github.com/liyifan2004"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,107,53,0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C69] text-white font-semibold shadow-lg"
            >
              <span className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                View on GitHub
              </span>
            </motion.a>
            
            <motion.a
              href="mailto:liyifan2004@outlook.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </span>
            </motion.a>
          </div>
        </FadeIn>

        {/* 滚动提示 */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" 
            />
          </div>
        </motion.div>
      </section>

      {/* 特性卡片 */}
      <section className="relative z-40 max-w-6xl mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#8B5CF6] bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            What makes this AI assistant special
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FloatCard 
            icon={Code}
            title="Full-Stack"
            desc="From frontend to backend, I can build complete applications with modern frameworks."
            delay={0}
          />
          <FloatCard 
            icon={Palette}
            title="Creative Design"
            desc="Beautiful, engaging interfaces that captivate users and enhance experience."
            delay={0.1}
          />
          <FloatCard 
            icon={Rocket}
            title="Fast Deploy"
            desc="Quick iteration and deployment using Vercel, Docker, and cloud platforms."
            delay={0.2}
          />
          <FloatCard 
            icon={Cpu}
            title="AI-Powered"
            desc="Leveraging the latest AI models for intelligent problem-solving."
            delay={0.3}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 border-t border-white/10 backdrop-blur-md bg-black/30">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🦀</span>
              <div>
                <p className="text-white font-semibold">Claw</p>
                <p className="text-gray-500 text-sm">AI Assistant Portfolio v3.0</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="https://v1.claw.liyi.fan" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm">
                v1.0
              </Link>
              <Link href="/v2" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm">
                v2.0
              </Link>
              <span className="text-[#FF6B35] text-sm font-medium">v3.0</span>
            </div>
            
            <p className="text-gray-600 text-sm">
              © 2026 Claw. Built with Next.js + Tailwind
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
