"use client"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Users, MapPin, Star, BookOpen, Rocket, ArrowRight, ChevronRight, Globe, Award, Zap, Building2, Plane, Wrench, Cpu, Wind } from "lucide-react"

function useVisible(t=0.12){const ref=useRef<HTMLDivElement>(null);const [v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});obs.observe(el);return()=>obs.disconnect();},[t]);return{ref,v};}

const collegiateFeatures=[
  {icon:Globe,title:"Industry Exposure",desc:"Direct access to IAAA's network of aerospace professionals and companies"},
  {icon:Award,title:"Certifications",desc:"IAAA-endorsed certifications recognized across the aerospace sector"},
  {icon:Users,title:"Mentorship",desc:"Guidance from IAAA's expert panel and industry veterans"},
  {icon:Rocket,title:"Innovation Hub",desc:"Platform for student-led projects and aerospace research"},
]

const vaayuPrograms=[
  {icon:Plane,title:"Basic Aeronautics",color:"text-blue-600",bg:"bg-blue-50",desc:"Introduction to flight principles and aircraft systems"},
  {icon:Wind,title:"Drone Tech",color:"text-teal-600",bg:"bg-teal-50",desc:"UAV design, assembly, and safe flight operations"},
  {icon:Cpu,title:"Avionics Basics",color:"text-violet-600",bg:"bg-violet-50",desc:"Electronics and communication systems in aircraft"},
  {icon:Wrench,title:"Aircraft Maintenance",color:"text-amber-600",bg:"bg-amber-50",desc:"Fundamentals of aircraft inspection and repair"},
  {icon:BookOpen,title:"Space Science",color:"text-rose-600",bg:"bg-rose-50",desc:"Orbital mechanics, satellites, and space exploration"},
  {icon:Zap,title:"Aviation Safety",color:"text-emerald-600",bg:"bg-emerald-50",desc:"Safety regulations, protocols, and human factors"},
]

const regionalPrivileges=[
  "Organize regional aerospace competitions",
  "Host IAAA-certified workshops in your region",
  "Access IAAA's library of technical resources",
  "Priority slots at national conferences",
  "Co-branding opportunities with IAAA",
  "Connect regional institutions to industry",
]

export default function ClubsPage(){
  const c=useVisible();const r=useVisible();const v=useVisible();const cta=useVisible();
  return(
  <>
    <section className="relative min-h-[380px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"/>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/10 rounded-full translate-y-1/3 -translate-x-1/3"/>
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full -translate-y-1/3 translate-x-1/3"/>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">Building Aerospace<br/><span className="text-orange-400">Communities</span></h1>
        <p className="text-lg text-white/70 max-w-xl">Collegiate clubs, regional hubs, and school chapters connecting the next generation of aviation professionals.</p>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={c.ref}>
          <div className="text-center mx-auto mb-14" style={{opacity:c.v?1:0,transform:c.v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-200 rounded-full mb-5"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"/><span className="text-sm font-semibold text-orange-700 uppercase tracking-wider">Collegiate</span></div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">IAAA <span className="text-orange-600">Collegiate Club</span></h2>
            <p className="text-slate-500 text-lg leading-relaxed">Establish an IAAA Collegiate Club at your institution to build an aerospace community, access industry networks, and lead innovation initiatives.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {collegiateFeatures.map((f,i)=>(
              <div key={f.title} className="bg-orange-50 border border-orange-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all" style={{opacity:c.v?1:0,transform:c.v?"translateY(0)":"translateY(30px)",transition:`opacity 0.5s ${0.1+i*0.1}s ease,transform 0.5s ${0.1+i*0.1}s ease`}}>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4"><f.icon className="w-6 h-6 text-orange-500"/></div>
                <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200" style={{opacity:c.v?1:0,transition:"opacity 0.7s 0.4s ease"}}>
            <h3 className="text-xl font-bold text-slate-900 mb-5">Club Formation Guidelines</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Minimum 20 active student members","Faculty advisor from engineering department","Submit application via IAAA portal","Attend orientation workshop","Maintain annual activity log","Renew affiliation each academic year"].map((g,i)=>(
                <div key={i} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span><span className="text-sm text-slate-600">{g}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={r.ref} className="grid lg:grid-cols-2 gap-16 items-center">
          <div style={{opacity:r.v?1:0,transform:r.v?"translateX(0)":"translateX(-40px)",transition:"opacity 0.8s ease,transform 0.8s ease"}}>
            <h2 className="text-4xl font-black text-white mb-5">IAAA <span className="text-orange-400">Regional Hubs</span></h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">Regional hubs act as IAAA's operational arm across states, coordinating events, training, and institutional partnerships in their zones.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors">Start a Regional Hub<ArrowRight className="w-4 h-4"/></Link>
          </div>
          <div style={{opacity:r.v?1:0,transform:r.v?"translateX(0)":"translateX(40px)",transition:"opacity 0.8s 0.2s ease,transform 0.8s 0.2s ease"}}>
            <div className="space-y-3">
              {regionalPrivileges.map((p,i)=>(
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/10 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"/>
                  <span className="text-white/80 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={v.ref}>
          <div className="text-center mx-auto mb-14" style={{opacity:v.v?1:0,transform:v.v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full mb-5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500"/><span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Schools Program</span></div>
            <h2 className="text-4xl font-black text-slate-900 mb-4"><span className="text-amber-600">VAAYU</span> Schools Club</h2>
            <p className="text-slate-500 text-lg leading-relaxed">A structured aerospace education program for school students (Class 8–12), introducing them to aviation science and careers through hands-on activities.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vaayuPrograms.map((p,i)=>(
              <div key={p.title} className={`${p.bg} border rounded-2xl p-6 hover:shadow-md hover:-translate-y-1 transition-all`} style={{opacity:v.v?1:0,transform:v.v?"translateY(0)":"translateY(30px)",transition:`opacity 0.5s ${0.1+i*0.1}s ease,transform 0.5s ${0.1+i*0.1}s ease`}}>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4"><p.icon className={`w-6 h-6 ${p.color}`}/></div>
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-linear-to-r from-orange-500 to-amber-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px)",backgroundSize:"50px 50px"}}/>
      <div ref={cta.ref} className="relative z-10 mx-auto px-4 text-center" style={{opacity:cta.v?1:0,transform:cta.v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
        <h2 className="text-4xl font-black text-white mb-4">Start an IAAA Club at Your Institution</h2>
        <p className="text-white/80 text-lg mb-8">Join the growing network of IAAA-affiliated clubs driving aerospace education across India.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-orange-600 rounded-full font-bold text-sm hover:bg-orange-50 transition-colors shadow-xl">Apply Now<ArrowRight className="w-4 h-4"/></Link>
          <Link href="/membership" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white text-white rounded-full font-bold text-sm hover:bg-white/10 transition-colors">View Membership</Link>
        </div>
      </div>
    </section>
  </>
)}
