import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeProviderProps = {
  children: React.ReactNode
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined,
)

function getInitialTheme(storageKey: string): Theme {
  const stored = localStorage.getItem(storageKey)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({
  children,
  storageKey = 'portfolio-theme',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme(storageKey))

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  return (
    <ThemeProviderContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
