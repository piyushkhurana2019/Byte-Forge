import { Carousel } from "@/components/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "Bakery  Website",
    tagline: "Bakery Product Showcase Website",
    shots: ["/chocoheaven1.png", "/chocoheaven2.png", "/chocoheaven3.png", "/chocoheaven4.png", "/chocoheaven5.png"],
    demo: "https://drive.google.com/file/d/1f-V8Sxkv177Rt1qc1FhjX-8rZk7BSK7T/view?usp=sharing",
  },
  {
    title: "Event Website",
    tagline: "Dandiya Night Event Website",
    shots: ["/dandiya1.png", "/dandiya2.png", "/dandiya3.png", "/dandiya4.png"],
    demo: "https://drive.google.com/file/d/1M7LdAAyB1B9WMUZkiPh-koCwlDWyL2tR/view?usp=sharing",
  },
  {
    title: "Portfolio Website",
    tagline: "Portfolio Website to showcase client's work",
    shots: ["/portfolio1.png", "/portfolio2.png"],
    demo: "https://example.com/demo-analytics",
  },
]

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:py-18">
      <h1 className="mb-2 text-3xl font-semibold">Portfolio</h1>
      <p className="mb-8 max-w-2xl text-muted-foreground">
        A selection of recent projects. Swipe through screenshots and check out example recordings.
      </p>

      <div className="space-y-10">
        {projects.map((p) => (
          <section key={p.title} className="space-y-4">
            <div>
              <h2 className="text-xl font-medium">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.tagline}</p>
            </div>
            <Carousel items={p.shots.map((src) => ({ src, alt: p.title }))} />
            <Button asChild variant="secondary" className="w-fit">
              <Link href={p.demo} target="_blank" rel="noopener noreferrer">
                Watch screen recording
              </Link>
            </Button>
          </section>
        ))}
      </div>
    </main>
  )
}
