<template>
	<div class="mark-list">
		<div class="tabs">
			<TgTabs type="tg-tabs" v-model="tab">
				<v-tab v-for="item in tabsList" :key="item" hide-slider>
					{{ item }}
				</v-tab>
			</TgTabs>
			<span class="vs_btn" @click="test()"></span>
		</div>
		<v-container>

		<v-container class="pa-2">
			<div class="info-header d-flex align-center justify-space-between my-2">
				<div class="d-flex align-center ">
					<img src="@tg/web-mobile/assets/images/com_body_statistics_btn.svg" class="mr-2" />
					<b>成交量210,000,000</b>
				</div>
				<div>
					<TgTabs type="market-list-tabs" v-model="showTab">
						<v-tab>
							<v-icon class="material-icons-sharp">grid_view</v-icon>
						</v-tab>
						<v-tab>
							<v-icon>list</v-icon>
						</v-tab>
					</TgTabs>
				</div>
			</div>

			<!-- 列表 -->
			<v-window v-model="showTab">
				<v-window-item>
					<v-row dense>
						<v-col cols="4" v-for="item in 12" @click="openOrder()">
							<v-card class="trade-card text-center pt-3" elevation="0" rounded="0">
								<div class="guaranteed py-0" v-if="false">保本</div>
								<div class="experience-gold py-0" v-if="false">體驗金</div>
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
				<v-window-item>
					<v-row v-for="item in 12" @click="openOrder()">
						<v-col cols="2">保本</v-col>
						<v-col cols="3">0-0</v-col>
						<v-col cols="3">5.50%</v-col>
						<v-col cols="4">$5,152.50</v-col>
					</v-row>
				</v-window-item>
			</v-window>
		</v-container>
		<MarketTradeDetails v-model:open="tradeDetailsOpen"></MarketTradeDetails>
		<MarketOrder v-model:open="orderOpen"></MarketOrder>
	</div>
</template>
<script setup lang="ts">
const tab = ref(0)
const showTab = ref(0)
const tradeDetailsOpen = ref(false);
const orderOpen = ref(false);
const tabsList = ['波胆', '半场波胆', '总得分']
function test() { }
function openOrder() {
	orderOpen.value = true;
}
</script>

<style lang="scss" scoped>
.mark-list {
	background-color: #EFF4F8;
	color: #283763;

	.tabs {
		background: #36567f;
		display: grid;
		grid-template-columns: 1fr auto;

		.vs_btn {
			height: 40px;
			width: 40px;
			background: url('@tg/web-mobile/assets/images/com_body_tab_vs_btn.svg') center no-repeat;
			background-size: 20px auto;
		}
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

}
</style>