'use client'
import { Menu, X } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/announcement", label: "Announcements" },
  { href: "/third-party", label: "Partners" },
  { href: "/about", label: "About Us" },
  { href: "/contacts", label: "Contact Us" },
  { href: "https://practice.dimension-ph.com", label: "ACE Practice", external: true },
]

const NAV_LINK_CLASS = "text-gray-600 hover:text-green-700 font-medium"
const CTA_CLASS =
  "inline-flex items-center justify-center bg-gradient-to-tr from-green-700 to-lime-400 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition duration-300"

/** Renders an internal route with next/link, or an external host with a plain
 *  anchor (next/link cannot client-side route across origins). */
function NavItem({ href, label, external, onNavigate }: { href: string; label: string; external?: boolean; onNavigate?: () => void }) {
  if (external) {
    return (
      <a href={href} className={NAV_LINK_CLASS} target="_blank" rel="noopener noreferrer" onClick={onNavigate}>
        {label}
      </a>
    )
  }
  return (
    <Link href={href} className={NAV_LINK_CLASS} onClick={onNavigate}>
      {label}
    </Link>
  )
}

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 left-0 z-99">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo links home. Rendered as a <span>, not <h1>, so each page keeps
            exactly one <h1> — its own page title. */}
        <Link href="/" className="flex items-center" onClick={closeMenu} aria-label="Dimension-PH home">
          <Image src={"/Dimension-PH.png"} alt="Dimension-PH logo" height={50} width={50} priority />
          <span className="text-3xl font-bold bg-gradient-to-tr from-green-700 to-lime-400 bg-clip-text text-transparent">Dimension-PH</span>
        </Link>

        {/* space-x-6 rather than space-x-8: a 6th item overflows at exactly 1024px. */}
        <nav className="hidden lg:flex space-x-6">
          {NAV_LINKS.map((l) => (
            <NavItem key={l.href} {...l} />
          ))}
        </nav>

        <div className="lg:hidden">
          <button
            type="button"
            className="text-gray-600 focus:outline-none"
            onClick={() => setOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden lg:block">
          <Link href="/apply" className={CTA_CLASS}>Apply Now</Link>
        </div>
      </div>

      {
        isOpen &&

        <nav id="mobile-menu" className="flex flex-col lg:hidden items-center text-lg space-y-4 pb-4">
          {NAV_LINKS.map((l) => (
            <NavItem key={l.href} {...l} onNavigate={closeMenu} />
          ))}
          {/* The Apply CTA was previously desktop-only, leaving mobile visitors
              with no way to apply from the header. */}
          <Link href="/apply" onClick={closeMenu} className={CTA_CLASS}>Apply Now</Link>
        </nav>
      }
    </header>
  )
}
