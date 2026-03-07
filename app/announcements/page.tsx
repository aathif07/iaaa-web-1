"use client"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Bell, Calendar, Megaphone, FileText, ArrowRight, ChevronRight, ExternalLink, Clock, Sparkles } from "lucide-react"

function useVisible(t=0.12){const ref=useRef<HTMLDivElement>(null);const [v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});obs.observe(el);return()=>obs.disconnect();},[t]);return{ref,v};}

const typeBadge:Record<string,string>={"New Launch":"bg-emerald-100 text-emerald-700","Admissions":"bg-blue-100 text-blue-700","Applications":"bg-violet-100 text-violet-700","Event":"bg-amber-100 text-amber-700"}
const typeAccent:Record<string,string>={"New Launch":"border-l-emerald-500","Admissions":"border-l-blue-500","Applications":"border-l-violet-500","Event":"border-l-amber-500"}

const announcements=[
  {id:1,title:"Launch of IAAA-VAAYU Club at Velammal Bodhi Campus",date:"January 2026",type:"New Launch",icon:Megaphone,description:"We are excited to announce the launch of IAAA-VAAYU Club at Velammal Bodhi Campus - Ology Tech, Tamil Nadu. This marks our first school-level aerospace club, bringing STEM and aerospace education to young minds.",featured:true},
  {id:2,title:"Admission Open: 2026 PTDC Diploma Programs",date:"Ongoing",type:"Admissions",icon:FileText,description:"Applications are now open for the 2026 batch of PTDC diploma programs including Aircraft Maintenance Technician, Drone Architecture, and NDT Specialization. Early bird discounts available.",featured:true},
  {id:3,title:"Collegiate Club Applications Invited (2026-2027 Cycle)",date:"Open Now",type:"Applications",icon:Bell,description:"Institutions interested in starting an IAAA Collegiate Club for the 2026-2027 academic cycle can now submit applications. Minimum 50 student members required.",featured:false},
  {id:4,title:"Regional Hub Applications Invited (2026-2027 Cycle)",date:"Open Now",type:"Applications",icon:Bell,description:"Existing Collegiate Clubs meeting the criteria can apply for Regional Hub status. Benefits include revenue sharing, consultancy roles, and regional event coordination.",featured:false},
  {id:5,title:"Launch of Indian Aerospace Startup Forum",date:"December 2024",type:"New Launch",icon:Megaphone,description:"IAAA is proud to announce the launch of the Indian Aerospace Startup Forum (IASF) — an initiative to identify, nurture, and accelerate aerospace innovations across India.",featured:false},
  {id:6,title:"IAAA National Innovation Challenge 2026 — Registration Open",date:"February 2026",type:"Event",icon:Calendar,description:"Registration is now open for the annual IAAA National Innovation Challenge 2026. Teams can register through their Collegiate Clubs or directly via the IAAA portal.",featured:false},
  {id:7,title:"NDT Level II Certification Program — Batch Starts March 2026",date:"January 2026",type:"Admissions",icon:FileText,description:"New batch for NDT Level II Certification (UT, RT, PT, MT, VT) starts in March 2026. Limited seats available with assured placement support.",featured:false},
]

export default function AnnouncementsPage(){
  const feat=useVisible();const list=useVisible();const news=useVisible();
  return(
  <>
    <section className="relative min-h-[320px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"/>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full -translate-y-1/3 translate-x-1/3"/>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">News &amp;<br/><span className="text-amber-400">Announcements</span></h1>
        <p className="text-lg text-white/70 max-w-xl">Stay updated with the latest from IAAA — launches, admissions, events, and more.</p>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={feat.ref} className="mb-4" style={{opacity:feat.v?1:0,transform:feat.v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full mb-8"><Sparkles className="w-3.5 h-3.5 text-amber-600"/><span className="text-sm font-semibold text-amber-700 uppercase tracking-wider">Featured</span></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {announcements.filter(a=>a.featured).map((ann,i)=>(
            <div key={ann.id} className={`bg-slate-50 border border-l-4 ${typeAccent[ann.type]||"border-l-slate-300"} border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all group`} style={{opacity:feat.v?1:0,transform:feat.v?"translateY(0)":"translateY(30px)",transition:`opacity 0.5s ${0.15+i*0.15}s ease,transform 0.5s ${0.15+i*0.15}s ease`}}>
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${typeBadge[ann.type]||"bg-slate-100 text-slate-600"}`}>{ann.type}</span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400"><Clock className="w-3.5 h-3.5"/>{ann.date}</span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-amber-600 transition-colors leading-snug">{ann.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">{ann.description}</p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">Learn More<ArrowRight className="w-4 h-4"/></Link>
            </div>
          ))}
        </div>

        <div ref={list.ref} style={{opacity:list.v?1:0,transform:list.v?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full"><Bell className="w-3.5 h-3.5 text-slate-500"/><span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">All Announcements</span></div>
          </div>
          <div className="space-y-4">
            {announcements.filter(a=>!a.featured).map((ann,i)=>(
              <div key={ann.id} className={`bg-white border border-l-4 ${typeAccent[ann.type]||"border-l-slate-300"} border-slate-100 rounded-2xl p-6 hover:shadow-md hover:border-slate-200 transition-all group`} style={{opacity:list.v?1:0,transform:list.v?"translateY(0)":"translateY(20px)",transition:`opacity 0.4s ${0.08+i*0.08}s ease,transform 0.4s ${0.08+i*0.08}s ease`}}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                    <ann.icon className="w-5 h-5 text-slate-500 group-hover:text-amber-500 transition-colors"/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${typeBadge[ann.type]||"bg-slate-100 text-slate-600"}`}>{ann.type}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-400"><Clock className="w-3 h-3"/>{ann.date}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-amber-600 transition-colors">{ann.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{ann.description}</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-amber-600 transition-colors flex-shrink-0 group-hover:text-amber-600"><ExternalLink className="w-4 h-4"/></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
      <div ref={news.ref} className="relative z-10 mx-auto px-4 text-center" style={{opacity:news.v?1:0,transform:news.v?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s ease,transform 0.7s ease"}}>
        <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center mx-auto mb-6"><Bell className="w-7 h-7 text-amber-400"/></div>
        <h2 className="text-4xl font-black text-white mb-3">Stay in the Loop</h2>
        <p className="text-white/60 text-lg mb-8">Get IAAA updates on admissions, events, and opportunities delivered to your inbox.</p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-amber-400 text-sm"/>
          <button className="px-5 py-3 bg-amber-500 text-white rounded-full font-bold text-sm hover:bg-amber-600 transition-colors flex-shrink-0">Subscribe</button>
        </div>
      </div>
    </section>
  </>
)}
