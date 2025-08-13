module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}', // Ensure this is properly set
	],
	theme: {
		extend: {
			fontFamily: {
				logo: ['Red Hat Display', 'sans-serif'], // For logos and headers
				body: ['Lato', 'Open Sans', 'sans-serif'], // For body text and subheadings
			},
			/* Colors */
			colors: {
				'soft-navy': '#19375f',
				'cool-white': '#f7f9fb',
				'warm-gray': '#e6e9ed',
				'yale-blue': '#0D3B66',
				'lemon-chiffon': '#FAF0CA',
				'sandy-brown': '#EE964B',
				'naples-yellow': '#F4D35E',
				tomato: '#F95738',
				'bright-teal': '#4A90E2',
				'sky-blue': '#5BC0EB',
			},
			backgroundImage: {
				'custom-gradient':
					'linear-gradient(180deg, rgba(0,95,153,1) 10%, rgba(184,209,226,1) 20%, rgba(212,227,237,1) 30%, rgba(243,247,248,1) 40%)',
				'image-fade':
					'linear-gradient(180deg, rgba(240,244,248,0) 0%, rgba(0,95,153,1) 100%)', // customize as needed
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1600px',
			},
			keyframes: {
				blob: {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(120px, -120px) scale(1.2)' },
					'66%': { transform: 'translate(-100px, 80px) scale(0.85)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
			},
			animation: {
				blob: 'blob 12s ease-in-out infinite',
				blob2: 'blob 16s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
