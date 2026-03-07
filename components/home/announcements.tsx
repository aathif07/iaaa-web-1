"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Bell, Calendar, Megaphone, ChevronRight } from "lucide-react"

const announcements = [
  {
    icon: Megaphone,
    title: "Launch of IAAA-VAAYU Club at Velammal Bodhi Campus",
    date: "Jan 2026",
    type: "New Launch",
    color: "bg-blue-100 text-blue-600",
    dot: "bg-blue-500",
  },
  {
    icon: Calendar,
    title: "Admission Open: 2026 PTDC Diploma Programs",
    date: "Ongoing",
    type: "Admissions",
    color: "bg-green-100 text-green-600",
    dot: "bg-green-500",
  },
  {
    icon: Bell,
    title: "Collegiate Club Applications Invited (2026-2027 Cycle)",
    date: "Open Now",
    type: "Applications",
    color: "bg-orange-100 text-orange-600",
    dot: "bg-orange-500",
  },
  {
    icon: Bell,
    title: "Regional Hub Applications Invited (2026-2027 Cycle)",
    date: "Open Now",
    type: "Applications",
    color: "bg-purple-100 text-purple-600",
    dot: "bg-purple-500",
  },
  {
    icon: Megaphone,
    title: "Launch of Indian Aerospace Startup Forum",
    date: "Dec 2024",
    type: "New Launch",
    color: "bg-blue-100 text-blue-600",
    dot: "bg-blue-500",
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

export function Announcements() {
  const { ref, visible } = useVisible()

  return (
    <section id="announcements" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Header */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Announcements</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              Stay Updated<br />
              <span className="text-blue-600">with IAAA</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Latest news, admissions, club launches, and opportunities from India&apos;s premier aerospace institute.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-10">
              <div>
                <div className="text-3xl font-black text-blue-600">50+</div>
                <div className="text-sm text-slate-500 mt-1">Clubs Launched</div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="text-3xl font-black text-blue-600">5K+</div>
                <div className="text-sm text-slate-500 mt-1">Members</div>
              </div>
              <div className="w-px bg-slate-200" />
              <div>
                <div className="text-3xl font-black text-blue-600">20+</div>
                <div className="text-sm text-slate-500 mt-1">Programs</div>
              </div>
            </div>

            <Link
              href="/announcements"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              View All Announcements
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Announcement cards */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s 0.15s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0.15s cubic-bezier(0.22,1,0.36,1)",
            }}
            className="space-y-3"
          >
            {announcements.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ${0.2 + i * 0.08}s ease, transform 0.5s ${0.2 + i * 0.08}s ease`,
                }}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full font-medium ${item.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
