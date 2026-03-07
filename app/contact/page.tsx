"use client"
import React, { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { MapPin, Mail, Phone, Globe, Clock, Send, Linkedin, Instagram, Youtube, Facebook, ChevronRight, ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

function useVisible(t=0.12){const ref=useRef<HTMLDivElement>(null);const [v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});obs.observe(el);return()=>obs.disconnect();},[t]);return{ref,v};}

const contactInfo=[
  {icon:MapPin,label:"Address",value:"2nd Floor, PD Trade Center, Y-215, Anna Nagar, Chennai 600037"},
  {icon:Mail,label:"Email",value:"admin@iaaaindia.com",href:"mailto:admin@iaaaindia.com"},
  {icon:Phone,label:"Phone",value:"+91 9003031454 / 9600625741",href:"tel:+919003031454"},
  {icon:Globe,label:"Website",value:"www.iaaaindia.com",href:"https://www.iaaaindia.com"},
  {icon:Clock,label:"Office Hours",value:"Mon – Sat: 9:00 AM – 6:00 PM"},
]

const socialLinks=[
  {icon:Linkedin,href:"https://linkedin.com",label:"LinkedIn",color:"hover:bg-blue-600"},
  {icon:Instagram,href:"https://instagram.com",label:"Instagram",color:"hover:bg-pink-600"},
  {icon:Youtube,href:"https://youtube.com",label:"YouTube",color:"hover:bg-red-600"},
  {icon:Facebook,href:"https://facebook.com",label:"Facebook",color:"hover:bg-blue-700"},
]

const inquiryTypes=["General Inquiry","Student Membership","Institutional Membership","Collegiate Club Application","Regional Hub Application","PTDC Programs","Startup Forum","Partnership / Collaboration","Event Hosting","Media / Press"]

export default function ContactPage(){
  const f=useVisible();const i=useVisible();
  const [formData,setFormData]=useState({name:"",email:"",phone:"",inquiryType:"",message:""})
  const [status,setStatus]=useState<"idle"|"submitting"|"success"|"error">("idle")

  const handleSubmit=async(e:React.FormEvent)=>{
    e.preventDefault();setStatus("submitting")
    try{
      const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(formData)})
      if(res.ok){setStatus("success");setFormData({name:"",email:"",phone:"",inquiryType:"",message:""});setTimeout(()=>setStatus("idle"),6000)}
      else{setStatus("error");setTimeout(()=>setStatus("idle"),6000)}
    }catch{setStatus("error");setTimeout(()=>setStatus("idle"),6000)}
  }

  return(
  <>
    <section className="relative min-h-[320px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"/>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full -translate-y-1/3 translate-x-1/3"/>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">Contact <span className="text-blue-400">IAAA</span></h1>
        <p className="text-lg text-white/70 max-w-xl">Reach out to us for membership, partnerships, programs, or any other inquiry.</p>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div ref={f.ref} className="lg:col-span-3" style={{opacity:f.v?1:0,transform:f.v?"translateX(0)":"translateX(-40px)",transition:"opacity 0.8s ease,transform 0.8s ease"}}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full mb-6"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"/><span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Send a Message</span></div>
            <h2 className="text-3xl font-black text-slate-900 mb-8">How Can We Help?</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors placeholder:text-slate-400"/>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})} placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors placeholder:text-slate-400"/>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})} placeholder="+91 9999999999" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors placeholder:text-slate-400"/>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Inquiry Type *</label>
                  <select required value={formData.inquiryType} onChange={e=>setFormData({...formData,inquiryType:e.target.value})} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors">
                    <option value="">Select an option</option>
                    {inquiryTypes.map(t=><option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                <textarea required rows={5} value={formData.message} onChange={e=>setFormData({...formData,message:e.target.value})} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-colors resize-none placeholder:text-slate-400"/>
              </div>
              {status==="success"&&<div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"/><p className="text-sm text-green-800 font-medium">Message sent! We'll get back to you within 24 hours.</p></div>}
              {status==="error"&&<div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl"><AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"/><p className="text-sm text-red-800">Error sending message. Please try again or email us at <a href="mailto:admin@iaaaindia.com" className="font-semibold underline">admin@iaaaindia.com</a></p></div>}
              <button type="submit" disabled={status==="submitting"} className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-blue-200">
                <Send className="w-4 h-4"/>{status==="submitting"?"Sending…":"Send Message"}
              </button>
            </form>
          </div>

          <div ref={i.ref} className="lg:col-span-2" style={{opacity:i.v?1:0,transform:i.v?"translateX(0)":"translateX(40px)",transition:"opacity 0.8s 0.2s ease,transform 0.8s 0.2s ease"}}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full mb-6"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"/><span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Contact Info</span></div>
            <h2 className="text-3xl font-black text-slate-900 mb-7">Find Us</h2>
            <div className="space-y-3 mb-7">
              {contactInfo.map((c,idx)=>(
                <div key={c.label} className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-200 transition-colors" style={{opacity:i.v?1:0,transition:`opacity 0.4s ${0.3+idx*0.08}s ease`}}>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0"><c.icon className="w-5 h-5 text-blue-600"/></div>
                  <div><p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{c.label}</p>{c.href?<a href={c.href} className="text-slate-700 text-sm hover:text-blue-600 transition-colors">{c.value}</a>:<p className="text-slate-700 text-sm">{c.value}</p>}</div>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
              <p className="text-sm font-bold text-slate-900 mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map(s=>(
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 ${s.color} hover:text-white transition-all`}><s.icon className="w-5 h-5"/></a>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm" style={{height:"220px"}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0457398858397!2d80.2121!3d13.0878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzE2LjEiTiA4MMKwMTInNDMuNiJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="IAAA Office Location"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)}
