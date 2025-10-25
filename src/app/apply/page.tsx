import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply to E.S.I. | Join Our Student Startup Accelerator',
  description: 'Apply to join E.S.I. Cohort 2 starting September 2025. Remote student startup incubator with daily 7-9 PM PT sessions, expert mentors, and $100 tool credit.',
}

const applicationCriteria = [
  {
    title: "Student Status",
    description: "Currently enrolled as a student (high school, college, or graduate school) or recent graduate within 2 years",
    icon: "🎓"
  },
  {
    title: "Startup Idea or Project",
    description: "Have a startup idea you're passionate about or an existing project you want to scale and grow",
    icon: "💡"
  },
  {
    title: "Time Commitment",
    description: "Available for daily sessions 7-9 PM PT and weekend regional meetups throughout the 60-day program",
    icon: "⏰"
  },
  {
    title: "Growth Mindset",
    description: "Eager to learn, adapt, and receive feedback from mentors and peers in a collaborative environment",
    icon: "🚀"
  },
  {
    title: "Communication Skills",
    description: "Comfortable participating in English-language sessions and presenting your ideas to groups",
    icon: "🗣️"
  },
  {
    title: "Technical Interest",
    description: "Interest in building technology solutions, whether as a technical founder or business leader",
    icon: "💻"
  }
]

const expectations = [
  {
    category: "Program Commitment",
    items: [
      "Attend daily 7-9 PM PT sessions via Zoom",
      "Participate actively in Discord community discussions",
      "Complete weekly milestones and assignments",
      "Present progress updates to cohort and mentors",
      "Attend regional meetups when possible"
    ]
  },
  {
    category: "Learning Outcomes",
    items: [
      "Validate your startup idea with real customers",
      "Build and launch an MVP or prototype",
      "Develop go-to-market and fundraising strategies",
      "Gain experience pitching to investors and users",
      "Build lasting relationships with fellow founders"
    ]
  },
  {
    category: "Post-Program Support",
    items: [
      "Access to E.S.I. alumni network",
      "Continued mentorship opportunities",
      "Invitation to exclusive events and workshops",
      "Potential investor introductions",
      "Certificate of completion and award letter"
    ]
  }
]

export default function Apply() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Apply to E.S.I.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Join Cohort 2 starting September 2025. Transform your startup idea into reality with
            expert mentorship, daily accountability, and a supportive community of student founders.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>60-Day Program</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>100% Remote</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Daily 7-9 PM PT</span>
            </div>
          </div>

          {/* Primary Application CTA */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-8 rounded-2xl text-primary-foreground mb-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Founder Journey?</h2>
            <p className="mb-6 opacity-90">
              Applications are reviewed on a rolling basis. Apply early as spaces fill quickly.
            </p>
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-bold text-lg"
            >
              Apply Now →
            </a>
          </div>
        </div>

        {/* Application Criteria */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Who Should Apply</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationCriteria.map((criteria, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-4">{criteria.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{criteria.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {criteria.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Expectations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What to Expect</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {expectations.map((section, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border">
                <h3 className="text-xl font-semibold mb-4 text-primary">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="font-semibold mb-3">When does Cohort 2 start?</h3>
              <p className="text-sm text-muted-foreground">
                Cohort 2 officially begins in September 2025. Exact dates will be communicated to accepted applicants.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="font-semibold mb-3">What if I can't attend every session?</h3>
              <p className="text-sm text-muted-foreground">
                While we expect high attendance, we understand student schedules. Sessions are recorded and makeup opportunities are available.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="font-semibold mb-3">Do I need a technical background?</h3>
              <p className="text-sm text-muted-foreground">
                No! We welcome both technical and non-technical founders. You'll learn from peers and find co-founders with complementary skills.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="font-semibold mb-3">Is there a cost to participate?</h3>
              <p className="text-sm text-muted-foreground">
                E.S.I. is completely free. We even provide $100 in startup tool credits to help you build your product.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="font-semibold mb-3">What happens after the program?</h3>
              <p className="text-sm text-muted-foreground">
                You join our alumni network, continue receiving mentorship, and get access to investor introductions and exclusive events.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="font-semibold mb-3">How selective is the program?</h3>
              <p className="text-sm text-muted-foreground">
                We review applications holistically, focusing on passion, commitment, and growth potential rather than just experience.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl border">
          <h2 className="text-2xl font-bold mb-4">Join the Next Generation of Student Founders</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't wait to start building your future. Apply today and take the first step toward
            becoming a successful entrepreneur with the support of E.S.I.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Apply Now
            </a>
            <a
              href="https://discord.gg/5RK2MYTSw3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              Join Discord
            </a>
            <a
              href="https://www.instagram.com/foundersclubesi/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-background text-foreground px-8 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
            >
              Follow Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/entrepreneur-startup-incubator/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-background text-foreground px-8 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
            >
              LinkedIn Company
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
