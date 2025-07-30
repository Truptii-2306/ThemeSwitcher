# Multi-Theme Switcher App

A modern React TypeScript application featuring dynamic theme switching with three distinct themes, each offering unique layouts, typography, and color schemes. Built with React Router DOM, Tailwind CSS, and integrated with a real API for product data.

## 🌟 Features

### 🎨 **Three Distinct Themes**
- **Minimalist Theme**: Clean design with light colors and Inter font
- **Dark Professional Theme**: Sidebar layout with serif typography and dark mode
- **Colorful Creative Theme**: Grid-based layout with playful fonts and vibrant colors

### 🚀 **Core Functionality**
- **Theme Persistence**: Themes are saved to localStorage and persist across sessions
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Smooth Animations**: 500ms transitions between theme changes
- **API Integration**: Real product data from FakeStore API
- **React Router**: Multi-page navigation (Home, About, Contact)
- **TypeScript**: Full type safety throughout the application

### 📱 **Pages**
- **Home**: Product showcase with theme-specific layouts
- **About**: Company information and values
- **Contact**: Contact form with validation and submission

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Context API
- **API**: FakeStore API for product data

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Truptii-2306/ThemeSwitcher.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
 

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```


4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

## 🏗️ Project Structure

```
src/
├── components/             # Reusable UI components
│   ├── Header.tsx          # Navigation header with theme switcher
│   ├── LayoutWrapper.tsx   # Main layout wrapper for pages
│   └── ProductCard.tsx     # Product display card
├── contexts/               # React Context providers
│   └── ThemeContext.tsx    # Theme state and provider
├── hooks/                  # Custom React hooks
│   └── useProducts.ts      # Hook for fetching product data
├── pages/                  # Page components (routes)
│   ├── Home.tsx            # Home page with product showcase
│   ├── About.tsx           # About/Info page
│   └── Contact.tsx         # Contact page with form
├── types/                  # TypeScript type definitions
│   └── index.ts            # Shared interfaces and types
├── App.tsx                 # Main app component (routing entry)
├── main.tsx                # React app bootstrap entry
└── index.css               # Global styles and Tailwind imports
```

## 🎨 Theme System

### Theme Configuration
Each theme includes:
- **Colors**: Primary, secondary, background, surface, text colors
- **Typography**: Font families for headings and body text
- **Layout**: Different structural layouts (default, sidebar, grid)

### Theme Switching
```typescript
const { currentTheme, setTheme, themeConfig } = useTheme()

// Switch to a different theme
setTheme('theme2')
```

### Adding New Themes
1. Define theme configuration in `src/contexts/ThemeContext.tsx`
2. Add the theme to the `themes` object
3. Update the `ThemeType` union type

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first approach** using Tailwind CSS
- **Breakpoint-specific layouts**:
  - Mobile: Single column, hamburger menu
  - Tablet: Two columns, condensed navigation
  - Desktop: Full layout with all features

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

The app integrates with the [FakeStore API](https://fakestoreapi.com/) to fetch real product data:

```typescript
// Example API call
const response = await fetch('https://fakestoreapi.com/products')
const products = await response.json()
```

## 🎯 Key Components

### ThemeProvider
Manages global theme state and provides theme switching functionality:
```typescript
<ThemeProvider>
  <App />
</ThemeProvider>
```

### Header Component
- Responsive navigation
- Theme switcher dropdown
- Mobile hamburger menu
- Active route highlighting

### Product Cards
- Theme-aware styling
- Hover animations
- Responsive grid layout
- API data integration

## 🔒 Security Features

- **Input Validation**: Form inputs are validated and sanitized
- **Error Handling**: Comprehensive error boundaries and loading states
- **XSS Protection**: Proper data sanitization
- **Type Safety**: Full TypeScript coverage

## 🎨 Customization

### Adding Custom Themes
1. Create a new theme configuration:
```typescript
const customTheme: ThemeConfig = {
  name: "custom",
  displayName: "Custom Theme",
  colors: {
    primary: "#your-color",
    // ... other colors
  },
  fonts: {
    primary: "Your Font Family",
    secondary: "Your Secondary Font"
  },
  layout: "default" // or "sidebar" or "grid"
}
```

2. Add to the themes object in `ThemeContext.tsx`

### Modifying Layouts
Each theme can have a different layout:
- **Default**: Standard layout with hero section
- **Sidebar**: Professional layout with navigation sidebar
- **Grid**: Card-based grid layout

## 📊 Performance Optimizations

- **Lazy Loading**: Components are loaded on demand
- **Image Optimization**: Placeholder images with error handling
- **Smooth Transitions**: Hardware-accelerated CSS transitions
- **Efficient Re-renders**: Optimized React Context usage

## 🧪 Testing

The application includes:
- Type checking with TypeScript
- ESLint for code quality
- Responsive design testing across devices

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for product data
- [Tailwind CSS](https://tailwindcss.com/) for styling system
- [Lucide React](https://lucide.dev/) for beautiful icons
- [React Router](https://reactrouter.com/) for navigation

## 📞 Support

If you have any questions or need help with setup, please:
- Open an issue on GitHub

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
