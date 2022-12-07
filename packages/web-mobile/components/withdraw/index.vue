<template>
	<TgDialog v-model="dialogsStore.withdrawOpen" type="fullscreen80">
		<component :is="componentId"></component>
	</TgDialog>
</template>
<script lang="ts">
export type componentListKeyType = keyof typeof componentList
const componentList = {
	ResetPassword,//重设密码
	ForgetPassword,//忘記密碼
	bindBank,//添加银行卡
	addBank,//
	addpayAddress,//添加收款地址
	withdrawSetting,//提领设定
	withdrawUsdt,//提領ustd
	withdrawBank,//提領中國銀行
}
</script>
<script lang="ts" setup>
import ResetPassword from "./reset-password.vue";
import ForgetPassword from "./forget-password.vue";
import bindBank from "./bind-bank.vue";
import addBank from "./add-bank.vue";
import addpayAddress from "./addpay-address.vue";
import withdrawSetting from "./withdraw-setting.vue";
import withdrawUsdt from "./withdraw-usdt.vue";
import withdrawBank from "./withdraw-bank.vue";

const dialogsStore = useDialogs();

const componentId = computed(() => {
	if (dialogsStore.withdraTarget in componentList) {
		return markRaw(componentList[dialogsStore.withdraTarget as componentListKeyType])
	}
	return markRaw(withdrawBank)
})
</script>
