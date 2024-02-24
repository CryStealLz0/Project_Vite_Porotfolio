/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'regal-blue1': '#222222',
        'kuning-js': 'red',
        'kuning-js1': 'red',
        'kuning-js2': 'green',
      },
    },
  },
  plugins: [],
};
