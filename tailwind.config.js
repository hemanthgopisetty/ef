/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-voilet-black":
          "linear-gradient(180deg, #2B00A6 0%, #07001F 100%)",
      },
      boxShadow: {
        "custom-inset": "inset 0px 6px 6px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        hso: ["var(--hso)"],
        pop: ["var(--pop)"],
        inter: ["var(--inter)"],
        sora: ["var(--sora)"],
      },
    },
  },
  plugins: [],
};
