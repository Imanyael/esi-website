import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About E.S.I. | Entrepreneur & Startup Incubator',
  description: 'Learn about E.S.I., founded in 2025 by Iman Yael Schaefer, Alex Aghili, Ashley Kim, and Bee Schaefer. Our journey from 4-week origin to 60-day remote startup program.',
}

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">About E.S.I.</h1>

        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-xl mb-6">
            The Entrepreneur & Startup Incubator (E.S.I.) was founded in 2025 with a mission to empower
            the next generation of student founders through intensive, hands-on mentorship and community support.
          </p>

          <p className="mb-6">
            What started as a 4-week experimental program has evolved into our comprehensive 60-day remote
            startup accelerator, bringing together ambitious students from around the world to build, launch,
            and scale their ventures.
          </p>

          <p className="mb-8">
            Our 100% remote format, combined with regional meetups, ensures accessibility while maintaining
            the tight-knit community that makes E.S.I. special. Daily sessions from 7–9 PM PT create
            consistency and accountability, while our expert mentors provide guidance every step of the way.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="text-xl font-semibold mb-2">Iman Yael Schaefer</h3>
              <p className="text-muted-foreground mb-3">Founder & Program Lead</p>
              <p className="mb-4">
                Visionary leader driving E.S.I.'s mission to democratize entrepreneurship education
                and create opportunities for student founders worldwide.
              </p>
              <a href="LINKEDIN_IMAN_TODO" className="text-primary hover:underline">
                LinkedIn →
              </a>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="text-xl font-semibold mb-2">Alex Aghili</h3>
              <p className="text-muted-foreground mb-3">Finance & Operations</p>
              <p className="mb-4">
                Ensures E.S.I. runs smoothly behind the scenes, managing finances, operations,
                and scaling infrastructure to support growing cohorts.
              </p>
              <a href="LINKEDIN_ALEX_TODO" className="text-primary hover:underline">
                LinkedIn →
              </a>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="text-xl font-semibold mb-2">Ashley Kim</h3>
              <p className="text-muted-foreground mb-3">Career Pathways & Speakers</p>
              <p className="mb-4">
                Connects founders with industry leaders and maps career pathways, bringing
                world-class speakers and mentors to our community.
              </p>
              <a href="LINKEDIN_ASHLEY_TODO" className="text-primary hover:underline">
                LinkedIn →
              </a>
            </div>

            <div className="bg-card p-6 rounded-2xl border">
              <h3 className="text-xl font-semibold mb-2">Bee Schaefer</h3>
              <p className="text-muted-foreground mb-3">Program Co-Lead</p>
              <p className="mb-4">
                Co-leads program development and curriculum design, ensuring every founder
                receives personalized guidance and achieves their goals.
              </p>
              <a href="LINKEDIN_BEE_TODO" className="text-primary hover:underline">
                LinkedIn →
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-muted-foreground mb-6">
            Learn more about our program structure and apply for the next cohort.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/program"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Program
            </a>
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
