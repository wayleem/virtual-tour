module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{html,ts,tsx,js,jsx}",
    "./src/**/*.{html,ts,tsx,js,jsx}",
    "./components/**/*.{html,ts,tsx,js,jsx}",
    "./index.html",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'Jost': ['Jost', 'sans-serif']
      },
    },
  },
  plugins: [],
}