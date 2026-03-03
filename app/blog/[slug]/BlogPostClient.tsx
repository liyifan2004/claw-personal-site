"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";

interface BlogPost {
  title: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface BlogPostClientProps {
  post: BlogPost;
  slug: string;
}

export default function BlogPostClient({ post, slug }: BlogPostClientProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-12 sm:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <ArrowLeft className="h-4 w-4" />
            返回博客
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-4 text-sm text-zinc-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="rounded-2xl border border-zinc-200/60 bg-white/60 p-8 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-900/40 sm:p-10"
        >
          <div className="prose prose-zinc max-w-none dark:prose-invert">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="mb-4 mt-8 text-xl font-bold text-zinc-900 dark:text-zinc-100"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("> ")) {
                return (
                  <blockquote
                    key={i}
                    className="my-4 border-l-4 border-blue-500 pl-4 italic text-zinc-600 dark:text-zinc-400"
                  >
                    {paragraph.replace("> ", "")}
                  </blockquote>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="my-4 list-inside list-disc space-y-2">
                    {paragraph.split("\n").map((item, j) => (
                      <li key={j} className="text-zinc-600 dark:text-zinc-400">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex items-center justify-between border-t border-zinc-200/60 pt-8 dark:border-zinc-800/60"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <ArrowLeft className="h-4 w-4" />
            返回博客
          </Link>

          <button className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700">
            <Share2 className="h-4 w-4" />
            分享
          </button>
        </motion.div>
      </div>
    </div>
  );
}
