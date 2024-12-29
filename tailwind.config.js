/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    // screens: {
    //   sm: { min: '320px' }, // 320px va undan katta ekranlar uchun
    //   md: { min: '425px', max: '768px' }, // 425px dan 768px gacha ekranlar uchun
    //   lg: { min: '769px', max: '1024px' }, // 769px dan 1024px gacha ekranlar uchun
    //   xl: { min: '1024px', max: '1440px' }, // 1024px dan 1440px gacha ekranlar uchun
    // },
  },
  plugins: [],
};
