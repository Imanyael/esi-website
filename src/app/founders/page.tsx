import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Founders | E.S.I. Student Startup Alumni',
  description: 'Meet the innovative student founders from E.S.I. Cohort 1. From AI fitness apps to robotic vending machines, see what our 30+ founders are building.',
}

const founders = [
  {
    name: "Braydon",
    project: "Echo Journal",
    description: "AI-powered journaling platform that helps users reflect and grow through personalized insights and mood tracking.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Varenya",
    project: "Nexogen",
    description: "Next-generation biotech platform revolutionizing drug discovery through advanced computational biology.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Sai",
    project: "AI Course Generator",
    description: "Short-form AI course generator that creates personalized learning experiences in minutes, not hours.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Tyler",
    project: "Boba Vending Robotics",
    description: "Automated robotic systems for fresh boba tea vending, bringing authentic bubble tea to campuses worldwide.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Jordyn",
    project: "AI Adaptive Sheet Music",
    description: "Smart sheet music platform that adapts to musicians' skill levels and provides real-time performance feedback.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Cam",
    project: "WattNest + Marketing",
    description: "Energy optimization platform with integrated marketing tools for sustainable living and eco-conscious brands.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Devi",
    project: "Robotic Hand & Health Devices",
    description: "Advanced prosthetic technology and health monitoring devices powered by machine learning and IoT.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Evan",
    project: "QuantFitness & Language",
    description: "Quantified fitness tracking combined with language learning gamification for holistic personal development.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Art",
    project: "Wing Social App",
    description: "Social networking platform designed for authentic connections and meaningful community building among students.",
    image: "/api/placeholder/300/300"
  },
  {
    name: "Maxwell",
    project: "AI Image Recognition",
    description: "Computer vision platform providing real-time image analysis and recognition for enterprise applications.",
    image: "/api/placeholder/300/300"
  }
]

export default function Founders() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Founders</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Meet the brilliant student entrepreneurs from our first cohort. These founders are building
            the future across AI, robotics, health tech, and social platforms.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>30+ Cohort 1 Founders</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>$2M+ in Products Built</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>10+ Industries</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {founders.map((founder, index) => (
            <div key={index} className="bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                {/* Placeholder for founder image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {founder.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                <div className="text-primary font-medium mb-3">{founder.project}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of the next generation of student founders. Our Cohort 2 starts in September
            with new opportunities to build, launch, and scale your startup.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Apply for Cohort 2
            </a>
            <a
              href="/program"
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
            >
              View Program
            </a>
            <a
              href="https://discord.gg/5RK2MYTSw3"
              className="border border-border bg-background text-foreground px-8 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
