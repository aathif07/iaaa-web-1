"use client"

import { ReactNode } from "react"
import { useCountUp } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: number
  label: string
  icon?: ReactNode
  suffix?: string
  trend?: "up" | "down"
  trendValue?: string
  className?: string
}

export function StatCard({
  value,
  label,
  icon,
  suffix = "+",
  trend,
  trendValue,
  className,
}: StatCardProps) {
  const { ref, count } = useCountUp(value, 1500)

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        "border border-slate-200 hover:border-blue-300",
        "bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50",
        "hover:shadow-lg hover:scale-105 hover:translate-y-[-2px]",
        "group animate-fade-up",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
            {icon}
          </div>
        )}
        {trend && (
          <div className={cn(
            "text-sm font-semibold px-2 py-1 rounded-lg",
            trend === "up"
              ? "text-green-700 bg-green-50"
              : "text-red-700 bg-red-50"
          )}>
            {trend === "up" ? "↑" : "↓"} {trendValue || "0%"}
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="text-4xl md:text-5xl font-bold text-slate-900">
          {count}
          <span className="text-2xl text-blue-500 ml-1">{suffix}</span>
        </div>
        <p className="text-sm md:text-base text-slate-600 font-medium">{label}</p>
      </div>

      {/* Hover accent bar */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-teal-600 rounded-bl-2xl group-hover:w-full transition-all duration-300" />
    </div>
  )
}
