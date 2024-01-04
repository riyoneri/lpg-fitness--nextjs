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
        "center-info": "polygon(0% 0%, 100% 0%, 97% 100%, 3% 100%)",
        "left-info": "polygon(0% 20%, 100% 20%, 100% 100%, 0% 85%)",
        "right-info": "polygon(0% 20%, 100% 20%, 100% 85%, 0% 100%)",
      },
      colors: {
        "light-black": "#1E1E1E",
        "custom-orange": "#FF3D00",
      },
      boxShadow: {
        inner: "inset -1px 1px 10px var(--tw-shadow)",
      },
      screens: {
        xs: "465px",
      },
    },
  },
  plugins: [tailwindClipPath],
};
export default config;
