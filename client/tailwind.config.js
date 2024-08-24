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
			boxShadow: {
				custom:
					"0 0.125rem 0.25rem rgba(31, 33, 36, 0.1), 0 0.0625rem 0.375rem rgba(31, 33, 36, 0.05)", //   0px 0px 15px -6px rgba(0,0,0,0.61)
				custom1: "0 0 10px rgba(0, 0, 0, 0.1)",
			},
			keyframes: {
				flip: {
					"0%": { transform: "rotateY(0deg)" },
					"50%": { transform: "rotateY(180deg)" },
					"100%": { transform: "rotateY(0deg)" },
				},
			},
			animation: {
				flip: "flip 0.4s ease-in-out",
			},
		},
	},
	plugins: [],
};
