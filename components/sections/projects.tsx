import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { projectData } from "@/lib/portfolio-data"

export function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-border/70 bg-muted/30">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Selected Work</p>
            <h2 className="mt-3 text-3xl leading-tight font-medium tracking-tight md:text-5xl">
              Nine projects, nine different problems.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Each case balances business outcomes with product quality and frontend craft.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <Card key={project.title} className="group border-border/70 bg-background/75 transition-colors hover:bg-background">
              <CardHeader className="space-y-3">
                <p className="text-xs tracking-widest text-muted-foreground uppercase">{project.year}</p>
                <CardTitle className="text-xl leading-tight tracking-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={`${project.title}-${tech}`} variant="secondary" className="rounded-full px-2.5 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  View case
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
