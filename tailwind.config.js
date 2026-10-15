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
        dark: {
          950: '#06090e',
          900: '#0b0f19',
          850: '#111726',
          800: '#161f33',
          700: '#23304d',
        },
        accent: {
          cyan: '#06b6d4',
          emerald: '#10b981',
          indigo: '#6366f1',
          violet: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.25)',
        'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
