import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative border-b bg-grid-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image src="/images/logo.png" width={48} height={48} alt="Byte Forge logo" />
                <span className="text-sm font-medium text-primary">Engineering premium web & AI solutions</span>
              </div>
              <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
                We forge outstanding products for the web, powered by AI.
              </h1>
              <p className="text-pretty text-muted-foreground">
                From modern web apps to AI automations and chatbots, we deliver reliable, scalable, and beautifully
                designed software for your business.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact">Start a project</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/portfolio">See portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="animate-float aspect-[16/10] w-full rounded-xl border bg-card card-hover overflow-hidden">
                <Image 
                  src="/images/hero.png" 
                  alt="Hero image" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-primary/15" />
            </div>
          </div>

          {/* Credibility stats */}
          <div className="mt-10 grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
            <div className="rounded-lg border bg-card p-4">
              <span className="block text-2xl font-semibold text-foreground">5+ </span> projects shipped
            </div>
            <div className="rounded-lg border bg-card p-4">
              <span className="block text-2xl font-semibold text-foreground">5/5 </span> client satisfaction
            </div>
            <div className="rounded-lg border bg-card p-4">
              <span className="block text-2xl font-semibold text-foreground">24h </span> average first response
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <AnimatedSection className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <h2 className="mb-6 text-2xl font-semibold">What we do</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: "Web Development", desc: "High-performing websites and full-stack apps." },
            { title: "AI Automation", desc: "Workflows that save time and increase accuracy." },
            { title: "Chatbots", desc: "On-brand assistants powered by LLMs." },
            { title: "Product Design", desc: "UX/UI that elevates your business." },
            { title: "Mobile & PWAs", desc: "Responsive experiences for every device." },
            { title: "Integrations", desc: "Razorpay, Supabase, CRMs, and more." },
          ].map((s) => (
            <div key={s.title} className="rounded-lg border bg-card p-5 card-hover">
              <h3 className="mb-1.5 font-medium">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-xl border bg-primary/5 p-8 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Have an idea? Let’s forge it.</h3>
              <p className="text-sm text-muted-foreground">
                Share your goals—we’ll handle strategy, design, and engineering.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
