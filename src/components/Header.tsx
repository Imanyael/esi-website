'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ExternalLink } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Program', href: '/program' },
  { name: 'Founders', href: '/founders' },
  { name: 'Speakers', href: '/speakers' },
  { name: 'Hackathons', href: '/hackathons' },
  { name: 'Partners', href: '/partners' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
]

const ctaLinks = [
  { name: 'Apply', href: 'https://forms.gle/K8eJKTutyrdXeJFM6', external: true, primary: true },
  { name: 'Discord', href: 'https://discord.gg/5RK2MYTSw3', external: true },
  { name: 'Instagram', href: 'https://www.instagram.com/foundersclubesi/?hl=en', external: true },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/entrepreneur-startup-incubator/', external: true },
]

interface HeaderProps {
  theme: 'theme1' | 'theme2'
  onThemeToggle: () => void
}

export default function Header({ theme, onThemeToggle }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ESI</span>
              </div>
              <span className="text-xl font-bold">E.S.I.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs and Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
              title="Toggle Theme"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {theme === 'theme1' ? (
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                ) : (
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                )}
              </div>
            </button>

            {/* CTA Links */}
            {ctaLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  link.primary
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border bg-background text-foreground hover:bg-accent'
                }`}
              >
                {link.name}
                {link.external && <ExternalLink size={14} />}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-4">
              {/* Navigation Links */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Divider */}
              <div className="border-t border-border my-4"></div>

              {/* Theme Toggle */}
              <div className="flex items-center justify-between py-2">
                <span className="font-medium">Theme</span>
                <button
                  onClick={onThemeToggle}
                  className="p-2 rounded-lg border border-border hover:bg-accent transition-colors"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {theme === 'theme1' ? (
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    ) : (
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                    )}
                  </div>
                </button>
              </div>

              {/* CTA Links */}
              <div className="space-y-3">
                {ctaLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors text-center ${
                      link.primary
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'border border-border bg-background text-foreground hover:bg-accent'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      {link.name}
                      {link.external && <ExternalLink size={14} />}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
