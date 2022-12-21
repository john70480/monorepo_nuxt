<template>
	<div class="fill-height">
		<div class="rechargePage">
			<TgTabs v-model="tab">
				<v-tab v-for="(item, index) in items" :key="item" hide-slider>
					{{ item }}
				</v-tab>

			</TgTabs>
			<v-row class="helpHeader align-center" no-gutters v-if="tab == 0">
				<v-col class="pl-2 helpHeaderText" cols="auto">

					<v-row no-gutters class="align-center">
						<v-col cols="auto">
							<TgSwitchs v-model="autoTransfer" type="inBar" :switchBind="{
								inset: true
							}"></TgSwitchs>
						</v-col>
						<v-col cols="auto" class="ml-2">免转钱包<br>自动转入转出，免去转账烦恼</v-col>
					</v-row>



				</v-col>
				<v-col class="text-right pr-2">
					<img class="filter ma-2" src="@tg/web-mobile/assets/images/filter_btn.png"
						@click="chooseFilterOpen = true">
					<img class="filter ma-2" src="@tg/web-mobile/assets/images/function_btn.png"
						@click="service = true">
				</v-col>
			</v-row>
			<Method :list="payload" v-if="tab == 0" :target="filterTarget"></Method>
			<Mutual v-if="tab == 1"></Mutual>
		</div>

		<TransferConfirmTransfer v-model:open="confirmTransfer"></TransferConfirmTransfer>
		<TransferFilter v-model:assets-open="chooseFilterOpen" :list="payload" v-model:listTarget="filterTarget">
		</TransferFilter>
		<TransferComplete v-model:open="complete"></TransferComplete>
		<TransferConfirmContent v-model:open="confirmContent"></TransferConfirmContent>
		<TransferService v-model:open="service"></TransferService>
	</div>

</template>
<script setup lang="ts">

import Method from "./method.vue";
import Mutual from "./mutual.vue";
const wallet0 = new URL('../../assets/images/transfer/tg_coin_ic.png', import.meta.url).href
const wallet1 = new URL('../../assets/images/transfer/lockwallet_ic.png', import.meta.url).href

const sport0 = new URL('../../assets/images/transfer/saba_sports_logo_ic.png', import.meta.url).href
const sport1 = new URL('../../assets/images/transfer/ob_sports_logo_ic.png', import.meta.url).href
const sport2 = new URL('../../assets/images/transfer/ai_sports_logo_ic.png', import.meta.url).href
const sport3 = new URL('../../assets/images/transfer/im_sports_logo_ic.png', import.meta.url).href

const casino0 = new URL('../../assets/images/transfer/wm_casino_logo_ic.png', import.meta.url).href
const casino1 = new URL('../../assets/images/transfer/ob_casino_logo_ic.png', import.meta.url).href
const casino2 = new URL('../../assets/images/transfer/ag_casino_logo_ic.png', import.meta.url).href
const casino3 = new URL('../../assets/images/transfer/ae_casino_logo_ic.png', import.meta.url).href
const casino4 = new URL('../../assets/images/transfer/allbet_casino_logo_ic.png', import.meta.url).href
const casino5 = new URL('../../assets/images/transfer/bbin_casino_logo_ic.png', import.meta.url).href
const casino6 = new URL('../../assets/images/transfer/bg_casino_logo_ic.png', import.meta.url).href
const casino7 = new URL('../../assets/images/transfer/dg_casino_logo_ic.png', import.meta.url).href

const card0 = new URL('../../assets/images/transfer/ob_chess_logo_ic.png', import.meta.url).href
const card1 = new URL('../../assets/images/transfer/ky_chess_logo_ic.png', import.meta.url).href
const card2 = new URL('../../assets/images/transfer/leg_chess_logo_ic.png', import.meta.url).href
const card3 = new URL('../../assets/images/transfer/kx_chess_logo_ic.png', import.meta.url).href
const card4 = new URL('../../assets/images/transfer/mt_chess_logo_ic.png', import.meta.url).href

const slot0 = new URL('../../assets/images/transfer/cg9_electronic_logo_ic.png', import.meta.url).href
const slot1 = new URL('../../assets/images/transfer/jdb_electronic_logo_ic.png', import.meta.url).href
const slot2 = new URL('../../assets/images/transfer/pt_electronic_logo_ic.png', import.meta.url).href
const slot3 = new URL('../../assets/images/transfer/mg_electronic_logo_ic.png', import.meta.url).href
const slot4 = new URL('../../assets/images/transfer/pg_electronic_logo_ic.png', import.meta.url).href

const lottery0 = new URL('../../assets/images/transfer/ob_lottery_logo_ic.png', import.meta.url).href
const lottery1 = new URL('../../assets/images/transfer/sgwin_lottery_logo_ic.png', import.meta.url).href


const autoTransfer = ref(false)//switch
const confirmTransfer = ref(false)//交易頁面
const chooseFilterOpen = ref(false)//篩選頁面
const filterTarget = ref('all')//篩選預設
const complete = ref(false)//交易完成
const confirmContent = ref(false)//确认户转内容
const service = ref(false)//聯絡客服

const payload = ref({
	'钱包金额': [{ images: wallet0, text: '888,888,888.00' }, { images: wallet1, text: '888,888,888.00' }],
	'体育': [{ images: sport0, text: '888,888,888.00' }, { images: sport1, text: '888,888,888.00' }, { images: sport2, text: '888,888,888.00' }, { images: sport3, text: '888,888,888.00' }],
	'真人': [{ images: casino0, text: '888,888,888.00' }, { images: casino1, text: '888,888,888.00' }, { images: casino2, text: '888,888,888.00' }, { images: casino3, text: '888,888,888.00' }, { images: casino4, text: '888,888,888.00' }, { images: casino5, text: '888,888,888.00' }, { images: casino6, text: '888,888,888.00' }, { images: casino7, text: '888,888,888.00' }],
	'棋牌': [{ images: card0, text: '888,888,888.00' }, { images: card1, text: '888,888,888.00' }, { images: card2, text: '888,888,888.00' }, { images: card3, text: '888,888,888.00' }, { images: card4, text: '888,888,888.00' }],
	'电子': [{ images: slot0, text: '888,888,888.00' }, { images: slot1, text: '888,888,888.00' }, { images: slot2, text: '888,888,888.00' }, { images: slot3, text: '888,888,888.00' }, { images: slot4, text: '888,888,888.00' }],
	'彩票': [{ images: lottery0, text: '888,888,888.00' }, { images: lottery1, text: '888,888,888.00' }],
	'电竞': [{ images: '', text: '888,888,888.00' }],
})

watch(filterTarget, (nv, ov) => {
	chooseFilterOpen.value = false
})


definePageMeta({
	title: "转帐",
});
const tab = ref(0);
const items = ['游戏转帐', '会员互转']

</script>
<style lang="scss" scoped>
/*充值*/
.helpHeader {
	background-color: #587eb0;

	.helpHeaderText {
		color: #fff;
		font-size: 0.8rem;
	}
}

.rechargeProp {
	height: calc(100% - 100px);

	.nodataImg {
		width: 100%;
	}

	.centerRow {
		height: 100%;
		align-content: center
	}
}

.filter {
	height: 25px;
	width: 25px;
}
</style>
