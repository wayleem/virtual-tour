module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{html,ts,tsx,js,jsx}",
    "./src/**/*.{html,ts,tsx,js,jsx}",
    "./components/**/*.{html,ts,tsx,js,jsx}",
    "./index.html",
  ],
  theme: {
    colors: {
      primary: '#5da145', // green
      secondary: '#002f6c', // dark blue
      lblue: '#009ed1',
      offwhite: '#f2f6f8',
      sunset: '#f5a255',
      graytint: '#655b5c',
      green: '#81b738',
      white: '#fff'
    },
    extend:
    {
      fontFamily: {
        'Jost': ['Jost', 'sans-serif']
      },
    },
  },
  plugins: [],
}
