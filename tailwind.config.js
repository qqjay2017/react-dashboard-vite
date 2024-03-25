/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        "active-border-color": "var(--active-border-color)",
        common: "var(--text-common)",
        primary: "var(--text-primary)",
        noselect: "var(--text-noselect)",
        foreground: "var(--select-content-text-highlight)",
        "active-background": "var(--tab-active-background)",
        background: "var(--tab-background)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
