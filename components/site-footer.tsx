import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Byte Forge. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/portfolio" className="hover:text-primary">
              Portfolio
            </Link>
            <Link href="/join-us" className="hover:text-primary">
              Join Us
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
