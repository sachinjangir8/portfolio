import { create } from 'zustand'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export const useThemeStore = create((set, get) => ({
  theme: getInitialTheme(),
  setTheme: (nextTheme) => {
    const theme = nextTheme === 'dark' ? 'dark' : 'light'
    set({ theme })
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
      document.documentElement.dataset.theme = theme
    }
  },
  toggleTheme: () => {
    const current = get().theme
    const next = current === 'dark' ? 'light' : 'dark'
    get().setTheme(next)
  },
}))

// Initialize document theme on first import
if (typeof window !== 'undefined') {
  const initial = getInitialTheme()
  document.documentElement.dataset.theme = initial
}


