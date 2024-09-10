/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Grotesk': ['"Space Grotesk"'],
      },
  
      colors: {
        'Linear-gradient': 'hsl(249, 99%, 64%)',
        'Red': 'hsl(0, 100%, 66%)',
        'white': 'hsl(0, 0%, 100%)',
        'Light-grayish-violet': 'hsl(270, 3%, 87%)',
        'Dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'Very-dark-violet': 'hsl(278, 68%, 11%)',
      },
  
      inset: {
        '20.5': '4.8rem',
        '21': '5.5rem',
        '97': '26rem',
        '24.5': '6.4rem',
        '29': '7.5rem',
      }
    },
  },
  plugins: [],
}

