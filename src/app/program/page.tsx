import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Program Structure | E.S.I. Student Startup Incubator',
  description: 'Learn about E.S.I.\'s 60-day remote startup program. Weekly progression from validation to fundraising, daily 7-9 PM PT sessions, mentors, and $100 tool credit.',
}

export default function Program() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Program Structure</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our intensive 60-day program takes you from idea validation to scaling and fundraising,
            with structured weekly milestones and daily accountability.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Weekly Progression</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-2xl border">
              <div className="text-3xl font-bold text-primary mb-3">Week 1-2</div>
              <h3 className="text-xl font-semibold mb-3">Validation</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Market research & analysis</li>
                <li>• Customer interviews</li>
                <li>• Problem-solution fit</li>
                <li>• Competitive landscape</li>
                <li>• MVP definition</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <div className="text-3xl font-bold text-primary mb-3">Week 3-4</div>
              <h3 className="text-xl font-semibold mb-3">Branding & Prototype</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Brand identity development</li>
                <li>• UI/UX design</li>
                <li>• Technical architecture</li>
                <li>• Prototype development</li>
                <li>• Initial testing</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <div className="text-3xl font-bold text-primary mb-3">Week 5-6</div>
              <h3 className="text-xl font-semibold mb-3">Pitch & User Testing</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Pitch deck creation</li>
                <li>• User testing sessions</li>
                <li>• Feedback integration</li>
                <li>• Product refinement</li>
                <li>• Demo preparation</li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <div className="text-3xl font-bold text-primary mb-3">Week 7-8</div>
              <h3 className="text-xl font-semibold mb-3">Scale & Fundraising</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Go-to-market strategy</li>
                <li>• Fundraising preparation</li>
                <li>• Legal & compliance</li>
                <li>• Team building</li>
                <li>• Launch planning</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Program Format</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border">
              <h3 className="text-2xl font-semibold mb-4">Daily Structure</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span><strong>7:00-8:00 PM PT:</strong> Core sessions via Zoom</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span><strong>8:00-9:00 PM PT:</strong> Breakout groups & Discord</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span><strong>Weekends:</strong> Regional meetups & workshops</span>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border">
              <h3 className="text-2xl font-semibold mb-4">Remote + Local</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span><strong>100% Remote:</strong> Accessible worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span><strong>Regional Meetups:</strong> Local networking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span><strong>Discord Community:</strong> 24/7 peer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Program Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-2xl border text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-3">Expert Mentors</h3>
              <p className="text-muted-foreground">
                Weekly 1:1s with industry veterans, successful founders, and technical experts
                who've built and scaled companies.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-3">$100 Tool Credit</h3>
              <p className="text-muted-foreground">
                Access to premium startup tools and services to help you build and launch
                your product without upfront costs.
              </p>
            </div>

            <div className="bg-card p-6 rounded-2xl border text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Certificate & Award Letter</h3>
              <p className="text-muted-foreground">
                Official program completion certificate and personalized award letter
                for academic and professional recognition.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bg-primary/5 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Idea?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our next cohort starting in September. Applications are reviewed on a rolling basis,
            and spaces fill quickly.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Apply Now
            </a>
            <a
              href="/founders"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              Meet Our Founders
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
