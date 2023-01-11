<template>
	<div class="fill-height">
		<div class="rechargeProp">
			<TgTabs v-model="showTab">
				<v-tab v-for="(item, index) in items" :key="item" hide-slider>
					{{ item }}
				</v-tab>

			</TgTabs>

			<v-window v-model="showTab">
				<!-- 九宮格 -->
				<v-window-item>
					<BattleRecord />
				</v-window-item>
				<v-window-item>
					<BattleRecordCombat></BattleRecordCombat>
				</v-window-item>
				<v-window-item>
					<BattleRecordIntegral></BattleRecordIntegral>
				</v-window-item>
				<v-window-item>
					<BattleRecordHurt></BattleRecordHurt>
				</v-window-item>
			</v-window>
		</div>


	</div>

</template>
<script setup lang="ts">
definePageMeta({
	title: "对战記录",
});

const items = ['对战記录', '近期战绩', '联赛积分', '伤停情况']

const showTab = ref(0)

</script>
<style lang="scss" scoped>
/*充值*/
.rechargeProp {
	min-height: 100%;
	background-image: linear-gradient(45deg, #718db7, #527299);
	padding-bottom: 24px;
	box-sizing: border-box;
}
</style>
