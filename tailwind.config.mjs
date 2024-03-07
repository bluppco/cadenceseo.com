/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

				"cadence_red": "#fc0508",
				"cadence_light_lavender": "#D8D0E4",
				"cadence_cyan": "#05D3CB",
				"cadence_purple": "#7038EF",
				"cadence_gray": "#777",
				"cadence_dark_gray": "#69727d",
				"cadence_neon": "#85E41B",
				"cadence_cream": "#FFFEFD"


			},
			fontFamily: {

				"roboto": [ "Roboto", "sans-serif" ]

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
