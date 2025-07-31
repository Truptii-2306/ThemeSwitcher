import { useTheme } from "../contexts/theme-context"
import { LayoutWrapper } from "../components/layout"
import { Users, Target, Award, Heart } from "lucide-react"

export function About() {
  const { themeConfig } = useTheme()

  const values = [
    {
      icon: Users,
      title: "User-Centric",
      description: "We prioritize user experience in every design decision",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality products",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by our love for creating beautiful experiences",
    },
  ]

  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-16">
        {/* Hero Section */}
        <section className="text-center py-8 lg:py-16 space-y-6">
          <h1
            className="text-4xl md:text-6xl font-bold"
            style={{
              color: themeConfig.colors.text,
              fontFamily: themeConfig.fonts.primary,
            }}
          >
            About ThemeApp
          </h1>

          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{
              color: themeConfig.colors.textSecondary,
              fontFamily: themeConfig.fonts.secondary,
            }}
          >
            We're passionate about creating beautiful, functional, and accessible web experiences. Our multi-theme
            approach demonstrates the power of modern React development with TypeScript, responsive design, and seamless
            user interactions.
          </p>
        </section>

        {/* Story Section */}
        <section className="py-8 lg:py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl font-bold mb-6"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.primary,
                }}
              >
                Our Story
              </h2>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed" style={{ color: themeConfig.colors.textSecondary }}>
                  Founded with the vision of making web applications more dynamic and engaging, ThemeApp represents the
                  future of user-customizable interfaces. We believe that users should have the power to personalize
                  their digital experiences.
                </p>

                <p className="text-lg leading-relaxed" style={{ color: themeConfig.colors.textSecondary }}>
                  Our team combines expertise in modern web technologies with a deep understanding of user experience
                  design. Every theme, animation, and interaction is carefully crafted to provide both beauty and
                  functionality.
                </p>
              </div>
            </div>
            <div className="flex justify-center h-full">
              <div
                className="aspect-square max-h-[400px] min-h-[300px] rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: themeConfig.colors.surface }}
              >
                <div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-transform duration-500 hover:scale-110"
                  style={{ backgroundColor: themeConfig.colors.primary }}
                >
                  <span className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: themeConfig.fonts.primary }}>
                    TA
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Values Section */}
        <section className="pb-8 lg:py-16">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{
              color: themeConfig.colors.text,
              fontFamily: themeConfig.fonts.primary,
            }}
          >
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg transition-all duration-300 hover:scale-105 border"
                style={{
                  backgroundColor: themeConfig.colors.surface,
                  borderColor: `${themeConfig.colors.primary}20`,
                }}
              >
                <value.icon className="w-12 h-12 mx-auto mb-4" style={{ color: themeConfig.colors.primary }} />
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{
                    color: themeConfig.colors.text,
                    fontFamily: themeConfig.fonts.primary,
                  }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: themeConfig.colors.textSecondary }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="rounded-2xl p-8 md:p-12 text-center" style={{ backgroundColor: themeConfig.colors.surface }}>
            <h2
              className="text-3xl font-bold mb-6"
              style={{
                color: themeConfig.colors.text,
                fontFamily: themeConfig.fonts.primary,
              }}
            >
              Our Mission
            </h2>

            <p
              className="text-xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: themeConfig.colors.textSecondary }}
            >
              To empower developers and users with flexible, beautiful, and accessible web applications that adapt to
              individual preferences and needs. We're building the future of personalized digital experiences, one theme
              at a time.
            </p>

            <button
              className="mt-8 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: themeConfig.colors.primary,
                color: "white",
              }}
            >
              Join Our Journey
            </button>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
