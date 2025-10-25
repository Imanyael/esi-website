import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const navigation = {
  program: [
    { name: 'About E.S.I.', href: '/about' },
    { name: 'Program Structure', href: '/program' },
    { name: 'Our Founders', href: '/founders' },
    { name: 'Expert Speakers', href: '/speakers' },
  ],
  community: [
    { name: 'Hackathon Wins', href: '/hackathons' },
    { name: 'Our Partners', href: '/partners' },
    { name: 'Resources & Updates', href: '/resources' },
    { name: 'Contact Us', href: '/contact' },
  ],
  apply: [
    { name: 'Apply to Program', href: 'https://forms.gle/K8eJKTutyrdXeJFM6', external: true },
    { name: 'Join Discord', href: 'https://discord.gg/5RK2MYTSw3', external: true },
    { name: 'Follow Instagram', href: 'https://www.instagram.com/foundersclubesi/?hl=en', external: true },
    { name: 'LinkedIn Company', href: 'https://www.linkedin.com/company/entrepreneur-startup-incubator/', external: true },
  ],
}

const stats = [
  { label: 'Cohort 1 Founders', value: '30+' },
  { label: 'Daily Sessions', value: '7-9 PM PT' },
  { label: 'Tool Credit', value: '$100' },
  { label: 'Next Cohort', value: 'September' },
]

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">ESI</span>
              </div>
              <span className="text-xl font-bold">E.S.I.</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Remote student startup incubator helping founders build, launch, and grow
              their ventures through intensive mentorship and community support.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-background rounded-lg border">
                  <div className="font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Program</h3>
              <ul className="space-y-3">
                {navigation.program.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-3">
                {navigation.community.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTAs and Social */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">Get Started</h3>
            <ul className="space-y-3 mb-6">
              {navigation.apply.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    {link.name}
                    {link.external && <ExternalLink size={14} />}
                  </a>
                </li>
              ))}
            </ul>

            {/* Primary CTA */}
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium mb-4"
            >
              Apply to Cohort 2
            </a>

            <p className="text-xs text-muted-foreground text-center">
              Applications reviewed on rolling basis
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Entrepreneur & Startup Incubator (E.S.I.). All rights reserved.
            </div>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <a
                href="https://discord.gg/5RK2MYTSw3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Discord
              </a>
              <a
                href="https://www.instagram.com/foundersclubesi/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
