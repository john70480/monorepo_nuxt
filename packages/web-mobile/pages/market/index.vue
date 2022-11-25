<template>
	<div class="market">
		<TgTabs v-model="tab">
			<v-tab v-for="item in items" :key="item" hide-slider>
				{{ item }}
			</v-tab>
			<template #additional>
				<img class="filter ma-2" src="@tg/web-mobile/assets/images/filter_btn.png" @click="chooseLeagueOpen = true">
			</template>
		</TgTabs>
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

definePageMeta({
	title: "市场列表",
	isMainPage: true
});
const dialogs = useDialogs()
const router = useRouter()
const tab = ref(0);
const chooseLeagueOpen = ref(false);
const items = ['全部(70)', '今日(32)', '明日(40)']
</script>
<style lang="scss" scoped>
/*市場列表*/

.filter {
	height: 25px;
	width: 25px;
}
</style>
