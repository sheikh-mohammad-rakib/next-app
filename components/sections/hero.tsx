import Link from "next/link"
import { ArrowUpRight, MapPin } from "@phosphor-icons/react/dist/ssr"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { heroData } from "@/lib/portfolio-data"

export function HeroSection() {
  return (
    <header className="relative overflow-hidden border-b border-border/70">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,color-mix(in_oklch,var(--primary)_10%,transparent)_0%,transparent_42%),radial-gradient(circle_at_82%_32%,color-mix(in_oklch,var(--chart-1)_18%,transparent)_0%,transparent_38%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-18 md:px-10 lg:py-24">
        <p className="text-xs tracking-[0.24em] text-muted-foreground uppercase">
          Portfolio 2026
        </p>
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6">
            <p className="text-sm tracking-wide text-muted-foreground">{heroData.role}</p>
            <h1 className="max-w-3xl text-5xl leading-[0.95] font-medium tracking-tight text-balance md:text-7xl">
              {heroData.name}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {heroData.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-5">
                <Link href={heroData.ctaPrimary.href}>
                  {heroData.ctaPrimary.label}
                  <ArrowUpRight className="size-4" weight="bold" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-5">
                <Link href={heroData.ctaSecondary.href}>{heroData.ctaSecondary.label}</Link>
              </Button>
            </div>
          </div>
          <aside className="space-y-4 border-l border-border/60 pl-6 text-sm md:pl-8">
            <p className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" />
              {heroData.location}
            </p>
            <p className="text-lg leading-snug">{heroData.availability}</p>
            <Separator />
            <p className="font-mono text-xs text-muted-foreground">
              Press <kbd className="rounded bg-muted px-1.5 py-0.5">d</kbd> to toggle theme.
            </p>
          </aside>
        </div>
      </div>
    </header>
  )
}
