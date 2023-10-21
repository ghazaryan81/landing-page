import type { Config } from "tailwindcss";

const extension = "js,ts,jsx,tsx,mdx";

const config: Config = {
  content: [`./src/app/**/*.{${extension}}`, `./src/pages/**/*.{${extension}}`],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: []
};
export default config;
