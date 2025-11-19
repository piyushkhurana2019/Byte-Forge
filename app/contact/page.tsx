import { ContactForm } from "@/components/forms/contact-form"

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 md:py-18">
      <h1 className="mb-2 text-3xl font-semibold">Contact us</h1>
      <p className="mb-8 text-muted-foreground">
        Tell us about your project or request. We typically reply within one business day.
      </p>
      <div className="rounded-xl border bg-card p-6 card-hover">
        <ContactForm defaultSubject="New project inquiry" />
      </div>
    </main>
  )
}
