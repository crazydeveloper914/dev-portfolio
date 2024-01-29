/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '32px',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1200px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
}