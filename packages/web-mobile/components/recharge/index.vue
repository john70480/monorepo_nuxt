<template>
	<TgDialog v-model="dialogsStore.rechargeOpen" type="fullscreen80">
		<component :is="componentId"></component>
	</TgDialog>
</template>
<script lang="ts">
export type componentListKeyType = keyof typeof componentList
const componentList = {
	Register,//会员注册
	WeChatPay,//微信支付
	Transfer,//临柜汇款
	Transfer2,//临柜汇款 step2
	BankOnline,//网上银行
	BankOnline2,//网上银行 step2
	Alipay,//支付寶
	usdt,//泰达币(usdt)
	usdt2,//泰达币(usdt) step2
	usdt3,//泰达币(usdt) step3
	first,//尚未完成实名认证
}
</script>
<script lang="ts" setup>
import Register from "./register.vue";
import WeChatPay from "./wechat-pay.vue";
import Transfer from "./transfer.vue";
import Transfer2 from "./transfer_step2.vue";
import BankOnline from "./bank-online.vue";
import BankOnline2 from "./bank-online_step2.vue";
import Alipay from "./alipay.vue";
import usdt from "./usdt.vue";
import usdt2 from "./usdt_step2.vue";
import usdt3 from "./usdt_step3.vue";
import first from "./first.vue";

const dialogsStore = useDialogs();

const componentId = computed(() => {
	if (dialogsStore.rechargeTarget in componentList) {
		return markRaw(componentList[dialogsStore.rechargeTarget as componentListKeyType])
	}
	return markRaw(Register)
})
</script>
