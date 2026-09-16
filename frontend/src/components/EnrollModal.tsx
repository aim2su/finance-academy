"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { courses } from "@/lib/courses";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultCourse?: string;
};

export function EnrollModal({ open, onClose, defaultCourse }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(defaultCourse ?? "");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open) {
      setCourse(defaultCourse ?? "");
      setSent(false);
    }
  }, [open, defaultCourse]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      onClose();
      setName("");
      setPhone("");
    }, 1800);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <div
        className="w-full max-w-md rounded-2xl bg-card border border-border p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-lg hover:bg-bg text-muted hover:text-text transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {sent ? (
          <div className="py-10 text-center">
            <div className="h-14 w-14 mx-auto rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent text-2xl mb-4">
              ✓
            </div>
            <h3 className="text-lg font-semibold text-text">Заявка отправлена</h3>
            <p className="mt-2 text-sm text-muted">Мы свяжемся с вами в течение дня.</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-text mb-1">Записаться на курс</h3>
            <p className="text-sm text-muted mb-6">Оставьте контакты — перезвоним в течение дня.</p>

            <form onSubmit={submit} className="space-y-4">
              <Input
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                placeholder="+992 __ ___ __ __"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-card border border-border text-text text-sm focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Выберите курс</option>
                {courses.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.title}
                  </option>
                ))}
              </select>
              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}