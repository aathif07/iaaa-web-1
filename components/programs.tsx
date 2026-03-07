"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap, Plane, Cpu, Award, Briefcase, Clock, Star } from "lucide-react"

const programs = [
  {
    icon: GraduationCap,
    title: "B.S. Program by IIT Madras",
    duration: "4 Years",
    description: "Data Science and Aerospace Applications. No JEE required.",
    featured: true
  },
  {
    icon: Plane,
    title: "Aircraft Maintenance Technician",
    duration: "1 Year",
    description: "Globally accepted certification for MRO & AME careers."
  },
  {
    icon: Cpu,
    title: "Drone Architecture Diploma",
    duration: "1 Year",
    description: "Design, assembly, flight operations, and industry applications."
  },
  {
    icon: Award,
    title: "AMT with NDT Specialization",
    duration: "1 Year",
    description: "Level II Certification with assured job placement."
  },
  {
    icon: Briefcase,
    title: "Short-Term Training",
    duration: "1-6 Months",
    description: "Airline ops, drone tech, composites, and manufacturing."
  },
  {
    icon: Clock,
    title: "NDT Career Fast-Track",
    duration: "1 Month",
    description: "Job-ready with international Level II certification."
  }
]

export function Programs() {
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

  const featuredProgram = programs.find(p => p.featured)
  const otherPrograms = programs.filter(p => !p.featured)

  return (
    <section id="programs" ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Blue pattern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-background to-primary/[0.04]" />
      <div className="absolute inset-0 bg-pattern-grid text-primary/[0.02]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`max-w-2xl mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">PTDC Programs</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Professional Training & Development
          </h2>
          <p className="text-muted-foreground">
            Learn. Build. Intern – Globally recognized diplomas and industry certifications.
          </p>
        </div>

        {/* Featured Program */}
        {featuredProgram && (
          <div className={`mb-8 transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="bg-primary rounded-xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center shrink-0">
                    <featuredProgram.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                      <span className="text-xs font-medium text-primary-foreground/80">Featured Program</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-foreground mb-1">{featuredProgram.title}</h3>
                    <p className="text-sm text-primary-foreground/80">{featuredProgram.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-primary-foreground/70">{featuredProgram.duration}</span>
                  <Button asChild className="bg-card text-primary hover:bg-card/90 h-10 px-4 rounded-lg">
                    <Link href="#contact">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Program cards grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {otherPrograms.map((program, idx) => (
            <div
              key={program.title}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <program.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">{program.duration}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{program.title}</h3>
              <p className="text-sm text-muted-foreground">{program.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-600 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm text-muted-foreground mb-4">
            Every PTDC student gains real industry experience through our Internship Network
          </p>
          <Button asChild variant="outline" className="h-11 px-6 rounded-lg border-2 bg-transparent">
            <Link href="#contact">
              Download Brochure
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
