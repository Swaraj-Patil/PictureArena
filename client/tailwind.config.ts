import type { Config } from "tailwindcss";
import asd from './public/media/login-background.jpg'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient: 'linear-gradient(90deg, #E5000000, #E50000, #E5000000)',
        gradient1: 'linear-gradient(180deg, #14141400, #141414)',
        'login-background': "url('/public/media/login-background.jpg')"
      },
      colors: {
        black: {
          '06': '#0F0F0F',
          '08': '#141414',
          10: '#1A1A1A',
          12: '#1F1F1F',
          15: '#262626',
          20: '#333333',
          25: '#404040',
          30: '#4C4C4C',
        },
        red: {
          45: '#E50000',
          50: '#FF0000',
          55: '#FF1919',
          60: '#FF3333',
          80: '#FF9999',
          90: '#FFCCCC',
          95: '#FFE5E5',
          99: '#FFFAFA',
        },
        grey: {
          60: '#999999',
          65: '#A6A6A6',
          70: '#B3B3B3',
          75: '#BFBFBF',
          90: '#E4E4E7',
          95: '#F1F1F3',
          97: '#F7F7F8',
          99: '#FCFCFD',
        },
      },
      boxShadow: {},
      fontFamily: { manrope: 'Manrope', archivo: 'Archivo' },
    },
  },
  plugins: [],
};
export default config;
