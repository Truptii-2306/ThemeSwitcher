export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export type ThemeType = "theme1" | "theme2" | "theme3"

export interface ThemeConfig {
  name: string
  displayName: string
  colors: {
    primary: string
    secondary: string
    background: string
    surface: string
    text: string
    textSecondary: string
    accent: string
  }
  fonts: {
    primary: string
    secondary: string
  }
  layout: "default" | "sidebar" | "grid"
}
