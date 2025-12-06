/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // Sentro Brand Colors - Koyu Mor + Lacivert Harmanı
        primary: {
          DEFAULT: 'hsl(var(--primary))', // #6366F1 - Mor-lacivert harmanı
          light: 'hsl(var(--primary-light))', // #818CF8 - Açık mor-lacivert
          dark: 'hsl(var(--primary-dark))', // #4F46E5 - Koyu mor-lacivert
          foreground: 'hsl(var(--primary-foreground))',
        },

        // Sentro Secondary Colors - Mor-lacivert tonlarında
        'dark-gray': 'hsl(var(--dark-gray))', // Koyu mor-lacivertimsi gri
        'medium-gray': 'hsl(var(--medium-gray))', // Orta mor-lacivertimsi gri
        'light-gray': 'hsl(var(--light-gray))', // Çok açık mor-lacivertimsi

        // Sentro Accent Colors - Mor-lacivert varyasyonları
        success: 'hsl(var(--success))', // Parlak başarı mor-laciverti
        growth: 'hsl(var(--growth))', // Büyüme mor-laciverti
        mint: 'hsl(var(--mint))', // Lacivert-mor
        lime: 'hsl(var(--lime))', // Açık mor-lacivert
        warning: 'hsl(var(--warning))', // #FFB800 - Turuncu sarı (kontrast için)
        error: 'hsl(var(--error))', // #FF3D71 - Kırmızı (kontrast için)
        info: 'hsl(var(--info))', // Parlak cyan-mavi

        // System colors
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },

        // Chart colors - Mor-lacivert tonları paleti
        chart: {
          '1': 'hsl(var(--chart-1))', // Ana mor-lacivert
          '2': 'hsl(var(--chart-2))', // Açık mor-lacivert
          '3': 'hsl(var(--chart-3))', // Koyu mor-lacivert
          '4': 'hsl(var(--chart-4))', // Lacivert-mor
          '5': 'hsl(var(--chart-5))'  // Açık mor-lacivert
        }
      },
      maxWidth: {
        '8xl': '1440px', 
        '9xl': '1600px', 
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        "glow": "0 0 20px hsl(var(--primary) / 0.4)",
        "glow-lg": "0 0 40px hsl(var(--primary) / 0.5)",
        "glow-xl": "0 0 60px hsl(var(--primary) / 0.3)",
        "neon": "0 0 30px hsl(var(--primary)), 0 0 60px hsl(var(--primary) / 0.4), 0 0 90px hsl(var(--primary) / 0.2)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-light)) 100%)",
        "gradient-vibrant": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--mint)) 50%, hsl(var(--lime)) 100%)",
        "gradient-success": "linear-gradient(135deg, hsl(var(--success)) 0%, hsl(var(--growth)) 100%)",
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        fadeIn: {
          from: { opacity: '0.6' },
          to: { opacity: '1' }
        },
        slideUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          to: {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px hsl(var(--primary) / 0.4)'
          },
          '50%': {
            boxShadow: '0 0 40px hsl(var(--primary) / 0.7)'
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        },
        smoothBounce: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(-10px)',
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        gentleSlide: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite'
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}