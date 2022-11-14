<template>
	<div class="mark-list fill-height">
		<v-row class="info-banner ma-0  pa-4 text-white" no-gutters>
			<v-col cols="1"></v-col>
			<v-col cols="10" class="game d-flex align-center justify-center">
				<img src="@tg/web-mobile/assets/images/menupage_body_livematches_ic.svg" />
				<b>欧洲冠军联赛</b>
			</v-col>
			<v-col cols="1">
				<v-btn icon size="x-small" class="reciprocal-btn">60</v-btn>
			</v-col>
			<v-col cols="4" class="d-flex align-center ">
				<span>华沙普洛克U19(主)</span>
			</v-col>
			<v-col cols="4" class="d-flex flex-column align-center justify-center">
				<p class="time">22:30</p>
				<p>2020-10-25</p>
			</v-col>
			<v-col cols="4" class="d-flex align-center justify-end">
				<span>洛兹U19</span>
			</v-col>
		</v-row>
		<TgTabs v-model="tab">
			<v-tab v-for="item in tabsList" :key="item" hide-slider>
				{{ item }}
			</v-tab>
			<template #additional>
				<img class="vs_btn ma-2" src="@tg/web-mobile/assets/images/com_body_tab_vs_btn.svg" @click="vs()" />
			</template>
		</TgTabs>
		<v-container class="pa-2">
			<div class="info-header d-flex align-center justify-space-between my-2">
				<div class="d-flex align-center ">
					<img src="@tg/web-mobile/assets/images/com_body_statistics_btn.svg" class="mr-2"
						@click="tradeDetailsOpen = true" />
					<b>成交量210,000,000</b>
				</div>
				<div>
					<TgTabs type="icon-tabs" v-model="showTab">
						<v-tab>
							<v-icon class="material-icons-sharp">grid_view</v-icon>
						</v-tab>
						<v-tab>
							<v-icon>list</v-icon>
						</v-tab>
					</TgTabs>
				</div>
			</div>

			<v-window v-model="showTab">
				<!-- 九宮格 -->
				<v-window-item>
					<v-row dense>
						<v-col cols="4" v-for="item in 12" @click="openOrder()">
							<v-card class="trade-card text-center pt-2" elevation="0" rounded="0">
								<div class="guaranteed py-0" v-if="(item % 2) === 0">保本</div>
								<div class="experience-gold py-0" v-else>體驗金</div>
								<v-card-item>
									<v-row no-gutters>
										<v-col cols="12" class="score">0-0</v-col>
										<v-col cols="12">
											<span class="profit-rate pa-2 ">
												5.56%
											</span>
										</v-col>
										<v-col cols="12" class="tradable">可交易量</v-col>
										<v-col cols="12" class="total">$5,152.50</v-col>
									</v-row>
								</v-card-item>
							</v-card>
						</v-col>
					</v-row>
				</v-window-item>
				<!-- 列表 -->
				<v-window-item class="trade-list">
					<v-row class="my-1 mx-0 " v-for="item in 12" @click="openOrder()">
						<v-col cols="2">
							<div class="guaranteed py-0" v-if="(item % 2) === 0">保本</div>
							<div class="experience-gold py-0" v-else>體驗金</div>
						</v-col>
						<v-col cols="3">0-0</v-col>
						<v-col cols="3">5.50%</v-col>
						<v-col cols="4">$5,152.50</v-col>
					</v-row>
				</v-window-item>
			</v-window>
		</v-container>
		<MarketTradeDetails v-model:open="tradeDetailsOpen"></MarketTradeDetails>
		<MarketOrder v-model:open="orderOpen"></MarketOrder>
		<MarketTransaction v-model:open="transactionOpen"></MarketTransaction>
		<MarketReserve v-model:open="reserveOpen"></MarketReserve>
		<MarketAmountSetting v-model:open="market.amountSettingOpen"></MarketAmountSetting>
	</div>
</template>
<script setup lang="ts">
import { useMarket } from '@tg/web-mobile/stores/market';
definePageMeta({
	title: "市场列表",
});
const market = useMarket();
const tab = ref(0)
const showTab = ref(0)
const tradeDetailsOpen = ref(false);
const transactionOpen = ref(false);
const reserveOpen = ref(false);
const orderOpen = ref(false);
const tabsList = ['波胆', '半场波胆', '总得分']
function vs() {
	console.log('vs');
}
function openOrder() {
	orderOpen.value = true;
}
</script>

<style lang="scss" scoped>
.mark-list {
	background-color: #EFF4F8;
	color: #283763;

	.info-banner {
		background-image: url('@tg/web-mobile/assets/images/come_body_marketlist_head_bg.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		min-height: 120px;
		width: 100%;
		font-size: 00.8rem;

		.game {
			gap: 5px;

			img {
				height: 20px;
			}
		}

		.time {
			font-size: 1.2rem;

		}

		.reciprocal-btn {
			background-image: linear-gradient(to bottom, #b9c4cd, #939aa1);
			color: #283763;
		}
	}


	.vs_btn {
		height: 20px;
		width: 20px;
	}

	.info-header {
		font-size: 0.8rem;

		img {
			height: 18px;
		}
	}

	.trade-card {
		position: relative;
		font-size: 0.8rem;

		.guaranteed,
		.experience-gold {
			position: absolute;
			top: 0;
			right: 0;
		}

		.v-row {
			gap: 10px;
		}

		.profit-rate {
			background-color: #8EAACE;
			border-radius: 4px;
		}

		.total {
			font-weight: bold;
		}
	}

	.trade-list {
		font-size: 00.8rem;

		>.v-row {
			background-color: #ffffff;

			.v-col {
				padding: 5px;
			}
		}
	}

}
</style>