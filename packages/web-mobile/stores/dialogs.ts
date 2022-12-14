import { ref, reactive, computed, toRefs } from 'vue';
import { defineStore } from 'pinia';
import type { componentListKeyType } from "@tg/web-mobile/components/recharge/index.vue";
export const useDialogs = defineStore('dialogs', () => {

	const arr = ref<{ title: string, message: string, closeText?: string, icontype?: string }[]>([]);
	const current = computed(() => arr.value.length ? arr.value[0] : undefined);
	let closeHandle: Function | null = null;
	// state
	const state = reactive({
		open: false,
		classificationOpen: false,
		rechargeOpen: false,
		rechargeTarget: 'Transfer' as componentListKeyType | '',
		title: '',
	});

	return {
		...toRefs(state),
		pop,
		close,
		current,
		closeHandle,
		setCloseHandle,
		openRechargeDialog,
		closeRechargeDialog
	};

	// message-popup -----Start
	function pop(title: string, message: string, closeText?: string, icontype?: string) {
		arr.value.push({ title, message, closeText, icontype });
		state.open = true;
	}
	function close() {
		state.open = false;
		if (typeof closeHandle === 'function') {
			closeHandle();
		}
		if (arr.value.length) {
			arr.value.shift();
			closeHandle = null;
		}
	}
	function setCloseHandle(func: Function) {
		// console.log('setCloseHandle');
		closeHandle = func;
	}
	// message-popup -----END

	function openRechargeDialog(target: componentListKeyType) {
		closeRechargeDialog();
		state.rechargeTarget = target
		state.rechargeOpen = true;
	}
	function closeRechargeDialog() {
		state.rechargeTarget = '';
		state.rechargeOpen = false;
	}
});
