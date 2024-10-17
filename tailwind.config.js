module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure this is properly set
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Red Hat Display', 'sans-serif'],    // For logos and headers
        body: ['Lato', 'Open Sans', 'sans-serif'],  // For body text and subheadings
      },
    },
    colors: {
      'deep-ocean-blue': '#005f99',
      'aqua-blue': '#00c3e3',
      'soft-gray': '#f0f4f8',
      'brand-white': '#ffffff',
    },
  },
  plugins: [],
}
