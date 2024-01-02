import type { Config } from "tailwindcss";
import tailwindClipPath from "tailwind-clip-path";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        trapezium: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 70%)",
      },
      colors: {
        "light-black": "#1E1E1E",
      },
    },
  },
  plugins: [tailwindClipPath],
};
export default config;
