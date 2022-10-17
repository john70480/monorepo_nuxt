<template>
	<div class="market">
		<div class="tabs">
			<TgTabs type="tg-tabs" v-model="tab">
				<v-tab v-for="item in items" :key="item" hide-slider>
					{{ item }}
				</v-tab>
			</TgTabs>
			<div class="filter d-flex align-center justify-center">
				<img src="@tg/web-mobile/assets/images/filter_btn.png" @click="chooseLeagueOpen = true">
			</div>
		</div>
		<!-- <v-btn @click="dialogs.open = true">open</v-btn> -->
		<Announcement></Announcement>
		<ul class="game_list">
			<li v-for="n in 2" :key="n" @click="router.push('/market/list')">
				<MarketCard></MarketCard>
			</li>
		</ul>
		<MarketChooseLeague v-model:open="chooseLeagueOpen"></MarketChooseLeague>
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
const items = ['全部(70)', '今日(32)', '明日(40)']
</script>
<style lang="scss" scoped>
/*市場列表*/

.tabs {
	background: #36567f;
	display: grid;
	grid-template-columns: 1fr auto;

	.filter {
		width: 40px;

		img {
			height: 25px;
			width: 25px;
		}
	}
}
</style>
