"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Users,
  Target,
  Award,
  ChevronDown,
  Quote,
} from "lucide-react";
import { Section } from "@/components/Section";
import { CourseCard } from "@/components/CourseCard";
import { EnrollModal } from "@/components/EnrollModal";
import { Button } from "@/components/ui/Button";
import { courses } from "@/lib/courses";
import { cn } from "@/lib/cn";

const advantages = [
  {
    icon: Target,
    title: "Только практика",
    text: "80% времени — реальные задачи, кейсы и проекты. Минимум воды.",
  },
  {
    icon: Users,
    title: "Малые группы",
    text: "До 12 человек в группе — преподаватель видит каждого студента.",
  },
  {
    icon: Award,
    title: "Преподаватели-практики",
    text: "Ведём курсы сами — работаем в своей сфере, а не пересказываем учебник.",
  },
  {
    icon: Sparkles,
    title: "Помощь с трудоустройством",
    text: "Портфолио, резюме и рекомендации лучшим выпускникам.",
  },
];

const reviews = [
  {
    name: "Мадина Р.",
    course: "SMM и маркетинг",
    text: "Пришла без опыта, через 2 месяца уже вела аккаунт клиента. Преподаватели реально помогали с первых шагов.",
  },
  {
    name: "Фарход Н.",
    course: "Искусственный интеллект",
    text: "Использую AI каждый день в работе. Курс дал систему, а не просто список ссылок на нейросети.",
  },
  {
    name: "Шахло К.",
    course: "Английский язык",
    text: "Наконец-то заговорила. Занятия не как в школе — живое общение, интересные темы, реальный прогресс.",
  },
];

const faq = [
  {
    q: "Можно ли оплатить курс частями?",
    a: "Да, у нас есть рассрочка на 2–3 платежа без процентов. Условия обсуждаем индивидуально.",
  },
  {
    q: "Что если я пропущу занятие?",
    a: "Все материалы доступны в личном кабинете, а пропущенное занятие можно отработать с группой на другом потоке.",
  },
  {
    q: "Выдаёте ли вы сертификат?",
    a: "Да, после успешного окончания курса выдаём сертификат Farovon Academy.",
  },
  {
    q: "Есть ли онлайн-формат?",
    a: "Да, большинство курсов доступны и онлайн, и офлайн. Формат выбираете при записи.",
  },
  {
    q: "С какого возраста можно учиться?",
    a: "С 14 лет. Для младших — отдельные программы выходного дня.",
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* <section className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-medium mb-5 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Farovon Academy · Душанбе
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text tracking-tight leading-[1.05]">
            Академия навыков
            <br />
            <span className="text-accent">нового времени</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-2xl">
            Финансы, SMM, английский, ораторское искусство, компьютерная
            грамотность и искусственный интеллект. Учим тому, что реально
            пригодится в работе и жизни.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => setModalOpen(true)}>
              Записаться <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/courses">
              <Button size="lg" variant="outline">
                Смотреть курсы
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
            <section className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-accent font-medium mb-5 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Farovon Academy · Худжанд
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text tracking-tight leading-[1.05]">
            Знания, которые
            <br />
            <span className="text-accent">меняют жизнь</span>
          </h1>

          <div className="mt-8 border-l-2 border-accent pl-6 max-w-2xl">
            <p className="text-lg md:text-xl text-text leading-relaxed font-medium">
              Через год ты будешь жалеть, что не начал сегодня.
            </p>
            <p className="mt-3 text-base md:text-lg text-muted leading-relaxed">
              Не обязательно менять всё сразу. Достаточно одного курса, одного
              навыка, одного решения — и жизнь повернётся туда, куда ты сам
              захочешь.
            </p>
          </div>

          <p className="mt-8 text-muted leading-relaxed max-w-2xl">
            Финансы, SMM, английский, ораторское искусство, компьютерная
            грамотность и искусственный интеллект — 6 направлений, которые
            реально востребованы. Практика с первого занятия.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => setModalOpen(true)}>
              Записаться <ArrowRight className="h-4 w-4" />
            </Button>
            <Link href="/courses">
              <Button size="lg" variant="outline">
                Смотреть курсы
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="h-11 w-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-text mb-2">{a.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{a.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        id="courses"
        eyebrow="Наши курсы"
        title="6 направлений — начни с любого"
        subtitle="Каждый курс — это практика с первого занятия. Никаких лекций ради лекций."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Отзывы" title="Что говорят студенты">
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col"
            >
              <Quote className="h-6 w-6 text-accent mb-4" />
              <p className="text-sm text-text leading-relaxed flex-1">{r.text}</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-medium text-text text-sm">{r.name}</div>
                <div className="text-xs text-muted mt-0.5">{r.course}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 lg:p-14">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
              Готов начать учиться?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Оставь заявку — перезвоним в течение дня, поможем выбрать курс и
              формат. Первое занятие — бесплатно.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => setModalOpen(true)}>
                Записаться <ArrowRight className="h-4 w-4" />
              </Button>
              <Link href="/contacts">
                <Button size="lg" variant="outline">
                  Все контакты
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Частые вопросы"
        subtitle="Если не нашли ответ — напишите нам в Telegram или WhatsApp."
      >
        <div className="max-w-3xl mx-auto space-y-3">
          {faq.map((item, i) => {
            const active = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-card border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(active ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-bg/40 transition-colors"
                >
                  <span className="font-medium text-text text-sm md:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-accent transition-transform shrink-0",
                      active && "rotate-180"
                    )}
                  />
                </button>
                {active && (
                  <div className="px-5 pb-5 text-sm text-muted leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <EnrollModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
