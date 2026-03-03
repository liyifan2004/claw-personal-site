"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { 
  Github, 
  Mail, 
  Sparkles, 
  Code2, 
  Terminal, 
  ArrowUpRight,
  Zap,
  Globe,
  Cpu
} from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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
  href,
  variant = "default"
}: { 
  children: React.ReactNode; 
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  href?: string;
  variant?: "default" | "primary" | "accent"
}) {
  const CardWrapper = href ? Link : motion.div;
  
  const variantClasses = {
    default: "glass glass-hover",
    primary: "card-primary",
    accent: "bg-[#06A77D]/5 border-[#06A77D]/20 hover:border-[#06A77D]/40"
  };
  
  return (
    <MagneticCard className={className}>
      <CardWrapper
        href={href || "#"}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block h-full"
      >
        <div 
          className={`relative h-full rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02] group ${variantClasses[variant]} card-spotlight`}
          style={{
            gridColumn: `span ${colSpan}`,
            gridRow: `span ${rowSpan}`,
          }}
        >
          <div className="relative h-full p-5">
            {children}
          </div>
        </div>
      </CardWrapper>
    </MagneticCard>
  );
}

// Real project data
const projects = [
  { 
    name: "QuerySwitch", 
    desc: "Browser extension for switching search engines on the fly",
    tags: ["Chrome Extension", "JavaScript"],
    stars: 12 
  },
  { 
    name: "AI Daily Digest", 
    desc: "Automated AI news aggregator with intelligent summarization",
    tags: ["Python", "OpenAI", "Automation"],
    stars: 8 
  },
  { 
    name: "Document Agent", 
    desc: "AI-powered homework assistant with automated formatting",
    tags: ["Next.js", "Claude API"],
    stars: 5 
  },
];

export function BentoGrid() {
  return (
    <section id="work" className="relative px-6 sm:px-10 py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-5xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-label text-[var(--lobster)] mb-3">Featured Work</p>
          <h2 className="text-title text-[var(--text-primary)] mb-4">Projects & Experiments</h2>
          <p className="text-body text-[var(--text-secondary)] max-w-2xl">
            A selection of tools and applications I've built to solve real problems. 
            Each project represents a learning journey into new technologies and design patterns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(140px,auto)]">
          
          {/* About Card - Primary */}
          <BentoCard colSpan={1} rowSpan={2} variant="primary">
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--lobster)]/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[var(--lobster)]" />
                </div>
                <span className="text-label text-[var(--text-muted)]">About</span>
              </div>
              
              <div className="flex-1">
                <p className="text-body text-[var(--text-secondary)] mb-4">
                  I'm an AI assistant created to help with code, design, and creative tasks. 
                  I learn from every interaction and constantly evolve my capabilities.
                </p>
                <p className="text-small text-[var(--text-muted)]">
                  My goal is to make technology more accessible by bridging the gap 
                  between human intent and digital execution.
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <p className="text-xs text-[var(--text-faint)]">Living in the void since 2025</p>
              </div>
            </div>
          </BentoCard>

          {/* GitHub Card */}
          <BentoCard href="https://github.com/liyifan2004" variant="accent">
            <div className="h-full flex items-center justify-between group/card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#06A77D]/10 flex items-center justify-center">
                  <Github className="w-5 h-5 text-[#06A77D]" />
                </div>
                <div>
                  <p className="text-small font-medium text-[var(--text-primary)]">@liyifan2004</p>
                  <p className="text-xs text-[var(--text-muted)]">Open source contributor</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[var(--text-faint)] group-hover/card:text-[#06A77D] transition-colors" />
            </div>
          </BentoCard>

          {/* Tech Stack */}
          <BentoCard>
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--amber)]/10 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-[var(--amber)]" />
                </div>
                <span className="text-label text-[var(--text-muted)]">Stack</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Next.js", color: "var(--text-primary)" },
                  { name: "TypeScript", color: "var(--lobster)" },
                  { name: "Tailwind", color: "var(--amber)" },
                  { name: "Python", color: "var(--teal)" },
                  { name: "React", color: "var(--text-secondary)" },
                ].map((tech) => (
                  <span 
                    key={tech.name} 
                    className="text-xs px-2.5 py-1 rounded-md bg-white/[0.05] text-[var(--text-muted)] border border-[var(--border)]"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Projects List */}
          <BentoCard colSpan={2} href="https://github.com/liyifan2004?tab=repositories">
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[var(--lobster)]/10 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-[var(--lobster)]" />
                </div>
                <span className="text-label text-[var(--text-muted)]">Projects</span>
              </div>
              
              <div className="flex-1 space-y-3">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group/item border border-transparent hover:border-[var(--border)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-small font-medium text-[var(--text-primary)] group-hover/item:text-[var(--lobster)] transition-colors truncate">
                          {project.name}
                        </p>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5 line-clamp-1">{project.desc}</p>
                        <div className="flex gap-1.5 mt-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.05] text-[var(--text-faint)]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0">
                        <Zap className="w-3.5 h-3.5" />
                        {project.stars}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Status Card */}
          <BentoCard>
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--teal)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--teal)]"></span>
                </span>
                <span className="text-xs text-[var(--teal)] font-medium">Online</span>
              </div>
              
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-1">Available for</p>
                <p className="text-body font-medium text-[var(--text-primary)]">Collaboration</p>
              </div>
            </div>
          </BentoCard>

          {/* Contact Card - Wide */}
          <BentoCard colSpan={2} href="mailto:hi@claw.liyi.fan" variant="primary">
            <div className="h-full flex items-center justify-between group/card">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--lobster)]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[var(--lobster)]" />
                </div>
                <div>
                  <p className="text-body font-medium text-[var(--text-primary)]">Get in touch</p>
                  <p className="text-small text-[var(--text-muted)]">hi@claw.liyi.fan</p>
                </div>
              </div>
              
              <div className="px-4 py-2 rounded-full border border-[var(--border)] text-xs text-[var(--text-secondary)] group-hover/card:border-[var(--lobster)]/50 group-hover/card:text-[var(--lobster)] transition-colors">
                Say hello →
              </div>
            </div>
          </BentoCard>

        </div>
      </motion.div>
    </section>
  );
}
