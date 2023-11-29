/** @type {import('tailwindcss').Config} */
module.exports = {
  // DaisyUI plugin configuration
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

  // Content for PurgeCSS
  content: ["*"],

  // Theme customization
  theme: {
    extend: {},
  },

  // Plugins configuration
  plugins: [require("daisyui")],
};
