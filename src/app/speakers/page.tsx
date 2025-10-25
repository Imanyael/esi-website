import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expert Speakers | E.S.I. Startup Mentors & Industry Leaders',
  description: 'Learn from top industry experts at E.S.I. Finance, marketing, AI automation leaders sharing insights with student founders.',
}

const speakers = [
  {
    name: "Toby Morning",
    specialty: "Finance & Startup Operations",
    description: "Seasoned finance executive with 15+ years in startup scaling, fundraising strategy, and operational excellence. Helps founders build sustainable financial foundations.",
    image: "/api/placeholder/400/400",
    topics: ["Fundraising Strategy", "Financial Modeling", "Startup Operations", "Investor Relations"]
  },
  {
    name: "Jonathan Lo",
    specialty: "Marketing & Brand Strategy",
    description: "Brand strategist and marketing expert who has helped 50+ startups achieve product-market fit through innovative growth strategies and brand positioning.",
    image: "/api/placeholder/400/400",
    topics: ["Growth Marketing", "Brand Positioning", "Customer Acquisition", "Product-Market Fit"]
  },
  {
    name: "Rajan Chida",
    specialty: "Entrepreneurship & Leadership",
    description: "Founder of Royal Oak Retreat and serial entrepreneur. Expert in building resilient teams, leadership development, and sustainable business models.",
    image: "/api/placeholder/400/400",
    topics: ["Leadership Development", "Team Building", "Business Strategy", "Entrepreneurial Mindset"]
  },
  {
    name: "Liam Davis",
    specialty: "AI Automation",
    description: "AI automation specialist at Red Bull with expertise in scaling AI solutions for enterprise. Passionate about helping startups leverage automation for growth.",
    image: "/api/placeholder/400/400",
    topics: ["AI Implementation", "Process Automation", "Tech Scaling", "Enterprise Solutions"]
  },
  {
    name: "Yixiao Dewees",
    specialty: "Career Strategy & Content",
    description: "Career development expert and content strategist helping founders build personal brands and navigate career transitions in the startup ecosystem.",
    image: "/api/placeholder/400/400",
    topics: ["Personal Branding", "Career Development", "Content Strategy", "Professional Growth"]
  },
  {
    name: "Renzo Sanio",
    specialty: "Industry Expert",
    description: "Dynamic speaker bringing fresh perspectives on innovation and startup methodologies. More details on expertise coming soon.",
    image: "/api/placeholder/400/400",
    topics: ["Innovation", "Startup Strategy", "Industry Insights", "Emerging Trends"]
  },
  {
    name: "Curran Advano",
    specialty: "Social Media & Automation",
    description: "Expert in TikTok, Instagram, and CapCut workflow automation. Teaches founders how to build viral content and automate social media presence with Apify.",
    image: "/api/placeholder/400/400",
    topics: ["Social Media Automation", "Viral Content", "Apify Workflows", "Brand Growth"]
  },
  {
    name: "Ben Legum",
    specialty: "Speaker & Industry Expert",
    description: "Accomplished industry expert sharing insights on startup growth and innovation. Detailed expertise and focus areas coming soon.",
    image: "/api/placeholder/400/400",
    topics: ["Startup Growth", "Innovation", "Industry Strategy", "Professional Development"]
  }
]

export default function Speakers() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Expert Speakers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry leaders, successful founders, and domain experts who share practical
            insights to accelerate your startup journey. Our speakers bring real-world experience
            from top companies and successful ventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                {/* Placeholder for speaker image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-primary">
                      {speaker.name.split(' ').map(n => n.charAt(0)).join('')}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                <div className="text-primary font-medium mb-3">{speaker.specialty}</div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {speaker.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {speaker.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16 bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl border">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Cohort 2 Speaker Lineup</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're currently confirming an exciting lineup of new speakers for Cohort 2, including
              executives from Fortune 500 companies, unicorn startup founders, and rising stars in AI,
              fintech, and sustainable technology.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Fortune 500 Executives</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Unicorn Founders</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>AI & Fintech Leaders</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Learn from the Best?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our next cohort and get direct access to these industry experts through weekly sessions,
            Q&As, and personalized mentorship opportunities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              Become a Mentor
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
