"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Building2, MapPin, Handshake, ChevronDown } from "lucide-react"
import { useCountUp } from "@/hooks/use-scroll-animation"

const stats = [
  { icon: Users, value: "5000", suffix: "+", label: "Active Members" },
  { icon: Building2, value: "150", suffix: "+", label: "Partner Institutions" },
  { icon: MapPin, value: "18", suffix: "", label: "Regional Chapters" },
  { icon: Handshake, value: "45", suffix: "+", label: "Industry Partners" },
]

export function Hero() {
  const [textVisible, setTextVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const hasShown = useRef(false)

  useEffect(() => {
    // Text animates in after 400ms on load — NEVER hides again
    const timer = setTimeout(() => {
      setTextVisible(true)
      hasShown.current = true
    }, 400)

    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
      // If user scrolls back up, keep text visible
      if (!hasShown.current) return
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: textVisible ? 1 : 0,
    transform: textVisible ? "translateY(0px)" : "translateY(36px)",
    transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)`,
    transitionDelay: `${delay}s`,
  })

  const fadeDown = (delay: number): React.CSSProperties => ({
    opacity: textVisible ? 1 : 0,
    transform: textVisible ? "translateY(0px)" : "translateY(-24px)",
    transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)`,
    transitionDelay: `${delay}s`,
  })

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-black">

      {/* ── Background Image with zoom-in animation ── */}
      <div className="absolute inset-0">
        <Image
          src="/herosection.png"
          alt="Aerospace Hero"
          fill
          className="object-cover object-center"
          style={{
            transform: textVisible ? "scale(1.0)" : "scale(1.08)",
            transition: "transform 2.5s cubic-bezier(0.22,1,0.36,1)",
          }}
          priority
        />
        {/* Top dark fade */}
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/35 to-black/75" />
        {/* Subtle left vignette */}
        <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/20" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 md:px-8 pt-40 pb-10 min-h-[88vh]">

        {/* Badge */}
        <div style={fadeDown(0.1)} className="inline-flex items-center gap-2 px-5 py-2 mb-7 bg-blue-500/15 backdrop-blur-md border border-blue-400/35 rounded-full text-sm font-semibold text-blue-300">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shrink-0" />
          India&apos;s Leading Aerospace Non-Profit Organisation
        </div>

        {/* Headline line 1 */}
        <div style={fadeUp(0.22)}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[1.06] text-white tracking-tight drop-shadow-2xl">
            Empowering India&apos;s
          </h1>
        </div>

        {/* Headline line 2 — blue, slight extra delay */}
        <div style={fadeUp(0.38)} className="mb-7">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[1.06] text-blue-400 tracking-tight drop-shadow-2xl">
            Aerospace Future
          </h1>
        </div>

        {/* Description */}
        <p style={fadeUp(0.54)} className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          IAAA bridges academia, industry &amp; entrepreneurship through globally‑recognized aerospace education and innovation — accredited by{" "}
          <span className="text-white font-semibold">DGCA, NSDC &amp; CTDS Tamil Nadu</span>.
        </p>

        {/* CTA Buttons */}
        <div style={fadeUp(0.68)} className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-6 text-base rounded-full shadow-2xl shadow-blue-800/60 group transition-all duration-200"
          >
            <Link href="/membership" className="flex items-center gap-2">
              Join IAAA Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/25 bg-white/8 backdrop-blur-md text-white hover:bg-white/18 font-semibold px-8 py-6 text-base rounded-full transition-all duration-200"
          >
            <Link href="/ptdc">Explore Programs</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-white/10 font-medium px-6 py-6 text-base rounded-full transition-all duration-200"
          >
            <Link href="/startup-forum">Startup Forum →</Link>
          </Button>
        </div>

        {/* Scroll Indicator — hides when user scrolls */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 pointer-events-none"
          style={{
            opacity: scrolled || !textVisible ? 0 : 1,
            transition: "opacity 0.5s ease",
            transitionDelay: scrolled ? "0s" : "1.4s",
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div
        className="relative z-10 w-full border-t border-white/10 bg-black/55 backdrop-blur-xl"
        style={fadeUp(0.82)}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} {...stat} index={index} visible={textVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>
  value: string
  suffix: string
  label: string
  index: number
  visible: boolean
}

function StatCard({ icon: Icon, value, suffix, label, index, visible }: StatCardProps) {
  const { ref, count } = useCountUp(parseInt(value), 2000)

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-1 py-7 px-4 group hover:bg-white/5 transition-colors duration-300 cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: visible ? `${0.9 + index * 0.1}s` : "0s",
      }}
    >
      <Icon className="w-5 h-5 text-blue-400 mb-1 group-hover:scale-110 transition-transform duration-200" />
      <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-[11px] md:text-xs text-gray-400 font-medium uppercase tracking-widest mt-0.5">{label}</div>
    </div>
  )
}
