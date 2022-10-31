import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        blue: {
          '800': '#011d40',
          '700': '#022859',
          '600': '#0d3161',
          '500': '#515f70',
          '300': '#b0c3dc',
          '250': '#c1c9d2',
          '200': '#dfe4ea',
          '120': '#e5f0ff',
          '100': '#eef2f6',
          '50': '#fbfbfe',
        },
        red: {
          900: '#da4153',
          800: '#d02035',
          700: '#f22a42',
          600: '#f55366',
          550: '#ff808f',
          500: '#ff8c9a',
          400: '#ff9eb7',
          200: '#ffdce5',
          150: '#ffd9dd',
          100: '#feece9',
        },
        orange: {
          700: '#f59d19',
          500: '#fcc87b',
          400: '#ffa981',
          200: '#fee2d5',
          100: '#ffeaca',
        },
        green: {
          700: '#17cf8c',
          500: '#76e7be',
          400: '#93e088',
          200: '#d1f7c4',
          100: '#dbf7ef',
        },
        white: {
          default: '#fff',
          30: 'rgba(white, 0.3)',
          10: 'rgba(white, 0.1)',
        },
        'dark-blue': {
          400: '#9cc7ff',
          200: '#cfdfff',
        },
        'light-blue': {
          400: '#77d1f3',
          200: '#d0f0fd',
        },
        cyan: {
          400: '#72ddc3',
          200: '#c2f5e9',
        },
        yellow: {
          400: '#ffd66e',
          200: '#fbeabc',
        },
        pink: {
          400: '#f99de2',
          200: '#ffdaf6',
        },
        purple: {
          400: '#cdb0ff',
          200: '#ede2fe',
        },
        gray: {
          400: '#cccccc',
          200: '#eeeeee',
        },
        decision: {
          900: '#8E3AAD',
          500: '#D296DA',
          100: '#EFE3F3',
          50: '#F9F5FB',
        },
        action: {
          900: '#2F80ED',
          500: '#93AFF7',
          100: '#E2EEFD',
          50: '#F5F9FE',
        },
      },
      fontSize: {
        '3xs': [
          '8px',
          {
            lineHeight: '8px',
          },
        ],
        '2xs': [
          '10px',
          {
            lineHeight: '16px',
          },
        ],
      },
    },
    fontFamily: {
      sans: ['Gordita', ...defaultTheme.fontFamily.sans],
      gordita: ['Gordita'],
    },
  },
  plugins: [],
}
