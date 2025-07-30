import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Palette, Menu, X } from "lucide-react"
import { useTheme } from "../contexts/theme-context"
import type { ThemeType } from "../types"

export function Header() {
  const { currentTheme, themeConfig, setTheme, themes } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b backdrop-blur-sm"
      style={{
        backgroundColor: `${themeConfig.colors.surface}95`,
        borderColor: `${themeConfig.colors.primary}20`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: themeConfig.colors.primary }}
            >
              <Palette className="w-5 h-5 text-white" />
            </div>
            <span
              className="text-xl font-bold transition-colors"
              style={{
                color: themeConfig.colors.text,
                fontFamily: themeConfig.fonts.primary,
              }}
            >
              ThemeApp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative px-3 py-2 rounded-md transition-all duration-200 hover:scale-105"
                style={{
                  color:
                    location.pathname === item.href ? themeConfig.colors.primary : themeConfig.colors.textSecondary,
                  fontFamily: themeConfig.fonts.secondary,
                }}
              >
                {item.label}
                {location.pathname === item.href && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: themeConfig.colors.primary }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Theme Switcher */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 border"
              style={{
                backgroundColor: themeConfig.colors.surface,
                borderColor: themeConfig.colors.primary,
                color: themeConfig.colors.text,
              }}
            >
              <span className="text-sm font-medium">{themes[currentTheme].displayName}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg border backdrop-blur-sm z-50 overflow-hidden"
                style={{
                  backgroundColor: `${themeConfig.colors.surface}95`,
                  borderColor: `${themeConfig.colors.primary}20`,
                }}
              >
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setTheme(key as ThemeType)
                      setIsDropdownOpen(false)
                    }}
                    className="w-full px-4 py-3 text-left transition-all duration-200 hover:scale-[1.02] flex items-center space-x-3"
                    style={{
                      backgroundColor: currentTheme === key ? `${themeConfig.colors.primary}10` : "transparent",
                      color: currentTheme === key ? themeConfig.colors.primary : themeConfig.colors.text,
                    }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
                    <span className="text-sm font-medium">{theme.displayName}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: themeConfig.colors.text }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: `${themeConfig.colors.primary}20` }}>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md transition-colors"
                  style={{
                    color:
                      location.pathname === item.href ? themeConfig.colors.primary : themeConfig.colors.textSecondary,
                    backgroundColor:
                      location.pathname === item.href ? `${themeConfig.colors.primary}10` : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Theme Switcher */}
            <div className="mt-4 pt-4 border-t" style={{ borderColor: `${themeConfig.colors.primary}20` }}>
              <p className="text-sm font-medium mb-2" style={{ color: themeConfig.colors.text }}>
                Choose Theme
              </p>
              <div className="space-y-2">
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setTheme(key as ThemeType)
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full px-3 py-2 text-left rounded-md transition-colors flex items-center space-x-3"
                    style={{
                      backgroundColor: currentTheme === key ? `${themeConfig.colors.primary}10` : "transparent",
                      color: currentTheme === key ? themeConfig.colors.primary : themeConfig.colors.text,
                    }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.primary }} />
                    <span className="text-sm">{theme.displayName}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
