/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx,css}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      transitionDuration: {
        800: '800ms',
      },
      fontFamily: {
        silk: ['Silk-Serif', 'Verdana', 'Segoe', 'sans-serif'],
        inter: ['Inter var', defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        boxShadow: {
          baseBrown: '4px 4px 0px 0px rgba(94, 69, 42, 1)',
          baseSand: '4px 4px 0px 0px rgba(211, 191, 148, 1)',
          baseDark: '4px 4px 0px 0px rgba(35, 30, 31, 1)',
          baseWhite: '4px 4px 0px 0px rgba(255, 255, 255, 1)',
          basePink: '4px 4px 0px 0px rgba(229, 198, 183, 1)',
          smallBrown: '2px 2px 0px 0px rgba(94, 69, 42, 1)',
          smallSand: '2px 2px 0px 0px rgba(211, 191, 148, 1)',
          smallDark: '2px 2px 0px 0px rgba(35, 30, 31, 1)',
          smallWhite: '2px 2px 0px 0px rgba(255, 255, 255, 1)',
          smallPink: '2px 2px 0px 0px rgba(229, 198, 183, 1)',
        },
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        boxShadowXSmall: '2px',
        boxShadowYSmall: '2px',
      },
      colors: {
        green: '#9FAD86',
        greenDark: '#505743',
        greenLight: '#ecefe7',
        brown: '#5E452A',
        pink: '#E5C6B7',
        oil: '#C3C8B6',
        sand: '#D3BF94',
        dark: '#231E1F',
        white: '#FFF',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
