"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
	{
		section: "Organization",
		items: [
			{ name: "About", href: "/about" },
			{ name: "Contact", href: "/contact" },
		],
	},
	{
		section: "Community",
		items: [
			{ name: "Programs", href: "/ptdc" },
			{ name: "Membership", href: "/membership" },
			{ name: "Clubs & Hubs", href: "/clubs" },
			{ name: "Startup Forum", href: "/startup-forum" },
		],
	},
	{
		section: "Updates",
		items: [
			{ name: "Events", href: "/events" },
			{ name: "Gallery", href: "/gallery" },
			{ name: "Announcements", href: "/announcements" },
		],
	},
]

export function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [openDropdowns, setOpenDropdowns] = useState<string | null>(null)
	const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null)
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const pathname = usePathname()

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setIsVisible(false)
			} else {
				setIsVisible(true)
			}
			setLastScrollY(currentScrollY)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [lastScrollY])

	const isActive = (href: string) => {
		if (href === "/") return pathname === "/"
		return pathname.startsWith(href)
	}

	const toggleDropdown = (section: string) => {
		setOpenDropdowns(openDropdowns === section ? null : section)
	}

	const toggleMobileSection = (section: string) => {
		setExpandedMobileSection(expandedMobileSection === section ? null : section)
	}

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isVisible ? "translate-y-0" : "-translate-y-full",
      "bg-transparent"
    )}>			<nav className="mx-auto w-full px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
					{/* Logo - Left Side */}
					<Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
						<div className="relative w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14">
							<Image src="/logo.png" alt="IAAA Logo" fill className="object-contain" priority />
						</div>
						<div className="hidden sm:block">
							<span className="text-lg sm:text-xl font-bold text-white">IAAA</span>
							<span className="hidden md:inline text-xs sm:text-sm text-white/70 ml-1">India</span>
						</div>
					</Link>

					{/* Desktop Navigation - 3 Sections with Dropdowns (Center) */}
					<div className="hidden lg:flex items-center gap-8">
						{navigation.map((section) => (
							<div key={section.section} className="relative group">
								<button
									onClick={() => toggleDropdown(section.section)}
									className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-white hover:text-white/80 transition-colors"
								>
									{section.section}
									<ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
								</button>

								{/* Dropdown Menu */}
								<div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
									{section.items.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={cn(
												"block px-4 py-2.5 text-sm font-medium transition-colors",
												isActive(item.href)
													? "bg-white/20 text-gray-900"
													: "text-gray-700 hover:bg-white/10 hover:text-gray-900"
											)}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>

					{/* CTA Button - Right Side */}
					<div className="hidden lg:block">
						<Button asChild size="sm" className="bg-white text-gray-900 hover:bg-white/90 font-semibold">
							<Link href="/membership">Join IAAA</Link>
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						type="button"
						className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
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

			{/* Mobile Menu - 3 Sections with Dropdowns */}
			<div
				className={cn(
					"lg:hidden absolute top-full left-0 right-0 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300 overflow-hidden",
					mobileMenuOpen ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
				)}
			>
				<div className="px-4 py-4 space-y-2">
					{navigation.map((section) => (
						<div key={section.section}>
							<button
								onClick={() => toggleMobileSection(section.section)}
								className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10 transition-colors"
							>
								{section.section}
								<ChevronDown className={cn(
									"h-4 w-4 transition-transform",
									expandedMobileSection === section.section ? "rotate-180" : ""
								)} />
							</button>

							{/* Mobile Dropdown */}
							<div
								className={cn(
									"overflow-hidden transition-all duration-200",
									expandedMobileSection === section.section ? "max-h-96" : "max-h-0"
								)}
							>
								<div className="pl-4 space-y-1 py-2">
									{section.items.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={cn(
												"block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
												isActive(item.href)
													? "bg-white/20 text-white"
													: "text-white/80 hover:bg-white/10"
											)}
											onClick={() => setMobileMenuOpen(false)}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</div>
					))}

					<div className="pt-3 mt-3 border-t border-white/10">
						<Button asChild className="w-full bg-white text-gray-900 hover:bg-white/90">
							<Link href="/membership" onClick={() => setMobileMenuOpen(false)}>Join IAAA</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}
