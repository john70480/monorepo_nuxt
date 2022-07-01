import { defineNuxtPlugin } from '#app'
import { api } from "@tg/web/plugins/api";
export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.provide('api', () => api())
})
