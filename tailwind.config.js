/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'aurora': {
          blue: '#4A90E2',
          navy: '#1E3A8A',
          lavender: '#E6E6FA',
          green: '#00D4AA',
          white: '#FEFEFE',
          ice: '#B8E6FF',
          twilight: '#2D1B69',
          frost: '#F0F8FF'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      },
      animation: {
        'snowfall': 'snowfall 10s linear infinite',
        'aurora': 'aurora 8s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        snowfall: {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
        },
        aurora: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #4A90E2, #00D4AA, #E6E6FA)',
            transform: 'translateX(0%) scale(1)'
          },
          '50%': { 
            background: 'linear-gradient(45deg, #00D4AA, #E6E6FA, #4A90E2)',
            transform: 'translateX(5%) scale(1.1)'
          }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(74, 144, 226, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(74, 144, 226, 0.6)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backdropBlur: {
        'xs': '2px'
      }
    },
  },
  plugins: [],
}