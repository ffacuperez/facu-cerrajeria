/** @type {import('tailwind-config').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'perez-blue': '#040833',
        'perez-silver': '#cbd5e1',
        'perez-silver-light': '#e5e7eb',
        'perez-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
}