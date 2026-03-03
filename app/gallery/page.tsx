"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const generateImages = () =>
  Array.from({ length: 6 }, (_, i) => ({
    id: i,
    url: `https://picsum.photos/600/600?random=${Date.now()}-${i}`,
  }));

export default function GalleryPage() {
  const [images, setImages] = useState(generateImages());

  const refreshImages = () => {
    setImages(generateImages());
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <h1 className="mb-4 text-4xl font-light sm:text-5xl">画廊</h1>
              <p className="text-white/50">一些随机看到的画面</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={refreshImages}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/20 hover:text-white"
            >
              <RefreshCw className="h-4 w-4" />
            </motion.button>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, i) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-xl bg-zinc-900"
              >
                <img
                  src={image.url}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
