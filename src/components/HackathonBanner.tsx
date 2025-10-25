'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function HackathonBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-white/10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="text-2xl">🏆</div>
            <div className="flex-1">
              <div className="font-bold text-lg mb-1">
                Winners of the Y Combinator AI Hackathon!
              </div>
              <div className="text-sm opacity-90">
                E.S.I. founders took first place on August 9, 2025 with FitForm Fitness
              </div>
            </div>
            <Link
              href="/hackathons"
              className="hidden sm:block bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors font-medium backdrop-blur-sm"
            >
              See Our Wins →
            </Link>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-3">
          <Link
            href="/hackathons"
            className="block text-center bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors font-medium backdrop-blur-sm"
          >
            See Our Wins →
          </Link>
        </div>
      </div>
    </div>
  )
}
