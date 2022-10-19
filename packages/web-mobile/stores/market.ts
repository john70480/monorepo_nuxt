import { ref, reactive, computed, toRefs } from 'vue';
import { defineStore } from 'pinia';

export const useMarket = defineStore('market', () => {
	// state
	const state = reactive({
		amountSettingOpen:false
	});

	return {
		...toRefs(state),
	};

});
