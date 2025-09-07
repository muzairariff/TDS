/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <-- important for the Navbar's theme toggle
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // If you don’t use /src, also include:
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    },
    extend: {
      colors: {
        primary: '#1D4ED8',   // blue
        secondary: '#FFFFFF', // white
        accent: '#2563EB',    // darker blue for hover
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
};
