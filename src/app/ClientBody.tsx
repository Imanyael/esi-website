"use client";

import { useEffect } from "react";
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HackathonBanner from '@/components/HackathonBanner';

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme, toggleTheme } = useTheme();

  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased min-h-screen";
  }, []);

  return (
    <div className="antialiased min-h-screen flex flex-col">
      <HackathonBanner />
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
