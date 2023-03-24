/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./layouts/**/*.htm", 
        "./partials/**/*.htm",
        "./pages/**/*.{htm,js}",
        "../../plugins/digart/kino/components/**/*.htm"
    ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    ],
}
