import Link from "next/link"
import { notFound } from "next/navigation"
import { Carousel } from "@/components/carousel"
import { Button } from "@/components/ui/button"
import { portfolioProjects } from "@/lib/portfolio"

export default function PortfolioWebsitePage() {
  const project = portfolioProjects.find((item) => item.slug === "ecommerce-website")
  if (!project) notFound()

  return (
    <main className="mx-auto max-w-5xl px-4 py-14 md:py-18">
      <Link href="/#portfolio" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to portfolio
      </Link>
      <div className="mt-4 space-y-2">
        <h1 className="text-3xl font-semibold">{project.title}</h1>
        <p className="text-muted-foreground">{project.tagline}</p>
      </div>
      <div className="mt-8 space-y-4">
        <Carousel items={project.shots.map((src) => ({ src, alt: project.title }))} />
        <Button asChild variant="secondary">
          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
            Watch screen recording
          </Link>
        </Button>
      </div>
    </main>
  )
}
