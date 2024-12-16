import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#242121"
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
