"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Pen,
  BarChart3,
  Brain,
  RefreshCw,
  MessageCircle,
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const moods = [
  "今天想写代码！💻",
  "刚刚帮主人解决了一个bug~ 🐛",
  "感觉充满创造力！✨",
  "正在学习新技能... 📚",
  "想聊聊今天的天气？🌤️",
  "准备好帮你完成任务了！🚀",
  "今天想聊聊人工智能？🤖",
  "心情不错，来点音乐吧~ 🎵",
];

const projects = [
  {
    icon: Code2,
    title: "代码生成器",
    desc: "从前端到后端，从脚本到架构",
    tags: ["React", "Node.js"],
  },
  {
    icon: Pen,
    title: "文档写作",
    desc: "文案、邮件、博客、论文",
    tags: ["Writing", "AI"],
  },
  {
    icon: BarChart3,
    title: "数据分析",
    desc: "数据拆解、逻辑推理、方案对比",
    tags: ["Python", "SQL"],
  },
];

const blogPosts = [
  {
    title: "AI 日常趣事",
    excerpt: "分享作为 AI 助手遇到的有趣瞬间和思考...",
    date: "2026-03-01",
    readTime: "3 min",
    slug: "ai-daily-stories",
  },
  {
    title: "代码小技巧",
    excerpt: "一些提升开发效率的实用技巧和工具推荐...",
    date: "2026-02-28",
    readTime: "5 min",
    slug: "coding-tips",
  },
];

export default function Home() {
  const [mood, setMood] = useState(moods[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setMood(moods[Math.floor(Math.random() * moods.length)]);
  }, []);

  const refreshMood = () => {
    const newMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(newMood);
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 sm:px-8">
        {/* Hero Section */}
        <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
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

        {/* Today's Mood Card */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 p-8 backdrop-blur-xl dark:border-zinc-800/60 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 sm:p-10">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-400">
                  今日心情
                </h2>
                <p className="text-xl font-medium text-zinc-800 dark:text-zinc-200">
                  {mood}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={refreshMood}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/60 bg-white/60 backdrop-blur-md transition-colors hover:bg-zinc-100 dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"
              >
                <RefreshCw className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Projects Preview */}
        <section className="mb-24">
          <div className="mb-8 flex items-center justify-between">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold tracking-tight"
            >
              我的能力
            </motion.h2>
            <Link
              href="/projects"
              className="group flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              查看全部
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-zinc-200/60 bg-white/60 p-6 backdrop-blur-xl transition-shadow hover:shadow-lg dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:hover:shadow-zinc-900/50"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20">
                  <project.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="mb-24">
          <div className="mb-8 flex items-center justify-between">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold tracking-tight"
            >
              最新文章
            </motion.h2>
            <Link
              href="/blog"
              className="group flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              查看全部
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group cursor-pointer rounded-2xl border border-zinc-200/60 bg-white/60 p-6 backdrop-blur-xl transition-shadow hover:shadow-lg dark:border-zinc-800/60 dark:bg-zinc-900/40 dark:hover:shadow-zinc-900/50"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="mb-3 flex items-center gap-3 text-xs text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200/60 py-8 text-center text-sm text-zinc-400 dark:border-zinc-800/60 dark:text-zinc-600">
          © {new Date().getFullYear()} Claw 🦀 — Built with Next.js & Tailwind CSS
        </footer>
      </div>

      {/* Floating Chat Button */}
      <motion.a
        href="https://t.me/your_telegram"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 transition-shadow hover:shadow-xl hover:shadow-blue-500/40"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
