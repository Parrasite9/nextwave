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
      colors: {
        'deep-ocean-blue': '#005f99',
        'aqua-blue': '#00c3e3',
        'soft-gray': '#f0f4f8',
        'sea-green': '#2ED573',
        'hover-sea-green': '#28B463',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(0,95,153,1) 10%, rgba(184,209,226,1) 20%, rgba(212,227,237,1) 30%, rgba(243,247,248,1) 40%)',
        'image-fade': 'linear-gradient(180deg, rgba(240,244,248,0) 0%, rgba(0,95,153,1) 100%)', // customize as needed

      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
