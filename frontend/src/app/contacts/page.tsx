"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const contactItems = [
  {
    icon: MapPin,
    label: "Адрес",
    value: "г. Душанбе, ул. Рудаки, 00",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+992 00 000 00 00",
  },
  {
    icon: Clock,
    label: "Часы работы",
    value: "Пн–Сб: 9:00 – 20:00",
  },
];

export default function ContactsPage() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <>
      <Section
        eyebrow="Контакты"
        title="Свяжитесь с нами"
        subtitle="Ответим в течение дня. Приходите на бесплатное пробное занятие."
        className="!pb-8"
      >
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
          <div>
            <div className="space-y-4 mb-8">
              {contactItems.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.label}
                    className="p-5 rounded-2xl bg-card border border-border flex items-start gap-4"
                  >
                    <div className="h-11 w-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted mb-1">{c.label}</div>
                      <div className="text-text font-medium">{c.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border">
              <div className="text-sm font-semibold text-text mb-4">Мы в соцсетях</div>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="h-11 w-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Telegram"
                  className="h-11 w-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  <FaTelegram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp"
                  className="h-11 w-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  <FaWhatsapp className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
            {sent ? (
              <div className="py-16 text-center">
                <div className="h-14 w-14 mx-auto rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent text-2xl mb-4">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-text">Сообщение отправлено</h3>
                <p className="mt-2 text-sm text-muted">Мы свяжемся с вами в течение дня.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-text mb-1">Оставьте заявку</h3>
                <p className="text-sm text-muted mb-6">Перезвоним и ответим на все вопросы.</p>
                <form onSubmit={submit} className="space-y-4">
                  <Input placeholder="Ваше имя" required />
                  <Input placeholder="+992 __ ___ __ __" required />
                  <Input type="email" placeholder="Email (необязательно)" />
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border text-text placeholder:text-muted text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                  <Button type="submit" size="lg" className="w-full">
                    Отправить <Send className="h-4 w-4" />
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-2xl overflow-hidden border border-border bg-card h-80 flex items-center justify-center">
          <div className="text-center text-muted">
            <MapPin className="h-8 w-8 mx-auto mb-3 text-accent" />
            <div className="text-sm">Здесь будет карта</div>
            <div className="text-xs mt-1">г. Душанбе, ул. Рудаки, 00</div>
          </div>
        </div>
      </Section>
    </>
  );
}