"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Youtube, Facebook, MapPin, Mail, Phone, Globe, ArrowRight } from "lucide-react"

const footerLinks = {
  programs: [
    { label: "PTDC Overview", href: "/ptdc" },
    { label: "B.S. Program (IIT Madras)", href: "/ptdc#courses" },
    { label: "Aircraft Maintenance", href: "/ptdc#courses" },
    { label: "Drone Architecture", href: "/ptdc#courses" },
    { label: "NDT Certification", href: "/ptdc#courses" },
  ],
  membership: [
    { label: "Student Membership", href: "/membership#student" },
    { label: "Professional Membership", href: "/membership#professional" },
    { label: "Institutional Membership", href: "/membership#institutional" },
    { label: "Collegiate Clubs", href: "/clubs#collegiate" },
    { label: "Regional Hubs", href: "/clubs#hubs" },
  ],
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Startup Forum", href: "/startup-forum" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Announcements", href: "/announcements" },
  ],
  organization: [
    { label: "Accreditation", href: "/accreditation" },
    { label: "Collaborations", href: "/collaborations" },
    { label: "Contact Us", href: "/contact" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/iaaa-india/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/iaaa_india/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@iaaaindia", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/iaaaindia/", label: "Facebook" },
]

const contactInfo = [
  { icon: MapPin, label: "Address", text: "2nd Floor, PD Trade Center, Y-215, Anna Nagar, Chennai 600037" },
  { icon: Mail, label: "Email", text: "admin@iaaaindia.com" },
  { icon: Phone, label: "Phone", text: "+91 9003031454, 9600625741" },
  { icon: Globe, label: "Website", text: "www.iaaaindia.com" },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Top gradient accent */}
      <div className="h-1 bg-linear-to-r from-blue-500 via-blue-400 to-blue-600" />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 sm:pb-10">

        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12 lg:mb-14">

          {/* Brand column */}
          <div className="lg:col-span-4">
            {/* Logo — same as header */}
            <Link href="/" className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group">
              <div className="relative w-24 sm:w-28 h-24 sm:h-28 shrink-0">
                <Image
                  src="/logo.png"
                  alt="IAAA Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering India&apos;s Aerospace Community — From School to Sky. India&apos;s premier institute for aerospace education, training, and research.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>

            {/* Accreditation badges */}
            <div>
              <p className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wider">Accredited by</p>
              <div className="flex flex-wrap gap-2">
                {["CTDS TN", "NSDC"].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs font-semibold text-blue-300 hover:border-blue-500 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Programs */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-3 h-0.5 bg-blue-500 rounded-full" />
                Programs
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.programs.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Membership */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-3 h-0.5 bg-blue-400 rounded-full" />
                Membership
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.membership.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick + Organization */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-3 h-0.5 bg-blue-500 rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-2.5 mb-6">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-3 h-0.5 bg-blue-400 rounded-full" />
                Organization
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.organization.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-blue-500 rounded-full" />
              Contact Us
            </h4>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-0.5">{item.label}</p>
                    <p className="text-sm text-slate-300 leading-snug">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-800 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © 2026 Institute of Aeronautics, Astronautics and Aviation (IAAA). All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link href="/contact" className="text-slate-500 hover:text-white transition-colors font-medium">Contact</Link>
            <span className="w-px h-3 bg-slate-700" />
            <Link href="/accreditation" className="text-slate-500 hover:text-white transition-colors font-medium">Accreditation</Link>
            <span className="w-px h-3 bg-slate-700" />
            <a href="#" className="text-slate-500 hover:text-white transition-colors font-medium">Privacy Policy</a>
          </div>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="h-1 bg-linear-to-r from-blue-600 via-blue-400 to-blue-600" />
    </footer>
  )
}
