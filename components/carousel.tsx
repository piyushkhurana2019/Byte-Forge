"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type Item = { src: string; alt: string }

export function Carousel({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement | null>(null)

  const scrollBy = (delta: number) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: "smooth" })
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        className="mask-edges flex snap-x snap-mandatory overflow-x-auto rounded-lg border bg-card"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((it, i) => (
          <div key={i} className="relative aspect-[16/10] min-w-[88%] snap-center md:min-w-[60%]">
            <Image
              src={it.src || "/placeholder.svg"}
              alt={it.alt}
              fill
              className="object-cover"
              sizes="(max-width:768px) 88vw, 60vw"
            />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
        <Button
          variant="secondary"
          size="icon"
          className="pointer-events-auto"
          onClick={() => scrollBy(-320)}
          aria-label="Previous"
        >
          ‹
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="pointer-events-auto"
          onClick={() => scrollBy(320)}
          aria-label="Next"
        >
          ›
        </Button>
      </div>
    </div>
  )
}
