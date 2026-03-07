"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Target,
  Eye,
  GraduationCap,
  Users,
  Handshake,
  Award,
  ArrowRight,
  CheckCircle2,
  Building2,
  Globe,
  ChevronRight,
  Rocket,
  Shield,
  Star,
} from "lucide-react"

/* ─── tiny hook ─── */
function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, v }
}

/* ─── data ─── */
const missions = [
  "Integrate research, skill-building, and innovation in aerospace education",
  "Foster collaborations between academia and industry",
  "Build employability through global-standard certification programs",
  "Recognize excellence through structured memberships and awards",
]

const stats = [
  { value: "10,000+", label: "Students Empowered", icon: GraduationCap },
  { value: "100+", label: "Partner Institutions", icon: Building2 },
  { value: "80+", label: "Industry Partners", icon: Handshake },
  { value: "25", label: "Regional Hubs", icon: Globe },
]

const features = [
  {
    icon: GraduationCap,
    title: "Education Excellence",
    description: "Globally recognized diplomas and certifications aligned with DGCA and NSDC standards.",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    border: "border-amber-100 hover:border-amber-300",
  },
  {
    icon: Users,
    title: "Student-Centric",
    description: "Empowering 10,000+ students across 100+ institutions nationwide.",
    bg: "bg-teal-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    border: "border-teal-100 hover:border-teal-300",
  },
  {
    icon: Handshake,
    title: "Industry Partnerships",
    description: "Connecting academia with 80+ industry partners for real-world exposure.",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    border: "border-rose-100 hover:border-rose-300",
  },
  {
    icon: Award,
    title: "Professional Recognition",
    description: "Structured membership levels and awards for excellence in aerospace.",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    border: "border-violet-100 hover:border-violet-300",
  },
  {
    icon: Building2,
    title: "Regional Presence",
    description: "25 Regional Hubs across India for localized support and training.",
    bg: "bg-sky-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    border: "border-sky-100 hover:border-sky-300",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Curriculum aligned with international aerospace industry requirements.",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    border: "border-emerald-100 hover:border-emerald-300",
  },
]

const values = [
  { icon: Star, title: "Excellence", desc: "We set the highest standards in aerospace education and training." },
  { icon: Shield, title: "Integrity", desc: "Transparent and accountable in everything we do." },
  { icon: Rocket, title: "Innovation", desc: "Constantly evolving our programs to meet future aerospace demands." },
  { icon: Users, title: "Inclusion", desc: "Reaching every student — from rural schools to premier institutions." },
]

/* ─── Hero Banner ─── */
function HeroBanner() {
  return (
    <section className="relative min-h-[420px] flex items-center overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/aerospace-1.jpg"
          alt="IAAA About"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
          Building India&apos;s<br />
          <span className="text-amber-400">Aerospace Ecosystem</span>
        </h1>
        <p className="text-lg text-white/70 max-w-xl leading-relaxed">
          Through Education, Innovation &amp; Industry Collaboration
        </p>
      </div>
    </section>
  )
}

/* ─── About Intro ─── */
function AboutIntro() {
  const { ref, v } = useVisible()
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left image */}
          <div
            style={{
              opacity: v ? 1 : 0,
              transform: v ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
            }}
            className="relative"
          >
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/aboutimage.jpg" alt="IAAA Team" fill className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900">NSDC</div>
                <div className="text-xs text-slate-500">Accredited</div>
              </div>
            </div>
            {/* Decorative dot grid */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 -z-10 opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle, #64748b 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
          </div>

          {/* Right content */}
          <div
            style={{
              opacity: v ? 1 : 0,
              transform: v ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 0.8s 0.15s cubic-bezier(0.22,1,0.36,1), transform 0.8s 0.15s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Who We Are</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
              India&apos;s Premier<br />
              <span className="text-amber-500">Aerospace Institute</span>
            </h2>

            <p className="text-slate-600 leading-relaxed text-lg mb-5">
              The Institute of Aeronautics, Astronautics and Aviation (IAAA) is a registered
              non-profit trust and association, accredited by the Council for Technical and
              Vocational Development Science TN (CTDS TN).
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              IAAA bridges academia, industry, and government to provide globally recognized
              aerospace education, technical training, and professional development — empowering
              students, faculties, professionals, industry leaders, and policymakers to lead
              advancements in Aeronautics, Astronautics, Aviation, Drone Technology, and Space Sciences.
            </p>

            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full font-semibold text-sm hover:bg-amber-600 transition-colors shadow-lg shadow-amber-200"
            >
              Meet Our Council
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const { ref, v } = useVisible()
  return (
    <section className="bg-slate-900 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: v ? 1 : 0,
                transform: v ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ${0.1 + i * 0.1}s ease, transform 0.6s ${0.1 + i * 0.1}s ease`,
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Vision & Mission ─── */
function VisionMission() {
  const { ref, v } = useVisible()
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-2xl mx-auto mb-14"
          style={{
            opacity: v ? 1 : 0,
            transform: v ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div ref={ref} className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-200 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Our Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Vision &amp; Mission</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Vision */}
          <div
            className="relative bg-white rounded-3xl p-8 md:p-10 border border-teal-100 shadow-sm overflow-hidden"
            style={{
              opacity: v ? 1 : 0,
              transform: v ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.7s 0.2s ease, transform 0.7s 0.2s ease",
            }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To make aerospace education accessible, practical, and industry-oriented
                for students, faculties, and professionals across India — from school to sky.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div
            className="relative bg-white rounded-3xl p-8 md:p-10 border border-violet-100 shadow-sm overflow-hidden"
            style={{
              opacity: v ? 1 : 0,
              transform: v ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s 0.3s ease, transform 0.7s 0.3s ease",
            }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-5">Our Mission</h3>
              <ul className="space-y-3">
                {missions.map((m, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-600" />
                    </div>
                    <span className="text-slate-600 text-sm leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── What We Do ─── */
function WhatWeDo() {
  const { ref, v } = useVisible()
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center max-w-2xl mx-auto mb-14"
          style={{
            opacity: v ? 1 : 0,
            transform: v ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div ref={ref} className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-50 border border-rose-200 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span className="text-sm font-semibold text-rose-700 uppercase tracking-wider">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Comprehensive Aerospace<br />
            <span className="text-rose-500">Ecosystem</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Developing aerospace talent through multiple interconnected channels
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`${f.bg} border ${f.border} rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1 group`}
              style={{
                opacity: v ? 1 : 0,
                transform: v ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.5s ${0.1 + i * 0.08}s ease, transform 0.5s ${0.1 + i * 0.08}s ease`,
              }}
            >
              <div className={`w-12 h-12 rounded-xl ${f.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <f.icon className={`w-6 h-6 ${f.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Core Values ─── */
function CoreValues() {
  const { ref, v } = useVisible()
  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-400/5 rounded-full translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="text-center max-w-2xl mx-auto mb-14"
          style={{
            opacity: v ? 1 : 0,
            transform: v ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div ref={ref} className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400/10 border border-amber-400/20 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-sm font-semibold text-amber-300 uppercase tracking-wider">Our Values</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            What Drives Us
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((val, i) => (
            <div
              key={val.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-amber-400/30 transition-all group"
              style={{
                opacity: v ? 1 : 0,
                transform: v ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.6s ${0.15 + i * 0.1}s ease, transform 0.6s ${0.15 + i * 0.1}s ease`,
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
                <val.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Image Gallery Strip ─── */
function GalleryStrip() {
  const { ref, v } = useVisible()
  const imgs = [
    "/gallery/aerospace-2.jpg",
    "/gallery/aerospace-3.jpg",
    "/gallery/aerospace-4.jpg",
    "/gallery/aerospace-5.jpg",
    "/gallery/aerospace-6.jpg",
  ]
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div
          ref={ref}
          className="flex items-end justify-between"
          style={{ opacity: v ? 1 : 0, transition: "opacity 0.6s ease" }}
        >
          <h2 className="text-2xl font-black text-slate-900">Our Journey in Photos</h2>
          <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
            View Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <div
        className="flex gap-4 px-4 sm:px-6 lg:px-8"
        style={{
          opacity: v ? 1 : 0,
          transition: "opacity 0.7s 0.2s ease",
        }}
      >
        {imgs.map((src, i) => (
          <div
            key={i}
            className={`relative flex-shrink-0 rounded-2xl overflow-hidden shadow-md ${i === 2 ? "h-52 w-80" : "h-44 w-56"}`}
            style={{
              opacity: v ? 1 : 0,
              transform: v ? "scale(1)" : "scale(0.95)",
              transition: `opacity 0.5s ${0.2 + i * 0.07}s ease, transform 0.5s ${0.2 + i * 0.07}s ease`,
            }}
          >
            <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function AboutCTA() {
  const { ref, v } = useVisible()
  return (
    <section className="py-20 md:py-24 bg-linear-to-r from-amber-500 to-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/10 rounded-full" />

      <div
        ref={ref}
        className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          opacity: v ? 1 : 0,
          transform: v ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 border border-white/30 rounded-full mb-6 backdrop-blur-sm">
          <Rocket className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-white uppercase tracking-wider">Join IAAA</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
          Ready to Join India&apos;s<br />Aerospace Community?
        </h2>
        <p className="text-white/80 text-lg mb-8 leading-relaxed">
          Become part of the IAAA network and shape the future of aerospace in India.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-amber-600 rounded-full font-bold text-sm hover:bg-amber-50 transition-colors shadow-xl"
          >
            Join as Member
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 border border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/25 transition-colors backdrop-blur-sm"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function AboutPage() {
  return (
    <>
      <HeroBanner />
      <AboutIntro />
      <StatsBar />
      <VisionMission />
      <WhatWeDo />
      <CoreValues />
      <GalleryStrip />
      <AboutCTA />
    </>
  )
}
