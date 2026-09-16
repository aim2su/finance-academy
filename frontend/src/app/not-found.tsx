import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-5 lg:px-8 py-32 text-center">
      <div className="text-8xl md:text-9xl font-bold text-accent leading-none">404</div>
      <h1 className="mt-6 text-3xl md:text-4xl font-bold text-text tracking-tight">
        Страница не найдена
      </h1>
      <p className="mt-4 text-muted leading-relaxed">
        Возможно, ссылка устарела или страница была перемещена.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link href="/">
          <Button size="lg">На главную</Button>
        </Link>
        <Link href="/courses">
          <Button size="lg" variant="outline">Смотреть курсы</Button>
        </Link>
      </div>
    </section>
  );
}