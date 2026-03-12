"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { InfiniteSlider } from "@/components/infinite-slider"

// Partner logos - displayed in infinite scroll
const partnerLogos = [
  { name: "IIT Madras", initials: "IIT M" },
  { name: "IIT Guwahati", initials: "IIT G" },
  { name: "ISRO", initials: "ISRO" },
  { name: "StartupTN", initials: "STN" },
  { name: "Airports Authority", initials: "AAI" },
  { name: "ICAO", initials: "ICAO" },
  { name: "SGAC", initials: "SGAC" },
  { name: "ALTAIR", initials: "ALT" },
  { name: "ANSYS CADFEM", initials: "ANSYS" },
  { name: "PULLINAM", initials: "PAT" },
  { name: "VAANAM", initials: "VAANAM" },
  { name: "AeSI", initials: "AeSI" },
  { name: "IEI", initials: "IEI" },
  { name: "HEMSI", initials: "HEMSI" },
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

export function Partners() {
  const { ref, visible } = useVisible()

  return (
    <section id="partners" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Header */}
          <div
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 border border-blue-200 rounded-full mb-4 sm:mb-6 shadow-sm">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-600" />
              <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">Collaborations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 sm:mb-6">
              Organizations Associated with / Supported by IAAA
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-2">
              for Events, Outreach, Internship, and Training Programs
            </p>
            <p className="text-base sm:text-lg text-slate-500">
              Bridging Academia, Industry, and Innovation
            </p>
          </div>

          {/* Infinite Slider with logos */}
          <div
            className="mb-12 py-8 bg-slate-50 rounded-2xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s 0.2s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0.2s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <InfiniteSlider gap={24} duration={30} durationOnHover={60}>
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center px-6 sm:px-8 py-4 border border-slate-200 rounded-xl bg-white hover:shadow-md transition-all shrink-0"
                  title={partner.name}
                >
                  <span className="font-semibold text-slate-700 text-sm sm:text-base whitespace-nowrap">
                    {partner.initials}
                  </span>
                </div>
              ))}
            </InfiniteSlider>
          </div>

          {/* CTA */}
          <div
            className="text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s 0.4s ease, transform 0.6s 0.4s ease",
            }}
          >
            <Link
              href="/collaborations"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Propose a Collaboration
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
