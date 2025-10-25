import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Page Not Found | E.S.I.',
  description: 'The page you\'re looking for doesn\'t exist. Navigate back to E.S.I. to explore our student startup incubator program.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="text-8xl mb-4">🚀</div>
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Houston, we have a problem!</h2>
          <p className="text-muted-foreground text-lg mb-8">
            The page you're looking for seems to have drifted off into the startup stratosphere.
            Don't worry though – we'll help you get back on course to building your next big idea.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-card p-6 rounded-2xl border">
            <h3 className="font-semibold mb-2">Looking for our program?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Check out our 60-day remote startup accelerator
            </p>
            <Link
              href="/program"
              className="text-primary hover:underline font-medium"
            >
              View Program →
            </Link>
          </div>

          <div className="bg-card p-6 rounded-2xl border">
            <h3 className="font-semibold mb-2">Want to apply?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Join Cohort 2 starting September 2025
            </p>
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Apply Now →
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              About
            </Link>
            <Link
              href="/founders"
              className="px-4 py-2 border border-border bg-background text-foreground rounded-lg hover:bg-accent transition-colors"
            >
              Founders
            </Link>
            <Link
              href="/speakers"
              className="px-4 py-2 border border-border bg-background text-foreground rounded-lg hover:bg-accent transition-colors"
            >
              Speakers
            </Link>
            <Link
              href="/hackathons"
              className="px-4 py-2 border border-border bg-background text-foreground rounded-lg hover:bg-accent transition-colors"
            >
              Hackathons
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 border border-border bg-background text-foreground rounded-lg hover:bg-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Still can't find what you're looking for?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://discord.gg/5RK2MYTSw3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ask on Discord
            </a>
            <Link
              href="/contact"
              className="text-primary hover:underline"
            >
              Contact Us
            </Link>
            <a
              href="https://www.instagram.com/foundersclubesi/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
