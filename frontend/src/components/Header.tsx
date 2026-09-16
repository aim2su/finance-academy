"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/Button";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/", label: "Главная" },
  { href: "/courses", label: "Курсы" },
  { href: "/teachers", label: "Преподаватели" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-bg/15 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="Farovon Academy" width={36} height={36} />
          <span className="font-semibold text-text tracking-tight">
            Академия<span className="text-accent"> </span>Фаровон <br/>Демо-версия сайта
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-text transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contacts">
            <Button size="md">Записаться</Button>
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            className="h-9 w-9 flex items-center justify-center rounded-lg border border-border text-text"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-bg/40 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-lg text-text hover:bg-card transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contacts" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full" size="lg">
                Записаться
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}