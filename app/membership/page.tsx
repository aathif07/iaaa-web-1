"use client"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { User, Briefcase, Building, Check, ArrowRight, GraduationCap, Trophy, Rocket, FileCheck, Users, Award, ChevronRight, Star } from "lucide-react"
import { MembershipFormModal } from "@/components/membership-form-modal"

function useVisible(t=0.12){const ref=useRef<HTMLDivElement>(null);const [v,setV]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});obs.observe(el);return()=>obs.disconnect();},[t]);return{ref,v};}

const studentFeatures=["₹1,000 / year","4–10 certified courses per year","National contests & internships","Workshops and Training Programs","Official IAAA Certificate & Career Support","Access certified aerospace courses & innovation contests","Apply for internships and startup mentorship via IAAA networks","Compete in IAAA National Innovation Challenge","Annual certificate and national recognition"]
const professionalFeatures=["Volunteer membership (VIAAA)","Network with industry leaders","Mentor student members","Contribute to IAAA's educational and research initiatives","Professional recognition and certification","Event participation and speaking opportunities","Access to IAAA resources and publications"]
const institutionalFeatures=["Minimum 50 to 300 member organizations","Host IAAA Collegiate Clubs","Establish Regional Hubs or PTDC Centres","Enable aerospace programs and FDPs","National recognition for institution","Faculty development support","Access to industry partnerships"]

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
  const h=useVisible();const s=useVisible();const p=useVisible();const ins=useVisible();const special=useVisible();
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [professionalModalOpen, setProfessionalModalOpen] = useState(false);
  const [institutionalModalOpen, setInstitutionalModalOpen] = useState(false);

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
            <h2 className="text-4xl font-black text-slate-900 mb-3">ANNUAL MEMBERSHIP (PAID)</h2>
            <p className="text-slate-500 leading-relaxed mb-8">For aspiring aerospace professionals seeking structured learning, certifications, and networking opportunities in the aerospace ecosystem.</p>
            <button onClick={() => setStudentModalOpen(true)} className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">Join as Student Member<ArrowRight className="w-4 h-4"/></button>
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
            <h2 className="text-4xl font-black text-slate-900 mb-3">ANNUAL MEMBERSHIP (Unpaid Volunteer Based)</h2>
            <p className="text-slate-500 leading-relaxed mb-8">For practicing engineers, scientists, and professionals who wish to contribute to IAAA&apos;s educational and research initiatives. Network with industry leaders and mentor students.</p>
            <button onClick={() => setProfessionalModalOpen(true)} className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal-600 text-white rounded-full font-bold text-sm hover:bg-teal-700 transition-colors shadow-lg shadow-teal-200">Apply as Professional<ArrowRight className="w-4 h-4"/></button>
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
            <h2 className="text-4xl font-black text-slate-900 mb-3">COLLEGIATE / INDUSTRY ANNUAL CLUB MEMBERSHIP</h2>
            <p className="text-slate-500 leading-relaxed mb-8">For colleges, universities, and schools hosting IAAA Clubs, Regional Hubs, or PTDC Centres — enabling aerospace programs, FDPs, and national recognition. Minimum 50 to 300 member organizations.</p>
            <button onClick={() => setInstitutionalModalOpen(true)} className="inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 text-white rounded-full font-bold text-sm hover:bg-violet-700 transition-colors shadow-lg shadow-violet-200">Register Your Institution<ArrowRight className="w-4 h-4"/></button>
          </div>
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-8" style={{opacity:ins.v?1:0,transform:ins.v?"translateX(0)":"translateX(40px)",transition:"opacity 0.8s 0.15s ease,transform 0.8s 0.15s ease"}}>
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2"><Award className="w-5 h-5 text-violet-600"/>Institution Benefits</h3>
            <FeatureList items={institutionalFeatures} color="text-violet-600"/>
          </div>
        </div>
      </div>
    </section>

    {/* Special Programs Section */}
    <section id="special-programs" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={special.ref} style={{opacity:special.v?1:0,transform:special.v?"translateY(0)":"translateY(20px)",transition:"opacity 0.8s ease,transform 0.8s ease"}}>
          {/* Top Section - Title and Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">TWO PATHWAYS. ONE MISSION.</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Join our growing network of aerospace leaders across academic and professional spheres</p>
          </div>

          {/* Main Content - Image Left, Details Right */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-stretch">
              {/* Image Section - Left Side */}
              <div className="flex items-center justify-center">
                <img 
                  src="/iaaa fellow programs.png" 
                  alt="Special Programs - ISL and IGF Fellowships"
                  className="w-full h-full max-w-sm object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Details Section - Right Side */}
              <div className="flex flex-col gap-8">
                {/* ISLF Card */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                  <h3 className="text-2xl font-black text-blue-900 mb-2">ISLF</h3>
                  <p className="text-sm font-semibold text-blue-800 mb-4">IAAA STUDENT LEADER FELLOWSHIP</p>
                  <p className="text-xs text-blue-700 font-medium mb-4">For School & College Students</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm text-blue-800">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-600"/>
                      <span>Build & lead IAAA Student Chapters</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-800">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-600"/>
                      <span>Drive STEM & Aerospace Outreach</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-800">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-600"/>
                      <span>Organize Events, Workshops & Competitions</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-800">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-600"/>
                      <span>Develop Innovation & Startup Projects</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-blue-800">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-blue-600"/>
                      <span>Gain Leadership Experience & Official Recognition</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => window.open("https://forms.zohopublic.com/karthickthiyagarajan55gm1/form/ISLFRegistration/formperma/jnGdNb6c-JEv0CGhAUCIubkBXcEEs07q0_HWXX8YhLs", "_blank")}
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Apply Now
                  </button>
                </div>

                {/* IGF Card */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-600">
                  <h3 className="text-2xl font-black text-purple-900 mb-2">IGF</h3>
                  <p className="text-sm font-semibold text-purple-800 mb-4">IAAA GRADUATE FELLOWSHIP</p>
                  <p className="text-xs text-purple-700 font-medium mb-4">For Post-Graduate Professionals</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm text-purple-800">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600"/>
                      <span>Lead Professional Chapters & Initiatives</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-purple-800">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600"/>
                      <span>Mentorship, Research & Industry Exposure</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-purple-800">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600"/>
                      <span>Contribute to Policy, Research & Innovation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-purple-800">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600"/>
                      <span>Work on Advanced Projects & Publications</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-purple-800">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-purple-600"/>
                      <span>Expand Professional Network & Collaborations</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => window.open("https://forms.zohopublic.com/karthickthiyagarajan55gm1/form/IGFRegistration/formperma/iR2NRQRSMH1fLnrWop6vpx4MJpEbTOb68jyVvflMd1s", "_blank")}
                    className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-bold text-sm hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Modals */}
    <MembershipFormModal
      open={studentModalOpen}
      onOpenChange={setStudentModalOpen}
      title="Join as Student Member"
      description="Complete your application to join India's Largest Aerospace Network"
      formUrl="https://forms.zohopublic.com/karthickthiyagarajan55gm1/form/ISLFRegistration/formperma/jnGdNb6c-JEv0CGhAUCIubkBXcEEs07q0_HWXX8YhLs"
      noticeMessage="Please fill out the form below with your details to complete your membership application."
    />

    <MembershipFormModal
      open={professionalModalOpen}
      onOpenChange={setProfessionalModalOpen}
      title="Apply as Professional Member"
      description="Join our volunteer-based professional community"
      formUrl="https://forms.zohopublic.com/karthickthiyagarajan55gm1/form/IGFRegistration/formperma/iR2NRQRSMH1fLnrWop6vpx4MJpEbTOb68jyVvflMd1s"
      noticeMessage="Please fill out the form below to apply for professional membership."
    />

    <MembershipFormModal
      open={institutionalModalOpen}
      onOpenChange={setInstitutionalModalOpen}
      title="Register Your Institution"
      description="Host an IAAA Club, Regional Hub, or PTDC Centre"
      formUrl="https://forms.zohopublic.com/karthickthiyagarajan55gm1/form/IGFRegistration/formperma/iR2NRQRSMH1fLnrWop6vpx4MJpEbTOb68jyVvflMd1s"
      noticeMessage="Please provide your institution details to complete the registration."
    />

  </>
)}
