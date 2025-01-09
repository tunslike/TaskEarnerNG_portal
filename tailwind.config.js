/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryOrange: '#fa501b',
        primaryWhite: '#ffffff',
        primaryBlue: '#233c77',
        copyrightBlue: '#1d3469',
        footerListGray: '#cfcfcf',
        bgColor: '#f5f6f6',

      }
    },
  },
  plugins: [],
}

