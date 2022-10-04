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
			<v-row>
				<v-col cols="6">
					<img src="@tg/web-mobile/assets/images/com_body_statistics_btn.svg" />
					<span>成交量210,000,000</span>
				</v-col>
				<v-col cols=" 6" class="text-right">
					<v-tabs v-model="showTab" hide-slider>
						<v-tab>
							<img src="@tg/web-mobile/assets/images/com_body_statistics_sheet_active_btn.svg" />
						</v-tab>
						<v-tab>
							<img src="@tg/web-mobile/assets/images/com_body_statistics_list_btn.svg" />
						</v-tab>
					</v-tabs>

				</v-col>
			</v-row>
			<!-- 列表 -->
			<v-window v-model="showTab">
				<v-window-item>
					<v-row>
						<v-col cols="4" v-for="item in 12">
							<v-card class="text-center">
								<v-card-subtitle>0-0</v-card-subtitle>
								<v-card-item>
									<v-row>
										<v-col cols="12" class="profit-rate ">5.56%</v-col>
										<v-col cols="12">可交易量</v-col>
										<v-col cols="12">$5,152.50</v-col>
									</v-row>
								</v-card-item>
							</v-card>
						</v-col>
					</v-row>
				</v-window-item>
				<v-window-item>
					<v-row v-for="item in 12">
						<v-col cols="2">保本</v-col>
						<v-col cols="3">0-0</v-col>
						<v-col cols="3">5.50%</v-col>
						<v-col cols="4">$5,152.50</v-col>
					</v-row>
				</v-window-item>
			</v-window>
		</v-container>
		<MarketTradeDetails v-model:open="tradeDetailsOpen"></MarketTradeDetails>
	</div>
</template>
<script setup lang="ts">
const tab = ref(0)
const showTab = ref(0)
const tradeDetailsOpen = ref(false);
const tabsList = ['波胆', '半场波胆', '总得分']
function test() { }
</script>

<style lang="scss" scoped>
.mark-list {
	// .vs_btn {}

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

	.profit-rate {
		background-color: #8EAACE;
		// min-width: 186px;
	}
}
</style>