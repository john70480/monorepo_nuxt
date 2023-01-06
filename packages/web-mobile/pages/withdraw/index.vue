<template>
	<div class="fill-height">
		<div class="rechargePage">
			<TgTabs v-model="tab">
				<v-tab v-for="(item, index) in items" :key="item" hide-slider>
					<div>{{ item }}<img src="~/assets/images/icon/new.svg" class="newIcon" v-if="(index == 0)" /></div>
				</v-tab>

			</TgTabs>
			<v-row class="helpHeader py-2" no-gutters>
				<v-col class="pl-2 helpHeaderText">
					<!-- <div @click="moreOpen = true" class="d-inline-block">了解更多</div> -->
					<div @click="router.push('/withdraw/howToUsdt')" class="d-inline-block">了解更多</div>
				</v-col>
				<v-col class="text-right pr-2">

					<div class="icon-questions d-inline-block" @click="remindOpen = true"></div>
				</v-col>
			</v-row>
			<TgSwiperCard :list="payload" v-if="tab == 0"></TgSwiperCard>
			<TgSwiperCard :list="payload2" v-if="(tab == 1)"></TgSwiperCard>
		</div>
		<div class="rechargeProp" v-if="nodata">
			<v-row no-gutters class="px-2 centerRow">
				<v-col cols="12" class="text-center">XXXXXXXXXXXXXXX</v-col>
				<v-col cols="12"><img src="@tg/web-mobile/assets/images/recharge/nodata.png" class="nodataImg" /></v-col>
				<v-col cols="12" class="warn-text text-center">XXXXXXXXXXXXXXX</v-col>
			</v-row>

		</div>
		<WithdrawMoreDialog v-model:open="moreOpen"></WithdrawMoreDialog>
		<WithdrawRemindDialog v-model:open="remindOpen"></WithdrawRemindDialog>
	</div>

</template>
<script setup lang="ts">
const addIcon = new URL('../../assets/images/pay/add.png', import.meta.url).href

const ustdLogo0 = new URL('../../assets/images/pay/ustd0.png', import.meta.url).href
const ustdLogo1 = new URL('../../assets/images/pay/ustd1.png', import.meta.url).href
const ustdLogo2 = new URL('../../assets/images/pay/ustd2.png', import.meta.url).href
const ustdLogo3 = new URL('../../assets/images/pay/ustd3.png', import.meta.url).href

const methodLogo0 = new URL('../../assets/images/pay/pay0.png', import.meta.url).href
const methodLogo1 = new URL('../../assets/images/pay/pay1.png', import.meta.url).href
const methodLogo2 = new URL('../../assets/images/pay/pay2.png', import.meta.url).href
const methodLogo3 = new URL('../../assets/images/pay/pay3.png', import.meta.url).href
const methodLogo4 = new URL('../../assets/images/pay/pay4.png', import.meta.url).href

const nodata = ref(false)
const moreOpen = ref(false)
const remindOpen = ref(false)
const router = useRouter()

const payload2 = ref({
	'电子支付': [{ images: addIcon, text: '添加收款地址' }, { images: methodLogo0, text: '支付宝' }, { images: methodLogo1, text: '微信支付' }],
	'网路支付': [{ images: addIcon, text: '添加收款地址' }, { images: methodLogo2, text: '网上银行' }, { images: methodLogo3, text: '人民币' }],
	'实体支付': [{ images: addIcon, text: '添加收款地址' }, { images: methodLogo4, text: '临柜汇款' }],
})
const payload = ref({
	a: [{ images: addIcon, text: '添加收款地址' }, { images: ustdLogo0, text: '泰达币1(usdt)' }, { images: ustdLogo1, text: '泰达币2(usdt)' }, { images: ustdLogo2, text: '泰达币3(usdt)' }, { images: ustdLogo3, text: '泰达币4(usdt)' }],
	b: [{ images: addIcon, text: '添加收款地址' }, { images: ustdLogo0, text: '泰达币1(usdt)' }, { images: ustdLogo1, text: '泰达币2(usdt)' }, { images: ustdLogo2, text: '泰达币3(usdt)' }, { images: ustdLogo3, text: '泰达币4(usdt)' }],
	c: [{ images: addIcon, text: '添加收款地址' }, { images: ustdLogo0, text: '泰达币1(usdt)' }, { images: ustdLogo1, text: '泰达币2(usdt)' }, { images: ustdLogo2, text: '泰达币3(usdt)' }, { images: ustdLogo3, text: '泰达币4(usdt)' }],
	d: [{ images: addIcon, text: '添加收款地址' }, { images: ustdLogo0, text: '泰达币1(usdt)' }, { images: ustdLogo1, text: '泰达币2(usdt)' }, { images: ustdLogo2, text: '泰达币3(usdt)' }, { images: ustdLogo3, text: '泰达币4(usdt)' }],
})

definePageMeta({
	title: "提领",
});
const tab = ref(0);
const items = ['数字货币渠道', '中国银联提款']

</script>
<style lang="scss" scoped>
/*充值*/
.helpHeader {
	background-color: #587eb0;

	.helpHeaderText {
		color: #fff;
		font-size: 0.8rem;

		&::before {
			content: '? ';

		}
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

.newIcon {
	height: 10px;
	position: absolute;
	top: 5px;
}
</style>
