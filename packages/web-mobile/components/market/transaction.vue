<template>
	<TgDialog v-model="openProxy">
		<v-card class="transaction">
			<v-card-title class="text-center">{{ title }}</v-card-title>
			<v-container>
				<v-row class="justify-center">
					<img :src="statusImg" />
				</v-row>
				<v-row class="info">
					<v-col cols="12" class="game_title">
						<b>欧洲冠军联赛</b>
						<span>2020-10-15 23:30</span>
					</v-col>
					<v-col cols="12" class="team_row">
						<div class="team_name">
							<b>华沙普洛克U19(主)</b>
							<b>洛兹U19</b>
						</div>
						<div class="guaranteed">保本</div>
					</v-col>
					<v-col cols="4">单号</v-col>
					<v-col cols="8" class="text-right">
						<span>123123123123123123123123</span>
						<span class="audit" v-if="auditFlag">(待确认)</span>
					</v-col>
					<v-col cols="4">金额</v-col>
					<v-col cols="8" class="text-right">10,000</v-col>
					<v-col cols="4">获利率%</v-col>
					<v-col cols="8" class="text-right">X 12.6%</v-col>

					<v-col cols="4">预估获利</v-col>
					<v-col cols="8" class="text-right">120,450.80</v-col>
				</v-row>
				<v-row class="warn" v-if="failFlag">
					<v-col cols="12">
						超过可用余额，99,999,00>98,000,00
						您尚有1,999,00金额被锁定
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<v-btn block color="primary">前往交易明细</v-btn>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<img src="@tg/web-mobile/assets/images/banner_black.png" />
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</TgDialog>
</template>
<script lang="ts" setup>
const props = defineProps<{
	open: boolean,
}>();
const emit = defineEmits<{
	(event: 'update:open', payload: boolean): void
}>();
enum statusMap {
	success = 0,
	fail = 1,
	audit = 2
};
const status: statusMap = 2;
const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
const statusImg = computed(() => {
	const { success, fail, audit } = statusMap
	let img = ''
	switch (status) {
		case success:
			img = 'success.svg'
			break;
		case fail:
			img = 'fail.svg'
			break;
		case audit:
			img = 'audit.png'
			break;
		default:
			img = 'audit.png'
			break;
	}
	return new URL('../../assets/images/' + img, import.meta.url).href
})
const title = computed(() => {
	const { success, fail, audit } = statusMap
	let text = '';
	switch (status) {
		case success:
			text = '交易成功'
			break;
		case fail:
			text = '交易失败'
			break;
		case audit:
			text = '交易审核中'
			break;
		default:
			text = '交易失败'
			break;
	}
	return text;
})
const auditFlag = computed(() => [statusMap.fail, statusMap.audit].includes(status))
const failFlag = computed(() => [statusMap.fail].includes(status))
</script>

<style lang="scss" scoped>
.transaction {
	.info {
		background: #eef4f8;
	}
}
</style>
