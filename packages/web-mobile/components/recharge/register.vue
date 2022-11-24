<template>

	<v-card class="rechargeProp">
		<v-card-title>会员注册</v-card-title>
		<v-card-text class="px-2">
			<v-col cols="12" class="px-0 pt-0 text-center">
				汇款资讯-请完整填写以下资讯，以利完整充值申请
			</v-col>
			<v-col cols="12" class="px-0 pt-0">
				<tg-text-field v-model="account" :label="'您的支付宝账户'" :textBind="{ placeholder: '请输入您充值用的支付帐号' }">
				</tg-text-field>
			</v-col>
			<v-col cols="12" class="px-0 pt-0">
				<tg-text-field v-model="pushMoney" :label="'充值金额'" :textBind="{ placeholder: '充值金额:100~49,999' }">
				</tg-text-field>
			</v-col>
			<v-col cols="12" class="px-0 pt-0 text-red warn-text">
				提醒您：为保障双方帐户安全，请务必使用注册帐号时登记的真实户名进行打款，如使用注册帐号登记以外之姓名打款，将无法上分，且由此造成的损失，平台概不负责。
			</v-col>

		</v-card-text>
		<v-card-actions class="pb-8">
			<v-btn block class="btn-submit bg-primary">送出</v-btn>
		</v-card-actions>
	</v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';


const account: Ref<string> = ref('');
const pushMoney: Ref<string> = ref('');

</script>

<style lang="scss" scoped>

</style>
