import { defineStore } from 'pinia';

export const useApp = defineStore({
	id: 'mobile-app',
	state: () => ({
		navSwitch: false,
	}),
	getters: {},
	actions: {},
})