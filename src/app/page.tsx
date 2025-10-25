import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, ArrowRight, Users, Clock, DollarSign, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'E.S.I. | Remote Student Startup Incubator - Build, Launch, Grow',
  description: 'Remote student startup incubator—build, launch, and grow. E.S.I. is 100% remote with region-based meetups. Daily 7–9 PM PT. Join founders shipping real products.',
}

const highlights = [
  {
    icon: Users,
    stat: "30+",
    label: "Cohort 1 Founders",
    description: "Ambitious student entrepreneurs building the future"
  },
  {
    icon: Clock,
    stat: "7-9 PM PT",
    label: "Daily Sessions",
    description: "Consistent accountability and community support"
  },
  {
    icon: DollarSign,
    stat: "$100",
    label: "Startup Tool Credit",
    description: "Access to premium tools and services"
  },
  {
    icon: Calendar,
    stat: "September",
    label: "Cohort 2 Start",
    description: "Applications reviewed on rolling basis"
  }
]

const partners = [
  "Santa Cruz Works",
  "UCSC Crown/CIED",
  "InheritGuard Network",
  "Tiger Leadership",
  "Premier Global Notary"
]

const testimonials = [
  {
    name: "Braydon",
    project: "Echo Journal",
    quote: "E.S.I. transformed my journaling idea into a real AI-powered platform. The daily accountability and expert mentorship made all the difference."
  },
  {
    name: "Tyler",
    project: "Boba Vending Robotics",
    quote: "From concept to prototype in 60 days. E.S.I. helped me navigate the technical challenges and connect with the right advisors."
  },
  {
    name: "Jordyn",
    project: "AI Adaptive Sheet Music",
    quote: "The community at E.S.I. is incredible. Being surrounded by other passionate founders pushed me to achieve more than I thought possible."
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Remote student startup incubator—
              <span className="gradient-text">build, launch, and grow</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              E.S.I. is 100% remote with region-based meetups. Daily 7–9 PM PT.
              Join founders shipping real products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="https://forms.gle/K8eJKTutyrdXeJFM6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-bold text-lg flex items-center gap-2 group"
              >
                Apply Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex gap-3">
                <a
                  href="https://discord.gg/5RK2MYTSw3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-background text-foreground px-6 py-4 rounded-xl hover:bg-accent transition-colors font-medium flex items-center gap-2"
                >
                  Discord
                  <ExternalLink size={16} />
                </a>
                <a
                  href="https://www.instagram.com/foundersclubesi/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-background text-foreground px-6 py-4 rounded-xl hover:bg-accent transition-colors font-medium flex items-center gap-2"
                >
                  Instagram
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{highlight.stat}</div>
                    <div className="text-sm font-medium mb-1">{highlight.label}</div>
                    <div className="text-xs text-muted-foreground">{highlight.description}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose E.S.I.?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We've designed our program based on what actually works for student founders—
                accountability, expert guidance, and a supportive community.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Users size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Expert Mentorship</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Weekly 1:1s with industry veterans, successful founders, and technical experts
                  from companies like Red Bull, Y Combinator portfolio companies, and leading startups.
                </p>
                <Link href="/speakers" className="text-primary hover:underline font-medium">
                  Meet Our Mentors →
                </Link>
              </div>

              <div className="bg-card p-8 rounded-2xl border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Clock size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Daily Accountability</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Structured daily sessions from 7-9 PM PT ensure consistent progress.
                  100% remote format with regional meetups for the best of both worlds.
                </p>
                <Link href="/program" className="text-primary hover:underline font-medium">
                  View Program Structure →
                </Link>
              </div>

              <div className="bg-card p-8 rounded-2xl border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <DollarSign size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Real Resources</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  $100 in startup tool credits, access to premium platforms, and connections
                  to our partner network of accelerators and funding sources.
                </p>
                <Link href="/partners" className="text-primary hover:underline font-medium">
                  See Our Partners →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Founder Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                Real founders, real products, real results from our first cohort.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl border">
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-primary">{testimonial.project}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/founders"
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-xl hover:bg-secondary/80 transition-colors font-medium"
              >
                Meet All Our Founders
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-8">Trusted by Leading Organizations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center opacity-60">
              {partners.map((partner, index) => (
                <div key={index} className="bg-background p-4 rounded-lg border text-center">
                  <div className="text-sm font-medium text-muted-foreground">
                    {partner}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/partners"
                className="text-primary hover:underline font-medium"
              >
                View All Partners →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 p-12 rounded-2xl border">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Startup?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Cohort 2 starting September 2025. Transform your idea into reality with
              expert mentorship, daily accountability, and a community of ambitious founders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/K8eJKTutyrdXeJFM6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors font-bold text-lg"
              >
                Apply for Cohort 2
              </a>
              <Link
                href="/program"
                className="border border-border bg-background text-foreground px-8 py-4 rounded-xl hover:bg-accent transition-colors font-medium"
              >
                Learn More About Our Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
