import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: "E.S.I. | Student Startup Incubator - Build, Launch, Grow",
    template: "%s | E.S.I."
  },
  description: "Remote student startup incubator helping founders build, launch, and grow their ventures. Daily 7-9 PM PT sessions, expert mentors, $100 tool credit. Apply for Cohort 2.",
  keywords: [
    "student startup incubator",
    "remote founder accelerator",
    "UC Santa Cruz incubator",
    "Y Combinator hackathon winners",
    "AI startup program",
    "student accelerator",
    "entrepreneur program",
    "startup mentorship"
  ],
  authors: [{ name: "Entrepreneur & Startup Incubator (E.S.I.)" }],
  creator: "E.S.I. Team",
  publisher: "Entrepreneur & Startup Incubator",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://esi.example.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://esi.example.com',
    title: 'E.S.I. | Student Startup Incubator - Build, Launch, Grow',
    description: 'Remote student startup incubator helping founders build, launch, and grow their ventures. Daily 7-9 PM PT sessions, expert mentors, $100 tool credit.',
    siteName: 'E.S.I.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'E.S.I. - Entrepreneur & Startup Incubator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E.S.I. | Student Startup Incubator - Build, Launch, Grow',
    description: 'Remote student startup incubator helping founders build, launch, and grow their ventures.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Entrepreneur & Startup Incubator (E.S.I.)",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://esi.example.com",
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://esi.example.com"}/logo.png`,
              sameAs: [
                "https://discord.gg/5RK2MYTSw3",
                "https://www.instagram.com/foundersclubesi/?hl=en",
                "https://www.linkedin.com/company/entrepreneur-startup-incubator/"
              ],
              founder: [
                { "@type": "Person", name: "Iman Yael Schaefer", url: "LINKEDIN_IMAN_TODO" },
                { "@type": "Person", name: "Alex Aghili", url: "LINKEDIN_ALEX_TODO" },
                { "@type": "Person", name: "Ashley Kim", url: "LINKEDIN_ASHLEY_TODO" },
                { "@type": "Person", name: "Bee Schaefer", url: "LINKEDIN_BEE_TODO" }
              ],
              description: "Remote student startup incubator helping founders build, launch, and grow their ventures through intensive mentorship and community support.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "esi.team@gmail.com",
                contactType: "General Inquiries"
              }
            })
          }}
        />

        {/* JSON-LD Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "E.S.I. - Entrepreneur & Startup Incubator",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://esi.example.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://esi.example.com"}/search?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* JSON-LD Event Schema for YC Hackathon Win */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Y Combinator AI Hackathon - E.S.I. Victory",
              startDate: "2025-08-09",
              endDate: "2025-08-09",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
              location: {
                "@type": "VirtualLocation",
                url: "https://www.ycombinator.com/"
              },
              organizer: {
                "@type": "Organization",
                name: "Y Combinator",
                url: "https://www.ycombinator.com/"
              },
              description: "E.S.I. founders won first place at the Y Combinator AI Hackathon with FitForm Fitness, an AI-powered fitness form correction application.",
              winner: {
                "@type": "Organization",
                name: "Entrepreneur & Startup Incubator (E.S.I.)",
                url: process.env.NEXT_PUBLIC_SITE_URL || "https://esi.example.com"
              }
            })
          }}
        />
      </head>

      <body suppressHydrationWarning className="antialiased min-h-screen">
        <ThemeProvider>
          <ClientBody>{children}</ClientBody>
        </ThemeProvider>
      </body>
    </html>
  );
}
