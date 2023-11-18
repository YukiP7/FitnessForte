/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      tourney : ['Tourney','Nunito' , 'sans-serif'] ,
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco, Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
  },
  plugins: [],
  
}

