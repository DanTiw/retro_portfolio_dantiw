import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

	theme: {
		extend: {
		  colors: {
			main: '#FFDC58',
			mainAccent: '#ffc800',
			overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
	  
			// light mode
			bg: '#FEF2E8',
			text: '#000',
			border: '#000',
	  
			// dark mode
			darkBg: '#374151',
			darkText: '#eeefe9',
			darkBorder: '#000',
			secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
		  },
		  borderRadius: {
			base: '20px'
		  },
		  boxShadow: {
			light: '5px 4px 0px 0px #000',
			dark: '5px 4px 0px 0px #000',
		  },
		  translate: {
			boxShadowX: '5px',
			boxShadowY: '4px',
			reverseBoxShadowX: '-5px',
			reverseBoxShadowY: '-4px',
		  },
		  fontWeight: {
			base: '600',
			heading: '700',
		  },
		},
	  },
  		
  plugins: [require("tailwindcss-animate")],
};
export default config;
