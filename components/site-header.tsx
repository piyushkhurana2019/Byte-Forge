"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const nav = [
  { href: "/#top", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact Us" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Byte Forge logo" width={32} height={32} className="rounded-sm" />
            <span className="font-semibold">Byte Forge</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Button asChild variant="default" className="hidden md:inline-flex">
              <Link href="/#contact">Start a project</Link>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="mb-4 flex items-center gap-2">
                    <Image src="/images/logo.png" alt="Byte Forge logo" width={32} height={32} className="rounded-sm" />
                    <span className="font-semibold">Byte Forge</span>
                  </Link>
                  {nav.map((n) => (
                    <Link
                      key={n.href}
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-muted"
                    >
                      {n.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4 w-full">
                    <Link href="/#contact" onClick={() => setOpen(false)}>
                      Start a project
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
