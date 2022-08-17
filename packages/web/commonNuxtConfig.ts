import { NuxtConfig } from 'nuxt'

export const commonNuxtConfig: NuxtConfig = {
	ssr: false,
	target: 'server',
	typescript: {
		shim: false
	},
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
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
		},
		// vue: {
		// 	/* options for vite-plugin-vue2 */
		// },
	}
}