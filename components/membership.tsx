"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Users, Award, Building2, School, MapPin } from "lucide-react"

const membershipPlans = [
  {
    title: "Student",
    price: "₹1,000",
    period: "/year",
    icon: Users,
    description: "For aspiring aerospace professionals",
    popular: true,
    features: [
      "4-10 certified courses per year",
      "National contests & internships",
      "Workshops and training programs",
      "Official IAAA Certificate",
      "Career support & guidance"
    ]
  },
  {
    title: "Professional",
    price: "Free",
    period: "to join",
    icon: Award,
    description: "For engineers and scientists",
    features: [
      "Volunteer membership (VIAAA)",
      "Networking opportunities",
      "Student mentorship roles",
      "Industry event access",
      "Research collaboration"
    ]
  },
  {
    title: "Institution",
    price: "Custom",
    period: "pricing",
    icon: Building2,
    description: "For colleges and universities",
    features: [
      "Host IAAA Collegiate Clubs",
      "Regional Hub opportunities",
      "PTDC Centre hosting",
      "FDP Programs access",
      "Revenue sharing model"
    ]
  }
]

const clubTypes = [
  { icon: School, title: "Collegiate Club", desc: "50-1000 students", highlight: "25% fees returned" },
  { icon: MapPin, title: "Regional Hub", desc: "Multi-institution network", highlight: "10% revenue share" },
  { icon: Users, title: "VAAYU Club", desc: "School programs", highlight: "Annual certifications" }
]

export function Membership() {
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
    <section id="membership" ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Membership</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Join India&apos;s Aerospace Network
          </h2>
          <p className="text-muted-foreground">
            Choose the membership that fits your aerospace journey.
          </p>
        </div>

        {/* Membership cards */}
        <div className={`grid md:grid-cols-3 gap-5 mb-14 transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {membershipPlans.map((plan) => (
            <div
              key={plan.title}
              className={`relative bg-card border rounded-xl p-6 transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-lg shadow-primary/10' 
                  : 'border-border hover:border-primary/30 hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${plan.popular ? 'bg-primary/10' : 'bg-muted'}`}>
                  <plan.icon className={`h-5 w-5 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{plan.title}</h3>
                  <p className="text-xs text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-2 mb-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-accent'}`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild 
                className={`w-full h-10 rounded-lg ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                }`}
              >
                <Link href="#contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Clubs section */}
        <div className={`transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="text-lg font-semibold text-foreground text-center mb-6">Clubs, Hubs & Networks</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {clubTypes.map((club) => (
              <Link
                key={club.title}
                href="#contact"
                className="bg-card border border-border rounded-xl p-4 hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <club.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{club.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{club.desc}</p>
                    <span className="text-xs font-medium text-accent">{club.highlight}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
