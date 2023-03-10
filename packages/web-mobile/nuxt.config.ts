import { commonNuxtConfig } from "@tg/web/commonNuxtConfig";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	...commonNuxtConfig,
	alias: {
		'images': '@tg/web-mobile/assets/images',
	},
	css: [
		// SCSS file in the project		
		...commonNuxtConfig.css || [],
		'@tg/web-mobile/assets/scss/common.scss'
	]
})
