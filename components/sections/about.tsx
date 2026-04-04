import { aboutData } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
        <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">About</p>
        <div className="space-y-6">
          <h2 className="text-3xl leading-tight font-medium tracking-tight md:text-5xl">
            {aboutData.heading}
          </h2>
          {aboutData.body.map((paragraph) => (
            <p key={paragraph} className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
