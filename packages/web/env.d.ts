import { defineTgApi } from '@tg/api';

// declare module 'nuxt/dist/app/nuxt' {
declare module '#app' {
	export interface NuxtApp {
		$api: () => ReturnType<typeof defineTgApi>
	}
}
export { }
