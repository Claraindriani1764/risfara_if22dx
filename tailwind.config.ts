import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "merah": "#ff0000",
        "kuning": "#ffcc00",
        "ungu": "#A35C7A",
        "maroon": "#740938",
        "coklat": "#7C444F",
        "hitam": {
          "tua": "#000000",
          "sedang": "#333333",
          "muda": "#666666",
        },
        "putih": "#ffffff",
        "biru": "#0000ff",
      },
      spacing: {
        5 : "5px",
        10 : "10px",
        40 : "40px",
        "20px" :"20px",
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "30%": "30%",
        "35%": "35%",
        "40%": "40%",
        "45%": "45%",
        "50%": "50%",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk"],
  },
};
export default config;
