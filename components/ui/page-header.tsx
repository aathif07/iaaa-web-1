"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  title: string
  tagline?: string
  breadcrumbs?: BreadcrumbItem[]
  className?: string
}

export function PageHeader({
  title,
  tagline,
  breadcrumbs,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden",
        className
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-dots text-background/10 pointer-events-none" />
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-6">
            <Link href="/" className="hover:text-primary-foreground transition-colors">
              Home
            </Link>
            {breadcrumbs.map((item, index) => (
              <span key={item.label} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance max-w-4xl">
          {title}
        </h1>

        {/* Tagline */}
        {tagline && (
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            {tagline}
          </p>
        )}
      </div>
    </div>
  )
}
