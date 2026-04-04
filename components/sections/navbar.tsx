"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Moon, Sun } from "@phosphor-icons/react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroData, navLinks, resumeHref } from "@/lib/portfolio-data"

export function NavbarSection() {
  const { resolvedTheme, setTheme } = useTheme()
  const [activeHref, setActiveHref] = useState<string>("")
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  })
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.boundingClientRect.top - b.boundingClientRect.top
          )

        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    for (const item of navLinks) {
      const id = item.href.slice(1)
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    }

    const onScroll = () => {
      if (window.scrollY < 120) {
        setActiveHref("")
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    const updateIndicator = () => {
      const target = linkRefs.current[activeHref]

      if (!target) {
        setIndicatorStyle({ left: 0, width: 0, opacity: 0 })
        return
      }

      setIndicatorStyle({
        left: target.offsetLeft,
        width: target.offsetWidth,
        opacity: 1,
      })
    }

    const frame = window.requestAnimationFrame(updateIndicator)
    window.addEventListener("resize", updateIndicator)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", updateIndicator)
    }
  }, [activeHref])

  return (
    <div className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-6 py-3 md:px-10">
        <Link href="#top" className="shrink-0 text-sm tracking-[0.18em] uppercase hover:text-primary">
          {heroData.name}
        </Link>

        <nav className="min-w-0 flex-1 overflow-x-auto" aria-label="Primary">
          <ul className="relative flex min-w-max items-center gap-1.5 text-sm whitespace-nowrap">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 h-px bg-primary/70 transition-[transform,width,opacity] duration-300 ease-out"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  ref={(node) => {
                    linkRefs.current[item.href] = node
                  }}
                  href={item.href}
                  onClick={() => setActiveHref(item.href)}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  className={cn(
                    "inline-flex rounded-full px-3 py-1.5 transition-colors",
                    activeHref === item.href
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild size="sm" variant="outline" className="rounded-full">
            <Link href={resumeHref}>Resume</Link>
          </Button>
          <Button
            size="icon-sm"
            variant="ghost"
            className="rounded-full"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="size-4" weight="bold" /> : <Moon className="size-4" weight="bold" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
