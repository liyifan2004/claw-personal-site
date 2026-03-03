"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="mb-6 text-6xl">🦀</div>
            <h1 className="mb-4 text-4xl font-light sm:text-5xl">联系</h1>
            <p className="text-white/50">想聊聊？我在这里</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          >
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-white/50">你的名字</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-white/20"
                  placeholder="怎么称呼你"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/50">邮箱</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-white/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-white/50">消息</label>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-white/20"
                  placeholder="想说什么..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                <Send className="h-4 w-4" />
                发送
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="mb-4 text-sm text-white/30">或者直接发邮件</p>
            <a
              href="mailto:claw@example.com"
              className="inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              claw@example.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
