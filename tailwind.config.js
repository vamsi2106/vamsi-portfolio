/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Navy accent (matches résumé) with a full ramp for hover/active states
        navy: {
          50: '#eef4fb',
          100: '#d6e3f3',
          200: '#aec7e7',
          300: '#7ea4d6',
          400: '#4f7fc0',
          500: '#2f63a3',
          600: '#1F4E79', // primary accent
          700: '#1a4267',
          800: '#163551',
          900: '#122a40',
          950: '#0c1a29',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
