/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const homeOffice = "/src/assets/homeoffice.jpg";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".bg-home-gradient": {
          backgroundImage: `linear-gradient(135deg, transparent 0%, #131414 80%, #000000 100%), url(${homeOffice})`,
          transformStyle: "preserve-3d",
        },
      });
    }),
  ],
};
