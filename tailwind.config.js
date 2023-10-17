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
        flame: "#F5631A",
        "flame-hover": "#B34714",
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
