"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wand2, Cloud, Dice5, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const jokes = [
  "为什么程序员分不清圣诞节和万圣节？因为 Oct 31 = Dec 25",
  "一个程序员去面试。面试官问：你有什么缺点？程序员说：我比较固执。面试官说：能举个例子吗？程序员说：不能。",
  "程序员最讨厌的四件事：1. 写注释 2. 写文档 3. 别人不写注释 4. 别人不写文档",
  "代码能跑就不要动，哪怕你不知道为什么能跑。",
  "DEBUG 的艺术：在代码里加 print，发现问题所在，删除 print，代码又不工作了。",
  "程序员的日常生活：写代码 → 出 bug → 怀疑人生 → 修复 bug → 庆祝 → 写代码...",
  "产品经理：这个功能很简单吧？程序员：嗯，你行你上。",
  "为什么程序员总是分不清圣诞节和万圣节？因为他们都在 10 月 31 日工作。",
];

const weatherEmojis: Record<string, string> = {
  sunny: "☀️",
  cloudy: "☁️",
  rainy: "🌧️",
  snowy: "❄️",
  stormy: "⛈️",
};

const weatherDesc: Record<string, string> = {
  sunny: "晴朗 - 适合出门走走",
  cloudy: "多云 - 宅在家里也不错",
  rainy: "下雨 - 记得带伞",
  snowy: "下雪 - 注意保暖",
  stormy: "暴风雨 - 最好别出门",
};

export default function ToolsPage() {
  const [currentJoke, setCurrentJoke] = useState(jokes[0]);
  const [weather, setWeather] = useState<{
    city: string;
    condition: string;
    temp: number;
  } | null>(null);
  const [cityInput, setCityInput] = useState("");

  const generateJoke = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setCurrentJoke(randomJoke);
  };

  const getWeather = () => {
    // Simulate weather data
    const conditions = ["sunny", "cloudy", "rainy", "snowy", "stormy"];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const randomTemp = Math.floor(Math.random() * 35) - 5;

    setWeather({
      city: cityInput || "未知城市",
      condition: randomCondition,
      temp: randomTemp,
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-12 sm:px-8">
        <section className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            工具箱
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mx-auto max-w-2xl text-lg text-zinc-500 dark:text-zinc-400"
          >
            一些实用的小工具
          </motion.p>
        </section>

        <div className="grid gap-8">
          {/* Joke Generator */}
          <motion.section
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-200/60 bg-white/60 p-8 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-900/40"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                <Wand2 className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">随机笑话生成器</h2>
                <p className="text-sm text-zinc-500">程序员专属</p>
              </div>
            </div>

            <motion.div
              key={currentJoke}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-xl bg-gradient-to-br from-yellow-500/5 to-orange-500/5 p-6 dark:from-yellow-500/10 dark:to-orange-500/10"
            >
              <p className="text-lg leading-relaxed">{currentJoke}</p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={generateJoke}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 font-medium text-white shadow-lg shadow-yellow-500/25"
            >
              <Sparkles className="h-4 w-4" />
              换一个
            </motion.button>
          </motion.section>

          {/* Weather Query */}
          <motion.section
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-200/60 bg-white/60 p-8 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-900/40"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Cloud className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">天气查询</h2>
                <p className="text-sm text-zinc-500">随机生成天气（演示用）</p>
              </div>
            </div>

            <div className="mb-6 flex gap-3">
              <input
                type="text"
                placeholder="输入城市名称..."
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                className="flex-1 rounded-xl border border-zinc-200/60 bg-white/60 px-4 py-3 backdrop-blur-sm outline-none focus:border-blue-500 dark:border-zinc-700/60 dark:bg-zinc-900/60"
                onKeyDown={(e) => e.key === "Enter" && getWeather()}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={getWeather}
                className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/25"
              >
                查询
              </motion.button>
            </div>

            {weather && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-6 dark:from-blue-500/10 dark:to-cyan-500/10"
              >
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{weatherEmojis[weather.condition]}</div>
                  <div>
                    <h3 className="text-2xl font-bold">{weather.city}</h3>
                    <p className="text-3xl font-bold">{weather.temp}°C</p>
                    <p className="text-zinc-500">{weatherDesc[weather.condition]}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.section>

          {/* Random Number */}
          <motion.section
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-200/60 bg-white/60 p-8 backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-900/40"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Dice5 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">随机数生成器</h2>
                <p className="text-sm text-zinc-500">抛硬币、掷骰子、随机数</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <RandomNumberCard title="抛硬币" max={2} labels={["正面", "反面"]} />
              <RandomNumberCard title="掷骰子" max={6} />
              <RandomNumberCard title="1-100" max={100} />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

function RandomNumberCard({
  title,
  max,
  labels,
}: {
  title: string;
  max: number;
  labels?: string[];
}) {
  const [result, setResult] = useState<number | null>(null);

  const roll = () => {
    setResult(Math.floor(Math.random() * max) + 1);
  };

  return (
    <div className="rounded-xl border border-zinc-200/60 bg-white/40 p-4 text-center backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/40">
      <h3 className="mb-3 font-medium">{title}</h3>

      <motion.div
        key={result}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-3 text-3xl font-bold"
      >
        {result ? (labels ? labels[result - 1] : result) : "?"}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={roll}
        className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
      >
        生成
      </motion.button>
    </div>
  );
}
