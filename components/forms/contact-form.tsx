"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload }),
      })
      if (!res.ok) throw new Error("Request failed")
      toast({ title: "Thanks!", description: "We’ll get back to you within 24 hours." })
      e.currentTarget.reset()
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <Input id="name" name="name" required placeholder="Your name" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <Input id="email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="subject" className="text-sm">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          defaultValue={defaultSubject}
          placeholder="Project brief or role application"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your project or interest…" />
      </div>
      <Button type="submit" disabled={loading} className="justify-center">
        {loading ? "Sending…" : "Send message"}
      </Button>
      <p className="text-xs text-muted-foreground">
        By submitting, you agree to our terms. We’ll only use your info to reply to your request.
      </p>
    </form>
  )
}
