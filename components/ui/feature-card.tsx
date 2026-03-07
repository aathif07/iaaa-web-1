"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
  color?: "blue" | "teal" | "purple" | "orange"
  href?: string
}

const colorStyles = {
  blue: "from-blue-50 to-blue-100/50 text-blue-500 hover:from-blue-100 hover:to-blue-200/60",
  teal: "from-teal-50 to-teal-100/50 text-teal-600 hover:from-teal-100 hover:to-teal-200/60",
  purple: "from-purple-50 to-purple-100/50 text-purple-600 hover:from-purple-100 hover:to-purple-200/60",
  orange: "from-orange-50 to-orange-100/50 text-orange-600 hover:from-orange-100 hover:to-orange-200/60",
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  color = "blue",
  href,
}: FeatureCardProps) {
  const Wrapper = href ? "a" : "div"

  return (
    <Wrapper
      href={href}
      className={cn(
        "group block rounded-2xl p-6 transition-all duration-300",
        "border border-slate-200 hover:border-slate-300",
        "bg-white hover:bg-slate-50",
        "hover:shadow-lg hover:scale-105",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Icon Container */}
      <div className={cn(
        "w-14 h-14 rounded-xl mb-4 flex items-center justify-center text-xl",
        "bg-gradient-to-br transition-all duration-300",
        colorStyles[color]
      )}>
        {icon}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-950">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Arrow indicator for links */}
      {href && (
        <div className="mt-4 pt-4 border-t border-slate-200 flex items-center text-sm font-medium text-blue-500 group-hover:translate-x-1 transition-transform">
          Learn more →
        </div>
      )}
    </Wrapper>
  )
}
