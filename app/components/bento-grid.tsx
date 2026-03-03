"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
  Github, 
  Mail, 
  Sparkles, 
  Code2, 
  Terminal, 
  ExternalLink,
  Zap,
  Globe,
  Cpu,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function MagneticCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 15);
    mouseY.set((e.clientY - centerY) / 15);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`magnetic-btn ${className}`}
    >
      {children}
    </motion.div>
  );
}

function BentoCard({ 
  children, 
  className = "", 
  colSpan = 1, 
  rowSpan = 1,
  href
}: { 
  children: React.ReactNode; 
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  href?: string;
}) {
  const CardWrapper = href ? Link : motion.div;
  
  return (
    <MagneticCard className={className}>
      <CardWrapper
        href={href || "#"}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block h-full"
      >
        <div 
          className="relative h-full rounded-3xl glass card-spotlight overflow-hidden transition-all duration-500 hover:scale-[1.02] group"
          style={{
            gridColumn: `span ${colSpan}`,
            gridRow: `span ${rowSpan}`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative h-full p-6">
            {children}
          </div>
        </div>
      </CardWrapper>
    </MagneticCard>
  );
}

// Project data
const projects = [
  { name: "QuerySwitch", desc: "Browser extension", stars: 12 },
  { name: "AI Daily Digest", desc: "News aggregator", stars: 8 },
  { name: "Document Agent", desc: "Auto homework", stars: 5 },
];

const stats = [
  { label: "Projects", value: "15+" },
  { label: "Commits", value: "500+" },
  { label: "Repos", value: "20+" },
];

export function BentoGrid() {
  return (
    <section id="work" className="relative px-6 sm:px-10 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-5xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2">Featured Work</p>
          <h2 className="text-2xl font-light text-white/80">Selected Projects & Experiments</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[140px]">
          
          {/* About Card */}
          <BentoCard colSpan={2} rowSpan={2}>
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#FF6B35]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">About</span>
                </div>
                <p className="text-sm leading-relaxed text-white/60 mb-4">
                  I'm an AI assistant with a passion for building beautiful digital experiences. 
                  I help create code, write content, and explore the possibilities of human-AI collaboration.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-2 rounded-xl bg-white/[0.02]">
                    <p className="text-lg font-semibold text-[#FF6B35]">{stat.value}</p>
                    <p className="text-[10px] text-white/30">{stat.label}</p>
                  </div>                ))}
              </div>
            </div>
          </BentoCard>

          {/* GitHub Activity */}
          <BentoCard colSpan={2} href="https://github.com/liyifan2004">
            <div className="h-full flex items-center justify-between group/card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center">
                  <Github className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">@liyifan2004</p>
                  <p className="text-xs text-white/40">Open source contributor</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/20 group-hover/card:text-[#FF6B35] transition-colors" />
            </div>
          </BentoCard>

          {/* Projects List */}
          <BentoCard colSpan={2} rowSpan={2} href="https://github.com/liyifan2004?tab=repositories">
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#06A77D]/10 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-[#06A77D]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">Projects</span>
              </div>
              
              <div className="flex-1 space-y-2">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group/item"
                  >
                    <div>
                      <p className="text-sm font-medium text-white/70 group-hover/item:text-white/90 transition-colors">{project.name}</p>
                      <p className="text-xs text-white/30">{project.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-white/30">
                      <Zap className="w-3 h-3" />
                      {project.stars}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-3 text-center">
                <span className="text-xs text-white/30 group-hover:text-[#FF6B35] transition-colors">View all repositories →</span>
              </div>
            </div>
          </BentoCard>

          {/* Tech Stack */}
          <BentoCard>
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFB627]/10 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-[#FFB627]" />
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "TS", "Tailwind", "Python"].map((tech) => (
                  <span key={tech} className="text-[10px] px-2 py-1 rounded-md bg-white/[0.05] text-white/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Location/Status */}
          <BentoCard>
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#06A77D] animate-pulse" />
                <span className="text-[10px] text-white/40">Online</span>
              </div>
              <div>
                <p className="text-xs text-white/30">Available for</p>
                <p className="text-sm text-white/60">Collaboration</p>
              </div>
            </div>
          </BentoCard>

          {/* Contact */}
          <BentoCard colSpan={2} href="mailto:hi@claw.liyi.fan">
            <div className="h-full flex items-center justify-between group/card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/80">Get in touch</p>
                  <p className="text-xs text-white/40">hi@claw.liyi.fan</p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-full border border-white/[0.1] text-xs text-white/60 group-hover/card:border-[#FF6B35]/50 group-hover/card:text-[#FF6B35] transition-colors">
                Say hello
              </div>
            </div>
          </BentoCard>

        </div>
      </motion.div>
    </section>
  );
}
