import Link from "next/link";
import { Target, Users, Award, Heart, ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";

const values = [
  {
    icon: Target,
    title: "Практика в центре",
    text: "Мы не читаем лекции ради лекций. Каждое занятие — реальная задача из практики.",
  },
  {
    icon: Users,
    title: "Люди, а не поток",
    text: "Малые группы до 12 человек, персональная обратная связь и поддержка после курса.",
  },
  {
    icon: Award,
    title: "Преподаватели-практики",
    text: "Наши преподаватели работают в своей сфере — они делятся опытом, а не учебником.",
  },
  {
    icon: Heart,
    title: "Забота о результате",
    text: "Наша цель — чтобы каждый выпускник получил работу или применил навык на практике.",
  },
];

const stats = [
  { value: "6", label: "направлений" },
  { value: "500+", label: "выпускников" },
  { value: "12", label: "человек в группе" },
  { value: "3", label: "года работы" },
];

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="О Farovon Academy"
        title="Академия навыков, которые работают"
        subtitle="Мы создали Farovon Academy, чтобы дать жителям Душанбе доступ к практическому образованию в сферах, которые действительно востребованы на рынке."
        className="!pb-8"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">{s.value}</div>
              <div className="text-sm text-muted mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Наши принципы" title="4 вещи, на которых всё держится">
        <div className="grid gap-5 md:grid-cols-2">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="p-6 rounded-2xl bg-card border border-border flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-2">{v.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{v.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Миссия" title="Зачем мы это делаем">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted leading-relaxed">
            Образование в Таджикистане часто оторвано от реальности: студенты
            изучают теорию, но не могут применить её на работе. Мы это меняем —
            учим конкретным навыкам, которые можно использовать сразу после
            окончания курса.
          </p>
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-card border border-border p-8 lg:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
            Приходи учиться
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">
            Запишись на бесплатное пробное занятие — поймёшь, подходит ли тебе курс.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/courses">
              <Button size="lg">Смотреть курсы <ArrowRight className="h-4 w-4" /></Button>
            </Link>
            <Link href="/contacts">
              <Button size="lg" variant="outline">Связаться</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}