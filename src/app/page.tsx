"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Users, Rocket, Trophy, Sparkles, ChevronDown, Calendar, Clock, DollarSign } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Team Photo - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Team Photo with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/img/team-photo.png")',
            filter: 'brightness(0.35)',
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})`,
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        
        {/* Hero Content */}
        <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* ESI Logo */}
          <div className="mb-8">
            <img 
              src="/img/real-esi.png" 
              alt="ESI Logo" 
              className="w-40 h-40 mx-auto mb-8"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.4))',
                animation: 'float 3s ease-in-out infinite'
              }}
            />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tight">
            E.S.I.
          </h1>
          
          <p className="text-2xl md:text-4xl text-gray-100 font-light mb-6 tracking-wide">
            ENTREPRENEURSHIP STARTUP INCUBATOR
          </p>
          
          <div className="h-1 w-40 bg-primary mx-auto my-10" />
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-14 leading-relaxed font-light">
            Redefining what student founders can achieve.<br />
            Building the future, one startup at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="https://forms.gle/K8eJKTutyrdXeJFM6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-12 py-5 rounded-full hover:bg-primary/90 transition-all duration-300 font-bold text-lg flex items-center gap-3 group shadow-2xl hover:shadow-primary/50 hover:scale-105"
            >
              Apply Now
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </a>
            
            <a
              href="https://discord.gg/5RK2MYTSw3"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/40 bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full hover:bg-white/20 transition-all duration-300 font-semibold flex items-center gap-3"
            >
              Join Discord
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce cursor-pointer z-20"
          aria-label="Scroll to content"
        >
          <ChevronDown size={48} />
        </button>
      </section>

      {/* Message from ESI - Full Screen */}
      <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <Sparkles className="w-20 h-20 text-primary mx-auto mb-8 opacity-80" />
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold mb-12 leading-tight">
              Message from <br /><span className="gradient-text">the Team</span>
            </h2>
            
            <div className="h-1 w-56 bg-primary mx-auto mb-16" />
            
            <div className="space-y-8 mb-20">
              <p className="text-3xl md:text-4xl text-foreground leading-relaxed font-light">
                <span className="font-bold text-primary">Redefining</span> the student startup experience.
              </p>
              <p className="text-3xl md:text-4xl text-foreground leading-relaxed font-light">
                <span className="font-bold text-primary">Fighting</span> for every founder's success.
              </p>
              <p className="text-3xl md:text-4xl text-foreground leading-relaxed font-light">
                <span className="font-bold text-primary">Building</span> a legacy in entrepreneurship.
              </p>
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-muted-foreground italic mt-20 border-l-4 border-primary pl-10 py-6 max-w-4xl mx-auto text-left">
              "It doesn't matter where you start, it's how you progress from there."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Stats Section - Dramatic */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            <div className="bg-card p-12 rounded-3xl border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center group">
              <Users className="w-16 h-16 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-6xl font-bold text-primary mb-3">30+</div>
              <div className="text-2xl font-semibold mb-2">Founders</div>
              <div className="text-muted-foreground">Building the future</div>
            </div>
            
            <div className="bg-card p-12 rounded-3xl border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center group">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-6xl font-bold text-primary mb-3">1st</div>
              <div className="text-2xl font-semibold mb-2">YC Hackathon</div>
              <div className="text-muted-foreground">AI Competition Winners</div>
            </div>
            
            <div className="bg-card p-12 rounded-3xl border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center group">
              <Rocket className="w-16 h-16 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-6xl font-bold text-primary mb-3">20+</div>
              <div className="text-2xl font-semibold mb-2">Startups</div>
              <div className="text-muted-foreground">Launched products</div>
            </div>
            
            <div className="bg-card p-12 rounded-3xl border shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center group">
              <DollarSign className="w-16 h-16 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <div className="text-6xl font-bold text-primary mb-3">$100</div>
              <div className="text-2xl font-semibold mb-2">Tool Credit</div>
              <div className="text-muted-foreground">For every founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              The <span className="gradient-text">ESI Experience</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              A comprehensive program designed to transform ideas into successful startups
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl border-2 bg-card shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="p-10">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Users size={40} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Expert Mentorship</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Weekly 1:1 sessions with industry veterans from companies like Red Bull, Y Combinator portfolio startups, and leading tech companies.
                </p>
                <Link href="/speakers" className="text-primary hover:text-primary/80 font-bold text-lg inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Meet Our Mentors <ArrowRight size={20} />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl border-2 bg-card shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="p-10">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Clock size={40} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Daily Accountability</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Structured sessions from 7-9 PM PT every day. 100% remote with regional meetups for community building.
                </p>
                <Link href="/program" className="text-primary hover:text-primary/80 font-bold text-lg inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Program <ArrowRight size={20} />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
            </div>
            
            <div className="group relative overflow-hidden rounded-3xl border-2 bg-card shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
              <div className="p-10">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Sparkles size={40} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Real Resources</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  $100 startup tool credits, premium platform access, and connections to accelerators and funding sources.
                </p>
                <Link href="/partners" className="text-primary hover:text-primary/80 font-bold text-lg inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Our Partners <ArrowRight size={20} />
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame - Achievement Gallery */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Hall of <span className="gradient-text">Fame</span>
            </h2>
            <p className="text-2xl text-muted-foreground">
              Celebrating our founders' achievements and milestones
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              { title: "YC AI Hackathon", subtitle: "1st Place Winners", year: "2025", highlight: "FitForm Fitness", color: "from-yellow-500/20 to-orange-500/20" },
              { title: "Cohort 1", subtitle: "30+ Founders", year: "2024", highlight: "First Generation", color: "from-blue-500/20 to-purple-500/20" },
              { title: "Echo Journal", subtitle: "AI-Powered Platform", year: "2024", highlight: "Launched", color: "from-green-500/20 to-teal-500/20" },
              { title: "Boba Robotics", subtitle: "Hardware Innovation", year: "2024", highlight: "Prototype Complete", color: "from-pink-500/20 to-red-500/20" },
              { title: "AI Sheet Music", subtitle: "Adaptive Technology", year: "2024", highlight: "Beta Launch", color: "from-indigo-500/20 to-blue-500/20" },
              { title: "Regional Meetups", subtitle: "Community Events", year: "2024-25", highlight: "Coast to Coast", color: "from-purple-500/20 to-pink-500/20" },
            ].map((achievement, index) => (
              <div 
                key={index} 
                className="bg-card p-10 rounded-3xl border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="text-primary text-sm font-bold mb-3 uppercase tracking-wider">{achievement.year}</div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{achievement.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6">{achievement.subtitle}</p>
                  <div className="inline-block bg-primary/10 px-5 py-2 rounded-full border border-primary/20">
                    <span className="text-primary font-bold">{achievement.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-20">
            <Link
              href="/founders"
              className="bg-primary text-white px-12 py-6 rounded-full hover:bg-primary/90 transition-all duration-300 font-bold text-xl inline-flex items-center gap-3 group shadow-2xl hover:scale-105"
            >
              Meet All Our Founders
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ESI Logo Showcase - Full Width */}
      <section className="py-40 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <img 
              src="/img/real-esi.png" 
              alt="ESI Logo" 
              className="w-72 h-72 mx-auto mb-16 hover:scale-110 transition-transform duration-700"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.3))'
              }}
            />
            
            <h2 className="text-6xl md:text-7xl font-bold mb-10">
              Always bringing <br /><span className="gradient-text">the hustle</span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-16 font-light">
              Join a community of ambitious student entrepreneurs building products that matter.
              <br />From first line of code to first customer—we're with you every step.
            </p>
            
            <div className="flex flex-wrap gap-8 justify-center items-center text-lg">
              <a
                href="https://www.instagram.com/foundersclubesi/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors font-semibold"
              >
                Instagram
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="https://discord.gg/5RK2MYTSw3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors font-semibold"
              >
                Discord
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="mailto:esi.team@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors font-semibold"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Dramatic */}
      <section className="py-40 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-6xl md:text-8xl font-bold mb-10 leading-tight">
              Ready to build <br />
              <span className="gradient-text">your startup?</span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Join Cohort 2 starting September 2025. Transform your idea into reality with
              expert mentorship, daily accountability, and a community of ambitious founders.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="https://forms.gle/K8eJKTutyrdXeJFM6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-14 py-7 rounded-full hover:bg-primary/90 transition-all duration-300 font-bold text-2xl shadow-2xl hover:shadow-primary/50 hover:scale-105"
              >
                Apply for Cohort 2
              </a>
              <Link
                href="/program"
                className="border-2 border-border bg-background text-foreground px-14 py-7 rounded-full hover:bg-accent transition-all duration-300 font-semibold text-2xl hover:scale-105"
              >
                Learn More
              </Link>
            </div>
            
            <div className="text-lg text-muted-foreground font-light">
              Applications reviewed on a rolling basis
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
