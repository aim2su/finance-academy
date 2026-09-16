"use client";

import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, BarChart3, Monitor, Check, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { EnrollModal } from "@/components/EnrollModal";
import { courses, getCourse } from "@/lib/courses";

export default function CoursePage() {
  const params = useParams();
  const slug = String(params.slug);
  const course = getCourse(slug);
  const [open, setOpen] = useState(false);

  if (!course) return notFound();

  const Icon = course.icon;

  return (
    <>
      <Section className="!py-12 lg:!py-16">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Все курсы
        </Link>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          <div>
            <div className="h-14 w-14 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent mb-6">
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="mt-5 text-muted leading-relaxed max-w-2xl">
              {course.description}
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-card border border-border">
                <Clock className="h-4 w-4 text-accent mb-2" />
                <div className="text-xs text-muted">Длительность</div>
                <div className="text-sm text-text font-medium mt-0.5">{course.duration}</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <BarChart3 className="h-4 w-4 text-accent mb-2" />
                <div className="text-xs text-muted">Уровень</div>
                <div className="text-sm text-text font-medium mt-0.5">{course.level}</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <Monitor className="h-4 w-4 text-accent mb-2" />
                <div className="text-xs text-muted">Формат</div>
                <div className="text-sm text-text font-medium mt-0.5">{course.format}</div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-text mb-6">Что вы получите</h2>
              <ul className="space-y-3">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                    <span className="h-5 w-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Check className="h-3 w-3" />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-text mb-6">Программа курса</h2>
              <div className="space-y-4">
                {course.program.map((mod) => (
                  <div key={mod.title} className="p-5 rounded-2xl bg-card border border-border">
                    <h3 className="font-semibold text-text mb-3">{mod.title}</h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {mod.items.map((it) => (
                        <li key={it} className="text-sm text-muted flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-xs text-muted mb-1">Стоимость</div>
              <div className="text-2xl font-bold text-accent mb-6">{course.price}</div>
              <Button size="lg" className="w-full" onClick={() => setOpen(true)}>
                Записаться <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-4 text-xs text-muted leading-relaxed text-center">
                Первое занятие — бесплатно. Есть рассрочка.
              </p>
            </div>

            <div className="mt-4 p-6 rounded-2xl bg-card border border-border">
              <h4 className="text-sm font-semibold text-text mb-3">Есть вопросы?</h4>
              <p className="text-xs text-muted leading-relaxed mb-4">
                Напишите нам — поможем выбрать курс и формат.
              </p>
              <Link href="/contacts">
                <Button variant="outline" className="w-full">Связаться</Button>
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        eyebrow="Ещё курсы"
        title="Смотрите также"
        className="!pt-0"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses
            .filter((c) => c.slug !== course.slug)
            .slice(0, 3)
            .map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-accent/60 transition-all"
              >
                <c.icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="font-semibold text-text mb-1">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.short}</p>
              </Link>
            ))}
        </div>
      </Section>

      <EnrollModal open={open} onClose={() => setOpen(false)} defaultCourse={course.slug} />
    </>
  );
}