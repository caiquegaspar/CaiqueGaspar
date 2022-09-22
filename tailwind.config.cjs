/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const homeOffice = "/src/assets/homeoffice.jpg";
const image1 = "/src/assets/image1.jpg";
const transformStyles =
  "perspective(var(--tw-perspective)) rotateY(var(--tw-rotate-y)) translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z))" +
  "rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          from: {
            opacity: 0,
            transform: "translateY(10px)",
          },

          to: {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },

        hide: {
          from: {
            opacity: 1,
            transform: "translateY(0px)",
          },

          to: {
            opacity: 0,
            transform: "translateY(10px)",
          },
        },
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents, matchUtilities, theme }) {
      addComponents({
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".bg-home-gradient": {
          backgroundImage: `linear-gradient(135deg, transparent 0%, #131414 80%, #000000 100%), url(${homeOffice})`,
        },
        ".bg-home-image": {
          background: `url(${image1}) no-repeat center center / cover`,
        },
      });

      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: transformStyles,
          }),

          perspective: (value) => ({
            "--tw-perspective": value,
            transform: transformStyles,
          }),

          "rotate-y": (value) => ({
            "--tw-rotate-y": value,
            transform: transformStyles,
          }),
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
  ],
};
