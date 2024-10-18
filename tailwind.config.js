/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      screens:{
        'sm': {'min': '330px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min':'1024px'}
      },
    },
  },
  plugins: [],
};
