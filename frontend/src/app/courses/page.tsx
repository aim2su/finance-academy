import { Section } from "@/components/Section";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export default function CoursesPage() {
  return (
    <Section
      eyebrow="Все курсы"
      title="Выбери направление"
      subtitle="6 практических программ. Каждая — с реальными кейсами и поддержкой преподавателя."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </Section>
  );
}