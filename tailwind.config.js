/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        success: {
          500: '#10B981',
          600: '#059669',
        },
        purple: {
          500: '#8B5CF6',
          600: '#7C3AED',
        },
      },
    },
  },
  plugins: [],
}