<template>
	<div class="rechargePage">
		<TgTabs v-model="tab">
			<v-tab v-for="item in items" :key="item" hide-slider>
				{{ item }}
			</v-tab>

		</TgTabs>

		<v-row class="helpHeader py-2" no-gutters>
			<v-col class="pl-2 helpHeaderText">此标记为 「需支付手续费」</v-col>
			<v-col class="text-right pr-2">
				<div class="icon-warns d-inline-block mr-3"></div>
				<div class="icon-questions d-inline-block"></div>
			</v-col>
		</v-row>
		<v-window v-model="tab" class="fill-height">
			<v-window-item class="fill-height">
				<Method :list="payload"></Method>
			</v-window-item>
			<v-window-item class="fill-height">
				<Method :list="payload2"></Method>
			</v-window-item>
		</v-window>


	</div>
</template>
<script setup lang="ts">
import Method from "./method.vue";
const ustdLogo0 = new URL('../../assets/images/recharge/ustd0.png', import.meta.url).href
const ustdLogo1 = new URL('../../assets/images/recharge/ustd1.png', import.meta.url).href
const ustdLogo2 = new URL('../../assets/images/recharge/ustd2.png', import.meta.url).href
const ustdLogo3 = new URL('../../assets/images/recharge/ustd3.png', import.meta.url).href

const methodLogo0 = new URL('../../assets/images/recharge/pay0.png', import.meta.url).href
const methodLogo1 = new URL('../../assets/images/recharge/pay1.png', import.meta.url).href
const methodLogo2 = new URL('../../assets/images/recharge/pay2.png', import.meta.url).href
const methodLogo3 = new URL('../../assets/images/recharge/pay3.png', import.meta.url).href
const methodLogo4 = new URL('../../assets/images/recharge/pay4.png', import.meta.url).href

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
	isMainPage: true
});
const tab = ref(0);
const items = ['数字货币渠道', '常用入款渠道']

</script>
<style lang="scss" scoped>
/*充值*/
.helpHeader {
	background-color: #587eb0;

	.helpHeaderText {
		color: #fff;
		font-size: 0.8rem;

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
}
</style>
