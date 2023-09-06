/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        pulseBlue: '#425BF6',
        pulseLime: '#D7E96E',
        pulseLilac: '#C7BEFA',
        ragRed: '#E7765D',
        ragAmber: '#EAB856',
        ragGreen: '#73C0B1',
        darkbkg: '#050503',
        grey800: '#1E1E1E',
        grey700: '#353535',
        grey600: '#626262',
        grey500: '#8E8E8E',
        grey400: '#BCBCBC',
        grey300: '#D2D2D2',
        grey200: '#E9E9E9',
        grey100: '#F4F4F4',
      },
      fontFamily: {
        body: ['Space Grotesk', 'sans-serif'],
        fgl: ['Founders Grotesk Light', 'sans-serif'],
        fgm: ['Founders Grotesk Medium', 'sans-serif'],
        fgb: ['Founders Grotesk Bold', 'sans-serif'],
      },
      borderRadius: {
        stdbr: '10px',
      },
      padding: {
        small: '5px 12px',
        medium: '10px 15px',
        large: '20px',
      },
    },
  },
  plugins: [],
};
