import { defineTgApi } from '@tg/api';

declare module 'nuxt/dist/app/nuxt' {
	export interface NuxtApp {
		$api: () => ReturnType<typeof defineTgApi>
	}
}
export { }
