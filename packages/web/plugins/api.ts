import { defineNuxtPlugin } from '#app'
import { defineTgApi } from '@tg/api';
import { usePlatform } from '@tg/stores/platform';
import { useSession } from '@tg/stores/session';

export default defineNuxtPlugin(nuxtApp => {
	// now available on `nuxtApp.$injected`
	// nuxtApp.provide('example', () => 'this is example code')
	nuxtApp.provide('api', () => {
		const config = useRuntimeConfig();
		const tgApi = defineTgApi({
			getBaseUrl: () => config.TG_RELAY_API_URL,
			getHeaders: () => {
				const platform = usePlatform();
				const session = useSession();
				return {
					platform: 'Web_1.0',
					ticket: session.user?.ticket,
					username: session.user?.username,
					vga: platform.vga,
					deviceInfo: platform.deviceInfo,
					domain: platform.domain,
					uuid: platform.uuid,
					Lang: 'zh-cn',
				}
			},
			getEncryptUserId: () => {
				const platform = usePlatform();
				if (platform.isEncrypt) {
					const session = useSession();
					return session.userId;
				}
			},
		})
		return tgApi;
	})
})