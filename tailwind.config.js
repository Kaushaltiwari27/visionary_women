/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        brand: {
          navy: '#172D55',
          gold: '#D9A62E',
          text: '#172033',
          muted: '#5F6673',
          bg: '#FFFFFF',
          bgAlt: '#F7F7F4',
          border: '#E5E5E0',
          borderDark: '#D1D1C8',
        },
        // Legacy compatibility (kept for any remaining refs)
        navy: {
          950: '#010521',
          900: '#01155B',
          850: '#021B6E',
          800: '#05298C',
          700: '#0A3CAB',
        },
        vwOrange: {
          DEFAULT: '#FF8F00',
          hover: '#E57F00',
          light: '#FFA633'
        },
        vwYellow: {
          DEFAULT: '#D9A62E',
          hover: '#C49428',
          light: '#E8BB4A'
        },
        vwGold: {
          DEFAULT: '#D9A62E',
          hover: '#C49428',
          light: '#E8BB4A'
        },
        vwTeal: {
          DEFAULT: '#47C8BF',
          hover: '#3BB3AA',
          light: '#6EE0D8',
        }
      },
      fontFamily: {
        sans: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['DM Sans', 'sans-serif'],
        headline: ['DM Sans', 'sans-serif'],
        montserrat: ['DM Sans', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-gradient': 'none',
        'navy-gradient': 'linear-gradient(135deg, #172D55 0%, #0f1f3d 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D9A62E 0%, #C49428 100%)',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(23, 32, 51, 0.06), 0 1px 2px -1px rgba(23, 32, 51, 0.04)',
        'card-hover': '0 4px 16px 0 rgba(23, 32, 51, 0.1), 0 2px 6px -1px rgba(23, 32, 51, 0.06)',
        'card-elevated': '0 8px 32px -4px rgba(23, 32, 51, 0.12)',
        'btn': '0 1px 2px 0 rgba(23, 32, 51, 0.08)',
        'glow-teal': '0 0 0 rgba(71, 200, 191, 0)',
        'glow-yellow': '0 0 0 rgba(217, 166, 46, 0)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fadeIn': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
