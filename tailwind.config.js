/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "border-LOW",
    "border-MEDIUM",
    "border-HIGH",
    "border-CRITICAL",
    "bg-LOW",
    "bg-MEDIUM",
    "bg-HIGH",
    "bg-CRITICAL",
    "text-LOW",
    "text-MEDIUM",
    "text-HIGH",
    "text-CRITICAL",
    "border-b-LOW",
    "border-b-MEDIUM",
    "border-b-HIGH",
    "border-b-CRITICAL",
  ],
  theme: {
    extend: {
      height: {
        nav: "var(--nav-height)",
        height: "var(--height)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        LOW: "rgb(205, 247, 205)",
        MEDIUM: "rgb(232 ,232, 138)",
        HIGH: "rgb(239, 205, 142)",
        CRITICAL: "rgb(249, 143, 143)",
      },
      backgroundColor: {
        LOW: "rgba(205 ,247, 205,0.5)",
        MEDIUM: "rgba(232, 232, 138,0.5)",
        HIGH: "rgba(239, 205, 142,0.5)",
        CRITICAL: "rgba(249, 143, 143,0.5)",
      },
      textColor: {
        LOW: "rgb(205, 247, 205)",
        MEDIUM: "rgb(232 ,232, 138)",
        HIGH: "rgb(239, 205, 142)",
        CRITICAL: "rgb(249, 143, 143)",
      },
    },
  },
  plugins: [],
};
