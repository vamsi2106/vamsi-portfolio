/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm "paper" backgrounds (Sarvam-style editorial light theme)
        paper: {
          DEFAULT: '#FBFAF7',
          100: '#F4F2EB',
          200: '#EBE8DE',
        },
        // Warm near-black ink for text and solid buttons + dark surfaces
        ink: {
          DEFAULT: '#161410',
          50: '#f6f5f2',
          400: '#8b877c',
          500: '#6c685e',
          600: '#4a473f',
          700: '#2c2a24',
          800: '#1d1b16',
          900: '#141210',
          950: '#0d0c0a',
        },
        // Single restrained accent — warm marigold/saffron
        brand: {
          50: '#fcf4ee',
          100: '#f8e4d4',
          200: '#f1c5a3',
          300: '#e9a06b',
          400: '#e07f3f',
          500: '#d75f1e', // accent
          600: '#bd4e15',
          700: '#9a3d14',
          800: '#7c3217',
          900: '#662c16',
          950: '#371407',
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
