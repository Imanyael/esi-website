import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact E.S.I. | Get in Touch with Our Team',
  description: 'Contact the E.S.I. team: Iman Yael Schaefer, Alex Aghili, Ashley Kim, and Bee Schaefer. Reach out about partnerships, mentoring, or general inquiries.',
}

const teamMembers = [
  {
    name: "Iman Yael Schaefer",
    role: "Founder & Program Lead",
    description: "Leads E.S.I.'s vision and day-to-day program operations, ensuring every founder receives personalized support and guidance.",
    email: "iman@esi.example.com",
    linkedin: "LINKEDIN_IMAN_TODO",
    responsibilities: ["Program Strategy", "Founder Mentorship", "Vision & Direction"]
  },
  {
    name: "Alex Aghili",
    role: "Finance & Operations",
    description: "Manages E.S.I.'s financial operations, scaling infrastructure, and ensures smooth program delivery across all cohorts.",
    email: "alex@esi.example.com",
    linkedin: "LINKEDIN_ALEX_TODO",
    responsibilities: ["Financial Management", "Operations", "Infrastructure Scaling"]
  },
  {
    name: "Ashley Kim",
    role: "Career Pathways & Speakers",
    description: "Connects founders with industry leaders, maps career development opportunities, and coordinates our expert speaker program.",
    email: "ashley@esi.example.com",
    linkedin: "LINKEDIN_ASHLEY_TODO",
    responsibilities: ["Speaker Coordination", "Career Development", "Industry Connections"]
  },
  {
    name: "Bee Schaefer",
    role: "Program Co-Lead",
    description: "Co-leads curriculum development and ensures every founder achieves their goals through personalized mentorship and support.",
    email: "bee@esi.example.com",
    linkedin: "LINKEDIN_BEE_TODO",
    responsibilities: ["Curriculum Design", "Mentorship", "Founder Success"]
  }
]

const contactMethods = [
  {
    method: "General Inquiries",
    details: "esi.team@gmail.com",
    description: "Questions about the program, partnerships, or general information",
    icon: "✉️"
  },
  {
    method: "Discord Community",
    details: "discord.gg/5RK2MYTSw3",
    description: "Join our community for real-time discussions and networking",
    icon: "💬"
  },
  {
    method: "Social Media",
    details: "@foundersclubesi",
    description: "Follow us on Instagram for updates and behind-the-scenes content",
    icon: "📱"
  },
  {
    method: "Professional Network",
    details: "LinkedIn Company",
    description: "Connect with us professionally and stay updated on company news",
    icon: "🔗"
  }
]

export default function Contact() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about E.S.I., interested in partnerships, or want to become a mentor?
            We'd love to hear from you. Reach out to our team directly or send us a message.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl border hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">
                      {member.name.split(' ').map(n => n.charAt(0)).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <div className="text-primary font-medium mb-3">{member.role}</div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.description}
                    </p>

                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">Focus Areas:</div>
                      <div className="flex flex-wrap gap-2">
                        {member.responsibilities.map((responsibility, respIndex) => (
                          <span
                            key={respIndex}
                            className="px-2 py-1 bg-secondary/20 text-secondary-foreground text-xs rounded"
                          >
                            {responsibility}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 text-sm">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-primary hover:underline"
                      >
                        Email
                      </a>
                      <a
                        href={member.linkedin}
                        className="text-primary hover:underline"
                      >
                        LinkedIn →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Ways to Reach Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((contact, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-2xl border">
                <div className="text-3xl mb-3">{contact.icon}</div>
                <h3 className="font-semibold mb-2">{contact.method}</h3>
                <div className="text-primary font-medium mb-2">{contact.details}</div>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border">
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field */}
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="">Select a topic</option>
                    <option value="program-inquiry">Program Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="mentorship">Become a Mentor</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-vertical"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-2xl border">
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <p className="text-muted-foreground mb-6">
            Looking for something specific? These links might help you find what you need faster.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Apply to Program
            </a>
            <a
              href="https://discord.gg/5RK2MYTSw3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              Join Discord
            </a>
            <a
              href="https://www.instagram.com/foundersclubesi/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-background text-foreground px-6 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/entrepreneur-startup-incubator/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-background text-foreground px-6 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
