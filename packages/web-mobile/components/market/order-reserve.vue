<template>
	<v-container class="order-reserve fill-height overflow-y-auto " fluid>
		<v-row>
			<v-col cols="12">你正在反對</v-col>
			<v-col cols="12">波胆1-0</v-col>
		</v-row>

		<v-row>
			<v-col cols="12" class="game_title">
				<b>欧洲冠军联赛</b>
				<span>2020-10-15 23:30</span>
			</v-col>
			<v-col cols="12">
				<div class="team_row">
					<div class="team_name">
						<b>华沙普洛克U19(主)</b>
						<b>洛兹U19</b>
					</div>
					<div class="guaranteed">保本</div>
				</div>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="6">
				<b>交易金额</b>
				<p><b>*保本额度:9,999,999.00</b></p>
			</v-col>
			<v-col cols="6">
				<v-text-field v-model="amount" :counter="10" label="交易金额" required></v-text-field>
			</v-col>
			<v-col cols="12">
				<v-btn v-for="item in 3">{{ item }}</v-btn>
			</v-col>
			<v-col cols="12">
				<span>获利%</span>
				<span>12.6%</span>
			</v-col>
			<v-col cols="12">
				<span>手续费</span>
				<span>-5%</span>
			</v-col>
			<v-col cols="12">
				<span>预估获利</span>
				<span>120,450.80</span>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">请确认交易明细无误，确认交易后无法改注单</v-col>
			<v-col cols="12">TG余额:3,168,500.00</v-col>
			<v-btn block>确定预约</v-btn>
		</v-row>
	</v-container>
</template>
<script lang="ts" setup>
const items = [1, 2, 3];
const amount = ref<number>();
</script>
<style lang="scss" scoped>
.order-reserve {
	.v-row:nth-child(even) {
		background: #f8eeee;
	}
}
</style>