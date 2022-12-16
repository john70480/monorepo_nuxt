import { ref, reactive, computed, toRefs } from 'vue';
import { defineStore } from 'pinia';
import type { rechargeTargetType } from "@tg/web-mobile/components/recharge/index.vue";
import type { withdrawTargetType } from "@tg/web-mobile/components/withdraw/index.vue";
export const useDialogs = defineStore('dialogs', () => {

	const arr = ref<{ title: string, message: string, closeText?: string, icontype?: string }[]>([]);
	const current = computed(() => arr.value.length ? arr.value[0] : undefined);
	let closeHandle: Function | null = null;
	// state
	const state = reactive({
		target: {
			recharge: '' as rechargeTargetType | '',
			withdraw: '' as withdrawTargetType | '',
		},
		open: {
			pop: false,
			classification: false,
			recharge: false,
			withdraw: false,
		},
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
		closeRechargeDialog,
		openWithdrawDialog,
		closeWithdrawDialog
	};

	// message-popup -----Start
	function pop(title: string, message: string, closeText?: string, icontype?: string) {
		arr.value.push({ title, message, closeText, icontype });
		state.open.pop = true;
	}
	function close() {
		state.open.pop = false;
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

	function openRechargeDialog(target: rechargeTargetType) {
		closeRechargeDialog();
		state.target.recharge = target
		state.open.recharge = true;
	}
	function closeRechargeDialog() {
		state.target.recharge = '';
		state.open.recharge = false;
	}
	function openWithdrawDialog(target: withdrawTargetType) {
		closeWithdrawDialog();
		state.target.withdraw = target
		state.open.withdraw = true;
	}
	function closeWithdrawDialog() {
		state.target.withdraw = '';
		state.open.withdraw = false;
	}
});
