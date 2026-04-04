import { Card, CardContent } from "@/components/ui/card"
import { testimonialData } from "@/lib/portfolio-data"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.22em] text-muted-foreground uppercase">Testimonials</p>
          <h2 className="mt-3 text-3xl leading-tight font-medium tracking-tight md:text-5xl">
            Feedback from collaborators.
          </h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {testimonialData.map((testimonial) => (
          <Card key={testimonial.name} className="border-border/70 bg-background/75">
            <CardContent className="space-y-5 p-6">
              <blockquote className="text-base leading-relaxed text-foreground md:text-lg">
                “{testimonial.quote}”
              </blockquote>
              <footer>
                <p className="text-sm font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </footer>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
