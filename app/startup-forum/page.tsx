"use client"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Rocket, Lightbulb, Users, TrendingUp, ArrowRight, ChevronRight, Plane, Cpu, Satellite, Shield, Zap, Building2, Handshake, Award } from "lucide-react"

function useVisible(t=0.12){const ref=useRef<HTMLDivElement>(null);const [v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});obs.observe(el);return()=>obs.disconnect();},[t]);return{ref,v};}

const focusAreas=[
  {icon:Plane,title:"Aviation & Airlines",color:"text-blue-600",bg:"bg-blue-50"},
  {icon:Cpu,title:"Drone Technology",color:"text-teal-600",bg:"bg-teal-50"},
  {icon:Satellite,title:"Space Tech & Satellites",color:"text-violet-600",bg:"bg-violet-50"},
  {icon:Shield,title:"Defense & Aerospace",color:"text-rose-600",bg:"bg-rose-50"},
  {icon:Zap,title:"Advanced Materials",color:"text-amber-600",bg:"bg-amber-50"},
  {icon:Building2,title:"MRO & Manufacturing",color:"text-emerald-600",bg:"bg-emerald-50"},
]

const howItWorks=[
  {step:"01",title:"Identify the Right Idea",desc:"Through national competitions and Collegiate Club projects, we discover promising innovations."},
  {step:"02",title:"Incubate Under IAAA PTDC",desc:"Refine design, develop prototypes, and test with experienced mentors."},
  {step:"03",title:"Validate Market Fit",desc:"Engage with IAAA industry and startup partners for application trials."},
  {step:"04",title:"Access Funding & Tech Transfer",desc:"Pitch to investors and access IAAA-backed tech transfer opportunities."},
]

const benefits=[
  {icon:Users,title:"Technical Mentorship",desc:"Guidance from IAAA experts and industry leaders"},
  {icon:Building2,title:"Lab Access",desc:"Access to PTDC labs and partner facilities"},
  {icon:TrendingUp,title:"Pitch Events",desc:"National-level pitch events and demo days"},
  {icon:Award,title:"Fellowships",desc:"Eligibility for IAAA Startup Fellowship & Innovation Grants"},
  {icon:Handshake,title:"Industry Support",desc:"Industry-backed proof-of-concept development"},
  {icon:Rocket,title:"Launch Support",desc:"From ideation to market-ready product"},
]

const whoCanApply=[
  "Engineering students and college teams",
  "Faculty innovators and research groups",
  "Startups and MSMEs in aviation or drone sectors",
  "Innovators seeking industry partnerships or funding",
]

export default function StartupForumPage(){
  const a=useVisible();const h=useVisible();const w=useVisible();const cta=useVisible();
  return(
  <>
    <section className="relative min-h-[420px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"/>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full -translate-y-1/3 translate-x-1/3"/>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full translate-y-1/2"/>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">Indian Aerospace<br/><span className="text-emerald-400">Startup Forum</span></h1>
        <p className="text-lg text-white/70 max-w-xl mb-8">From Idea to Impact — Empowering aerospace entrepreneurs through mentorship, incubation, and industry partnerships.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-500 text-white rounded-full font-bold text-sm hover:bg-emerald-600 transition-colors shadow-xl"><Lightbulb className="w-4 h-4"/>Submit Your Idea</Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors">Join IASF</Link>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={a.ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <div style={{opacity:a.v?1:0,transform:a.v?"translateX(0)":"translateX(-40px)",transition:"opacity 0.8s ease,transform 0.8s ease"}}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/><span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">About the Forum</span></div>
            <h2 className="text-4xl font-black text-slate-900 mb-5">What is <span className="text-emerald-600">IASF?</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">The Indian Aerospace Startup Forum (IASF) is an IAAA initiative to identify, nurture, and accelerate promising aerospace, aviation, and drone-tech innovations across India.</p>
            <p className="text-slate-500 leading-relaxed">The forum connects students, faculties, researchers, and innovators with mentors, investors, and industry partners to transform ideas into market-ready solutions.</p>
          </div>
          <div style={{opacity:a.v?1:0,transform:a.v?"translateX(0)":"translateX(40px)",transition:"opacity 0.8s 0.2s ease,transform 0.8s 0.2s ease"}}>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Our Focus Areas</h3>
            <div className="grid grid-cols-2 gap-4">
              {focusAreas.map((f,i)=>(
                <div key={f.title} className={`${f.bg} rounded-xl p-4 flex items-center gap-3`} style={{opacity:a.v?1:0,transition:`opacity 0.4s ${0.3+i*0.08}s ease`}}>
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0"><f.icon className={`w-5 h-5 ${f.color}`}/></div>
                  <span className="text-sm font-semibold text-slate-800">{f.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={h.ref} className="text-center mx-auto mb-14" style={{opacity:h.v?1:0,transform:h.v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/><span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Process</span></div>
          <h2 className="text-4xl font-black text-slate-900">How <span className="text-emerald-600">It Works</span></h2>
          <p className="text-slate-500 mt-3">A structured pathway from ideation to market</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {howItWorks.map((step,i)=>(
            <div key={step.step} className="relative bg-white border border-slate-200 rounded-2xl p-7 hover:border-emerald-200 hover:shadow-lg transition-all" style={{opacity:h.v?1:0,transform:h.v?"translateY(0)":"translateY(30px)",transition:`opacity 0.5s ${0.1+i*0.1}s ease,transform 0.5s ${0.1+i*0.1}s ease`}}>
              <div className="text-5xl font-black text-emerald-100 mb-4 leading-none">{step.step}</div>
              <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              {i<3&&<div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-0.5 bg-slate-200"/>}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={w.ref} className="grid lg:grid-cols-2 gap-16">
          <div style={{opacity:w.v?1:0,transform:w.v?"translateX(0)":"translateX(-40px)",transition:"opacity 0.8s ease,transform 0.8s ease"}}>
            <h2 className="text-3xl font-black text-white mb-6">Who Can Apply?</h2>
            <div className="space-y-3">
              {whoCanApply.map((item,i)=>(
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/10 transition-colors">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"/></span>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{opacity:w.v?1:0,transform:w.v?"translateX(0)":"translateX(40px)",transition:"opacity 0.8s 0.2s ease,transform 0.8s 0.2s ease"}}>
            <h2 className="text-3xl font-black text-white mb-6">What You Get</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b,i)=>(
                <div key={b.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors" style={{opacity:w.v?1:0,transition:`opacity 0.4s ${0.3+i*0.08}s ease`}}>
                  <b.icon className="w-6 h-6 text-emerald-400 mb-3"/>
                  <h3 className="font-bold text-white text-sm mb-1">{b.title}</h3>
                  <p className="text-white/60 text-xs">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-linear-to-r from-emerald-600 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px)",backgroundSize:"50px 50px"}}/>
      <div ref={cta.ref} className="relative z-10 mx-auto px-4 text-center" style={{opacity:cta.v?1:0,transform:cta.v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
        <h2 className="text-4xl font-black text-white mb-4">Ready to Launch Your Aerospace Innovation?</h2>
        <p className="text-white/80 text-lg mb-8">Join the Indian Aerospace Startup Forum and transform your ideas into reality.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-emerald-700 rounded-full font-bold text-sm hover:bg-emerald-50 transition-colors shadow-xl"><Lightbulb className="w-4 h-4"/>Submit Your Idea</Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors"><Handshake className="w-4 h-4"/>Become a Partner</Link>
        </div>
      </div>
    </section>
  </>
)}
