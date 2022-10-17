<template>
	<TgDialog v-model="openProxy">
		<v-card class="transaction">
			<v-card-title class="text-center">{{ title }}</v-card-title>
			<v-card-text class="pa-0">
				<div class="status  text-center py-5">
					<img :src="statusImg" />
				</div>
				<div class="info">
					<div class="game_title pl-0">
						<b>欧洲冠军联赛</b>
						<span>2020-10-15 23:30</span>
					</div>
					<div class="team_row border-bottom px-0">
						<div class="team_name">
							<b>华沙普洛克U19(主)</b>
							<b>洛兹U19</b>
						</div>
						<div class="guaranteed">保本</div>
					</div>

					<div class="d-flex justify-space-between">
						<b>单号</b>
						<b>
							<span>123123123123123123123123</span>
							<span class="text-red" v-if="auditFlag">(待确认)</span>
						</b>
					</div>
					<div class="d-flex justify-space-between">
						<b>金额</b>
						<b>10,000</b>
					</div>
					<div class="d-flex justify-space-between border-bottom pb-2">
						<b>获利率%</b>
						<b>X 12.6%</b>
					</div>
					<div class="d-flex justify-space-between">
						<b>预估获利</b>
						<b class="text-green">120,450.80</b>
					</div>
				</div>
				<v-row class="warn ma-1" v-if="failFlag">
					<v-col cols="12" class="text-red">
						<p>超过可用余额，99,999,00>98,000,00</p>
						<p>您尚有1,999,00金额被锁定</p>
					</v-col>
				</v-row>
				<v-row class="pa-2 action ">
					<v-col cols="12">
						<v-btn block class="bg-primary">前往下单明细</v-btn>
					</v-col>
					<v-col cols="12" class="banner text-center">
						<img src="@tg/web-mobile/assets/images/banner_black.png" />
					</v-col>
				</v-row>
			</v-card-text>
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
const status: statusMap = 1;
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
@import './assets/scss/market.scss';

.banner img {
	width: 95%;
}
</style>
