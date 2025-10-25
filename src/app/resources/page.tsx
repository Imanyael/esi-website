import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources & Updates | E.S.I. Press, Newsletter & Progress',
  description: 'Stay updated with E.S.I. news, press coverage, newsletter archives, and founder progress. Latest: "E.S.I. Ignites Momentum" and speaker updates.',
}

const pressArticles = [
  {
    title: "E.S.I. Ignites Momentum in Student Entrepreneurship",
    date: "August 2025",
    excerpt: "The Entrepreneur & Startup Incubator (E.S.I.) has emerged as a leading force in student entrepreneurship, with Cohort 1 founders achieving remarkable success in just 60 days.",
    readTime: "5 min read",
    category: "Press Release",
    featured: true
  },
  {
    title: "Y Combinator Hackathon Victory Spotlights E.S.I. Innovation",
    date: "August 9, 2025",
    excerpt: "E.S.I. founders took first place at the prestigious Y Combinator AI Hackathon with FitForm Fitness, showcasing the program's ability to nurture competition-ready entrepreneurs.",
    readTime: "3 min read",
    category: "Achievement",
    featured: false
  },
  {
    title: "Remote Learning Revolution: How E.S.I. Makes Entrepreneurship Accessible",
    date: "July 2025",
    excerpt: "With 100% remote programming and regional meetups, E.S.I. is democratizing access to high-quality entrepreneurship education for students worldwide.",
    readTime: "4 min read",
    category: "Feature",
    featured: false
  }
]

const newsletters = [
  {
    title: "Cohort 1 Graduation & Success Stories",
    date: "August 2025",
    description: "Celebrating our first cohort's achievements, from hackathon wins to successful product launches.",
    topics: ["Graduation highlights", "Founder spotlights", "Competition wins", "Next steps"]
  },
  {
    title: "Midpoint Milestone: Founders in Action",
    date: "July 2025",
    description: "Week 4 update showcasing prototypes, user testing results, and mentor feedback sessions.",
    topics: ["Prototype demos", "User testing insights", "Mentor spotlights", "Regional meetups"]
  },
  {
    title: "Welcome Cohort 1: The Journey Begins",
    date: "June 2025",
    description: "Introducing our inaugural cohort of 30+ student founders and their ambitious startup ideas.",
    topics: ["Founder introductions", "Program kickoff", "Mentor lineup", "Expectations"]
  }
]

const upcomingUpdates = [
  {
    title: "Cohort 2 Speaker Announcements",
    description: "Revealing our exciting lineup of Fortune 500 executives, unicorn founders, and industry leaders",
    timeline: "Coming Soon"
  },
  {
    title: "Alumni Network Launch",
    description: "Exclusive platform connecting E.S.I. graduates for collaboration and continued growth",
    timeline: "September 2025"
  },
  {
    title: "Regional Expansion",
    description: "New meetup locations and partnerships to serve student founders in more geographic regions",
    timeline: "Q4 2025"
  }
]

export default function Resources() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Resources & Updates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with E.S.I.'s latest news, press coverage, newsletter archives,
            and updates on our founders' progress. Your source for all things E.S.I.
          </p>
        </div>

        {/* Press Coverage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Press Coverage</h2>

          {/* Featured Article */}
          <div className="mb-8">
            {pressArticles.filter(article => article.featured).map((article, index) => (
              <div key={index} className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-muted-foreground">{article.category}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                  <button className="text-primary hover:underline font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Other Articles */}
          <div className="grid md:grid-cols-2 gap-6">
            {pressArticles.filter(article => !article.featured).map((article, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <button className="text-primary hover:underline text-sm font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Archive */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Newsletter Archive</h2>
          <div className="space-y-6">
            {newsletters.map((newsletter, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{newsletter.title}</h3>
                    <p className="text-muted-foreground mb-3">{newsletter.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    {newsletter.date}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">Topics Covered:</div>
                  <div className="flex flex-wrap gap-2">
                    {newsletter.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="text-primary hover:underline font-medium">
                  Read Newsletter →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Updates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What's Coming Next</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingUpdates.map((update, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border text-center">
                <div className="text-2xl mb-4">🔜</div>
                <h3 className="text-lg font-semibold mb-3">{update.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{update.description}</p>
                <div className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm rounded-full inline-block">
                  {update.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl border">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest updates on founder progress, speaker announcements, and program developments
              delivered directly to your inbox.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
                />
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Follow Our Journey</h2>
          <p className="text-muted-foreground mb-6">
            Stay tuned for speaker updates, founder progress, and exciting announcements.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://discord.gg/5RK2MYTSw3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Join Discord
            </a>
            <a
              href="https://www.instagram.com/foundersclubesi/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              Follow Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/entrepreneur-startup-incubator/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-background text-foreground px-6 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
            >
              LinkedIn Company
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
