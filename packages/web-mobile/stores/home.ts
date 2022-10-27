import { ref, reactive, computed, toRefs } from 'vue';
import { defineStore } from 'pinia';

export const useHome = defineStore('mobile-home', () => {
	const api = useNuxtApp().$api()

	type siteListType = AwaitFunction<() => ReturnType<typeof api.tg.getApiIntegrationNoticeSiteList>>['Payload']
	// state
	const state = reactive({
		siteList: <null | siteListType>null,
	});

	//action
	async function getSiteList() {
		if (state.siteList === null) {
			await useAsyncData('siteList',
				() => api.tg.getApiIntegrationNoticeSiteList({}),
				{
					transform: (data) => {
						const { StatusCode, Payload } = data;
						if (StatusCode === 0) {
							state.siteList = Payload;
						}
						return data;
					},
				}
			);
		}
		return state.siteList
	}


	return {
		...toRefs(state),
		getSiteList,
	};

});
