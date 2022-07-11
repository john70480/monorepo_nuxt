// import { useLocalStorage } from '@vueuse/core';
import { storeRef } from '@tg/shared';
import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useSession = defineStore('session', () => {

	let tgLoginWorker: Promise<void> | undefined;

	// 最後從URL帶入的token
	// const tgStoredToken = useLocalStorage('TG_TOKEN', null, undefined)
	const tgStoredToken = storeRef<string>('TG_TOKEN');
	// 使用tgStoredToken登入TG Login API取得的token
	const tgValidToken = ref<string>();
	const tsStoredUser = computed<{
		ticket: number
		token: string
		user_level: string
		username: string
	} & ({ userid: number } | { id: number }) | undefined>(() => {
		try {
			// debugger
			return tgStoredToken.value ? JSON.parse(atob(tgStoredToken.value)) : undefined;
		}
		catch (err) {
			console.log('Token 解析失敗', err);
		}
	});

	const userId = computed(() => tsStoredUser.value ? 'userid' in tsStoredUser.value ? tsStoredUser.value.userid : tsStoredUser.value.id : '')
	const isAuth = computed(() => {
		return tsStoredUser.value && tsStoredUser.value?.token.length > 0 && tsStoredUser.value?.username.length > 0;
	})
	return {
		user: tsStoredUser,
		login: _login,
		token: tgValidToken,
		userId,
		tgStoredToken,
		isAuth
	};

	function _login(urlToken: string) {
		tgStoredToken.value = urlToken;
	}
});
