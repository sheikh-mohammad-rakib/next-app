export type HeroData = {
  name: string
  role: string
  tagline: string
  location: string
  availability: string
  ctaPrimary: {
    label: string
    href: string
  }
  ctaSecondary: {
    label: string
    href: string
  }
}

export type AboutData = {
  heading: string
  body: string[]
}

export type ProjectData = {
  title: string
  summary: string
  stack: string[]
  year: string
  href: string
}

export type ExperienceData = {
  role: string
  company: string
  period: string
  highlights: string[]
}

export type TestimonialData = {
  quote: string
  name: string
  role: string
}

export type ContactData = {
  heading: string
  copy: string
  email: string
}

export type NavLink = {
  label: string
  href: string
}

export const heroData: HeroData = {
  name: "Your Name",
  role: "Product-Focused Frontend Engineer",
  tagline:
    "I design and build thoughtful digital products with strong visual systems, fast interactions, and durable frontend architecture.",
  location: "Based in Jakarta, open to remote",
  availability: "Available for freelance and full-time roles",
  ctaPrimary: {
    label: "View Projects",
    href: "#projects",
  },
  ctaSecondary: {
    label: "Get In Touch",
    href: "#contact",
  },
}

export const aboutData: AboutData = {
  heading: "Design-sensitive engineering",
  body: [
    "I care about the details that make software feel intentional: rhythm, readability, motion, and responsive behavior that never feels accidental.",
    "My work blends product thinking with pragmatic engineering. I move from concept to production while keeping components accessible, maintainable, and aligned with business goals.",
  ],
}

export const projectData: ProjectData[] = [
  {
    title: "Muse Journal",
    summary: "Editorial writing platform with collaborative drafts and real-time publishing workflow.",
    stack: ["Next.js", "PostgreSQL", "Tailwind"],
    year: "2026",
    href: "#",
  },
  {
    title: "Pulse Admin",
    summary: "Data-rich operations dashboard with role-based access and modular reporting.",
    stack: ["React", "TypeScript", "Node.js"],
    year: "2026",
    href: "#",
  },
  {
    title: "Northwind Commerce",
    summary: "Headless ecommerce storefront optimized for speed, SEO, and conversion flows.",
    stack: ["Next.js", "GraphQL", "Vercel"],
    year: "2025",
    href: "#",
  },
  {
    title: "Signal Notes",
    summary: "Knowledge app with offline-first sync and semantic search for teams.",
    stack: ["React", "IndexedDB", "PWA"],
    year: "2025",
    href: "#",
  },
  {
    title: "Waypoint Studio",
    summary: "Portfolio builder for creatives with block-based editing and themes.",
    stack: ["Next.js", "Prisma", "Postgres"],
    year: "2025",
    href: "#",
  },
  {
    title: "Atlas Hiring",
    summary: "Recruiting workspace that streamlines candidate pipelines and scorecards.",
    stack: ["TypeScript", "tRPC", "Tailwind"],
    year: "2024",
    href: "#",
  },
  {
    title: "Echo Health",
    summary: "Patient portal redesign focused on clarity, accessibility, and trust.",
    stack: ["Next.js", "Accessibility", "Storybook"],
    year: "2024",
    href: "#",
  },
  {
    title: "Rivet Docs",
    summary: "Developer documentation hub with versioned content and fast navigation.",
    stack: ["MDX", "Next.js", "Algolia"],
    year: "2024",
    href: "#",
  },
  {
    title: "Orbit Finance",
    summary: "Personal finance app with budgeting, forecasting, and intelligent alerts.",
    stack: ["React", "D3", "Supabase"],
    year: "2023",
    href: "#",
  },
]

export const skillData: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Design Systems",
  "Accessibility",
  "Performance",
  "Testing",
  "Storybook",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Product Discovery",
]

export const experienceData: ExperienceData[] = [
  {
    role: "Senior Frontend Engineer",
    company: "Northstar Labs",
    period: "2024 - Present",
    highlights: [
      "Led migration to app router architecture and cut bundle size by 31%.",
      "Built a reusable design system consumed across 5 product squads.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Plainworks",
    period: "2021 - 2024",
    highlights: [
      "Delivered product experiments that improved activation by 18%.",
      "Introduced accessibility audits and component-level quality gates.",
    ],
  },
]

export const testimonialData: TestimonialData[] = [
  {
    quote:
      "A rare engineer who can turn abstract product direction into interfaces that feel both elegant and practical.",
    name: "Alex Rivera",
    role: "Head of Product, Northstar Labs",
  },
  {
    quote:
      "Consistent in quality, strong in collaboration, and always thoughtful about user experience under real constraints.",
    name: "Mina Patel",
    role: "Design Director, Plainworks",
  },
]

export const contactData: ContactData = {
  heading: "Let’s build something meaningful",
  copy: "This form is wired for frontend interaction today and ready to connect to an API route when you are.",
  email: "hello@example.com",
}

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export const resumeHref = "#"
