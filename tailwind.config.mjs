/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f4f7f4',
          100: '#e2ebe2',
          200: '#c4d6c3',
          300: '#9bba9a',
          400: '#6e9a6d',
          500: '#4d7d4c',
          600: '#3a6339',
          700: '#2f5030',
          800: '#274027',
          900: '#203520',
        },
        earth: {
          50:  '#faf6f2',
          100: '#f0e6d8',
          200: '#e0ccb0',
          300: '#cda97f',
          400: '#b98755',
          500: '#a87040',
          600: '#8f5a34',
          700: '#74462b',
          800: '#5f3a26',
          900: '#4e3022',
        },
        cream: '#F5F0E8',
        forest: '#1C3A1C',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Lato', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'leaf-texture': "url('/textures/leaf-bg.svg')",
      },
    },
  },
  plugins: [],
};
