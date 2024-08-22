// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '3.2xl': '32px',
      },
      backgroundColor: {
        'sidebar': '#9B76D6',
        'accounts': '#FCFCFD',
        'links': '#F2F4F7',
        'button': '#F1EBF9'
      },
      borderColor: {
        'active': '#BEFB7A',
        'input': '#EAECF0',
        'sidebar': '#BBA1E3',
        'links': '#F2F4F7'
      },
      borderWidth: {
        '1': '1px',
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(90deg, rgba(190, 251, 122, 0) 42.53%, #BEFB7A 250%)',
      },
      textColor: {
        'active': '#BEFB7A',
        'inner': '#344054',
        'rank': '#667085',
        'overview': "#AD8EDD",
        'button': "#98A2B3",
      },
      padding: {
        '2.5': '10px',
        '4.5': '18px'
      },
      gap: {
        '2.5': '10px',
        '3.5': '14.5px',
        '4.5': '18px',
      },
      width: {
        'linkitemsmall': '90px',
        'linkitem': '101px',
        'links': '793px',
        'accounts': '326px',
        'sidebar': '18%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}