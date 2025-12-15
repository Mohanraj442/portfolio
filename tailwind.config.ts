import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        foreground: '#E5E7EB',
        accent: {
          DEFAULT: '#00FFC6',
          purple: '#9B5FFF',
          pink: '#FF58B0'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(0,255,198,0.35)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)'
      }
    }
  },
  plugins: []
} satisfies Config
