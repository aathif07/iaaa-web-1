"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plane, Cpu, Wrench, GraduationCap, Rocket, Award } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const programs = [
  { icon: GraduationCap, title: "B.S. Program by IIT Madras", description: "Data Science & Aerospace Applications. No JEE Required.", tag: "Degree", bg: "bg-blue-50", color: "text-blue-600" },
  { icon: Wrench, title: "Aircraft Maintenance Technician", description: "One-year diploma for MRO & AME careers.", tag: "Diploma", bg: "bg-orange-50", color: "text-orange-600" },
  { icon: Award, title: "AMT with NDT Specialization", description: "Level II Certification (UT, RT, PT, MT, VT).", tag: "Diploma", bg: "bg-purple-50", color: "text-purple-600" },
  { icon: Cpu, title: "Drone Architecture", description: "Design, Assembly, Flight Operations & Industry Use.", tag: "Diploma", bg: "bg-green-50", color: "text-green-600" },
  { icon: Plane, title: "Short-Term Training", description: "Airline Operations, AME, NDT, Composites.", tag: "Training", bg: "bg-sky-50", color: "text-sky-600" },
  { icon: Rocket, title: "Career-Focused NDT", description: "Job-ready with international Level II certification.", tag: "Training", bg: "bg-rose-50", color: "text-rose-600" },
]

const galleryImages = [
  "/gallery/aerospace-1.jpg",
  "/gallery/aerospace-2.jpg",
  "/gallery/aerospace-3.jpg",
  "/gallery/aerospace-4.jpg",
]

export function ProgramsPreview() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">

        {/* Two-column top section */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-20">

          {/* Left: Image mosaic */}
          <div
            className="relative h-120 md:h-130"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="absolute top-0 left-0 w-[67%] h-[60%] rounded-2xl overflow-hidden shadow-xl">
              <Image src={galleryImages[0]} alt="PTDC Training" fill className="object-cover" />
            </div>
            <div className="absolute top-6 right-0 w-[30%] h-[40%] rounded-2xl overflow-hidden shadow-lg">
              <Image src={galleryImages[1]} alt="PTDC Lab" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-[30%] h-[37%] rounded-2xl overflow-hidden shadow-lg">
              <Image src={galleryImages[2]} alt="PTDC Workshop" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-[67%] h-[57%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image src={galleryImages[3]} alt="PTDC Event" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl bg-blue-600 -z-10 opacity-20" />
            <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full border-4 border-blue-200 -z-10" />
          </div>

          {/* Right: Content */}
          <div
            className="space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: "0.15s",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-blue-600" />
              <span className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em]">IAAA PTDC</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Professional Training<br />
              <span className="text-blue-600">&amp; Development Centre</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Learn, Build, Intern — The IAAA Way. Globally recognized diplomas, certifications, and industry internships that bridge the gap between classroom and cockpit.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { label: "Accredited Programs", value: "12+" },
                { label: "Industry Partners", value: "45+" },
                { label: "Placement Rate", value: "85%" },
                { label: "Training Centers", value: "18" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                  <div className="text-2xl font-black text-blue-600">{s.value}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-blue-200 group mt-2">
              <Link href="/ptdc" className="flex items-center gap-2">
                Explore All Programs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: isVisible ? `${0.3 + index * 0.08}s` : "0s",
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${program.bg}`}>
                  <program.icon className={`w-6 h-6 ${program.color}`} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-500 rounded-full">{program.tag}</span>
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{program.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
