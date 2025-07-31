import type React from "react"
import { useState } from "react"
import { useTheme } from "../contexts/theme-context"
import { LayoutWrapper } from "../components/layout"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const { themeConfig } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@themeapp.com",
      link: "mailto:hello@themeapp.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Design Street, Creative City, CC 12345",
      link: "#",
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
            Get in Touch
          </h1>

          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            style={{
              color: themeConfig.colors.textSecondary,
              fontFamily: themeConfig.fonts.secondary,
            }}
          >
            Have questions about our themes? Want to collaborate? We'd love to hear from you!
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="p-8 rounded-2xl border"
            style={{
              backgroundColor: themeConfig.colors.surface,
              borderColor: `${themeConfig.colors.primary}20`,
            }}
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{
                color: themeConfig.colors.text,
                fontFamily: themeConfig.fonts.primary,
              }}
            >
              Send us a Message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: themeConfig.colors.accent }} />
                <h3 className="text-xl font-semibold mb-2" style={{ color: themeConfig.colors.text }}>
                  Message Sent!
                </h3>
                <p style={{ color: themeConfig.colors.textSecondary }}>
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                      style={{ color: themeConfig.colors.text }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:scale-[1.02] focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: themeConfig.colors.background,
                        borderColor: `${themeConfig.colors.primary}30`,
                        color: themeConfig.colors.text,
                      }}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                      style={{ color: themeConfig.colors.text }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:scale-[1.02] focus:outline-none focus:ring-2"
                      style={{
                        backgroundColor: themeConfig.colors.background,
                        borderColor: `${themeConfig.colors.primary}30`,
                        color: themeConfig.colors.text,
                      }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeConfig.colors.text }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:scale-[1.02] focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: themeConfig.colors.background,
                      borderColor: `${themeConfig.colors.primary}30`,
                      color: themeConfig.colors.text,
                    }}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: themeConfig.colors.text }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:scale-[1.02] focus:outline-none focus:ring-2 resize-none"
                    style={{
                      backgroundColor: themeConfig.colors.background,
                      borderColor: `${themeConfig.colors.primary}30`,
                      color: themeConfig.colors.text,
                    }}
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
                  style={{
                    backgroundColor: themeConfig.colors.primary,
                    color: "white",
                  }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8 mb-4">
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.primary,
                }}
              >
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 rounded-lg transition-all duration-200 hover:scale-105 border group"
                    style={{
                      backgroundColor: themeConfig.colors.surface,
                      borderColor: `${themeConfig.colors.primary}20`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${themeConfig.colors.primary}10` }}
                    >
                      <info.icon className="w-6 h-6" style={{ color: themeConfig.colors.primary }} />
                    </div>

                    <div>
                      <h3 className="font-semibold" style={{ color: themeConfig.colors.text }}>
                        {info.title}
                      </h3>
                      <p className="text-sm group-hover:underline" style={{ color: themeConfig.colors.textSecondary }}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: themeConfig.colors.surface,
                borderColor: `${themeConfig.colors.primary}20`,
              }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{
                  color: themeConfig.colors.text,
                  fontFamily: themeConfig.fonts.primary,
                }}
              >
                Office Hours
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: themeConfig.colors.textSecondary }}>Monday - Friday</span>
                  <span style={{ color: themeConfig.colors.text }}>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: themeConfig.colors.textSecondary }}>Saturday</span>
                  <span style={{ color: themeConfig.colors.text }}>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: themeConfig.colors.textSecondary }}>Sunday</span>
                  <span style={{ color: themeConfig.colors.text }}>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
