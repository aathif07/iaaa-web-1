"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Rocket, Target, DollarSign, Building, Zap } from "lucide-react"

const focusAreas = [
  { icon: Lightbulb, label: "Idea Discovery" },
  { icon: Target, label: "Product Development" },
  { icon: Building, label: "Market Validation" },
  { icon: DollarSign, label: "Investment Access" },
  { icon: Rocket, label: "Tech Transfer" }
]

const steps = [
  { num: "01", title: "Identify Ideas", desc: "Through competitions and Collegiate Club projects" },
  { num: "02", title: "Incubate & Build", desc: "Develop prototypes with PTDC mentors" },
  { num: "03", title: "Validate Market", desc: "Test with industry partners" },
  { num: "04", title: "Scale & Grow", desc: "Access funding and tech transfer" }
]

export function StartupForum() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] via-primary/[0.03] to-background" />
      <div className="absolute inset-0 bg-pattern-dots text-accent/[0.03]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Rocket className="h-4 w-4 text-accent" />
            </div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">IASF</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Indian Aerospace Startup Forum
          </h2>
          <p className="text-muted-foreground">
            From Idea to Impact – Nurturing aerospace innovations since December 2024.
          </p>
        </div>

        {/* Focus areas */}
        <div className={`mb-12 transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <div
                key={area.label}
                className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-accent/30 transition-colors"
              >
                <area.icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{area.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process steps */}
        <div className={`mb-12 transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="text-lg font-semibold text-foreground mb-6">How It Works</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="relative bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <span className="text-4xl font-bold text-primary/10 absolute top-3 right-4">{step.num}</span>
                <div className="relative">
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA box */}
        <div className={`bg-card border border-border rounded-xl p-6 sm:p-8 transition-all duration-600 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Ready to Launch?</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Engineering students, faculty innovators, startups, and MSMEs are invited to join IASF.
              </p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Technical mentorship from IAAA experts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Access to PTDC labs and facilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Innovation grants eligibility
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground h-11 px-5 rounded-lg flex-1">
                <Link href="#contact">
                  Submit Your Idea
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-11 px-5 rounded-lg border-2 bg-transparent flex-1">
                <Link href="#contact">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
