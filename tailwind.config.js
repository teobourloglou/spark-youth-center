/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      dela: ['"Dela Gothic One", sans-serif'],
      arimo: ['"Arimo", sans-serif'],
    },
    extend: {
      colors: {
        flame: "#f9bb0d",
        "flame-hover": "#c7950a",
      },
      backgroundImage: {
        'line' : "url('../photos/line.svg')",
      },
      aspectRatio: {
        '2/5': '2 / 5',
        '1/2': '1 / 2',
      },
    },
  },
};
