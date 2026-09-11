/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#F8F8F6',
        ink: {
          DEFAULT: '#17171A',
          secondary: '#6B6B73',
          muted: '#A1A1A8',
        },
        line: '#E7E7E5',
        pastel: {
          sky: '#8DD7F7',
          lavender: '#B9A7F5',
          mint: '#A9DEC9',
          peach: '#F7B7A6',
          butter: '#F3D879',
          pink: '#F3A8C8',
        },
        border: '#E7E7E5',
        input: '#E7E7E5',
        background: '#F8F8F6',
        foreground: '#17171A',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#17171A',
        },
        primary: {
          DEFAULT: '#17171A',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F1F1EF',
          foreground: '#17171A',
        },
        muted: {
          DEFAULT: '#F1F1EF',
          foreground: '#6B6B73',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 2px 8px -2px rgba(23, 23, 26, 0.04), 0 1px 3px -1px rgba(23, 23, 26, 0.02)',
        'card-hover': '0 16px 32px -8px rgba(23, 23, 26, 0.08), 0 4px 12px -2px rgba(23, 23, 26, 0.03)',
        'float': '0 20px 40px -12px rgba(23, 23, 26, 0.12)',
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        editorial: [
          '"Plus Jakarta Sans"',
          'Inter',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
