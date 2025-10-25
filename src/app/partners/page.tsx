import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Partners | E.S.I. Collaborations & Sponsors',
  description: 'E.S.I. partners with leading organizations including Santa Cruz Works, UCSC Crown/CIED, InheritGuard Network, Tiger Leadership, and Premier Global Notary.',
}

const partners = [
  {
    name: "Santa Cruz Works",
    logo: "/api/placeholder/300/120",
    description: "Leading economic development organization fostering innovation and entrepreneurship in the Santa Cruz region. Provides workspace, mentorship, and networking opportunities for emerging startups.",
    partnership: "Workspace & Mentorship",
    website: "#",
    category: "Economic Development"
  },
  {
    name: "UCSC Crown College & CIED",
    logo: "/api/placeholder/300/120",
    description: "University of California Santa Cruz's Crown College and Center for Innovation and Entrepreneurial Development, supporting student entrepreneurship through academic programs and resources.",
    partnership: "UCSC & Academic Support",
    website: "#",
    category: "Higher Education"
  },
  {
    name: "StartUp Club UCSC",
    logo: "/api/placeholder/300/120",
    description: "Innovative UCSC Campus Club, which meets every Tuesday throughout the 2025- 2026 school year at UCSC. Brings expertise of UCSC Student Founders alongside community stakeholders in a collaborative space.",
    partnership: "Student Space",
    website: "#",
    category: "Academic Services"
  },
]

const partnershipBenefits = [
  {
    icon: "🤝",
    title: "Strategic Guidance",
    description: "Access to industry experts and strategic advisors from partner organizations"
  },
  {
    icon: "🛠️",
    title: "Resources & Tools",
    description: "Exclusive access to partner platforms, tools, and services at discounted rates"
  },
  {
    icon: "🌐",
    title: "Network Access",
    description: "Connect with partner networks, potential customers, and business opportunities"
  },
  {
    icon: "💡",
    title: "Domain Expertise",
    description: "Specialized knowledge in fintech, legal, education, and leadership development"
  }
]

export default function Partners() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            E.S.I. collaborates with leading organizations to provide our founders with comprehensive
            support, from workspace and mentorship to specialized expertise in fintech, legal, and leadership development.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Partnership Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-2xl border">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Showcase */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Partners</h2>
          <div className="space-y-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card rounded-2xl border p-8 hover:shadow-lg transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:text-center">
                    <div className="bg-background p-6 rounded-xl border mb-4 aspect-[5/2] flex items-center justify-center">
                      <div className="text-2xl font-bold text-primary">
                        {partner.name}
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                      {partner.category}
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold">{partner.name}</h3>
                      <div className="text-sm bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full">
                        {partner.partnership}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {partner.description}
                    </p>

                    <div className="flex gap-4">
                      <a
                        href={partner.website}
                        className="text-primary hover:underline font-medium"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos Strip */}
        <div className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-center mb-6">Trusted by Leading Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="bg-background p-4 rounded-lg border text-center">
                <div className="text-sm font-medium text-muted-foreground">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 p-8 rounded-2xl border">
          <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our ecosystem of innovation and help shape the next generation of student entrepreneurs.
            We're always looking for strategic partners who share our vision of democratizing entrepreneurship education.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 justify-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Mentorship Opportunities</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Brand Exposure</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Talent Pipeline</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Partner With Us
            </a>
            <a
              href="/program"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              Learn About E.S.I.
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
