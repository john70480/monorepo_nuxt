<template>
	<div class="fill-height">
		<div class="rechargePage">
			<TgTabs v-model="tab">
				<v-tab v-for="(item, index) in items" :key="item" hide-slider>
					<div>{{ item }}<img src="~/assets/images/icon/new.svg" class="newIcon" v-if="(index == 0)" /></div>
				</v-tab>

			</TgTabs>
			<v-row class="helpHeader py-2" no-gutters>
				<v-col class="pl-2 helpHeaderText">此标记为 「需支付手续费」</v-col>
				<v-col class="text-right pr-2">
					<div class="icon-warns d-inline-block mr-3" @click="howOpen = true"></div>
					<div class="icon-questions d-inline-block" @click="noticeOpen = true"></div>
				</v-col>
			</v-row>
			<!--<v-window v-model="tab" class="fill-height" v-if="!nodata">
				<v-window-item class="fill-height">
					<Method :list="payload"></Method>
				</v-window-item>
				<v-window-item class="fill-height">
					<Method :list="payload2"></Method>
				</v-window-item>
			</v-window>-->
			<TgSwiperCard :list="payload" v-if="tab == 0"></TgSwiperCard>
			<TgSwiperCard :list="payload2" v-if="(tab == 1)"></TgSwiperCard>
		</div>
		<div class="rechargeProp" v-if="nodata">
			<v-row no-gutters class="px-2 centerRow">
				<v-col cols="12" class="text-center">XXXXXXXXXXXXXXX</v-col>
				<v-col cols="12"><img src="@tg/web-mobile/assets/images/recharge/nodata.png"
						class="nodataImg" /></v-col>
				<v-col cols="12" class="warn-text text-center">XXXXXXXXXXXXXXX</v-col>
			</v-row>

		</div>
		<LazyRechargeNotice v-model:open="noticeOpen" />
		<LazyRechargeHowTo v-model:open="howOpen" />
		<LazyRecharge />
	</div>

</template>
<script setup lang="ts">
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
const noticeOpen = ref(false)
const howOpen = ref(false)

const payload2 = ref({
	'电子支付': [{ images: methodLogo0, text: '支付宝' }, { images: methodLogo1, text: '微信支付' }],
	'网路支付': [{ images: methodLogo2, text: '网上银行' }, { images: methodLogo3, text: '人民币' }],
	'实体支付': [{ images: methodLogo4, text: '临柜汇款' }],
})
const payload = ref({
	a: [{ images: ustdLogo0, text: '泰达币1(usdt)' }, { images: ustdLogo1, text: '泰达币2(usdt)' }, { images: ustdLogo2, text: '泰达币3(usdt)' }, { images: ustdLogo3, text: '泰达币4(usdt)' }],
	b: [{ images: ustdLogo0, text: '泰达币1(usdt)' }, { images: ustdLogo1, text: '泰达币2(usdt)' }, { images: ustdLogo2, text: '泰达币3(usdt)' }, { images: ustdLogo3, text: '泰达币4(usdt)' }],
	c: [{ images: ustdLogo0, text: '泰达币1(usdt)' }, { images: ustdLogo1, text: '泰达币2(usdt)' }, { images: ustdLogo2, text: '泰达币3(usdt)' }, { images: ustdLogo3, text: '泰达币4(usdt)' }],
	d: [{ images: ustdLogo0, text: '泰达币1(usdt)' }, { images: ustdLogo1, text: '泰达币2(usdt)' }, { images: ustdLogo2, text: '泰达币3(usdt)' }, { images: ustdLogo3, text: '泰达币4(usdt)' }],
})

definePageMeta({
	title: "充值",
});
const tab = ref(0);
const items = ['数字货币渠道', '常用入款渠道']

</script>
<style lang="scss" scoped>
/*充值*/


.helpHeaderText {

	&::before {
		content: '';
		width: 6px;
		height: 6px;
		margin-right: 5px;
		border-radius: 50%;
		background: linear-gradient(to bottom, #ea7dff, #9c5cef);
		display: inline-block;
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
