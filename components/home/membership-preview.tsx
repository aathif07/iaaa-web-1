"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, User, Briefcase, Building, Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const memberships = [
  {
    icon: User,
    title: "ANNUAL MEMBERSHIP (PAID)",
    price: "",
    period: "",
    tag: "Most Popular",
    features: ["₹1,000 / year","4-10 certified courses per year","National contests & internships","Workshops and training programs","Official IAAA certificate","Career support & mentorship"],
    cta: "Join as Student",
    href: "/membership#student",
    highlight: true,
  },
  {
    icon: Briefcase,
    title: "ANNUAL MEMBERSHIP (Unpaid Volunteer Based)",
    price: "",
    period: "",
    tag: "Open",
    features: ["Volunteer membership (VIAAA)","Network with industry leaders","Mentor student members","Contribute to research initiatives","Professional recognition"],
    cta: "Apply as Professional",
    href: "/membership#professional",
    highlight: false,
  },
  {
    icon: Building,
    title: "COLLEGIATE / INDUSTRY ANNUAL CLUB MEMBERSHIP (Minimum 50 to 300 members)",
    price: "",
    period: "",
    tag: "Enterprise",
    features: ["Host IAAA Collegiate Clubs","Establish Regional Hubs","Run PTDC Centres","Faculty development programs","Revenue sharing model"],
    cta: "Register Institution",
    href: "/membership#institutional",
    highlight: false,
  },
]

export function MembershipPreview() {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className="text-center max-w-3xl mx-auto mb-14"
          style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 bg-blue-50 border border-blue-100 rounded-full text-sm font-bold text-blue-600">
            <Star className="w-3.5 h-3.5 fill-blue-600" />
            Membership
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
            Join India&apos;s Largest<br />
            <span className="text-blue-600">Aerospace Learning Network</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Connect with <span className="font-semibold text-slate-700">10,000+ members</span> across <span className="font-semibold text-slate-700">100+ institutions</span> nationwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {memberships.map((m, index) => (
            <div
              key={m.title}
              className={`relative flex flex-col rounded-3xl p-7 border-2 transition-all duration-300 ${m.highlight ? "bg-blue-600 border-blue-600 shadow-2xl shadow-blue-200 scale-[1.03]" : "bg-white border-slate-200 hover:shadow-xl hover:border-blue-200"}`}
              style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(32px)", transition: "opacity 0.7s ease, transform 0.7s ease", transitionDelay: isVisible ? `${0.15 + index * 0.12}s` : "0s" }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${m.highlight ? "bg-white/20" : "bg-blue-50"}`}>
                  <m.icon className={`w-6 h-6 ${m.highlight ? "text-white" : "text-blue-600"}`} />
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${m.highlight ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>{m.tag}</span>
              </div>

              <h3 className={`text-xl font-black mb-1 ${m.highlight ? "text-white" : "text-slate-900"}`}>{m.title}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                {m.highlight && <span className={`text-lg font-bold ${m.highlight ? "text-blue-100" : "text-slate-400"}`}>&#8377;</span>}
                <span className={`text-4xl font-black ${m.highlight ? "text-white" : "text-slate-900"}`}>{m.price}</span>
                <span className={`text-sm font-medium ${m.highlight ? "text-blue-100" : "text-slate-400"}`}>{m.period}</span>
              </div>

              <div className={`w-full h-px mb-6 ${m.highlight ? "bg-white/20" : "bg-slate-100"}`} />

              <ul className="space-y-3 flex-1 mb-8">
                {m.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${m.highlight ? "bg-white/20" : "bg-blue-50"}`}>
                      <Check className={`w-3 h-3 ${m.highlight ? "text-white" : "text-blue-600"}`} />
                    </div>
                    <span className={m.highlight ? "text-blue-50" : "text-slate-500"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className={`w-full rounded-2xl py-5 font-bold text-base ${m.highlight ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 hover:bg-blue-700 text-white"}`}>
                <Link href={m.href} className="flex items-center justify-center gap-2">
                  {m.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.6s ease", transitionDelay: "0.55s" }}>
          <Link href="/membership" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
            View all membership options &amp; benefits
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
