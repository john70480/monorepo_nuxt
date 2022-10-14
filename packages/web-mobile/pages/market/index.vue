<template>
	<div class="market">
		<div class="tabs">
			<TgTabs type="tg-tabs" v-model="tab">
				<v-tab v-for="item in items" :key="item" hide-slider>
					{{ item }}
				</v-tab>
			</TgTabs>
			<span class="filter_btn" @click="test()"></span>
		</div>
		<Announcement></Announcement>
		<ul class="game_list">
			<li v-for="n in 2" :key="n" @click="router.push('/market/list')">
				<MarketCard></MarketCard>
			</li>
		</ul>
		<MarketChooseLeague v-model:open="chooseLeagueOpen"></MarketChooseLeague>
		<MarketTransaction v-model:open="transactionOpen"></MarketTransaction>
		<MarketReserve v-model:open="reserveOpen"></MarketReserve>
		<MarketAmountSetting v-model:open="amountSettingOpen"></MarketAmountSetting>
	</div>
</template>
<script setup lang="ts">
import Announcement from '@tg/web-mobile/pages/home/announcement.vue';
import { useDialogs } from '@tg/web-mobile/stores/dialogs';
definePageMeta({
	title: "市场列表"
});
const dialogs = useDialogs()
const router = useRouter()
const tab = ref(0);
const chooseLeagueOpen = ref(false);
const transactionOpen = ref(false);
const reserveOpen = ref(false);
const amountSettingOpen = ref(false);
const items = ['全部(70)', '今日(32)', '明日(40)']
function test() {
	console.log('tests');

}
</script>
<style lang="scss" scoped>
/*市場列表*/

.tabs {
	background: #36567f;
	display: grid;
	grid-template-columns: 1fr auto;

	.filter_btn {
		height: 40px;
		width: 40px;
		background: url('@tg/web-mobile/assets/images/filter_btn.png') center no-repeat;
		background-size: 20px auto;
	}
}
</style>
