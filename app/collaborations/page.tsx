"use client"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Globe, Users, Lightbulb, Award, Rocket, Building2, BookOpen, ArrowRight, Handshake, Star, Zap, Target, TrendingUp, Mail, GraduationCap, FlaskConical, Landmark } from "lucide-react"

function useVisible(t = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: t })
    obs.observe(el)
    return () => obs.disconnect()
  }, [t])
  return { ref, v }
}

const stats = [
  { value: "25+", label: "Partner Organizations", icon: Handshake },
  { value: "10+", label: "Countries Reached", icon: Globe },
  { value: "15+", label: "Academic Institutions", icon: GraduationCap },
  { value: "5+", label: "Govt. Bodies", icon: Landmark },
]

const collaborations = [
  {
    id: 1,
    name: "Airports Authority of India",
    category: "government",
    description: "Strategic partnership for aerospace infrastructure development, safety training programmes, and workforce capability enhancement across Indian airports.",
    icon: Building2,
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    focus: ["Infrastructure", "Aviation Safety", "Training"],
  },
  {
    id: 2,
    name: "IIT Madras & IIT Guwahati",
    category: "academia",
    description: "Collaborative academic programmes including specialised B.S. degrees, joint research initiatives, and student exchange opportunities in aerospace engineering.",
    icon: GraduationCap,
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    focus: ["Academic Programs", "Research", "STEM"],
  },
  {
    id: 3,
    name: "ISRO",
    category: "government",
    description: "Scientific collaboration for space technology awareness, research outreach programmes, and student engagement with India's premier space agency.",
    icon: Rocket,
    bg: "bg-rose-50",
    border: "border-rose-100",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    focus: ["Space Research", "Technology", "Missions"],
  },
  {
    id: 4,
    name: "StartupTN",
    category: "government",
    description: "Empowering aerospace startups in Tamil Nadu through incubation support, ecosystem development, and policy-level advocacy for the sector.",
    icon: Lightbulb,
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    focus: ["Startups", "Incubation", "Policy"],
  },
  {
    id: 5,
    name: "ICAO & UN-SGAC",
    category: "international",
    description: "Global partnerships for international aviation standards alignment and active participation in the Space Generation Advisory Council for youth representation.",
    icon: Globe,
    bg: "bg-teal-50",
    border: "border-teal-100",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    focus: ["Global Standards", "Space Policy", "Youth"],
  },
  {
    id: 6,
    name: "AeSI, IEI & HEMSI",
    category: "industry",
    description: "Collaborations with professional societies for member development, joint certification programmes, networking events, and cross-industry knowledge exchange.",
    icon: Users,
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    focus: ["Professional Growth", "Networking", "Certification"],
  },
  {
    id: 7,
    name: "Anna University & VIT",
    category: "academia",
    description: "Technical education partnerships offering joint workshops, faculty exchange, lab access, and curriculum development support for aerospace programmes.",
    icon: BookOpen,
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    focus: ["Curriculum", "Labs", "Faculty Exchange"],
  },
  {
    id: 8,
    name: "HAL & DRDO",
    category: "industry",
    description: "Industry collaboration for internship placements, technical exposure to advanced aerospace manufacturing, and defence R&D knowledge transfer to members.",
    icon: Zap,
    bg: "bg-orange-50",
    border: "border-orange-100",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    focus: ["Internships", "Manufacturing", "R&D"],
  },
  {
    id: 9,
    name: "Global Research Labs",
    category: "international",
    description: "International research partnerships enabling collaborative studies, scholar exchange, and joint publication in frontier aerospace and space science domains.",
    icon: FlaskConical,
    bg: "bg-sky-50",
    border: "border-sky-100",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    focus: ["Research", "Publications", "Exchange"],
  },
]

const filters = [
  { value: "all", label: "All Partners", icon: Star },
  { value: "government", label: "Government", icon: Landmark },
  { value: "academia", label: "Academia", icon: GraduationCap },
  { value: "industry", label: "Industry", icon: Building2 },
  { value: "international", label: "International", icon: Globe },
]

const benefits = [
  { icon: Target, title: "Strategic Alignment", desc: "Partners align with IAAA's vision to build a world-class aerospace ecosystem in India." },
  { icon: TrendingUp, title: "Mutual Growth", desc: "Every collaboration drives growth for both IAAA and partner organisations through shared resources." },
  { icon: Users, title: "Talent Pipeline", desc: "Partners gain access to IAAA's vast pool of aerospace professionals, students, and researchers." },
  { icon: Award, title: "Recognition", desc: "Official co-branding, awards, and recognition at national aerospace events and publications." },
]

export default function CollaborationsPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const s = useVisible()
  const f = useVisible()
  const b = useVisible()
  const cta = useVisible()

  const filtered = activeFilter === "all" ? collaborations : collaborations.filter(c => c.category === activeFilter)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-105 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/10 rounded-full translate-y-1/3 -translate-x-1/3" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400/10 rounded-full -translate-y-1/3 translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 w-150 h-150 bg-blue-400/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
            <Handshake className="w-4 h-4 text-sky-400" />
            <span className="text-sm font-semibold text-sky-300 uppercase tracking-wider">Partnerships & Collaborations</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Stronger Together<br />
            <span className="text-sky-400">Through Collaboration</span>
          </h1>
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Building India&apos;s aerospace ecosystem through strategic alliances with government bodies, world-class academia, leading industries, and global organisations.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white border-b border-slate-100">
        <div ref={s.ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((st, i) => (
              <div
                key={st.label}
                className="text-center"
                style={{ opacity: s.v ? 1 : 0, transform: s.v ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.5s ${i * 0.1}s ease, transform 0.5s ${i * 0.1}s ease` }}
              >
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                    <st.icon className="w-5 h-5 text-sky-600" />
                  </div>
                </div>
                <div className="text-3xl font-black text-slate-900">{st.value}</div>
                <div className="text-sm text-slate-500 mt-0.5">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter + Cards ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={f.ref}>
            <div
              className="text-center mb-12"
              style={{ opacity: f.v ? 1 : 0, transform: f.v ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 border border-sky-200 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span className="text-sm font-semibold text-sky-700 uppercase tracking-wider">Our Network</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-4">
                Strategic <span className="text-sky-600">Partnerships</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                From government agencies to global research institutions — every partnership is built to accelerate aerospace innovation in India.
              </p>
            </div>

            {/* Filter Tabs */}
            <div
              className="flex flex-wrap justify-center gap-2 mb-12"
              style={{ opacity: f.v ? 1 : 0, transition: "opacity 0.6s 0.2s ease" }}
            >
              {filters.map(filter => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === filter.value
                      ? "bg-sky-600 text-white shadow-lg shadow-sky-200"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-sky-300 hover:text-sky-600"
                  }`}
                >
                  <filter.icon className="w-4 h-4" />
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((collab, i) => (
                <div
                  key={collab.id}
                  className={`group bg-white rounded-2xl border ${collab.border} p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
                  style={{ opacity: f.v ? 1 : 0, transform: f.v ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.5s ${0.1 + i * 0.07}s ease, transform 0.5s ${0.1 + i * 0.07}s ease` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl ${collab.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <collab.icon className={`w-7 h-7 ${collab.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${collab.bg} ${collab.iconColor} mb-1.5`}>
                        {collab.category}
                      </div>
                      <h3 className="text-base font-black text-slate-900 leading-snug">{collab.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">{collab.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {collab.focus.map(item => (
                      <span
                        key={item}
                        className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${collab.bg} ${collab.iconColor} border ${collab.border}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-slate-400">
                <Globe className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-lg font-medium">No partners found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Why Partner ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={b.ref}>
            <div
              className="text-center mb-14"
              style={{ opacity: b.v ? 1 : 0, transform: b.v ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-200 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Why Collaborate</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-4">
                The <span className="text-teal-600">IAAA Advantage</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                Partnering with IAAA connects you to India&apos;s largest aerospace professional community and opens doors to industry-defining initiatives.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((ben, i) => (
                <div
                  key={ben.title}
                  className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ opacity: b.v ? 1 : 0, transform: b.v ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.5s ${0.1 + i * 0.1}s ease, transform 0.5s ${0.1 + i * 0.1}s ease` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mx-auto mb-5">
                    <ben.icon className="w-7 h-7 text-teal-600" />
                  </div>
                  <h3 className="font-black text-slate-900 mb-3 text-lg">{ben.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{ben.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Partner ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-slate-900 mb-4">How to <span className="text-sky-600">Get Started</span></h2>
            <p className="text-slate-500 text-lg">Three simple steps to becoming an IAAA collaboration partner</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-0.5 bg-sky-100" />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Reach Out", desc: "Send us your collaboration proposal or partnership enquiry via our contact form.", icon: Mail },
                { step: "02", title: "Discussion", desc: "Our team connects with your organisation to understand mutual goals and define scope.", icon: Users },
                { step: "03", title: "Partnership", desc: "Sign an MoU or partnership agreement and launch collaborative programmes together.", icon: Award },
              ].map((step) => (
                <div key={step.step} className="text-center relative">
                  <div className="relative w-16 h-16 rounded-full bg-sky-600 text-white flex items-center justify-center mx-auto mb-5 text-lg font-black shadow-lg shadow-sky-200 z-10">
                    {step.step}
                  </div>
                  <h3 className="font-black text-slate-900 text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Partnered Organisations (logos only) ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Partnered organisations for events, outreach and training programs</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["ALTAIR","ANSYS CADFEM","PULLINAM AEROSPACE TECHNOLOGIES","VAANAM ACCELERATOR"].map(name=>(
              <div key={name} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full translate-y-1/3 translate-x-1/3" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full -translate-y-1/3 -translate-x-1/3" />
        <div ref={cta.ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            style={{ opacity: cta.v ? 1 : 0, transform: cta.v ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
              <Handshake className="w-4 h-4 text-sky-400" />
              <span className="text-sm font-semibold text-sky-300 uppercase tracking-wider">Partner With Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
              Ready to Build<br />
              <span className="text-sky-400">Something Great Together?</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our growing network of organisations shaping the future of aerospace in India. Whether you are in government, academia, industry, or a global body — there is a place for you in the IAAA ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-sky-900/40"
              >
                Propose a Partnership <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Learn About IAAA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
