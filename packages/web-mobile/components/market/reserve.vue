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

					<v-col cols="4">获利区间</v-col>
					<v-col cols="8" class="text-right">8.51%~10.51%</v-col>
					<template v-if="successFlag">
						<v-col cols="4">交易金额</v-col>
						<v-col cols="8" class="text-right">10,000</v-col>

						<v-col cols="4">预估获利</v-col>
						<v-col cols="8" class="text-right">8,888.88~9,999.99</v-col>
					</template>
				</v-row>
				<v-row class="warn" v-if="failFlag">
					<v-col cols="12">
						超过可用余额，99,999,00>98,000,00
						您尚有1,999,00金额被锁定
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<v-btn block color="primary">前往下单明细</v-btn>
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
};
const status: statusMap = 1;
const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
const statusImg = computed(() => {
	const { success, fail } = statusMap
	let img = ''
	switch (status) {
		case success:
			img = 'success.svg'
			break;
		case fail:
			img = 'fail.svg'
			break;
		default:
			img = 'fail.svg'
			break;
	}
	return new URL('../../assets/images/' + img, import.meta.url).href
})
const title = computed(() => {
	const { success, fail } = statusMap
	let text = '';
	switch (status) {
		case success:
			text = '预约成功'
			break;
		case fail:
			text = '预约失败'
			break;
		default:
			text = '预约失败'
			break;
	}
	return text;
})
const successFlag = computed(() => [statusMap.success].includes(status))
const failFlag = computed(() => [statusMap.fail].includes(status))
</script>

<style lang="scss" scoped>
.transaction {
	.info {
		background: #eef4f8;
	}
}
</style>
