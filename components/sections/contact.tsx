"use client"

import { FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactData } from "@/lib/portfolio-data"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-border/70 bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 md:px-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div className="space-y-4">
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Contact</p>
          <h2 className="text-3xl leading-tight font-medium tracking-tight md:text-5xl">
            {contactData.heading}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{contactData.copy}</p>
          <p className="text-sm text-muted-foreground">
            Prefer email? Reach me at{" "}
            <a href={`mailto:${contactData.email}`} className="underline-offset-4 hover:underline">
              {contactData.email}
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-background p-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." required />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Send Message
          </Button>
          <p className="text-xs text-muted-foreground">
            This currently simulates submission. We can connect it to a Next.js API route next.
          </p>
          {isSubmitted ? (
            <p className="rounded-md border border-chart-2/30 bg-chart-2/10 px-3 py-2 text-sm text-foreground">
              Thanks. Your message is captured in the frontend state for now.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
