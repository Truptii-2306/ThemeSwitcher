import type React from "react"
import { useTheme } from "../contexts/theme-context"
import { Header } from "./header"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const { themeConfig } = useTheme()

  return (
    <>
      <Header />
      <main
        className="pt-16 min-h-screen transition-all duration-500 ease-in-out"
        style={{
          backgroundColor: themeConfig.colors.background,
          fontFamily: themeConfig.fonts.secondary,
        }}
      >
        {children}
      </main>
    </>
  )
}
