import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hackathon Wins | E.S.I. Competition Success Stories',
  description: 'E.S.I. founders winning major hackathons including Y Combinator AI Hackathon with FitForm Fitness. See our competitive track record in AI, fintech, and tech innovation.',
}

const majorWin = {
  title: "Y Combinator AI Hackathon Winner",
  date: "August 9, 2025",
  project: "FitForm Fitness",
  description: "Our founders took first place at the prestigious Y Combinator AI Hackathon with FitForm Fitness, an AI-powered fitness form correction app that provides real-time feedback to prevent injuries and optimize workouts.",
  impact: "This victory showcased E.S.I.'s ability to nurture founders who can compete and win at the highest levels of tech innovation.",
  image: "/api/placeholder/600/400"
}

const hackathons = [
  {
    event: "YC Agents Hackathon",
    project: "HoloGini AI",
    description: "Advanced AI agent platform that creates personalized holographic assistants for enterprise and consumer applications.",
    achievement: "Top 10 Finalist",
    tech: ["AI Agents", "Holographic Computing", "Enterprise AI"]
  },
  {
    event: "CodeWords × Claude Challenge",
    project: "AI Social Pipeline",
    description: "Intelligent social media content pipeline using Claude AI to generate, schedule, and optimize content across platforms.",
    achievement: "Innovation Award",
    tech: ["Claude AI", "Social Media", "Content Generation"]
  },
  {
    event: "AWS MCP Challenge",
    project: "ProtoBotAI & DocuBot AI",
    description: "Dual AI assistant platform for rapid prototyping and intelligent document processing using AWS services.",
    achievement: "Best AWS Integration",
    tech: ["AWS", "Document AI", "Prototyping Tools"]
  },
  {
    event: "StackAuth Security Hackathon",
    project: "Security & Identity Platform",
    description: "Next-generation authentication and identity management system with zero-trust architecture and biometric integration.",
    achievement: "Security Excellence Award",
    tech: ["Security", "Identity Management", "Zero-Trust"]
  },
  {
    event: "Agno Agents Workshop",
    project: "Multi-Agent System",
    description: "Collaborative AI agent framework that enables multiple specialized agents to work together on complex tasks.",
    achievement: "Most Innovative Solution",
    tech: ["Multi-Agent AI", "Collaboration", "Task Automation"]
  },
  {
    event: "B.E.L.L.E Vibe Code",
    project: "Collaborative Builder",
    description: "Real-time collaborative development environment with AI-powered code suggestions and team coordination features.",
    achievement: "Best Collaboration Tool",
    tech: ["Collaborative Coding", "AI Assistance", "Team Tools"]
  },
  {
    event: "Brex × Anthropic FinTech",
    project: "AI × FinTech Solution",
    description: "Intelligent financial management platform combining Brex's infrastructure with Anthropic's AI for automated business finance.",
    achievement: "FinTech Innovation Prize",
    tech: ["FinTech", "AI Finance", "Business Automation"]
  }
]

export default function Hackathons() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hackathon Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            E.S.I. founders consistently excel in top-tier hackathons and competitions,
            showcasing their innovation and technical excellence on global stages.
          </p>
        </div>

        {/* Featured Win */}
        <div className="mb-16 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 p-8 rounded-2xl border-2 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">🏆</div>
            <div>
              <h2 className="text-2xl font-bold text-primary">MAJOR WIN</h2>
              <p className="text-sm text-muted-foreground">Latest Achievement</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-2">{majorWin.title}</h3>
              <div className="text-lg text-muted-foreground mb-4">{majorWin.date}</div>
              <div className="text-2xl font-semibold text-primary mb-4">{majorWin.project}</div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {majorWin.description}
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <p className="text-sm font-medium text-primary mb-1">Impact:</p>
                <p className="text-sm text-muted-foreground">{majorWin.impact}</p>
              </div>
            </div>
            <div className="aspect-[3/2] bg-card rounded-xl border-2 border-primary/20 overflow-hidden">
              <div className="h-full w-full relative">
                <iframe
                  src="https://fitformfitness.com/beta-access/"
                  className="w-full h-full border-0"
                  title="FitForm Fitness - Y Combinator AI Hackathon Winner"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-bold">
                  🏆 LIVE WINNER
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">More Competition Success</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon, index) => (
              <div key={index} className="bg-card rounded-2xl border p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold pr-4">{hackathon.event}</h3>
                  <div className="text-2xl flex-shrink-0">🥇</div>
                </div>

                <div className="text-primary font-medium mb-2">{hackathon.project}</div>
                <div className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full mb-3 inline-block">
                  {hackathon.achievement}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {hackathon.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {hackathon.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-card p-6 rounded-2xl border">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Major Hackathons</div>
          </div>
          <div className="bg-card p-6 rounded-2xl border">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Awards Won</div>
          </div>
          <div className="bg-card p-6 rounded-2xl border">
            <div className="text-3xl font-bold text-primary mb-2">$50K+</div>
            <div className="text-sm text-muted-foreground">Prize Money</div>
          </div>
          <div className="bg-card p-6 rounded-2xl border">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Win Your Next Hackathon?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join E.S.I. and gain the skills, mentorship, and network you need to excel in competitions
            and build award-winning products. Our track record speaks for itself.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Apply to E.S.I.
            </a>
            <a
              href="/founders"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              Meet Our Winners
            </a>
            <a
              href="/program"
              className="border border-border bg-background text-foreground px-8 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
            >
              Learn Our Methods
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
