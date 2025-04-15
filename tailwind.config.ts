// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'text-gradient': 'textGradient 3s ease infinite',
      },
      keyframes: {
        textGradient: {
          '0%': { backgroundPosition: '0% 100%' },
          '50%': { backgroundPosition: '100% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
      },
    },
  },
  plugins: [],
}
