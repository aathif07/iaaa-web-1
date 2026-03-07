"use client"

import { ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company?: string
  image?: string
  rating?: number
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-8 transition-all duration-300",
        "border border-slate-200 hover:border-blue-300",
        "bg-gradient-to-br from-white to-slate-50",
        "hover:shadow-lg hover:scale-105 hover:translate-y-[-2px]",
        "group animate-fade-up",
        className
      )}
    >
      {/* Rating Stars */}
      {rating > 0 && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-lg text-amber-400">★</span>
          ))}
        </div>
      )}

      {/* Quote */}
      <p className="text-slate-700 leading-relaxed mb-6 italic text-lg">
        "{quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {image && (
          <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-2 border-blue-200">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="min-w-0">
          <p className="font-semibold text-slate-900">{author}</p>
          <p className="text-sm text-slate-500">
            {role}
            {company && ` at ${company}`}
          </p>
        </div>
      </div>
    </div>
  )
}
