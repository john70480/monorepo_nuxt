<template>
	<v-container class="order-general fill-height overflow-y-auto text-body-2 pa-0 d-flex flex-column" fluid>
		<v-row class="ma-0 mt-10">
			<v-col cols="6">
				<span>你正在</span>
				<span class="text-red">反對</span>
			</v-col>
			<v-col cols="6" class="text-right">使用钱包</v-col>
			<v-col cols="6" class="select-name">
				<b class="text-red">波胆1-0</b>
			</v-col>
			<v-col cols="6" class="text-right">
				<v-select v-model="wallet" :items="walletList" item-title="text" item-value="value" filled label="選擇錢包">
				</v-select>
			</v-col>
		</v-row>

		<v-row class="ma-0">
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

		<v-row class="ma-0">
			<v-col cols="6">
				<b>交易金额</b>
				<p><b>*保本额度:9,999,999.00</b></p>
			</v-col>
			<v-col cols="6">
				<v-text-field v-model="amount" :counter="10" label="交易金额" required></v-text-field>
			</v-col>
			<v-col cols="12" class="setting d-flex align-center justify-end ">
				<img src="@tg/web-mobile/assets/images/com_body_setting_ic.svg" />
				<v-btn v-for="item in 3">{{ item }}</v-btn>
			</v-col>
			<v-col cols="12" class="d-flex justify-space-between">
				<b>获利%</b>
				<b>12.6%</b>
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

		<v-row class="ma-0" no-gutters>
			<v-col cols="12">
				<v-col cols="12">
					<span>请确认交易明细无误，确认交易后</span>
					<span class="text-red">无法改注单</span>
				</v-col>
				<v-col cols="12" class="balance">
					<img src="@tg/web-mobile/assets/images/tg_money_ic.svg" />
					<b>TG余额:3,168,500.00</b>
				</v-col>
			</v-col>
			<v-btn block color="primary">確定</v-btn>
		</v-row>
	</v-container>
</template>
<script lang="ts" setup>
const walletList = ref([
	{
		text: 'TG錢包',
		value: 0
	}
]);
const wallet = ref(0)
const amount = ref<number>();
</script>

<style lang="scss" scoped>
.order-general {
	// font-size: 0.9rem;
	color: #283763;

	.v-row {
		flex: none;

		&:nth-child(even) {
			background: #eef4f8;
		}

		&:last-child {
			flex: 1;

		}
	}

	.setting {
		gap: 10px;

		img {
			width: 30px;
			height: 30px;
		}
	}

	.select-name {
		font-size: 1rem;
	}

	.balance {
		img {
			width: 15px;
			margin-right: 5px;
		}
	}
}
</style>