"use client"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { User, Briefcase, Building, Check, ArrowRight, GraduationCap, Trophy, Rocket, FileCheck, Users, Award, ChevronRight, Star } from "lucide-react"

function useVisible(t=0.12){const ref=useRef<HTMLDivElement>(null);const [v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});obs.observe(el);return()=>obs.disconnect();},[t]);return{ref,v};}

const studentFeatures=["4–10 certified courses per year","National contests & internships","Workshops and Training Programs","Official IAAA Certificate & Career Support","Access certified aerospace courses & innovation contests","Apply for internships and startup mentorship via IAAA networks","Compete in IAAA National Innovation Challenge","Annual certificate and national recognition"]
const professionalFeatures=["Network with industry leaders","Mentor student members","Contribute to IAAA's educational and research initiatives","Professional recognition and certification","Event participation and speaking opportunities","Access to IAAA resources and publications"]
const institutionalFeatures=["Host IAAA Collegiate Clubs","Establish Regional Hubs or PTDC Centres","Enable aerospace programs and FDPs","National recognition for institution","Faculty development support","Access to industry partnerships"]
const whyJoin=[{icon:Trophy,title:"Competitions",desc:"National innovation challenges and hackathons",bg:"bg-amber-50",color:"text-amber-600"},{icon:Rocket,title:"Startup Support",desc:"From idea to launch with IASF mentorship",bg:"bg-teal-50",color:"text-teal-600"},{icon:FileCheck,title:"Certifications",desc:"Globally recognized aerospace credentials",bg:"bg-violet-50",color:"text-violet-600"},{icon:Users,title:"Network",desc:"10,000+ members and 80+ industry partners",bg:"bg-rose-50",color:"text-rose-600"}]

function FeatureList({items,color}:{items:string[],color:string}){return(
  <ul className="space-y-3">
    {items.map((f,i)=>(
      <li key={i} className="flex items-start gap-3">
        <div className={`w-5 h-5 rounded-full ${color.replace('text-','bg-').replace('600','100')} flex items-center justify-center flex-shrink-0 mt-0.5`}><Check className={`w-3 h-3 ${color}`}/></div>
        <span className="text-slate-600 text-sm leading-relaxed">{f}</span>
      </li>
    ))}
  </ul>
)}

export default function MembershipPage(){
  const h=useVisible();const s=useVisible();const p=useVisible();const ins=useVisible();const w=useVisible();
  return(
  <>
    {/* Hero */}
    <section className="relative min-h-[380px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"/>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full -translate-y-1/3 translate-x-1/3"/>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full translate-y-1/3 -translate-x-1/3"/>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">Join India&apos;s Largest<br/><span className="text-violet-400">Aerospace Network</span></h1>
        <p className="text-lg text-white/70 max-w-xl">Connect with 10,000+ members across 100+ institutions nationwide</p>
      </div>
    </section>

    {/* Student */}
    <section id="student" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={s.ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div style={{opacity:s.v?1:0,transform:s.v?"translateX(0)":"translateX(-40px)",transition:"opacity 0.8s ease,transform 0.8s ease"}}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full mb-6"><GraduationCap className="w-4 h-4 text-blue-600"/><span className="text-sm font-semibold text-blue-700">Most Popular</span></div>
            <h2 className="text-4xl font-black text-slate-900 mb-3">Student Membership</h2>
            <div className="flex items-baseline gap-2 mb-5"><span className="text-5xl font-black text-blue-600">₹1,000</span><span className="text-slate-400">/ year</span></div>
            <p className="text-slate-500 leading-relaxed mb-8">Access certified aerospace courses & innovation contests. Apply for internships and startup mentorship via IAAA networks. Compete in IAAA National Innovation Challenge.</p>
            <Link href="/membership/student-apply" className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">Join as Student Member<ArrowRight className="w-4 h-4"/></Link>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8" style={{opacity:s.v?1:0,transform:s.v?"translateX(0)":"translateX(40px)",transition:"opacity 0.8s 0.15s ease,transform 0.8s 0.15s ease"}}>
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2"><Star className="w-5 h-5 text-blue-600"/>What You Get</h3>
            <FeatureList items={studentFeatures} color="text-blue-600"/>
          </div>
        </div>
      </div>
    </section>

    {/* Professional */}
    <section id="professional" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={p.ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-teal-50 border border-teal-100 rounded-2xl p-8" style={{opacity:p.v?1:0,transform:p.v?"translateX(0)":"translateX(-40px)",transition:"opacity 0.8s ease,transform 0.8s ease"}}>
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2"><Briefcase className="w-5 h-5 text-teal-600"/>Benefits Include</h3>
            <FeatureList items={professionalFeatures} color="text-teal-600"/>
          </div>
          <div className="order-1 lg:order-2" style={{opacity:p.v?1:0,transform:p.v?"translateX(0)":"translateX(40px)",transition:"opacity 0.8s 0.15s ease,transform 0.8s 0.15s ease"}}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-200 rounded-full mb-6"><Briefcase className="w-4 h-4 text-teal-600"/><span className="text-sm font-semibold text-teal-700">Volunteer Program</span></div>
            <h2 className="text-4xl font-black text-slate-900 mb-3">Professional Membership</h2>
            <div className="flex items-baseline gap-2 mb-5"><span className="text-5xl font-black text-teal-600">Free</span><span className="text-slate-400">Volunteer Member</span></div>
            <p className="text-slate-500 leading-relaxed mb-8">For practicing engineers, scientists, and professionals who wish to contribute to IAAA&apos;s educational and research initiatives. Network with industry and mentor students.</p>
            <Link href="/membership/professional-apply" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-600 text-white rounded-full font-bold text-sm hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200">Apply as Professional<ArrowRight className="w-4 h-4"/></Link>
          </div>
        </div>
      </div>
    </section>

    {/* Institutional */}
    <section id="institutional" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ins.ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div style={{opacity:ins.v?1:0,transform:ins.v?"translateX(0)":"translateX(-40px)",transition:"opacity 0.8s ease,transform 0.8s ease"}}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-50 border border-violet-200 rounded-full mb-6"><Building className="w-4 h-4 text-violet-600"/><span className="text-sm font-semibold text-violet-700">For Institutions</span></div>
            <h2 className="text-4xl font-black text-slate-900 mb-3">Institutional Membership</h2>
            <div className="flex items-baseline gap-2 mb-5"><span className="text-5xl font-black text-violet-600">Custom</span><span className="text-slate-400">Pricing</span></div>
            <p className="text-slate-500 leading-relaxed mb-8">For colleges, universities, and schools hosting IAAA Clubs, Regional Hubs, or PTDC Centres — enabling aerospace programs, FDPs, and national recognition.</p>
            <Link href="/membership/institution-apply" className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 text-white rounded-full font-bold text-sm hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200">Register Your Institution<ArrowRight className="w-4 h-4"/></Link>
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-8" style={{opacity:ins.v?1:0,transform:ins.v?"translateX(0)":"translateX(40px)",transition:"opacity 0.8s 0.15s ease,transform 0.8s 0.15s ease"}}>
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2"><Award className="w-5 h-5 text-violet-600"/>Institution Benefits</h3>
            <FeatureList items={institutionalFeatures} color="text-violet-600"/>
          </div>
        </div>
      </div>
    </section>

    {/* Why Join */}
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-400/5 rounded-full -translate-y-1/3 translate-x-1/3"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={w.ref} className="text-center mx-auto mb-14" style={{opacity:w.v?1:0,transform:w.v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full mb-5"><span className="w-1.5 h-1.5 rounded-full bg-violet-400"/><span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">Why Join IAAA</span></div>
          <h2 className="text-4xl md:text-5xl font-black text-white">Why Join <span className="text-violet-400">IAAA?</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyJoin.map((item,i)=>(
            <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-white/20 transition-all text-center" style={{opacity:w.v?1:0,transform:w.v?"translateY(0)":"translateY(30px)",transition:`opacity 0.5s ${0.1+i*0.1}s ease,transform 0.5s ${0.1+i*0.1}s ease`}}>
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-4`}><item.icon className={`w-7 h-7 ${item.color}`}/></div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)}
