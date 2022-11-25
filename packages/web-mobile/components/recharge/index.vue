<template>
	<TgDialog v-model="openProxy" type="fullscreen80">
		<component :is="componentId"></component>
	</TgDialog>
</template>
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
const componentList = {
	Register,
	WeChatPay,
	Transfer,
	Transfer2,
	BankOnline,
	BankOnline2,
	Alipay,
	usdt,
	usdt2,
	usdt3,
	first
}
const props = defineProps<{
	open: boolean,
	target: keyof typeof componentList,
}>();
const emit = defineEmits<{
	(event: 'update:open', payload: boolean): void
}>();
const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
const componentId = computed(() => {
	if (props.target in componentList) {
		return markRaw(componentList[props.target])
	}
	return markRaw(test)
})
</script>
<style lang="scss" scoped>

</style>