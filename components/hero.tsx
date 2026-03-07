"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plane, Rocket, Globe2, Users } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const opacity = Math.max(0, 1 - scrollY / 500)
        heroRef.current.style.opacity = String(opacity)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="/videos/hero-aerospace.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white" />
      </div>

      <div ref={heroRef} className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-20 sm:pt-44 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-medium text-primary">National Non-Profit Organization</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Empowering India&apos;s{" "}
              <span className="text-blue-500">Aerospace</span>{" "}
              Future
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              IAAA bridges education, industry, and government to build India&apos;s next generation of 
              aerospace leaders through innovation and collaboration.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-500 text-white h-12 px-6 rounded-lg">
                <Link href="#membership">
                  Join IAAA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-50">
                <Link href="#programs">Explore Programs</Link>
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { icon: Users, value: "10,000+", label: "Members" },
                { icon: Globe2, value: "100+", label: "Institutions" },
                { icon: Rocket, value: "25", label: "Regional Hubs" }
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <span className="block text-xl font-bold text-foreground">{stat.value}</span>
                    <span className="text-xs text-muted-foreground">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/images/hero-aerospace.jpg"
                  alt="Aerospace innovation"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-transparent" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card rounded-xl p-4 shadow-lg border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <Plane className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">80+ Partners</span>
                    <span className="text-xs text-muted-foreground">Industry collaborations</span>
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-2 border-primary/20 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
