"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Rocket, GraduationCap, Building2 } from "lucide-react"

const actions = [
  {
    icon: GraduationCap,
    title: "Join as Member",
    description: "Access courses, internships, and career support",
    href: "/membership",
    cta: "Join Now",
    delay: "0.1s",
  },
  {
    icon: Building2,
    title: "Launch a Club",
    description: "Start an IAAA Collegiate Club at your institution",
    href: "/clubs",
    cta: "Get Started",
    delay: "0.22s",
  },
  {
    icon: Rocket,
    title: "Partner with IAAA",
    description: "Collaborate on aerospace education and research",
    href: "/collaborations",
    cta: "Partner Now",
    delay: "0.34s",
  },
]

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

export function CTA() {
  const { ref, visible } = useVisible()

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Deep blue background */}
      <div className="absolute inset-0 bg-blue-600" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500 opacity-40" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-700 opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500 opacity-10" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
            <Rocket className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">Get Involved</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">
            Ready to Shape India&apos;s<br />
            <span className="text-blue-200">Aerospace Future?</span>
          </h2>
          <p className="text-lg text-blue-100/80 leading-relaxed">
            Join thousands of students, professionals, and institutions building the next generation of aerospace leaders.
          </p>
        </div>

        {/* Action cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {actions.map((action, i) => (
            <div
              key={action.title}
              className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-center hover:bg-white/20 hover:border-white/40 transition-all group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ${action.delay} cubic-bezier(0.22,1,0.36,1), transform 0.6s ${action.delay} cubic-bezier(0.22,1,0.36,1)`,
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-white/30 transition-colors group-hover:scale-110 duration-300">
                <action.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
              <p className="text-blue-100/70 text-sm leading-relaxed mb-6">{action.description}</p>

              <Link
                href={action.href}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-blue-600 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors shadow-lg group-hover:shadow-xl"
              >
                {action.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
