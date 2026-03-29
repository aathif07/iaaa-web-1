"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Globe2, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: ShieldCheck,
    title: "Registration and Accreditation",
    description: "IAAA-PTDC programs are recognised by NSDC & CTDS-TN ensuring every credential you earn carries real-world value.",
  },
  {
    icon: Globe2,
    title: "Nationwide Reach",
    description: "With 18 regional chapters and 150+ partner institutions, IAAA connects learners and professionals across India.",
     },
]

const homePreviewFiles = [
  "IMG_3977.jpg",
  "IMG_2244.JPG",
  "KAVI0343.JPG",
  "WhatsApp Image 2023-07-27 at 14.04.42.jpeg",
  "IMG-20250530-WA0036.jpg",
  "WhatsApp Image 2025-04-24 at 18.35.37_76c7391b.jpg",
  "DSC00201.JPG",
  "xy-4.jpg",
]

const aboutPreviewImages = homePreviewFiles.map(
  (file) => `/homw%20page%20image%20/${encodeURIComponent(file)}`
)

export function AboutPreview() {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % aboutPreviewImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const goPrev = () => setActiveImage((prev) => (prev === 0 ? aboutPreviewImages.length - 1 : prev - 1))
  const goNext = () => setActiveImage((prev) => (prev + 1) % aboutPreviewImages.length)

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left: Image ── */}
          <div
            className="relative order-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* Background gradient decoration */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-linear-to-br from-blue-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-linear-to-tl from-blue-100/30 to-transparent rounded-full blur-3xl" />

            {/* One-by-one Large Gallery Preview */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300 bg-slate-100 border border-slate-100 p-3 sm:p-4">
              <div className="relative rounded-2xl overflow-hidden h-105 sm:h-125 lg:h-145 bg-white">
                <Image
                  src={aboutPreviewImages[activeImage]}
                  alt={`About preview ${activeImage + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-900/35 via-transparent to-transparent" />

                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/50 text-white text-xs font-semibold">
                  {activeImage + 1} / {aboutPreviewImages.length}
                </div>

                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Decorative dot pattern */}
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)", backgroundSize: "10px 10px" }}
            />
            
            {/* Additional accent line decoration */}
            <div className="absolute -left-6 top-1/2 w-12 h-1 bg-linear-to-r from-blue-500 to-transparent rounded-full opacity-60" />
          </div>

          {/* ── Right: Text Content ── */}
          <div
            className="space-y-7 order-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: "0.15s",
            }}
          >
            {/* Label */}
            <span className="inline-block text-xs font-bold text-blue-600 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full">
              About IAAA
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Where Learning Meets{" "}
              <span className="text-blue-600">Real Aerospace</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-slate-500 leading-relaxed">
              IAAA enables professional networking and structured knowledge sharing to accelerate growth across the national and international aerospace ecosystem. IAAA serves as a dynamic platform for bridging the gap between industry and academia, fostering a collaborative aerospace community.
            </p>

            {/* Read More Button */}
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-blue-200 group"
            >
              <Link href="/about" className="flex items-center gap-2">
                Learn More About IAAA
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 rounded-2xl p-5 transition-all duration-300 group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease, background 0.3s ease",
                    transitionDelay: isVisible ? `${0.4 + index * 0.12}s` : "0s",
                  }}
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center mb-4 transition-colors duration-200">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
