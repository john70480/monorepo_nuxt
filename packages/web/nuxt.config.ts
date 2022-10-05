import { commonNuxtConfig } from "./commonNuxtConfig";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	...commonNuxtConfig,
	alias: {
		'images': '@tg/web/assets/images',
	}
})
