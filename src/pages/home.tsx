import { useTheme } from "../contexts/theme-context"
import { LayoutWrapper } from "../components/layout"
import { ProductCard } from "../components/product-card"
import { useProducts } from "../hooks/useProducts"
import { Loader2, ShoppingBag, Sparkles, Zap } from "lucide-react"

export function Home() {
  const { themeConfig } = useTheme()
  const { products, loading, error } = useProducts()

  const features = [
    {
      icon: Sparkles,
      title: "Beautiful Themes",
      description: "Switch between stunning themes with unique layouts and styles",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized for speed with smooth animations and transitions",
    },
    {
      icon: ShoppingBag,
      title: "Product Showcase",
      description: "Browse products with real-time API integration",
    },
  ]

  const renderContent = () => {
    if (themeConfig.layout === "sidebar") {
      return (
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <div
            className="w-64 p-6 border-r"
            style={{
              backgroundColor: themeConfig.colors.surface,
              borderColor: `${themeConfig.colors.primary}20`,
            }}
          >
            <h2
              className="text-xl font-bold mb-6"
              style={{
                color: themeConfig.colors.text,
                fontFamily: themeConfig.fonts.primary,
              }}
            >
              Categories
            </h2>
            <div className="space-y-3">
              {["Electronics", "Clothing", "Jewelry", "Books"].map((category) => (
                <button
                  key={category}
                  className="w-full text-left px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
                  style={{
                    color: themeConfig.colors.textSecondary,
                    backgroundColor: "transparent",
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            <div className="max-w-6xl mx-auto">
              <HeroSection />
              <ProductsSection />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
      </div>
    )
  }

  const HeroSection = () => (
    <section className="text-center py-16 space-y-6">
      <h1
        className={`text-4xl md:text-6xl font-bold transition-all duration-500 ${
          themeConfig.layout === "grid" ? "transform hover:scale-105" : ""
        }`}
        style={{
          color: themeConfig.colors.text,
          fontFamily: themeConfig.fonts.primary,
        }}
      >
        Welcome to ThemeApp
      </h1>

      <p
        className="text-xl md:text-2xl max-w-3xl mx-auto"
        style={{
          color: themeConfig.colors.textSecondary,
          fontFamily: themeConfig.fonts.secondary,
        }}
      >
        Experience the power of dynamic theming with beautiful layouts, smooth animations, and real-time product data.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
        <button
          className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
          style={{
            backgroundColor: themeConfig.colors.primary,
            color: "white",
          }}
        >
          Explore Products
        </button>

        <button
          className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 border-2"
          style={{
            borderColor: themeConfig.colors.primary,
            color: themeConfig.colors.primary,
            backgroundColor: "transparent",
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  )

  const FeaturesSection = () => (
    <section className="py-16">
      <h2
        className="text-3xl font-bold text-center mb-12"
        style={{
          color: themeConfig.colors.text,
          fontFamily: themeConfig.fonts.primary,
        }}
      >
        Features
      </h2>

      <div
        className={`grid gap-8 ${themeConfig.layout === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3"}`}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-lg transition-all duration-300 hover:scale-105 border"
            style={{
              backgroundColor: themeConfig.colors.surface,
              borderColor: `${themeConfig.colors.primary}20`,
            }}
          >
            <feature.icon className="w-12 h-12 mx-auto mb-4" style={{ color: themeConfig.colors.primary }} />
            <h3
              className="text-xl font-semibold mb-2"
              style={{
                color: themeConfig.colors.text,
                fontFamily: themeConfig.fonts.primary,
              }}
            >
              {feature.title}
            </h3>
            <p style={{ color: themeConfig.colors.textSecondary }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )

  const ProductsSection = () => (
    <section className="py-16">
      <h2
        className="text-3xl font-bold text-center mb-12"
        style={{
          color: themeConfig.colors.text,
          fontFamily: themeConfig.fonts.primary,
        }}
      >
        Featured Products
      </h2>

      {loading && (
        <div className="flex justify-center items-center py-16">
          <Loader2 className="w-8 h-8 animate-spin" style={{ color: themeConfig.colors.primary }} />
        </div>
      )}

      {error && (
        <div className="text-center py-16" style={{ color: themeConfig.colors.primary }}>
          Error loading products: {error}
        </div>
      )}

      {products.length > 0 && (
        <div
          className={`grid gap-6 ${
            themeConfig.layout === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {products.slice(0, themeConfig.layout === "sidebar" ? 6 : 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )

  return <LayoutWrapper>{renderContent()}</LayoutWrapper>
}
