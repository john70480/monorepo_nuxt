<template>
	<TgDialog v-model="openProxy" type="fullscreen">
		<v-card>
			<v-card-title>交易量明细</v-card-title>
			<div class="team-info team_row">
				<b>欧洲冠军联赛</b>
				<div class="team_name">
					<b>华沙普洛克U19(主)</b>
					<b>洛兹U19</b>
				</div>
			</div>
			<div class="text-right border-bottom pa-2">
				<b>總成交量:210,000,000</b>
			</div>
			<v-container class="odds-wrap overflow-y-auto">
				<v-row v-for="item in 20">
					<v-col cols="2" class="odds-score text-center">0-0</v-col>
					<v-col cols="10" class="odds-progress-wrap">
						<v-row>
							<v-col cols="8">
								<tg-progress-linear v-model="power"></tg-progress-linear>
							</v-col>
							<v-col cols="4" class="text-right">
								<b>5000</b>
							</v-col>
						</v-row>
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
const power = ref(81);
const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
</script>
<style lang="scss" scoped>
.team-info {
	display: flex;
	flex-direction: column;
	gap: 5px;
	background-image: var(--tg-bg-1);
	color: #fff;
}

.odds-wrap {
	>.v-row:first-child {
		.v-col {
			padding-top: 20px;
			align-items: end;
		}
	}

	.odds-score {
		display: flex;
		align-items: end;
	}

	.odds-progress-wrap {
		background-image: linear-gradient(to right, #EDE9E0, #FEFEFE);
	}
}
</style>