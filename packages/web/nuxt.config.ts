import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: false,
	target: 'server',
	typescript: {
		shim: false
	},
	buildModules: [
		// '@pinia/nuxt',
		['@pinia/nuxt', { disableVuex: true }],
	],
	vite: {
		/* options for vite */
		// ssr: true // enable unstable server-side rendering for development (false by default)
		// experimentWarning: false // hide experimental warning message (disabled by default for tests)
		resolve: {
			alias: {
				'@tg/web': '@tg/web/',
				'@tg/web-mobile': '@tg/web-mobile',
				'@tg/shared': '@tg/shared/src',
				'@tg/utils': '@tg/utils/src',
				'@tg/api': '@tg/api/src',
			},
		},
		server: {
			hmr: { overlay: false },
		},
		// vue: {
		// 	/* options for vite-plugin-vue2 */
		// },
	}
})
