<template>
	<v-container class="order order-reserve fill-height overflow-y-auto text-body-2 pa-0 d-flex flex-column" fluid>
		<v-row class="ma-0 mt-10">
			<v-col cols="12">
				<p>
					<span>你正在</span>
					<span class="text-red">反對</span>
				</p>
				<p class="select-name pt-1">
					<b class="text-red">波胆1-0</b>
				</p>
			</v-col>
		</v-row>

		<v-row class="ma-0">
			<v-col cols="12" class="game_title">
				<b>欧洲冠军联赛</b>
				<span>2020-10-15 23:30</span>
			</v-col>
			<v-col cols="12" class="team_row ">
				<div class="team_name">
					<b>华沙普洛克U19(主)</b>
					<b>洛兹U19</b>
				</div>
				<div class="guaranteed">保本</div>
			</v-col>
		</v-row>

		<v-row class="ma-0">
			<v-col cols="6">
				<b>交易金额</b>
				<p><b>*尚可预约笔数:50</b></p>
			</v-col>
			<v-col cols="6" class="d-flex align-center">
				<tg-text-field v-model="amount"></tg-text-field>
			</v-col>
			<v-col cols="12" class="setting d-flex align-center justify-end ">
				<img src="@tg/web-mobile/assets/images/com_body_setting_ic.svg" @click="market.amountSettingOpen=true" />
				<v-btn v-for="item in 3">{{ item }}</v-btn>
			</v-col>
			<v-col cols="12" class="d-flex justify-space-between">
				<b>目前获利%</b>
				<b>12.6%</b>
			</v-col>
			<v-col cols="4">
				<b>获利区间</b>
			</v-col>
			<v-col cols="8" class="d-flex align-center">
				<tg-text-field></tg-text-field>
				<span>%~</span>
				<tg-text-field></tg-text-field>
				<span>%</span>
			</v-col>
			<v-col cols="12" class="pt-0 pb-0 ">
				<p class="text-red">(如赔率有变动，在此区间内暨同意下单)</p>
				<p>获利%已从<span class="text-red">##.00%</span>变更为<span class="text-red">##.00%</span>，请重新设定区间</p>
			</v-col>
			<v-col cols="12" class="d-flex justify-space-between">
				<b>手续费</b>
				<b class="text-red">-5%</b>
			</v-col>
			<v-col cols="12" class="d-flex justify-space-between">
				<b>预估获利</b>
				<b class="text-green">120,450.80</b>
			</v-col>

		</v-row>

		<v-row class="pa-2 align-content-space-between">
			<v-col cols="12">
				<p>
					<span>请确认交易明细无误，确认交易后</span>
					<span class="text-red">无法改注单</span>
				</p>
				<p class="balance">
					<img src="@tg/web-mobile/assets/images/tg_money_ic.svg" />
					<b>TG余额:3,168,500.00</b>
				</p>
			</v-col>
			<v-col cols="12">
				<v-btn block color="primary">确定预约</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts" setup>
import { useMarket } from '@tg/web-mobile/stores/market';

const market = useMarket();
const amount = ref<number>();
</script>
<style lang="scss" scoped>
@import './assets/scss/market.scss';

.order-reserve {
	.v-row:nth-child(even) {
		background: #f8eeee;
	}
}
</style>