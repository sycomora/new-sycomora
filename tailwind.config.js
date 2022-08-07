module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        // '128': "32rem",
      },
      fontFamily: {
        sans: ["Circular Std"],
        heading: ["Circular Std"]
      },
      colors: {
        primary: "#646363",
        secondary: "#896998",
        tersiary: "#7BA8F6"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
