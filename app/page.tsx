import { AboutSection } from "@/components/sections/about"
import { ContactSection } from "@/components/sections/contact"
import { ExperienceSection } from "@/components/sections/experience"
import { HeroSection } from "@/components/sections/hero"
import { NavbarSection } from "@/components/sections/navbar"
import { ProjectsSection } from "@/components/sections/projects"
import { SkillsSection } from "@/components/sections/skills"
import { TestimonialsSection } from "@/components/sections/testimonials"

export default function Page() {
  return (
    <main id="top" className="min-h-svh bg-background">
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
