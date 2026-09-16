import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/lib/courses";

export function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-accent/60 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="h-12 w-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-xs text-muted px-2.5 py-1 rounded-full border border-border">
          {course.duration}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-text mb-2">{course.title}</h3>
      <p className="text-sm text-muted leading-relaxed flex-1">{course.short}</p>

      <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
        <span className="text-sm font-medium text-accent">{course.price}</span>
        <span className="text-accent flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
          Подробнее <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}