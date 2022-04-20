module.exports = {
  content: ['./src/{pages,components}/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
