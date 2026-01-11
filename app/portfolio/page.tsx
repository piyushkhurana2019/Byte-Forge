import Image from "next/image"
import Link from "next/link"
import { portfolioProjects } from "@/lib/portfolio"

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <h1 className="mb-2 text-3xl font-semibold">Portfolio</h1>
      <p className="mb-8 max-w-2xl text-muted-foreground">
        A selection of recent projects. Open a project to view screenshots and recordings.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {portfolioProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group rounded-xl border bg-card p-4 card-hover"
          >
            <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-lg bg-muted">
              <Image
                src={project.shots[0]}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
            <p className="mt-3 text-sm">{project.summary}</p>
            <span className="mt-4 inline-flex text-sm font-medium text-primary">View project →</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
