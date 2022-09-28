/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      display: ["Playfair\\ Display", "serif"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
};
