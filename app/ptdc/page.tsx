"use client"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { GraduationCap, Wrench, Cpu, Award, Plane, Clock, ArrowRight, Check, Globe, Briefcase, Building2, FileCheck, Rocket, ChevronRight, Star } from "lucide-react"

function useVisible(t=0.12){const ref=useRef<HTMLDivElement>(null);const [v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});obs.observe(el);return()=>obs.disconnect();},[t]);return{ref,v};}

const courses=[
  {icon:GraduationCap,title:"B.S. Program by IIT Madras",subtitle:"For +2/Grade 12 — No JEE Required",description:"Guided by IAAA's Academic Advisory Program. Focused on Data Science and Aerospace Applications.",duration:"4 Years",tag:"Degree",color:"bg-blue-600",light:"bg-blue-50 border-blue-200",tagBg:"bg-blue-100 text-blue-700",featured:true},
  {icon:Wrench,title:"Aircraft Maintenance Technician",subtitle:"One-Year Diploma",description:"Globally accepted certification for MRO & AME careers.",duration:"1 Year",tag:"Diploma",color:"bg-teal-600",light:"bg-teal-50 border-teal-200",tagBg:"bg-teal-100 text-teal-700",featured:false},
  {icon:Award,title:"AMT — Specialization: NDT",subtitle:"One-Year Diploma",description:"Level II Certification (UT, RT, PT, MT, VT) with assured job prospects.",duration:"1 Year",tag:"Diploma",color:"bg-violet-600",light:"bg-violet-50 border-violet-200",tagBg:"bg-violet-100 text-violet-700",featured:false},
  {icon:Cpu,title:"Drone Architecture",subtitle:"One-Year Diploma",description:"Drone Design, Assembly, Flight Operations, and Industry Use Cases.",duration:"1 Year",tag:"Diploma",color:"bg-amber-600",light:"bg-amber-50 border-amber-200",tagBg:"bg-amber-100 text-amber-700",featured:false},
  {icon:Plane,title:"Short-Term Training & Internships",subtitle:"Multiple Programs",description:"Airline Operations, Drone Tech, AME, NDT, Composites, and Manufacturing.",duration:"3-6 Months",tag:"Training",color:"bg-rose-600",light:"bg-rose-50 border-rose-200",tagBg:"bg-rose-100 text-rose-700",featured:false},
  {icon:FileCheck,title:"Career-Focused NDT Training",subtitle:"Special Program",description:"Job-ready courses with international Level II certification.",duration:"6 Months",tag:"Training",color:"bg-emerald-600",light:"bg-emerald-50 border-emerald-200",tagBg:"bg-emerald-100 text-emerald-700",featured:false},
]

const whyPTDC=[
  {icon:Globe,title:"Global Certifications",desc:"Internationally recognized diplomas and certifications",color:"text-blue-600",bg:"bg-blue-50"},
  {icon:Briefcase,title:"Industry Internships",desc:"Real projects with leading aerospace companies",color:"text-teal-600",bg:"bg-teal-50"},
  {icon:GraduationCap,title:"Skill-Based Learning",desc:"Career-linked, practical training programs",color:"text-violet-600",bg:"bg-violet-50"},
  {icon:Rocket,title:"Startup Support",desc:"Path from idea to IAAA Startup Forum",color:"text-amber-600",bg:"bg-amber-50"},
]

const operations=["PTDCs are hosted at IAAA Regional Hubs or Partner Institutions","Trainers approved by IAAA Academic & Industry Council","Transparent revenue model; supports local training & skill programs","Aligned with DGCA Standards, NSDC, and International Standards"]

function HeroBanner(){return(
  <section className="relative min-h-87.5 sm:min-h-100 flex items-center overflow-hidden">
    <div className="absolute inset-0"><Image src="/gallery/aerospace-3.jpg" alt="PTDC" fill className="object-cover" priority/><div className="absolute inset-0 bg-slate-900/75"/><div className="absolute inset-0 bg-linear-to-r from-slate-900/85 via-slate-900/40 to-transparent"/></div>
    <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-5">Professional Training<br/><span className="text-teal-400">&amp; Development Centre</span></h1>
      <p className="text-base sm:text-lg text-white/70 max-w-lg sm:max-w-xl">Learn, Build, Intern — The IAAA Way</p>
    </div>
  </section>
)}

function Intro(){const{ref,v}=useVisible();return(
  <section className="py-12 sm:py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-3xl sm:max-w-4xl mx-auto text-center" style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">The PTDC delivers globally recognized diplomas, technical certifications, and industry internships for students and professionals. Every PTDC student is part of the IAAA Internship Network, gaining real industry experience and eligibility to pitch innovations at the IAAA Startup Forum.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          {[{v:"DGCA",l:"Standards Aligned"},{v:"NSDC",l:"Certified"},{v:"6+",l:"Programs"},{v:"1000+",l:"Graduates"}].map((s,i)=>(
            <div key={i} className="text-center min-w-0" style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(20px)",transition:`opacity 0.5s ${0.1+i*0.1}s ease,transform 0.5s ${0.1+i*0.1}s ease`}}>
              <div className="text-2xl sm:text-3xl font-black text-teal-600">{s.v}</div><div className="text-xs sm:text-sm text-slate-500 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)}

function Courses(){const{ref,v}=useVisible();return(
  <section id="courses" className="py-20 md:py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="text-center mx-auto mb-14" style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-200 rounded-full mb-5"><span className="w-1.5 h-1.5 rounded-full bg-teal-500"/><span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Courses &amp; Programs</span></div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Industry-Aligned<br/><span className="text-teal-600">Curriculum</span></h2>
        <p className="text-slate-500 text-lg">Designed for career success in the global aerospace industry</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c,i)=>(
          <div key={c.title} className={`bg-white rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group ${c.light}`} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(30px)",transition:`opacity 0.5s ${0.1+i*0.08}s ease,transform 0.5s ${0.1+i*0.08}s ease`}}>
            <div className={`h-2 ${c.color}`}/>
            <div className="p-6">
              {c.featured&&<div className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-4"><Star className="w-3 h-3"/>Featured Program</div>}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}><c.icon className="w-8 h-8 text-white"/></div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.tagBg}`}>{c.tag}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{c.title}</h3>
              <p className="text-sm font-medium text-teal-600 mb-2">{c.subtitle}</p>
              <p className="text-sm text-slate-500 mb-5 leading-relaxed">{c.description}</p>
              <div className="flex items-center gap-2 text-sm text-slate-400 pt-4 border-t border-slate-100"><Clock className="w-4 h-4"/><span>{c.duration}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

function WhyPTDC(){const{ref,v}=useVisible();return(
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mx-auto mb-14" style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
        <div ref={ref} className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-50 border border-violet-200 rounded-full mb-5"><span className="w-1.5 h-1.5 rounded-full bg-violet-500"/><span className="text-sm font-semibold text-violet-700 uppercase tracking-wider">Why PTDC</span></div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">Why Choose <span className="text-violet-600">PTDC?</span></h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyPTDC.map((w,i)=>(
          <div key={w.title} className={`${w.bg} rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all`} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(30px)",transition:`opacity 0.5s ${0.1+i*0.1}s ease,transform 0.5s ${0.1+i*0.1}s ease`}}>
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-5"><w.icon className={`w-7 h-7 ${w.color}`}/></div>
            <h3 className="font-bold text-slate-900 mb-2">{w.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

function Internships(){const{ref,v}=useVisible();return(
  <section id="internships" className="py-20 bg-slate-900 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/5 rounded-full -translate-y-1/3 translate-x-1/3"/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
        <div style={{opacity:v?1:0,transform:v?"translateX(0)":"translateX(-40px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-400/10 border border-teal-400/20 rounded-full mb-6"><span className="w-1.5 h-1.5 rounded-full bg-teal-400"/><span className="text-sm font-semibold text-teal-300 uppercase tracking-wider">Internships</span></div>
          <h2 className="text-4xl font-black text-white mb-5">Industry Pathway<br/><span className="text-teal-400">&amp; Internships</span></h2>
          <p className="text-slate-300 leading-relaxed mb-8">Real projects with Drones, Airlines, MROs, UAV Startups, and Composite Manufacturers. Gain hands-on experience and build your career in aerospace.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-500 text-white rounded-full font-bold text-sm hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/20">Apply for Internship<ArrowRight className="w-4 h-4"/></Link>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8" style={{opacity:v?1:0,transform:v?"translateX(0)":"translateX(40px)",transition:"opacity 0.7s 0.15s ease,transform 0.7s 0.15s ease"}}>
          <h3 className="font-bold text-white mb-6 flex items-center gap-2"><Building2 className="w-5 h-5 text-teal-400"/>Operations</h3>
          <ul className="space-y-4">
            {operations.map((op,i)=>(
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-400/10 border border-teal-400/20 flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3.5 h-3.5 text-teal-400"/></div>
                <span className="text-slate-300 text-sm leading-relaxed">{op}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
)}

function Certification(){const{ref,v}=useVisible();return(
  <section className="py-16 bg-amber-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="text-center" style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100 border border-amber-200 rounded-full mb-6"><FileCheck className="w-4 h-4 text-amber-600"/><span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Global Recognition</span></div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Internationally Recognized <span className="text-amber-600">Certifications</span></h2>
        <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">IAAA PTDC Annual Diploma Courses are certified by CTDS-TN, NSDC, Government of India attested by Indian Embassy accepted across the globe. Wherever DGCA comes it should as "Aligned with DGCA Standards" not Course accredited by DGCA. Or along with DGCA Module Certification is ok</p>
      </div>
    </div>
  </section>
)}

function PTDCCTA(){const{ref,v}=useVisible();return(
  <section className="py-20 bg-linear-to-r from-teal-600 to-blue-600 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px)",backgroundSize:"50px 50px"}}/>
    <div ref={ref} className="relative z-10 mx-auto px-4 text-center" style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
      <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Ready to Start Your<br/><span className="text-teal-200">Aerospace Career?</span></h2>
      <p className="text-white/80 text-lg mb-8">Join PTDC and get access to world-class training, industry internships, and career support.</p>
    </div>
  </section>
)}

export default function PTDCPage(){return(<><HeroBanner/><Intro/><Courses/><WhyPTDC/><Internships/><Certification/></>)}
