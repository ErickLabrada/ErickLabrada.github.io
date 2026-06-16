/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0c0e14',
        'dark-card': '#1a1d29',
        'dark-border': '#2a2d3a',
        'dark-text': '#e5e7eb',
        'accent': '#3b82f6',
      },
    },
  },
  plugins: [],
}