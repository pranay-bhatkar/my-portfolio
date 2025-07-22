import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ Required for next-themes to toggle dark mode
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0070f3",
        "primary-dark": "#0057c2",
      },
    },
  },
  plugins: [],
};

export default config;
