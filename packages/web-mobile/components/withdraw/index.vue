<template>
	<TgDialog v-model="dialogsStore.open.withdraw" type="fullscreen80">
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
export type withdrawTargetType = keyof typeof componentList
const ResetPassword = defineAsyncComponent(() => import('./reset-password.vue'));
const ForgetPassword = defineAsyncComponent(() => import('./forget-password.vue'));
const BindBank = defineAsyncComponent(() => import('./bind-bank.vue'));
const AddBank = defineAsyncComponent(() => import('./add-bank.vue'));
const AddpayAddress = defineAsyncComponent(() => import('./addpay-address.vue'));
const WithdrawSetting = defineAsyncComponent(() => import('./withdraw-setting.vue'));
const WithdrawUsdt = defineAsyncComponent(() => import('./withdraw-usdt.vue'));
const WithdrawBank = defineAsyncComponent(() => import('./withdraw-bank.vue'));

const componentList = {
	ResetPassword,//重设密码
	ForgetPassword,//忘記密碼
	BindBank,//添加银行卡
	AddBank,//
	AddpayAddress,//添加收款地址
	WithdrawSetting,//提领设定
	WithdrawUsdt,//提領ustd
	WithdrawBank,//提領中國銀行
}
</script>
<script lang="ts" setup>
const dialogsStore = useDialogs();

const componentId = computed(() => {
	if (dialogsStore.target.withdraw in componentList) {
		return markRaw(componentList[dialogsStore.target.withdraw as withdrawTargetType])
	}
	return markRaw(WithdrawBank)
})
</script>
