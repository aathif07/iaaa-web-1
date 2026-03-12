import { Hero } from "@/components/home/hero"
import { AboutPreview } from "@/components/home/about-preview"
import { Announcements } from "@/components/home/announcements"
import { ProgramsPreview } from "@/components/home/programs-preview"
import { MembershipPreview } from "@/components/home/membership-preview"
import { Partners } from "@/components/home/partners"
import { CTA } from "@/components/home/cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Announcements />
      <ProgramsPreview />
      <MembershipPreview />
      <Partners />
      <CTA />
    </main>
  )
}
