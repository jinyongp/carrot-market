module.exports = {
  content: ['./src/{pages,components,assets}/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
