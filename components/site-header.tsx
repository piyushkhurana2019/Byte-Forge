"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/join-us", label: "Join Us" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Byte Forge logo" width={32} height={32} className="rounded-sm" />
            <span className="font-semibold">Byte Forge</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "relative text-sm text-muted-foreground transition-colors hover:text-foreground",
                  "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all",
                  "hover:after:w-full",
                  pathname === n.href ? "text-foreground after:w-full" : "",
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="default" className="hidden md:inline-flex">
              <Link href="/contact">Start a project</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
