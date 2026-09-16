import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { teachers } from "@/lib/teachers";

export default function TeachersPage() {
  return (
    <>
      <Section
        eyebrow="Команда"
        title="Преподаватели Farovon Academy"
        subtitle="Все наши преподаватели — действующие практики. Они не пересказывают учебник — они делятся опытом из своей сферы."
        className="!pb-8"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl bg-card border border-border flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="h-14 w-14 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent font-bold text-lg">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-text">{t.name}</div>
                  <div className="text-xs text-accent mt-0.5">{t.role}</div>
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed flex-1">{t.bio}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl bg-card border border-border p-8 lg:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
            Хочешь учиться у практиков?
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">
            Оставь заявку — подберём курс и преподавателя под твои цели.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/courses">
              <Button size="lg">Выбрать курс <ArrowRight className="h-4 w-4" /></Button>
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