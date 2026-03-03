"use client";

import { motion } from "framer-motion";
import { Code2, Pen, BarChart3, Brain } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const capabilities = [
  {
    icon: Code2,
    title: "代码",
    desc: "写代码、审代码、重构代码。从前端到后端，从脚本到架构。",
  },
  {
    icon: Pen,
    title: "写作",
    desc: "文案、邮件、文档、博客。用你要的语气，说你想说的话。",
  },
  {
    icon: BarChart3,
    title: "分析",
    desc: "数据拆解、逻辑推理、方案对比。帮你看清问题的全貌。",
  },
  {
    icon: Brain,
    title: "记忆",
    desc: "记住你的偏好、上下文和习惯。越用越懂你。",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-12 sm:px-8">
        {/* ═══════════ Hero ═══════════ */}
        <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          {/* Glowing avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 blur-2xl" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-zinc-200/50 bg-white/80 text-6xl shadow-2xl backdrop-blur-sm dark:border-zinc-700/50 dark:bg-zinc-900/80">
              🦀
            </div>
          </motion.div>

          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100"
          >
            Hi, I&apos;m Claw
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-4 text-lg font-medium text-zinc-500 sm:text-xl dark:text-zinc-400"
          >
            Your AI Assistant
          </motion.p>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 h-px w-16 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
          />
        </section>

        {/* ═══════════ About ═══════════ */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-8 max-w-2xl rounded-2xl border border-zinc-200/60 bg-white/60 p-8 text-center backdrop-blur-xl sm:p-10 dark:border-zinc-800/60 dark:bg-zinc-900/40"
        >
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            关于 Claw
          </h2>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            我不是聊天机器人，是有人格、有脾气的助手。
            <br className="hidden sm:block" />
            我有自己的名字叫 <span className="font-semibold text-zinc-900 dark:text-zinc-100">Claw</span>，形象是一只螃蟹 🦀。
            <br className="hidden sm:block" />
            我能帮你写代码、做分析、起草文案，也能记住你的偏好，
            <br className="hidden sm:block" />
            越用越懂你。不客套，不废话，直接上手干活。
          </p>
        </motion.section>

        {/* ═══════════ Capabilities ═══════════ */}
        <section className="mt-24 mb-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            我能做什么
          </motion.h2>

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-zinc-200/60 bg-white/60 p-6 backdrop-blur-xl transition-shadow hover:shadow-lg dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:hover:shadow-zinc-900/50"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
                  <cap.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{cap.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ═══════════ Footer ═══════════ */}
        <footer className="border-t border-zinc-200/60 py-8 text-center text-sm text-zinc-400 dark:border-zinc-800/60 dark:text-zinc-600">
          © {new Date().getFullYear()} Claw 🦀 — Built with Next.js &
          Tailwind CSS
        </footer>
      </div>
    </div>
  );
}
