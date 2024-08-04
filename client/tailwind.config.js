/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: "#131921",
				// grey: "#3b4149",
				// yellow: "#febd69",
			},
			fontFamily: {
				rblack: ["Rubik-Black", "sans-serif"],
				rbold: ["Rubik-Bold", "sans-serif"],
				rextrabold: ["Rubik-ExtraBold", "sans-serif"],
				rextralight: ["Rubik-Italic", "sans-serif"],
				rlight: ["Rubik-Light", "sans-serif"],
				rmedium: ["Rubik-Medium", "sans-serif"],
				rregular: ["Rubik-Regular", "sans-serif"],
				rsemibold: ["Rubik-SemiBold", "sans-serif"],
			},
		},
	},
	plugins: [],
};
