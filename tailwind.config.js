module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'f0f2f5': '#f0f2f5',
      },
      container: {
        center: true, 
        padding: "1rem", 
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          '3xl': '1600px',
        '4xl': '1920px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

