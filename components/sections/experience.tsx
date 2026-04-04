import { experienceData } from "@/lib/portfolio-data"

export function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-border/70">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Experience</p>
          <div className="space-y-10">
            {experienceData.map((item) => (
              <article key={`${item.company}-${item.role}`} className="space-y-4">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-2xl leading-tight font-medium tracking-tight md:text-3xl">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </div>
                <p className="text-sm tracking-wide uppercase text-muted-foreground">{item.company}</p>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
