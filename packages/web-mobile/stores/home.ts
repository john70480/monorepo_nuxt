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

export function getSiteListMap() {
	// const t = useI18n();
	const categoryMap = computed<{ [key: string]: { text: string, logo: string, banner: string, comming: boolean } }>(() => {
		// const settings = useSettings()
		const en = "";
		return {
			sports: { text: 't.c_text_50002', logo: "icon_entertainment_sports.png", banner: `sports${en}.png`, comming: false },
			casinos: { text: 't.c_text_50003', logo: "icon_entertainment_real.png", banner: `casinos${en}.png`, comming: false },
			pokers: { text: 't.c_text_50004', logo: "icon_entertainment_chess.png", banner: `pokers${en}.png`, comming: false },
			gaming: { text: 't.c_text_50005', logo: "icon_entertainment_electronic.png", banner: `gaming${en}.png`, comming: false },
			lotteries: { text: 't.c_text_50006', logo: "icon_entertainment_lottery.png", banner: `lotteries${en}.png`, comming: false },
			esports: { text: 't.c_text_50007', logo: "icon_entertainment_gaming.png", banner: `esports${en}.png`, comming: true },
		}
	})
	const platformMap: { [key: string]: { text: string, desc: string, logo: string, banner: string, class: string, new: boolean } } = {
		saba: { text: 't.c_text_50009', desc: 't.f_text_50002', logo: "platform_saba_logo.png", banner: getplatformPath("banner-sports-0.png"), class: "sport", new: true },
		im_sport: { text: 't.c_text_50145', desc: 't.c_text_50146', logo: "platform_imsport_logo.png", banner: getplatformPath("banner-sports-1.png"), class: "sport", new: true },
		ob_sport: { text: 't.c_text_50135', desc: 't.c_text_50136', logo: "platform_obsports_logo.png", banner: getplatformPath("banner-sports-2.png"), class: "sport", new: true },
		ai_sport: { text: 't.c_text_50153', desc: 't.c_text_50154', logo: "platform_aisports_logo.png", banner: getplatformPath("banner-sports-3.png"), class: "sport", new: true },
		ag_casino: { text: 't.c_text_50063', desc: 't.c_text_50064', logo: "platform_agcasino_logo.png", banner: getplatformPath("banner-casinos-0.png"), class: "casino", new: true },
		wm_casino: { text: 't.c_text_50010', desc: 't.f_text_50002', logo: "platform_wm_logo.png", banner: getplatformPath("banner-casinos-1.png"), class: "casino", new: true },
		ob_casino: { text: 't.c_text_50060', desc: 't.c_text_50061', logo: "platform_obreal_logo.png", banner: getplatformPath("banner-casinos-2.png"), class: "casino", new: true },
		allbet_casino: { text: 't.c_text_50142', desc: 't.c_text_50143', logo: "platform_allbetcasino_logo.png", banner: getplatformPath("banner-casinos-3.png"), class: "casino", new: true },
		bg_casino: { text: 't.c_text_50182', desc: 't.c_text_50183', logo: "platform_bgcasino_logo.png", banner: getplatformPath("banner-casinos-4.png"), class: "casino", new: true },
		dg_casino: { text: 't.c_text_50185', desc: 't.c_text_50186', logo: "platform_dgcasino_logo.png", banner: getplatformPath("banner-casinos-5.png"), class: "casino", new: true },
		bbin_casino: { text: 't.c_text_50129', desc: 't.c_text_50130', logo: "platform_bbincasino_logo.png", banner: getplatformPath("banner-casinos-6.png"), class: "casino", new: true },
		ky_poker: { text: 't.c_text_50069', desc: 't.c_text_50070', logo: "platform_kychess_logo.png", banner: getplatformPath("banner-pokers-0.png"), class: "poker", new: true },
		ob_poker: { text: 't.c_text_50056', desc: 't.c_text_50100', logo: "platform_obchess_logo.png", banner: getplatformPath("banner-pokers-1.png"), class: "poker", new: true },
		kx_poker: { text: 't.c_text_50148', desc: 't.c_text_50149', logo: "platform_kxchess_logo.png", banner: getplatformPath("banner-pokers-2.png"), class: "poker", new: true },
		ly_poker: { text: 't.c_text_50072', desc: 't.c_text_50073', logo: "platform_legchess_logo.png", banner: getplatformPath("banner-pokers-3.png"), class: "poker", new: true },
		mt_poker: { text: 't.c_text_50170', desc: 't.c_text_50171', logo: "platform_mtchess_logo.png", banner: getplatformPath("banner-pokers-4.png"), class: "poker", new: true },
		pg_gaming: { text: 't.c_text_50190', desc: 't.c_text_50191', logo: "platform_pg_gaming_logo.png", banner: getplatformPath("banner-gaming-0.png"), class: "gaming", new: true },
		mg_gaming: { text: 't.c_text_50193', desc: 't.c_text_50194', logo: "platform_mg_gaming_logo.png", banner: getplatformPath("banner-gaming-1.png"), class: "gaming", new: true },
		pt_gaming: { text: 't.c_text_50196', desc: 't.c_text_50197', logo: "platform_pt_gaming_logo.png", banner: getplatformPath("banner-gaming-2.png"), class: "gaming", new: true },
		jdb_gaming: { text: 't.c_text_50104', desc: 't.c_text_50105', logo: "platform_jdb_gaming_logo.png", banner: getplatformPath("banner-gaming-3.png"), class: "gaming", new: true },
		cq9_gaming: { text: 't.c_text_50107', desc: 't.c_text_50108', logo: "platform_cq9_gaming_logo.png", banner: getplatformPath("banner-gaming-4.png"), class: "gaming", new: true },
		sgwin_lottery: { text: 't.c_text_50120', desc: 't.c_text_50121', logo: "platform_slottery_logo.png", banner: getplatformPath("banner-lotteries-0.png"), class: "lotteries", new: true },
		ob_lottery: { text: 't.c_text_50117', desc: 't.c_text_50118', logo: "platform_oblottery_logo.png", banner: getplatformPath("banner-lotteries-1.png"), class: "lotteries", new: true },
	}
	function getplatformPath(path: string) {
		return new URL(`/images/platform/${path}`, import.meta.url).href
	}
	return { platformMap, categoryMap }
}
export type categoryType = { thirdPartyType: string, thirdPartyCategory: string };
// 平台維護狀態(0:正常 1:維護)
export type platformType = { thirdPartyCode: string, thirdPartyName: string, siteStatus: 0 | 1, time: string }
export type siteListPlatformType = {
	[key: string]: {
		[key: string]: platformType[]
	}
}