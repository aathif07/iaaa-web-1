"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const partners = [
  { name: "IIT Madras", category: "Academia" },
  { name: "IIT Guwahati", category: "Academia" },
  { name: "ISRO", category: "Government" },
  { name: "StartupTN", category: "Government" },
  { name: "Airports Authority of India", category: "Government" },
  { name: "ICAO", category: "International" },
  { name: "Space Generation Advisory Council (UN)", category: "International" },
  { name: "International Astronomy Union", category: "International" },
  { name: "AeSI", category: "Industry" },
  { name: "The Institution of Engineers India", category: "Industry" },
  { name: "HEMSI", category: "Industry" },
  { name: "Velammal Bodhi Schools", category: "Education" },
]

const categoryColors: Record<string, string> = {
  Academia: "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-400",
  Government: "bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:border-green-400",
  International: "bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 hover:border-purple-400",
  Industry: "bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100 hover:border-orange-400",
  Education: "bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100 hover:border-teal-400",
}

const categoryBadge: Record<string, string> = {
  Academia: "bg-blue-100 text-blue-600",
  Government: "bg-green-100 text-green-600",
  International: "bg-purple-100 text-purple-600",
  Industry: "bg-orange-100 text-orange-600",
  Education: "bg-teal-100 text-teal-600",
}

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
    <section id="partners" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref}>
          {/* Header */}
          <div
            className="text-center max-w-3xl mx-auto mb-14"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Collaborations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
              Trusted by <span className="text-blue-600">Leading</span><br />Organizations
            </h2>
            <p className="text-lg text-slate-500">
              Bridging Academia, Industry, and Innovation
            </p>
          </div>

          {/* Partners horizontal scroll row */}
          <div
            className="mb-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s 0.2s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0.2s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {partners.map((partner, i) => (
                <div
                  key={partner.name}
                  className={`inline-flex items-center gap-2.5 px-5 py-3 border rounded-xl font-semibold text-sm transition-all cursor-pointer group ${categoryColors[partner.category]}`}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(0.9)",
                    transition: `opacity 0.4s ${0.25 + i * 0.04}s ease, transform 0.4s ${0.25 + i * 0.04}s ease`,
                  }}
                >
                  {/* Category dot */}
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${categoryBadge[partner.category].replace('text-', 'bg-').split(' ')[0]}`} />
                  <span>{partner.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity -ml-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Category legend */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-10"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s 0.5s ease",
            }}
          >
            {Object.keys(categoryBadge).map((cat) => (
              <div key={cat} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${categoryBadge[cat].replace('text-', 'bg-').split(' ')[0]}`} />
                <span className="text-xs text-slate-500 font-medium">{cat}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="text-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s 0.55s ease, transform 0.6s 0.55s ease",
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
