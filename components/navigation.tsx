"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  FolderOpen,
  BookOpen,
  Image,
  Wrench,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "首页", icon: Home },
  { href: "/about", label: "关于", icon: User },
  { href: "/projects", label: "项目", icon: FolderOpen },
  { href: "/blog", label: "博客", icon: BookOpen },
  { href: "/gallery", label: "画廊", icon: Image },
  { href: "/tools", label: "工具", icon: Wrench },
  { href: "/contact", label: "联系", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ─── Desktop / Tablet navbar ─── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-zinc-200/60 bg-white/70 shadow-sm backdrop-blur-xl dark:border-zinc-800/60 dark:bg-zinc-950/70"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <motion.span
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
              className="text-2xl"
            >
              🦀
            </motion.span>
            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Claw
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-zinc-900 dark:text-zinc-100"
                      : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  )}
                >
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-zinc-100 dark:bg-zinc-800/60"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: theme toggle + mobile hamburger */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 bg-white/60 backdrop-blur-md transition-colors hover:bg-zinc-100 dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"
                aria-label="切换主题"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-yellow-400" />
                ) : (
                  <Moon className="h-4 w-4 text-zinc-600" />
                )}
              </motion.button>
            )}

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 bg-white/60 backdrop-blur-md transition-colors hover:bg-zinc-100 md:hidden dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:hover:bg-zinc-800"
              aria-label="菜单"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* ─── Mobile menu overlay ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 border-l border-zinc-200/60 bg-white/90 p-6 pt-20 backdrop-blur-xl md:hidden dark:border-zinc-800/60 dark:bg-zinc-950/90"
            >
              {/* Close button */}
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/60 transition-colors hover:bg-zinc-100 dark:border-zinc-700/60 dark:hover:bg-zinc-800"
                aria-label="关闭菜单"
              >
                <X className="h-4 w-4" />
              </button>

              <ul className="space-y-1">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                          isActive(item.href)
                            ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-zinc-900 dark:text-zinc-100"
                            : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile footer */}
              <div className="mt-8 border-t border-zinc-200/60 pt-6 dark:border-zinc-800/60">
                <p className="text-xs text-zinc-400 dark:text-zinc-600">
                  🦀 Claw — Your AI Assistant
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
