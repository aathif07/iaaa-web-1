"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight, Trophy, Users, Mic } from "lucide-react"

const events = [
  {
    title: "Dr APJ Abdul Kalam Space Challenge",
    date: "March 15-17, 2026",
    location: "IIT Madras, Chennai",
    type: "Competition",
    icon: Trophy,
    featured: true,
    description: "National-level space innovation challenge for students and researchers."
  },
  {
    title: "National Aerospace Week",
    date: "April 22-28, 2026",
    location: "Pan India",
    type: "Conference",
    icon: Mic
  },
  {
    title: "Drone Innovation Challenge",
    date: "May 10-12, 2026",
    location: "Bangalore",
    type: "Competition",
    icon: Trophy
  },
  {
    title: "Faculty Development Program",
    date: "June 5-7, 2026",
    location: "Online",
    type: "Workshop",
    icon: Users
  }
]

const partners = ["IIT Madras", "ISRO", "StartupTN", "Airports Authority", "DGCA", "HAL"]

export function Events() {
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

  const featured = events.find(e => e.featured)
  const upcoming = events.filter(e => !e.featured)

  return (
    <section id="events" ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="max-w-lg">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Events</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Engaging Minds. Building Futures.
            </h2>
          </div>
          <Button asChild variant="outline" className="h-10 px-4 rounded-lg border-2 bg-transparent shrink-0">
            <Link href="#contact">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Events grid */}
        <div className={`grid lg:grid-cols-2 gap-5 mb-12 transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Featured event */}
          {featured && (
            <div className="bg-primary rounded-xl p-6 lg:row-span-2">
              <div className="flex items-center gap-2 mb-4">
                <featured.icon className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">{featured.type}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-2">{featured.title}</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">{featured.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70 mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{featured.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  <span>{featured.location}</span>
                </div>
              </div>
              <Button asChild className="bg-card text-primary hover:bg-card/90 h-10 px-5 rounded-lg">
                <Link href="#contact">Register Now</Link>
              </Button>
            </div>
          )}

          {/* Other events */}
          {upcoming.map((event) => (
            <Link
              key={event.title}
              href="#contact"
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <event.icon className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase">{event.type}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{event.title}</h4>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {event.location}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Partners */}
        <div className={`text-center transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-sm text-muted-foreground mb-4">Ecosystem Partners</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {partners.map((partner) => (
              <span key={partner} className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
