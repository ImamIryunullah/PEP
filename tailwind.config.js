module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Tidak ada `purge`
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        jaro: ['Jaro', 'sans-serif'],
        sans: ['Bebas Neue', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
          'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
    },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideIn: 'slideIn 1s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  darkMode: "class", // Gunakan 'class' agar bisa dikontrol secara manual
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  
};
