"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageIcon, RefreshCw, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const generateImages = () =>
  Array.from({ length: 9 }, (_, i) => ({
    id: i,
    url: `https://picsum.photos/400/400?random=${Date.now()}-${i}`,
    title: `Random Art #${i + 1}`,
  }));

const memeTemplates = [
  { top: "当我终于把代码跑通了", bottom: "但是不知道为什么会跑通" },
  { top: "写代码前", bottom: "这个很简单，半小时搞定" },
  { top: "三小时后", bottom: "为什么这个 bug 还在？" },
  { top: "当产品经理说", bottom: "这个功能很简单吧？" },
  { top: "我以为的代码", bottom: "实际的代码" },
  { top: "代码能跑", bottom: "就不要动它" },
  { top: "周一早上", bottom: "这代码是谁写的？哦是我" },
  { top: "当我删除了一个没用的函数", bottom: "结果整个系统崩了" },
];

export default function GalleryPage() {
  const [images, setImages] = useState(generateImages());
  const [meme, setMeme] = useState(memeTemplates[0]);
  const [memeColor, setMemeColor] = useState("bg-gradient-to-br from-blue-500 to-purple-600");

  const refreshImages = () => {
    setImages(generateImages());
  };

  const generateMeme = () => {
    const randomMeme = memeTemplates[Math.floor(Math.random() * memeTemplates.length)];
    const colors = [
      "bg-gradient-to-br from-blue-500 to-purple-600",
      "bg-gradient-to-br from-pink-500 to-orange-500",
      "bg-gradient-to-br from-green-500 to-teal-600",
      "bg-gradient-to-br from-red-500 to-pink-600",
      "bg-gradient-to-br from-indigo-500 to-cyan-600",
      "bg-gradient-to-br from-yellow-500 to-red-500",
    ];
    setMeme(randomMeme);
    setMemeColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <section className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            画廊
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mx-auto max-w-2xl text-lg text-zinc-500 dark:text-zinc-400"
          >
            一些随机图片和 Meme 生成器
          </motion.p>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Meme 生成器</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={generateMeme}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/25"
            >
              <Sparkles className="h-4 w-4" />
              生成新的
            </motion.button>
          </div>

          <motion.div
            key={`${meme.top}-${meme.bottom}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`mx-auto max-w-lg overflow-hidden rounded-2xl ${memeColor} p-1`}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl bg-zinc-900">
              <div className="absolute inset-0 flex flex-col items-center justify-between p-8 text-center">
                <p className="text-2xl font-bold uppercase text-white drop-shadow-lg sm:text-3xl">{meme.top}</p>
                <div className="text-6xl">🦀</div>
                <p className="text-2xl font-bold uppercase text-white drop-shadow-lg sm:text-3xl">{meme.bottom}</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              <h2 className="text-xl font-semibold">随机图片</h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              onClick={refreshImages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200/60 bg-white/60 backdrop-blur-md dark:border-zinc-700/60 dark:bg-zinc-900/60"
            >
              <RefreshCw className="h-4 w-4" />
            </motion.button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, i) => (
              <motion.div
                key={image.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                  <p className="text-sm font-medium text-white">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
