"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Eye, BookOpen, Handshake, Award, TrendingUp } from "lucide-react"

const features = [
  { icon: BookOpen, title: "Education", desc: "Globally recognized aerospace certification programs" },
  { icon: Handshake, title: "Industry Connect", desc: "Direct partnerships with 80+ aerospace companies" },
  { icon: Award, title: "Recognition", desc: "Accredited by CTDS TN and aligned with DGCA standards" },
  { icon: TrendingUp, title: "Career Growth", desc: "Placement support and entrepreneurship pathways" }
]

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Blue tinted background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-accent/[0.02] to-background" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`max-w-3xl mb-14 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">About IAAA</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Building India&apos;s Aerospace Ecosystem Through Education & Innovation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The Institute of Aeronautics, Astronautics and Aviation is a registered non-profit trust and association, 
            bridging academia, industry, and government to provide globally recognized aerospace education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Features grid */}
          <div className={`transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Vision & Mission */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Vision</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Making aerospace education accessible and industry-oriented for students across India.
                </p>
              </div>
              <div className="bg-accent/5 border border-accent/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-accent" />
                  <h4 className="font-semibold text-foreground">Mission</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Integrate research, skill-building, and innovation through academia-industry collaboration.
                </p>
              </div>
            </div>

            <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground h-11 px-5 rounded-lg">
              <Link href="#programs">
                Explore Our Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right - Image */}
          <div className={`transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-aerospace.jpg"
                  alt="Aerospace team collaboration"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-5 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: "10K+", label: "Members" },
                    { value: "100+", label: "Partners" },
                    { value: "25", label: "Hubs" }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <span className="block text-xl font-bold text-primary">{stat.value}</span>
                      <span className="text-xs text-muted-foreground">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
