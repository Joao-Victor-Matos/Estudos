import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "cr-bg": "url('../assets/cr-bg.png')",
      "cr-bg2": "url('../assets/see-bg.png')",
    },
    extend: {
      colors: {
        "primary-blue": "#0085FF",
      },
    },
  },
  plugins: [],
};
export default config;
