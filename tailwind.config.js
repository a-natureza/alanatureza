// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'great-vibes': ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // Ajoutez cette ligne
  ],
};
