import type { Config } from 'tailwindcss'

import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		// './app/**/*.{js,ts,jsx,tsx,mdx}',
		// './pages/**/*.{js,ts,jsx,tsx,mdx}',
		// './components/**/*.{js,ts,jsx,tsx,mdx}'

		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		// extend: {
		// 	colors: {
		// 		primary: '#FF7652',
		// 		purple: '#6C5ECF',
		// 		'light-blue': '#32A8E2',
		// 		gray: {
		// 			400: '#9898ad',
		// 			500: '#6B6B7B',
		// 			600: '#5B5B6B',
		// 			800: '#353340',
		// 			900: '#272532'
		// 		}
		// 	},
		// 	backgroundImage: {
		// 		'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		// 		'gradient-conic':
		// 			'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
		// 	},
		// 	boxShadow: {
		// 		DEFAULT: '0 3px 12px rgba(0, 0, 0, 0.03)',
		// 		md: '0 3px 12px rgba(0, 0, 0, 0.1)'
		// 	},
		// 	keyframes: {
		// 		fade: {
		// 			from: { opacity: 0 },
		// 			to: { opacity: 1 }
		// 		},
		// 		scaleIn: {
		// 			'0%': {
		// 				opactity: 0,
		// 				transform: 'scale(0.9)'
		// 			},
		// 			'50%': {
		// 				opacity: 0.3
		// 			},
		// 			'100%': {
		// 				opacity: 1,
		// 				transform: 'scale(1)'
		// 			}
		// 		},
		// 		fontSize: {
		// 			xs: '.9rem',
		// 			sm: '1rem',
		// 			tiny: '1.2rem',
		// 			base: '1.4rem',
		// 			lg: '1.5rem',
		// 			xl: '1.6rem',
		// 			'2xl': '1.75rem',
		// 			'3xl': '1.9rem',
		// 			'4xl': '2.4rem',
		// 			'5xl': '3.5rem',
		// 			'6xl': '4.5rem',
		// 			'7xl': '5.5rem'
		// 		},
		// 		animation: {
		// 			fade: 'fade .5s ease-in-out',
		// 			scaleIn: 'scaleIn .35s ease-in-out'
		// 		}
		// 	}
		// }
	},
	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				'.shadow-block': {
					display: 'block',
					boxShadow:
						'0 10px 15px -3px rgba(0 0 0 / 0.1), 0 4px 6px -4px rgba(0 0 0 / 0.1)',
					animation: 'scaleIn .35s ease-in-out',
					backgroundColor: '#272532'
				}
			})
		})
	]
}
export default config
