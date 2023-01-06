<template>
	<v-container class="px-0 pt-0 overflow-y-auto flex-1 classification-wrap">
		<v-row class="helpHeader align-center" no-gutters>
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
				<img class="filter ma-2" src="@tg/web-mobile/assets/images/filter_btn.png" @click="chooseFilterOpen = true">
				<img class="filter ma-2" src="@tg/web-mobile/assets/images/function_btn.png" @click="service = true">
			</v-col>
		</v-row>
		<TgCard v-for=" (item, index) in list" :key="index" :title="index" class="classification-content"
			:cardBind="{ variant: 'text' }" v-show="filterTarget == 'all' || index == filterTarget">
			<v-row>
				<TgItemImage v-for="(list, index) in item" :key="index" :imgBind="{ src: list.images }" contentClass="mx-1 pa-2"
					class="px-0 py-2" col="6">
					{{ list.text }}
				</TgItemImage>
			</v-row>
		</TgCard>
		<TransferFilter v-model:assets-open="chooseFilterOpen" :list="list" v-model:listTarget="filterTarget">
		</TransferFilter>
		<TransferService v-model:open="service"></TransferService>
	</v-container>

</template>

<script lang="ts" setup>

const autoTransfer = ref(false)//switch
const chooseFilterOpen = ref(false)//篩選頁面
const service = ref(false)//聯絡客服
const filterTarget = ref('all')//篩選預設

watch(filterTarget, (nv, ov) => {
	chooseFilterOpen.value = false
})
const list = {
	'钱包金额': [
		{ images: getTransferImgUrl('tg_coin_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('lockwallet_ic.png'), text: '888,888,888.00' }],
	'体育': [
		{ images: getTransferImgUrl('saba_sports_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('ob_sports_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('ai_sports_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('im_sports_logo_ic.png'), text: '888,888,888.00' }],
	'真人': [
		{ images: getTransferImgUrl('wm_casino_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('ob_casino_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('ag_casino_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('ae_casino_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('allbet_casino_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('bbin_casino_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('bg_casino_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('dg_casino_logo_ic.png'), text: '888,888,888.00' }
	],
	'棋牌': [
		{ images: getTransferImgUrl('ob_chess_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('ky_chess_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('leg_chess_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('kx_chess_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('mt_chess_logo_ic.png'), text: '888,888,888.00' }
	],
	'电子': [
		{ images: getTransferImgUrl('cg9_electronic_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('jdb_electronic_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('pt_electronic_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('mg_electronic_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('pg_electronic_logo_ic.png'), text: '888,888,888.00' }
	],
	'彩票': [
		{ images: getTransferImgUrl('ob_lottery_logo_ic.png'), text: '888,888,888.00' },
		{ images: getTransferImgUrl('sgwin_lottery_logo_ic.png'), text: '888,888,888.00' }
	],
	'电竞': [
		{ images: '', text: '888,888,888.00' }
	],
}
</script>
<script lang="ts">
function getTransferImgUrl(img: string) {
	return new URL(`../../assets/images/transfer/${img}`, import.meta.url).href
}
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

.filter {
	height: 25px;
	width: 25px;
}
</style>