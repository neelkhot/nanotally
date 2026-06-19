export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d8eaff',
          200: '#b6d5ff',
          300: '#83b7ff',
          400: '#4f8dff',
          500: '#2f6ffe',
          600: '#245bdb',
          700: '#1e4eb0',
          800: '#1a438e',
          900: '#193d7c'
        }
      },
      boxShadow: {
        soft: '0 45px 120px rgba(15, 23, 42, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
