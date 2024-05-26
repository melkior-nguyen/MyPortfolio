/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        merri: ["Merriweather", "sans-serif"]
      },
      colors: {
        midnightBlue: "#101720",
        // deepNavyBlue: "#011222",
        richBlack: "#020D19",
      }
    },
  },
  plugins: [],
}

