"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, Mail, Sparkles, ArrowRight, Play, Star, Zap, Palette, Code, Rocket, Cpu, Globe, MessageCircle, Terminal, Lock, Send } from "lucide-react";

// Obsidian Coral 配色方案 (来自 Google Stitch)
const colors = {
  primary: "#FF7F50",    // 珊瑚橙
  secondary: "#7000FF",   // 紫色
  tertiary: "#FF0055",    // 粉红
  neutral: "#0D0D0F",     // 深黑
};

// 极繁主义背景 - Cyberpunk 升级版
function MaximalistBackground() {
  const [particles] = useState(() => 
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }))
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0D0D0F]">
      {/* 渐变网格 */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(${colors.primary}40 1px, transparent 1px),
            linear-gradient(90deg, ${colors.primary}40 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* 主光晕 - 使用 Stitch 配色 */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-gradient-radial from-[#FF7F50]/20 via-[#7000FF]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-gradient-radial from-[#7000FF]/15 via-[#FF0055]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[900px] h-[900px] bg-gradient-radial from-[#FF7F50]/5 to-transparent rounded-full blur-3xl" />

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
            background: p.id % 3 === 0 ? colors.primary : p.id % 3 === 1 ? colors.secondary : colors.tertiary,
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
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent h-[200px]"
        animate={{ y: [-200, 1200] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* 装饰性边框 - Cyberpunk 风格 */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#FF7F50]/30" />
      <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-[#7000FF]/30" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-[#7000FF]/30" />
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#FF7F50]/30" />
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

// 毛玻璃卡片 (来自 Stitch 的 glassmorphism)
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.08] hover:border-[#FF7F50]/30 transition-all duration-300 ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF7F50]/5 to-[#7000FF]/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
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
      className="group"
    >
      <GlassCard>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF7F50] to-[#7000FF] flex items-center justify-center mb-4 shadow-lg shadow-[#FF7F50]/20">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </GlassCard>
    </motion.div>
  );
}

// 版本导航
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
      <span className="px-3 py-1.5 rounded-full text-xs bg-gradient-to-r from-[#FF7F50] to-[#7000FF] text-white font-medium">
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
          <span className="font-bold text-white">CLAW</span>
        </Link>
        <VersionNav />
      </div>
    </nav>
  );
}

// Hero - THE FUTURE HAS CLAWS 风格
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <FadeIn>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#FF7F50]/20 mb-8">
          <Lock className="w-4 h-4 text-[#FF7F50]" />
          <span className="text-sm text-gray-300">Identity confirmed: Autonomous Assistant</span>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-center leading-none">
          <span className="block text-white">THE FUTURE</span>
          <span className="block bg-gradient-to-r from-[#FF7F50] via-[#7000FF] to-[#FF0055] bg-clip-text text-transparent">
            HAS CLAWS.
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl text-center mb-10 leading-relaxed">
          <span className="text-[#FF7F50]">Claw</span>: The Cyber-Crab AI for Automation, Development, and Creative Mastery.
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
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#FF7F50] to-[#7000FF] text-white font-semibold shadow-lg shadow-[#FF7F50]/25 hover:shadow-[#FF7F50]/40 transition-all"
          >
            <span className="flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Initialize Protocol
            </span>
          </motion.a>
          
          <motion.a
            href="#capabilities"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
          >
            <span className="flex items-center gap-2">
              View Capabilities
              <ArrowRight className="w-4 h-4" />
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
        <div className="w-6 h-10 rounded-full border border-[#FF7F50]/30 flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-[#FF7F50]" 
          />
        </div>
      </motion.div>
    </section>
  );
}

// Neural Architecture 部分
function NeuralArchitecture() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-[#FF7F50] to-[#7000FF] bg-clip-text text-transparent">
                ENGINEERED FOR DEPTH.
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Multi-modal intelligence designed to execute complex workflows with surgical precision and creative flair.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard 
            icon={Cpu} 
            title="AI Intelligence" 
            desc="Advanced LLM orchestration, semantic reasoning, and context-aware task execution."
            delay={0}
          />
          <FeatureCard 
            icon={Zap} 
            title="Automation" 
            desc="Streamlining workflows through custom agents that handle repetitive digital infrastructure."
            delay={0.1}
          />
          <FeatureCard 
            icon={Code} 
            title="Full-stack Dev" 
            desc="Rapid prototyping and production-grade deployment across modern architectural stacks."
            delay={0.2}
          />
          <FeatureCard 
            icon={Palette} 
            title="Creative Mastery" 
            desc="High-fidelity UI/UX design, visual storytelling, and brand-driven digital aesthetics."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

// 项目展示 (来自 Stitch 的 PROJECT ARCHIVE)
function ProjectArchive() {
  const projects = [
    {
      title: "NEON HUD OS",
      category: "Case Study 01",
      desc: "A full-system operating interface designed for high-end biometric feedback systems.",
    },
    {
      title: "SYNAPSE CORE",
      category: "Case Study 02",
      desc: "Automated intelligence layering for decentralized data processing units.",
    },
    {
      title: "CLAW ECOSYSTEM",
      category: "Major Release",
      desc: "The complete unification of AI agents and human creative control in one seamless dashboard.",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-black mb-16">
            <span className="bg-gradient-to-r from-[#7000FF] to-[#FF0055] bg-clip-text text-transparent">
              PROJECT ARCHIVE.
            </span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#FF7F50]/30 transition-all"
            >
              {/* 占位图 - 实际项目中替换为真实图片 */}
              <div className="h-40 bg-gradient-to-br from-[#FF7F50]/10 to-[#7000FF]/10 flex items-center justify-center">
                <Terminal className="w-12 h-12 text-[#FF7F50]/30" />
              </div>
              
              <div className="p-5">
                <p className="text-xs text-[#FF7F50] mb-2">{p.category}</p>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF7F50] transition-colors">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
                <button className="flex items-center gap-1 text-sm text-[#FF7F50] hover:gap-2 transition-all">
                  REVEAL SPECS <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 联系表单 (来自 Stitch 的 INITIALIZE CONNECTION)
function ContactSection() {
  return (
    <section id="connect" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <GlassCard className="p-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
              <span className="bg-gradient-to-r from-[#FF7F50] to-[#7000FF] bg-clip-text text-transparent">
                INITIALIZE CONNECTION.
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-10">
              Ready to upgrade your infrastructure? Establish a secure link to discuss automation strategies and high-impact development.
            </p>
          </FadeIn>

          {/* 模拟的安全连接显示 */}
          <div className="flex items-center justify-center gap-4 mb-8 p-4 rounded-xl bg-black/30 border border-[#7000FF]/20">
            <Terminal className="w-5 h-5 text-[#FF7F50]" />
            <span className="text-sm font-mono text-[#FF7F50]">protocol://claw.ai/secure</span>
            <Lock className="w-4 h-4 text-[#7000FF]" />
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Subject Identity</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:border-[#FF7F50]/50 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Communication Channel</label>
              <input 
                type="email" 
                placeholder="email@address.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:border-[#FF7F50]/50 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Data Payload</label>
              <textarea 
                rows={3}
                placeholder="Message details..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:border-[#FF7F50]/50 focus:outline-none transition-colors resize-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF7F50] to-[#7000FF] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#FF7F50]/20 hover:shadow-[#FF7F50]/40 transition-shadow"
            >
              <Send className="w-5 h-5" />
              INITIALIZE CONNECTION
            </motion.button>
          </form>
        </GlassCard>
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
              <p className="text-white font-bold">CLAW AI</p>
              <p className="text-gray-500 text-sm">ENGINEERED FOR DEPTH.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-500 hover:text-[#FF7F50] transition-colors text-sm">Privacy</Link>
            <Link href="#" className="text-gray-500 hover:text-[#FF7F50] transition-colors text-sm">System Status</Link>
            <Link href="https://github.com/liyifan2004" className="text-gray-500 hover:text-[#FF7F50] transition-colors text-sm">Github</Link>
          </div>
          
          <p className="text-gray-600 text-sm">
            © 2026 CLAW AI. ENGINEERED FOR DEPTH.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen bg-[#0D0D0F] text-white overflow-x-hidden">
      <MaximalistBackground />
      
      {/* 滚动进度条 */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF7F50] via-[#7000FF] to-[#FF0055] z-[60]"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Nav />
      <Hero />
      <section id="capabilities">
        <NeuralArchitecture />
      </section>
      <ProjectArchive />
      <ContactSection />
      <Footer />
    </div>
  );
}
