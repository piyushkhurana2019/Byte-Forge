export type PortfolioProject = {
  slug: string
  title: string
  tagline: string
  summary: string
  shots: string[]
  demo: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "bakery-website",
    title: "Bakery Website",
    tagline: "Bakery product showcase website",
    summary: "A warm, product-first storefront that highlights hero items and seasonal treats.",
    shots: ["/chocoheaven1.png", "/chocoheaven2.png", "/chocoheaven3.png", "/chocoheaven4.png", "/chocoheaven5.png"],
    demo: "https://drive.google.com/file/d/1f-V8Sxkv177Rt1qc1FhjX-8rZk7BSK7T/view?usp=sharing",
  },
  {
    slug: "event-website",
    title: "Event Website",
    tagline: "Dandiya Night event website",
    summary: "A festive landing page with a focus on lineup, timings, and ticket momentum.",
    shots: ["/dandiya1.png", "/dandiya2.png", "/dandiya3.png", "/dandiya4.png"],
    demo: "https://drive.google.com/file/d/1M7LdAAyB1B9WMUZkiPh-koCwlDWyL2tR/view?usp=sharing",
  },
  {
    slug: "ecommerce-website",
    title: "Ecommerce Website",
    tagline: "Ecommerce website for a jewellery store",
    summary: "A clean, minimal ecommerce layout that keeps the focus on case studies.",
    shots: ["/ecommerce1.png", "/ecommerce2.png", "/ecommerce3.png", "/ecommerce4.png"],
    demo: "https://drive.google.com/file/d/1yjTJbOisKKFU1-Fuk7bBL9EIMyIyZnau/view?usp=sharing",
  },
]
