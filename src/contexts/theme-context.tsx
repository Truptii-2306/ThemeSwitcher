import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { ThemeType, ThemeConfig } from "../types"

const themes: Record<ThemeType, ThemeConfig> = {
  theme1: {
    name: "theme1",
    displayName: "Minimalist",
    colors: {
      primary: "#2563eb",
      secondary: "#64748b",
      background: "#ffffff",
      surface: "#f8fafc",
      text: "#1e293b",
      textSecondary: "#64748b",
      accent: "#3b82f6",
    },
    fonts: {
      primary: "Inter, system-ui, sans-serif",
      secondary: "Inter, system-ui, sans-serif",
    },
    layout: "default",
  },
  theme2: {
    name: "theme2",
    displayName: "Dark Professional",
    colors: {
      primary: "#8b5cf6",
      secondary: "#06b6d4",
      background: "#0f0f23",
      surface: "#1e1b4b",
      text: "#f1f5f9",
      textSecondary: "#cbd5e1",
      accent: "#10b981",
    },
   fonts: {
      primary: "Georgia, serif",
      secondary: "Georgia, serif",
    },
    layout: "sidebar",
  },
  theme3: {
    name: "theme3",
    displayName: "Colorful Creative",
    colors: {
      primary: "#ec4899",
      secondary: "#8b5cf6",
      background: "#f8f2d8ff",
      surface: "#ffffff",
      text: "#1f2937",
      textSecondary: "#6b7280",
      accent: "#10b981",
    },
    fonts: {
      primary: "Comic Sans MS, cursive",
      secondary: "system-ui, sans-serif",
    },
    layout: "grid",
  },
}

interface ThemeContextType {
  currentTheme: ThemeType
  themeConfig: ThemeConfig
  setTheme: (theme: ThemeType) => void
  themes: Record<ThemeType, ThemeConfig>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("theme1")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("app-theme") as ThemeType
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    }
  }, [])

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme)
    localStorage.setItem("app-theme", theme)
  }

  if (!mounted) {
    return <div className="min-h-screen bg-white" />
  }

  const themeConfig = themes[currentTheme]

  return (
    <ThemeContext.Provider value={{ currentTheme, themeConfig, setTheme, themes }}>
      <div
        className="min-h-screen transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: themeConfig.colors.background,
          color: themeConfig.colors.text,
          fontFamily: themeConfig.fonts.primary,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
