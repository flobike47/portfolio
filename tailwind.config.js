/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0f2b26',
        'secondary-color': '#4d736e',
        'text-color': '#474747',
        'accent-color': '#699e97',
      },
    },
  },
  plugins: [],
}


