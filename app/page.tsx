import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import Script from "next/script"
import { ContactForm } from "@/components/forms/contact-form"
import { portfolioProjects } from "@/lib/portfolio"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const processSteps = [
    {
      icon: "✧",
      step: "Step 01",
      title: "Discovery Call",
      body:
        "We start with understanding your vision, requirements, and business goals. This initial consultation helps us map out the perfect strategy for your project.",
    },
    {
      icon: "○",
      step: "Step 02",
      title: "Design",
      body:
        "Our UI/UX experts create intuitive wireframes and high-fidelity prototypes that capture your brand identity while ensuring exceptional user experience.",
    },
    {
      icon: "◇",
      step: "Step 03",
      title: "Development",
      body:
        "Our skilled developers bring the designs to life using clean, scalable code. We follow industry best practices to ensure your application is robust and future-proof.",
    },
    {
      icon: "□",
      step: "Step 04",
      title: "Testing",
      body:
        "Rigorous quality assurance across multiple devices and platforms ensures your application is bug-free, responsive, and delivers a seamless experience.",
    },
    {
      icon: "△",
      step: "Step 05",
      title: "Deployment",
      body:
        "We handle the entire submission and release process to make your application available on app stores, followed by continuous support and maintenance.",
    },
  ]

  return (
    <main>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.32/build/spline-viewer.js"
        strategy="beforeInteractive"
      />
      {/* Hero */}
      <section id="top" className="relative scroll-mt-24 border-b bg-grid-soft">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-16">
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
            <div className="relative z-10 space-y-6">
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
                  <Link href="/#contact">Start a project</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/#portfolio">See portfolio</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[350px] overflow-hidden rounded-xl md:h-[550px]">
              <div className="absolute inset-0 animate-float">
                {/* @ts-ignore */}
                <spline-viewer url="https://prod.spline.design/AHbXASSMRhQtgmHp/scene.splinecode" style={{ position: 'absolute', top: '-32%', left: '0', width: '100%', height: '145%' }}></spline-viewer>
              </div>
            </div>
          </div>

          {/* Credibility stats */}
          <div className="mt-10 grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
            <div className="rounded-lg border bg-card p-4">
              <span className="block text-2xl font-semibold text-foreground">5+ </span> projects shipped
            </div>
            <div className="rounded-lg border bg-card p-4">
              <span className="block text-2xl font-semibold text-foreground">5+ </span> Happy Clients
            </div>
            <div className="rounded-lg border bg-card p-4">
              <span className="block text-2xl font-semibold text-foreground">3+ </span> Years of Experience
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <AnimatedSection id="services" className="mx-auto  px-4 py-14 md:py-20 bg-background/80 parallax-panel">
        <div className="mb-10 text-center ">
          <h2 className="mb-3 text-3xl font-semibold md:text-4xl">What we do</h2>
          <p className=" mx-auto max-w-2xl text-muted-foreground">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 ">
          {[
            { 
              icon: "💻",
              title: "Web Development", 
              desc: "High-performing websites and full-stack apps." 
            },
            { 
              icon: "🤖",
              title: "AI Automation", 
              desc: "Workflows that save time and increase accuracy." 
            },
            { 
              icon: "💬",
              title: "Chatbots", 
              desc: "On-brand assistants powered by LLMs." 
            },
            { 
              icon: "🎨",
              title: "Product Design", 
              desc: "UX/UI that elevates your business." 
            },
            { 
              icon: "📱",
              title: "Mobile & PWAs", 
              desc: "Responsive experiences for every device." 
            },
            { 
              icon: "🔗",
              title: "Integrations", 
              desc: "Razorpay, Supabase, CRMs, and more." 
            },
          ].map((s) => (
            <div key={s.title} className="group rounded-xl border bg-card p-6 card-hover transition-all hover:shadow-lg">
              <div className="mb-4 text-3xl">{s.icon}</div>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Portfolio */}
      <AnimatedSection id="portfolio" className="scroll-mt-24 border-y bg-muted/30 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="text-center md:text-left">
              <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Portfolio</h2>
              <p className="max-w-2xl text-muted-foreground">
                Selected work across web apps, event experiences, and product showcases.
              </p>
            </div>
            <Button asChild variant="secondary" size="lg" className="w-fit self-center md:self-auto">
              <Link href="/#contact">Start a project</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {portfolioProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group rounded-xl border bg-card p-4 card-hover transition-all hover:shadow-lg"
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
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed">{project.summary}</p>
                <span className="mt-4 inline-flex text-sm font-medium text-primary transition-transform group-hover:translate-x-1">View project →</span>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="parallax-panel border-y">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
              Our Process
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">How It Works</h2>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-5xl">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
              <div className="h-full w-full border-l-2 border-dashed border-muted-foreground/20"></div>
            </div>

            {/* Steps */}
            <div className="space-y-16 md:space-y-24">
              {processSteps.map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                  <AnimatedSection key={item.step} className="relative">
                    <div className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Card */}
                      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="rounded-2xl border bg-card p-6 card-hover md:p-8">
                          <div className={`mb-3 inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 ${isLeft ? 'md:float-right md:ml-3' : 'md:float-left md:mr-3'}`}>
                            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              {item.step}
                            </span>
                          </div>
                          <h3 className="mb-3 text-xl font-semibold text-primary md:text-2xl">{item.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            {item.body}
                          </p>
                        </div>
                      </div>

                      {/* Center dot */}
                      <div className="hidden md:block">
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 bg-background shadow-lg">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <span className="text-lg text-primary">{item.icon}</span>
                          </div>
                        </div>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden flex-1 md:block"></div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/#contact">Start your project →</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection id="contact" className="scroll-mt-24 px-4 pb-14 md:pb-18">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold text-primary md:text-4xl">Contact Us</h2>
            <p className="text-muted-foreground">
              Don't wait! Build your product now and transform your vision into reality.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column - Get In Touch */}
            <div className="rounded-2xl border bg-card p-8 md:p-10">
              <h3 className="mb-8 text-2xl font-semibold">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Send us a message */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Send us a message</h4>
                    <p className="text-sm text-muted-foreground">We're here to answer your questions</p>
                  </div>
                </div>

                {/* Give us a call */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Give us a call</h4>
                    <p className="text-sm text-muted-foreground">+91 9588343993</p>
                  </div>
                </div>

                {/* Email us */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Email us</h4>
                    <p className="text-sm text-muted-foreground">developers.byteforge@gmail.com</p>
                  </div>
                </div>

                {/* Our location */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold">Our location</h4>
                    <p className="text-sm text-muted-foreground">Working remotely worldwide</p>
                  </div>
                </div>
              </div>

              {/* Follow us */}
              {/* <div className="mt-10">
                <h4 className="mb-4 font-semibold">Follow us</h4>
                <div className="flex gap-3">
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-primary/10 hover:border-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-primary/10 hover:border-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background transition-colors hover:bg-primary/10 hover:border-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div> */}
            </div>

            {/* Right Column - Let's Build Something Amazing Together */}
            <div className="rounded-2xl border bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-10">
              <h3 className="mb-4 text-2xl font-semibold">Let's Build Something Amazing Together</h3>
              <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                Ready to transform your app idea into reality? Book a free consultation with our experts and let's discuss how we can help bring your vision to life.
              </p>

              {/* Steps */}
              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
                    1
                  </div>
                  <p className="text-sm">Share your app idea with us</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
                    2
                  </div>
                  <p className="text-sm">Get a free project assessment</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
                    3
                  </div>
                  <p className="text-sm">Receive a tailored development plan</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button asChild size="lg" className="w-full">
                <Link href="https://calendly.com/piyushkhurana159/30min" target="_blank">
                  Book Free Consultation →
                </Link>
              </Button>
            </div>
          </div>
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
              <Link href="/#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

    </main>
  )
}
