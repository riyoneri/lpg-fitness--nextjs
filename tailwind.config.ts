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
        "bg-shape": "polygon(0% 0%, 60% 0%, 45% 75%, 100% 100%, 0% 100%)",
        "bg-shape-fliped":
          "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%, 55% 75%)",
      },
      colors: {
        "light-black": "#1E1E1E",
        "custom-orange": "#FF3D00",
      },
      boxShadow: {
        inner: "inset -1px 1px 10px var(--tw-shadow)",
      },
    },
  },
  plugins: [tailwindClipPath],
};
export default config;
