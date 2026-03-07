import { Hero } from "@/components/home/hero"
import { AboutPreview } from "@/components/home/about-preview"
import { ProgramsPreview } from "@/components/home/programs-preview"
import { MembershipPreview } from "@/components/home/membership-preview"
import { Announcements } from "@/components/home/announcements"
import { Partners } from "@/components/home/partners"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProgramsPreview />
      <MembershipPreview />
      <Announcements />
      <Partners />
      <CTA />
    </>
  )
}
