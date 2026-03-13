"use client"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, MapPin, Users, Trophy, ArrowRight, Clock, Building2, Plane, Rocket, GraduationCap, ChevronRight, Tag } from "lucide-react"

function useVisible(t=0.12){const ref=useRef<HTMLDivElement>(null);const [v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});obs.observe(el);return()=>obs.disconnect();},[t]);return{ref,v};}

const typeBadge:Record<string,string>={Competition:"bg-amber-100 text-amber-700","Career Fair":"bg-teal-100 text-teal-700",Admissions:"bg-blue-100 text-blue-700",Workshop:"bg-violet-100 text-violet-700",Conference:"bg-rose-100 text-rose-700",Launch:"bg-emerald-100 text-emerald-700",Training:"bg-orange-100 text-orange-700"}

const upcomingEvents=[
  {title:"IAAA National Innovation Challenge 2026",date:"March 15–17, 2026",location:"Chennai, Tamil Nadu",type:"Competition",description:"Annual innovation challenge for student teams across India to showcase aerospace innovations.",featured:true},
  {title:"Aerospace Career Fair 2026",date:"April 10, 2026",location:"Bengaluru, Karnataka",type:"Career Fair",description:"Connect with leading aerospace companies and explore career opportunities.",featured:false},
  {title:"PTDC Admission Drive — Summer 2026",date:"May 1–15, 2026",location:"Pan India (Online + Regional Hubs)",type:"Admissions",description:"Summer admissions open for PTDC diploma and training programs.",featured:false},
  {title:"Drone Tech Workshop",date:"June 8–9, 2026",location:"Hyderabad, Telangana",type:"Workshop",description:"Hands-on workshop on drone design, assembly, and flight operations.",featured:false},
]

const pastEvents=[
  {title:"IAAA Annual Conference 2025",date:"December 2025",location:"New Delhi",type:"Conference",attendees:"500+"},
  {title:"VAAYU Club Launch at Velammal Bodhi Campus",date:"January 2026",location:"Tamil Nadu",type:"Launch",attendees:"200+"},
  {title:"Indian Aerospace Startup Forum Launch",date:"December 2024",location:"Chennai",type:"Launch",attendees:"300+"},
  {title:"NDT Certification Drive 2025",date:"October 2025",location:"Pan India",type:"Training",attendees:"1000+"},
]

const eventTypes=[
  {icon:Trophy,title:"Competitions",desc:"National innovation challenges and hackathons",bg:"bg-amber-50",color:"text-amber-600"},
  {icon:GraduationCap,title:"Workshops",desc:"Hands-on training and skill development",bg:"bg-violet-50",color:"text-violet-600"},
  {icon:Building2,title:"Conferences",desc:"Industry conferences and technical talks",bg:"bg-rose-50",color:"text-rose-600"},
  {icon:Plane,title:"Career Fairs",desc:"Connect with aerospace companies",bg:"bg-teal-50",color:"text-teal-600"},
]

export default function EventsPage(){
  const h=useVisible();const t=useVisible();const u=useVisible();const pa=useVisible();
  return(
  <>
    <section className="relative min-h-[380px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"/>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full -translate-y-1/3 translate-x-1/3"/>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">Competitions, Workshops<br/><span className="text-amber-400">&amp; Conferences</span></h1>
        <p className="text-lg text-white/70 max-w-xl">Career opportunities and aviation innovation across India</p>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={t.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {eventTypes.map((et,i)=>(
            <div key={et.title} className={`${et.bg} rounded-2xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all`} style={{opacity:t.v?1:0,transform:t.v?"translateY(0)":"translateY(30px)",transition:`opacity 0.5s ${0.1+i*0.1}s ease,transform 0.5s ${0.1+i*0.1}s ease`}}>
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4"><et.icon className={`w-7 h-7 ${et.color}`}/></div>
              <h3 className="font-bold text-slate-900 mb-2">{et.title}</h3>
              <p className="text-sm text-slate-500">{et.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={u.ref} className="flex items-end justify-between mb-12" style={{opacity:u.v?1:0,transform:u.v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full mb-4"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"/><span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Upcoming</span></div>
            <h2 className="text-4xl font-black text-slate-900">Upcoming <span className="text-amber-600">Events</span></h2>
          </div>
        </div>
        <div className="space-y-5">
          {upcomingEvents.map((ev,i)=>(
            <div key={ev.title} className={`bg-white rounded-2xl p-6 md:p-8 border hover:shadow-lg transition-all group ${ev.featured?"border-amber-200 shadow-md":"border-slate-100"}`} style={{opacity:u.v?1:0,transform:u.v?"translateY(0)":"translateY(20px)",transition:`opacity 0.5s ${0.1+i*0.1}s ease,transform 0.5s ${0.1+i*0.1}s ease`}}>
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${typeBadge[ev.type]||"bg-slate-100 text-slate-600"}`}>{ev.type}</span>
                    {ev.featured&&<span className="text-xs font-bold text-amber-600 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"/>Featured Event</span>}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">{ev.title}</h3>
                  <p className="text-slate-500 mb-4 text-sm leading-relaxed">{ev.description}</p>
                  <div className="flex flex-wrap gap-5 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-500"/>{ev.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-500"/>{ev.location}</span>
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-amber-500 text-white rounded-full font-semibold text-sm hover:bg-amber-600 transition-colors flex-shrink-0">Learn More<ArrowRight className="w-4 h-4"/></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={pa.ref} className="text-center mx-auto mb-12" style={{opacity:pa.v?1:0,transform:pa.v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full mb-5"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"/><span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Archive</span></div>
          <h2 className="text-4xl font-black text-slate-900">Past <span className="text-slate-600">Events</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pastEvents.map((ev,i)=>(
            <div key={ev.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-amber-200 hover:shadow-md transition-all" style={{opacity:pa.v?1:0,transform:pa.v?"translateY(0)":"translateY(30px)",transition:`opacity 0.5s ${0.1+i*0.1}s ease,transform 0.5s ${0.1+i*0.1}s ease`}}>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${typeBadge[ev.type]||"bg-slate-100 text-slate-600"}`}>{ev.type}</span>
              <h3 className="font-bold text-slate-900 mt-4 mb-3 text-sm leading-snug">{ev.title}</h3>
              <div className="space-y-1.5 text-xs text-slate-400">
                <p className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5"/>{ev.date}</p>
                <p className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5"/>{ev.location}</p>
                <p className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5"/>{ev.attendees} Attendees</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10"><Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-600 rounded-full font-semibold text-sm hover:border-amber-400 hover:text-amber-600 transition-colors">View Event Gallery<ArrowRight className="w-4 h-4"/></Link></div>
      </div>
    </section>

  </>
)}
