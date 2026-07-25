/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headline: ['"Bebas Neue"', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        ember: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffd9a5',
          300: '#ffbb6b',
          400: '#ff9532',
          500: '#ff7a0f',
          600: '#f0620a',
          700: '#c5470a',
          800: '#9d3811',
          900: '#7e3011',
          950: '#441505',
        },
        smoke: {
          50: '#f7f7f8',
          100: '#ededf0',
          200: '#dcdce2',
          300: '#c2c2cd',
          400: '#9d9dac',
          500: '#7d7d8e',
          600: '#646473',
          700: '#52525e',
          800: '#3d3d47',
          900: '#2a2a32',
          950: '#1a1a20',
        },
        charcoal: {
          950: '#0c0c0f',
          900: '#131316',
          850: '#18181c',
          800: '#1f1f24',
          700: '#2a2a31',
          600: '#3a3a42',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-slower': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        'ember-flicker': {
          '0%,100%': { opacity: '0.55', transform: 'scaleX(1) scaleY(1)' },
          '50%': { opacity: '0.9', transform: 'scaleX(1.08) scaleY(1.05)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'float-slower': 'float-slower 9s ease-in-out infinite',
        'ember-flicker': 'ember-flicker 3.5s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
