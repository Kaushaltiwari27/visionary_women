/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#010521', // Deep Navy from brand guide
          900: '#01155B', // Primary Navy from brand guide
          850: '#021B6E',
          800: '#05298C',
          700: '#0A3CAB',
          card: 'rgba(2, 17, 74, 0.65)',
          border: 'rgba(71, 200, 191, 0.2)',
        },
        vwOrange: {
          DEFAULT: '#FF8F00',
          hover: '#E57F00',
          light: '#FFA633'
        },
        vwYellow: {
          DEFAULT: '#FFDE59',
          hover: '#F2D042',
          light: '#FFE78A'
        },
        vwTeal: {
          DEFAULT: '#47C8BF',
          hover: '#3BB3AA',
          light: '#6EE0D8',
          glow: 'rgba(71, 200, 191, 0.35)'
        }
      },
      fontFamily: {
        headline: ['Anton', 'Oswald', 'sans-serif'],
        display: ['Montserrat', 'Oswald', 'sans-serif'],
        sans: ['DM Sans', 'Montserrat', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 70% 20%, rgba(71, 200, 191, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(255, 143, 0, 0.12) 0%, transparent 50%), linear-gradient(135deg, #01155B 0%, #010521 100%)',
        'navy-gradient': 'linear-gradient(135deg, #01155B 0%, #010521 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(3, 27, 110, 0.6) 0%, rgba(1, 5, 33, 0.8) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFDE59 0%, #FF8F00 100%)',
      },
      boxShadow: {
        'glow-teal': '0 0 25px rgba(71, 200, 191, 0.3)',
        'glow-yellow': '0 0 25px rgba(255, 222, 89, 0.35)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(71, 200, 191, 0.1)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse': 'spin-reverse 35s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
