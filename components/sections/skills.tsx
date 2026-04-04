import { Badge } from "@/components/ui/badge"
import { skillData } from "@/lib/portfolio-data"

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
        <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Skills</p>
        <div>
          <h2 className="mb-6 text-3xl leading-tight font-medium tracking-tight md:text-5xl">
            Tools and practices I rely on daily.
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {skillData.map((skill) => (
              <Badge key={skill} variant="outline" className="rounded-full px-3 py-1 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
