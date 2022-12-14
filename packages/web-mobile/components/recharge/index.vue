<template>
	<TgDialog v-model="dialogsStore.rechargeOpen" type="fullscreen80">
		<Suspense :timeout="0">
			<template #default>
				<component :is="componentId"></component>
			</template>
			<template #fallback>
				<TgLoading></TgLoading>
			</template>
		</Suspense>
	</TgDialog>
</template>
<script lang="ts">
export type componentListKeyType = keyof typeof componentList

const Register = defineAsyncComponent(() => import('./register.vue'));
const WeChatPay = defineAsyncComponent(() => import('./wechat-pay.vue'));
const Transfer = defineAsyncComponent(() => import('./transfer.vue'));
const Transfer2 = defineAsyncComponent(() => import('./transfer_step2.vue'));
const BankOnline = defineAsyncComponent(() => import('./bank-online.vue'));
const BankOnline2 = defineAsyncComponent(() => import('./bank-online_step2.vue'));
const AliPay = defineAsyncComponent(() => import('./alipay.vue'));
const Usdt = defineAsyncComponent(() => import('./usdt.vue'));
const Usdt2 = defineAsyncComponent(() => import('./usdt_step2.vue'));
const Usdt3 = defineAsyncComponent(() => import('./usdt_step3.vue'));
const First = defineAsyncComponent(() => import('./first.vue'));
const componentList = {
	Register,//会员注册
	WeChatPay,//微信支付
	Transfer,//临柜汇款
	Transfer2,//临柜汇款 step2
	BankOnline,//网上银行
	BankOnline2,//网上银行 step2
	AliPay,//支付寶
	Usdt,//泰达币(usdt)
	Usdt2,//泰达币(usdt) step2
	Usdt3,//泰达币(usdt) step3
	First,//尚未完成实名认证
}
</script>
<script lang="ts" setup>

const dialogsStore = useDialogs();

const componentId = computed(() => {
	if (dialogsStore.rechargeTarget in componentList) {
		return markRaw(componentList[dialogsStore.rechargeTarget as componentListKeyType])
	}
	return markRaw(Register)
})
</script>
