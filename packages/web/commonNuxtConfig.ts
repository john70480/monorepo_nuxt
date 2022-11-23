import { NuxtConfig } from 'nuxt/config'

export const commonNuxtConfig: NuxtConfig = {
	ssr: false,
	target: 'server',
	typescript: {
		shim: false
	},
	css: ['vuetify/styles'],
	build: {
		transpile: ['vuetify'],
	},
	app: {
		head: {
			// meta: [
			// 	// <meta name="viewport" content="width=device-width, initial-scale=1">
			// 	// { name: 'viewport', content: 'width=device-width, initial-scale=1' }
			// ],
			// script: [
			// 	// <script src="https://myawesome-lib.js"></script>
			// 	// { src: 'https://awesome-lib.js' }
			// ],
			link: [
				// { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp' }
			],
			// please note that this is an area that is likely to change
			// style: [
			// 	// <style type="text/css">:root { color: red }</style>
			// 	// { children: ':root { color: red }', type: 'text/css' }
			// ],
			// noscript: [
			// 	// <noscript>Javascript is required</noscript>
			// 	// { children: 'Javascript is required' }
			// ]
		},
	},
	modules: ['@pinia/nuxt'],
	publicRuntimeConfig: {
		TG_RELAY_API_URL: process.env.TG_RELAY_API_URL,
		TG_IS_ENCRYPT: process.env.TG_IS_ENCRYPT
	},
	vue: {
		compilerOptions: {
			isCustomElement: tag => ['marquee'].includes(tag)
		}
	},
	vite: {
		/* options for vite */
		// ssr: true // enable unstable server-side rendering for development (false by default)
		// experimentWarning: false // hide experimental warning message (disabled by default for tests)
		resolve: {
			alias: {
				'@tg/web': '@tg/web/',
				'@tg/web-mobile': '@tg/web-mobile',
				'@tg/shared': '@tg/shared/src',
				'@tg/stores': '@tg/stores/src',
				'@tg/utils': '@tg/utils/src',
				'@tg/api': '@tg/api/src',
			},
		},
		server: {
			hmr: { overlay: false },
			fs: {
				// Allow serving files from one level up to the project root
				allow: [
					// your custom rules
					'/home/edison/.vscode/extensions',
					'/Users/user/.vscode/extensions',
				]
			}
		},
		// vue: {
		// 	/* options for vite-plugin-vue2 */
		// },
	}
}