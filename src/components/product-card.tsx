import { Star, ShoppingCart } from "lucide-react"
import { useTheme } from "../contexts/theme-context"
import type { Product } from "../types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { themeConfig } = useTheme()

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border"
      style={{
        backgroundColor: themeConfig.colors.surface,
        borderColor: `${themeConfig.colors.primary}20`,
      }}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = `/placeholder.svg?height=300&width=300&text=${encodeURIComponent(product.title)}`
          }}
        />
      </div>

      <div className="p-4 space-y-3">
        <h3
          className="font-semibold text-lg line-clamp-2"
          style={{
            color: themeConfig.colors.text,
            fontFamily: themeConfig.fonts.primary,
          }}
        >
          {product.title}
        </h3>

        <p className="text-sm line-clamp-2" style={{ color: themeConfig.colors.textSecondary }}>
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current" style={{ color: themeConfig.colors.accent }} />
            <span className="text-sm font-medium" style={{ color: themeConfig.colors.textSecondary }}>
              {product.rating.rate}
            </span>
          </div>

          <span
            className="text-xl font-bold"
            style={{
              color: themeConfig.colors.primary,
              fontFamily: themeConfig.fonts.primary,
            }}
          >
            ${product.price}
          </span>
        </div>

        <button
          className="w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
          style={{
            backgroundColor: themeConfig.colors.primary,
            color: "white",
          }}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )
}
