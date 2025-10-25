'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'theme1' | 'theme2'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('theme1')

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('esi-theme') as Theme
    if (savedTheme && (savedTheme === 'theme1' || savedTheme === 'theme2')) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    // Apply theme classes to document
    const root = document.documentElement

    // Remove existing theme classes
    root.classList.remove('theme1', 'theme2')

    // Add current theme class
    root.classList.add(theme)

    // Save to localStorage
    localStorage.setItem('esi-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(current => current === 'theme1' ? 'theme2' : 'theme1')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
