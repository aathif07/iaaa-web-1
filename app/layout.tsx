import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space' });

export const metadata: Metadata = {
  title: 'IAAA | Institute of Aeronautics, Astronautics and Aviation',
  description: 'A national non-profit professional body shaping India\'s aerospace and aviation ecosystem. Building India\'s next generation of aerospace leaders through education, innovation, and collaboration.',
  generator: 'iaaaindia.com',
  icons: {
    icon: [
      { url: '/favicon-v2.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-v2.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon-v2.png',
    apple: '/favicon-v2.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
