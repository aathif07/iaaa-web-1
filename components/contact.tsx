"use client"

import React from "react"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Send, CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "2nd Floor, PD Trade Center, Anna Nagar, Chennai 600037"
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "admin@iaaaindia.com",
    href: "mailto:admin@iaaaindia.com"
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9003031454",
    href: "tel:+919003031454"
  }
]

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Facebook", href: "#" }
]

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setTimeout(() => setFormState('success'), 1500)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Blue pattern background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-accent/[0.04]" />
      <div className="absolute inset-0 bg-pattern-grid text-primary/[0.015]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">Contact</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground">
            Questions about membership, programs, or partnerships? We&apos;re here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className={`lg:col-span-2 transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="space-y-4 mb-8">
              {contactDetails.map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-medium text-foreground mb-0.5">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-muted-foreground">{item.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <span className="block text-sm font-medium text-foreground mb-3">Follow Us</span>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {social.label}
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              {formState === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground mb-4">We&apos;ll get back to you soon.</p>
                  <Button onClick={() => setFormState('idle')} variant="outline" className="h-10 rounded-lg bg-transparent">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Send us a Message</h3>
                    <p className="text-sm text-muted-foreground">We&apos;ll respond within 24 hours.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                      <Input id="name" required placeholder="Your name" className="h-10 rounded-lg" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                      <Input id="email" type="email" required placeholder="you@example.com" className="h-10 rounded-lg" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                    <Input id="subject" required placeholder="How can we help?" className="h-10 rounded-lg" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <Textarea id="message" required rows={4} placeholder="Your message..." className="rounded-lg resize-none" />
                  </div>

                  <Button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-11 rounded-lg disabled:opacity-70"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
