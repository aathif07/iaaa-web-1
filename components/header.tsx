"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/ptdc" },
  { name: "Membership", href: "/membership" },
  { name: "Clubs & Hubs", href: "/clubs" },
  { name: "Startup Forum", href: "/startup-forum" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Announcements", href: "/announcements" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-blue-500/95 backdrop-blur-md shadow-lg rounded-3xl mx-4 mt-4 border border-blue-400/20"
          : "bg-blue-500 backdrop-blur-sm rounded-3xl mx-4 mt-4 border border-blue-400/20"
      )}
    >
      <nav className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-14 h-14">
              <Image src="/logo.png" alt="IAAA Logo" fill className="object-contain" priority />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">IAAA</span>
              <span className="hidden md:inline text-sm text-blue-100 ml-1">India</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center gap-1 xl:gap-8 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-1 whitespace-nowrap",
                  isActive(item.href)
                    ? "text-white bg-blue-500"
                    : "text-blue-100 hover:text-white hover:bg-blue-500"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild size="sm" className="bg-white text-blue-500 hover:bg-blue-50 font-semibold">
              <Link href="/membership">Join IAAA</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg hover:bg-blue-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white border border-blue-200 shadow-lg transition-all duration-300 overflow-hidden mt-2 rounded-2xl",
          mobileMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-blue-100 text-blue-500"
                  : "text-gray-700 hover:bg-blue-50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 mt-3 border-t border-blue-200">
            <Button asChild className="w-full bg-blue-500 text-white hover:bg-blue-500">
              <Link href="/membership" onClick={() => setMobileMenuOpen(false)}>Join IAAA</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
