/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Ceylon Waters Teal - Primary Brand Color
        ceylon: {
          50: "#e6fffa", // Seafoam Mist
          100: "#b3f5f0", // Lagoon Light
          200: "#80ebe5", // Coral Reef
          300: "#4de0da", // Tropical Splash
          400: "#26d0ce", // Ocean Breeze
          500: "#20b2aa", // Ceylon Waters (PRIMARY)
          600: "#1a9d96", // Deep Current
          700: "#158882", // Midnight Tide
          800: "#10726e", // Abyssal Blue
          900: "#0b5d5a", // Ocean Depths
        },

        // Secondary Colors - Navy & Grays
        midnight: {
          DEFAULT: "#2c3e50",
          light: "#34495e",
          dark: "#1a252f",
        },
        slate: {
          DEFAULT: "#34495e",
          light: "#4a6278",
          dark: "#2c3e50",
        },
        steel: {
          DEFAULT: "#7f8c8d",
          light: "#95a5a6",
          dark: "#6c7b7d",
        },
        silver: {
          DEFAULT: "#bdc3c7",
          light: "#d5dbdb",
          dark: "#a5b1b3",
        },
        cloud: {
          DEFAULT: "#ecf0f1",
          light: "#f8f9fa",
          dark: "#d6dbdc",
        },

        // Accent Colors
        sunset: {
          50: "#fff4f1",
          100: "#ffe6de",
          200: "#ffc7b8",
          300: "#ffa085",
          400: "#ff7952",
          500: "#ff6b35", // Main Sunset Coral
          600: "#e55a2b",
          700: "#cc4921",
          800: "#b23817",
          900: "#992f0f",
        },
        "tea-green": {
          50: "#f0fff4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#2ecc71", // Main Tea Green
          600: "#22c55e",
          700: "#16a34a",
          800: "#15803d",
          900: "#14532d",
        },
        golden: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#ffeb3b", // Main Golden Temple
          600: "#f59e0b",
          700: "#d97706",
          800: "#b45309",
          900: "#92400e",
        },
        royal: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#9b59b6", // Main Royal Purple
          600: "#8b5cf6",
          700: "#7c3aed",
          800: "#6d28d9",
          900: "#581c87",
        },
        alert: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#e74c3c", // Main Alert Red
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },

      // Custom Gradients
      backgroundImage: {
        // Hero and Header Gradients
        "hero-gradient": "linear-gradient(135deg, #20b2aa 0%, #0b5d5a 100%)",
        "hero-light": "linear-gradient(135deg, #e6fffa 0%, #b3f5f0 100%)",
        "hero-sunset": "linear-gradient(135deg, #ff6b35 0%, #20b2aa 100%)",

        // Card and Section Gradients
        "card-gradient": "linear-gradient(135deg, #ffffff 0%, #ecf0f1 100%)",
        "card-teal": "linear-gradient(135deg, #e6fffa 0%, #ffffff 100%)",
        "card-dark": "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",

        // Button Gradients
        "button-primary": "linear-gradient(135deg, #20b2aa 0%, #1a9d96 100%)",
        "button-secondary": "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        "button-accent": "linear-gradient(135deg, #ff6b35 0%, #e55a2b 100%)",
        "button-success": "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",

        // Tropical Themed Gradients
        tropical: "linear-gradient(135deg, #e6fffa 0%, #b3f5f0 100%)",
        "ocean-depth": "linear-gradient(135deg, #20b2aa 0%, #0b5d5a 100%)",
        "sunset-beach": "linear-gradient(135deg, #ffeb3b 0%, #ff6b35 100%)",
        "tea-garden": "linear-gradient(135deg, #2ecc71 0%, #20b2aa 100%)",
      },

      // Custom Box Shadows
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.12)",
        button: "0 4px 15px rgba(32, 178, 170, 0.3)",
        "button-hover": "0 8px 25px rgba(32, 178, 170, 0.4)",
        floating: "0 10px 30px rgba(0, 0, 0, 0.15)",
        "inner-soft": "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
        "glow-teal": "0 0 20px rgba(32, 178, 170, 0.3)",
        "glow-sunset": "0 0 20px rgba(255, 107, 53, 0.3)",
      },

      // Custom Animations
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
      },

      // Custom Keyframes
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        bounceGentle: {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-10px)",
          },
          "60%": {
            transform: "translateY(-5px)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },

      // Enhanced Typography with Better Font Stack
      fontFamily: {
        // Sans-serif fonts - For navigation, body text
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],

        // Serif fonts - For headings, logo, elegant text
        serif: [
          "Playfair Display",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],

        // Display fonts - For brand name, special headings
        display: ["Playfair Display", "Georgia", "serif"],

        // Monospace - For code, technical content
        mono: [
          "JetBrains Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],

        // Alternative sans-serif options
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Playfair Display", "serif"],
      },

      // Custom Font Sizes
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },

      // Font Weights
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },

      // Letter Spacing
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },

      // Custom Spacing
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },

      // Custom Border Radius
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      // Custom Z-Index
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },

      // Custom Backdrop Blur
      backdropBlur: {
        xs: "2px",
      },

      // Custom Screens (Breakpoints)
      screens: {
        xs: "475px",
        "3xl": "1680px",
      },
    },
  },
  plugins: [
    // You can add plugins here if needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
