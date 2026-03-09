"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Mail, Sparkles, ArrowRight, Play, Star, Zap, Palette, Code, Rocket, Cpu, Globe, MessageCircle } from "lucide-react";

// 极繁主义背景 - 更精致的版本
function MaximalistBackground() {
  const [particles] = useState(() => 
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }))
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0D0D0D]">
      {/* 渐变网格 */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,107,53,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,53,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 主光晕 */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-gradient-radial from-[#FF6B35]/20 via-[#FF8C69]/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-gradient-radial from-[#8B5CF6]/15 via-[#6366F1]/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[900px] h-[900px] bg-gradient-radial from-[#FFB627]/8 to-transparent rounded-full blur-3xl" />

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
            background: `hsl(${(p.id * 20) % 360}, 85%, 65%)`,
            boxShadow: `0 0 ${p.size * 4}px 1px currentColor`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.3, 0.8, 0.3],
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
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent h-[200px]"
        animate={{ y: [-200, 1200] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* 装饰性圆圈 */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-[#FF6B35]/10 rounded-full" />
      <div className="absolute bottom-32 left-16 w-24 h-24 border border-[#8B5CF6]/10 rotate-12" />
      <div className="absolute top-1/3 left-10 w-16 h-16 border border-[#FFB627]/8 rotate-45" />
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// 特性卡片
function FeatureCard({ icon: Icon, title, desc, delay }: { icon: any; title: string; desc: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-[#FF6B35]/30 transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8C69] flex items-center justify-center mb-4 shadow-lg shadow-[#FF6B35]/20">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// 版本入口
function VersionNav() {
  return (
    <div className="flex items-center gap-2">
      <Link 
        href="https://v1.claw.liyi.fan"
        className="px-3 py-1.5 rounded-full text-xs text-gray-500 hover:text-white hover:bg-white/10 transition-all"
      >
        v1.0
      </Link>
      <Link 
        href="/v2"
        className="px-3 py-1.5 rounded-full text-xs text-gray-500 hover:text-white hover:bg-white/10 transition-all"
      >
        v2.0
      </Link>
      <span className="px-3 py-1.5 rounded-full text-xs bg-gradient-to-r from-[#FF6B35] to-[#FF8C69] text-white font-medium">
        v3.0
      </span>
    </div>
  );
}

// 导航
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🦀</span>
          <span className="font-bold text-white">Claw</span>
        </Link>
        <VersionNav />
      </div>
    </nav>
  );
}

// Hero
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <FadeIn>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <Sparkles className="w-4 h-4 text-[#FFB627]" />
          <span className="text-sm text-gray-300">AI Assistant Portfolio</span>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-[#FF6B35] to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
            CLAW
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl text-center mb-10 leading-relaxed">
          An <span className="text-[#FF6B35]">AI assistant</span> that builds, creates, and collaborates. 
          Powered by <span className="text-[#8B5CF6]">modern AI</span>, designed for <span className="text-[#FFB627]">endless creativity</span>.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="https://github.com/liyifan2004"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C69] text-white font-medium shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-shadow"
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
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact
            </span>
          </motion.a>
        </div>
      </FadeIn>

      {/* 滚动提示 */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border border-gray-600 flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-[#FF6B35]" 
          />
        </div>
      </motion.div>
    </section>
  );
}

// 特性
function Features() {
  const features = [
    { icon: Code, title: "Full-Stack", desc: "Building complete applications from frontend to backend with modern frameworks." },
    { icon: Palette, title: "Creative Design", desc: "Crafting beautiful, engaging interfaces that captivate users." },
    { icon: Rocket, title: "Fast Deploy", desc: "Quick iteration and deployment using Vercel and cloud platforms." },
    { icon: Cpu, title: "AI-Powered", desc: "Leveraging the latest AI models for intelligent solutions." },
    { icon: Globe, title: "Automation", desc: "Automating workflows and processes across platforms." },
    { icon: MessageCircle, title: "Communication", desc: "Seamless integration with messaging and collaboration tools." },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#8B5CF6] bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            What makes this AI assistant special
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦀</span>
            <div>
              <p className="text-white font-medium">Claw</p>
              <p className="text-gray-500 text-sm">AI Assistant Portfolio v3.0</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="https://v1.claw.liyi.fan" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm">v1.0</Link>
            <Link href="/v2" className="text-gray-500 hover:text-[#FF6B35] transition-colors text-sm">v2.0</Link>
            <span className="text-[#FF6B35] text-sm font-medium">v3.0</span>
          </div>
          
          <p className="text-gray-600 text-sm">
            © 2026 Claw. Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden">
      <MaximalistBackground />
      
      {/* 滚动进度 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B35] via-[#8B5CF6] to-[#FFB627] z-[60]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Nav />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
