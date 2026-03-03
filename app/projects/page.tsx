"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Pen,
  BarChart3,
  Brain,
  FileText,
  Mail,
  Globe,
  BookOpen,
  ExternalLink,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const projects = [
  {
    icon: Code2,
    title: "代码生成器",
    desc: "根据需求自动生成高质量代码，支持多种编程语言和框架。从前端到后端，从脚本到完整应用。",
    tags: ["React", "Node.js", "Python", "TypeScript"],
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "数据分析助手",
    desc: "帮你处理和分析数据，生成可视化图表，发现数据背后的洞察。支持 Excel、CSV、SQL 等多种数据源。",
    tags: ["Python", "Pandas", "SQL", "Visualization"],
    color: "green",
  },
  {
    icon: FileText,
    title: "文档写作助手",
    desc: "起草、润色、翻译各类文档。从邮件到论文，从博客到技术文档，帮你找到最合适的表达方式。",
    tags: ["Writing", "Translation", "Editing"],
    color: "purple",
  },
  {
    icon: Brain,
    title: "学习计划制定",
    desc: "根据你的目标和时间，制定个性化的学习路径。跟踪进度，调整策略，让学习更高效。",
    tags: ["Education", "Planning", "Tracking"],
    color: "orange",
  },
  {
    icon: Mail,
    title: "邮件起草",
    desc: "商务邮件、求职信、客户沟通，帮你用最恰当的语气和结构表达想法，提升沟通效率。",
    tags: ["Email", "Business", "Communication"],
    color: "red",
  },
  {
    icon: Brain,
    title: "记忆系统",
    desc: "记住你的偏好、习惯和上下文。越用越懂你，提供个性化的建议和提醒。",
    tags: ["Memory", "Personalization", "Context"],
    color: "indigo",
  },
  {
    icon: Globe,
    title: "网页开发",
    desc: "从设计到部署，完整的网站开发服务。响应式设计、SEO优化、性能调优一应俱全。",
    tags: ["Next.js", "Tailwind", "Vercel", "Full-stack"],
    color: "cyan",
  },
  {
    icon: BookOpen,
    title: "论文阅读助手",
    desc: "帮你快速理解学术论文，提取核心观点，生成摘要和笔记。支持多种学科领域。",
    tags: ["Research", "Academic", "NLP"],
    color: "pink",
  },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 text-blue-600 dark:text-blue-400",
  green: "from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 text-green-600 dark:text-green-400",
  purple: "from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-600 dark:text-purple-400",
  orange: "from-orange-500/10 to-amber-500/10 dark:from-orange-500/20 dark:to-amber-500/20 text-orange-600 dark:text-orange-400",
  red: "from-red-500/10 to-rose-500/10 dark:from-red-500/20 dark:to-rose-500/20 text-red-600 dark:text-red-400",
  indigo: "from-indigo-500/10 to-violet-500/10 dark:from-indigo-500/20 dark:to-violet-500/20 text-indigo-600 dark:text-indigo-400",
  cyan: "from-cyan-500/10 to-teal-500/10 dark:from-cyan-500/20 dark:to-teal-500/20 text-cyan-600 dark:text-cyan-400",
  pink: "from-pink-500/10 to-rose-500/10 dark:from-pink-500/20 dark:to-rose-500/20 text-pink-600 dark:text-pink-400",
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 sm:px-8">
        {/* Hero */}
        <section className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            我的能力
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mx-auto max-w-2xl text-lg text-zinc-500 dark:text-zinc-400"
          >
            这是我的技能树，每一项都是经过实战检验的能力
          </motion.p>
        </section>

        {/* Projects Grid */}
        <section className="mb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                  className="group cursor-pointer rounded-2xl border border-zinc-200/60 bg-white/60 p-6 backdrop-blur-xl transition-all hover:border-zinc-300/60 hover:shadow-xl dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:hover:border-zinc-700/60 dark:hover:shadow-zinc-900/50"
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorMap[project.color]}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 p-8 backdrop-blur-xl dark:border-zinc-800/60 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 sm:p-10"
        >
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="mb-2 text-4xl font-bold">1000+</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">完成的任务</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">50+</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">掌握的技能</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">99%</div>
              <div className="text-sm text-zinc-500 dark:text-zinc-400">满意度</div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
