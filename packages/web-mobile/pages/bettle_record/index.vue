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
					<Record></Record>
				</v-window-item>
				<v-window-item>
					<Combat></Combat>
				</v-window-item>
				<v-window-item>
					<Integral></Integral>
				</v-window-item>
				<v-window-item>
					<Hurt></Hurt>
				</v-window-item>
			</v-window>
		</div>


	</div>

</template>
<script setup lang="ts">
import Record from "./record.vue";
import Combat from "./combat.vue";
import Integral from "./integral.vue";
import Hurt from "./hurt.vue";
definePageMeta({
	title: "对战記录",
});

const items = ['对战記录', '近期战绩', '联赛积分', '伤停情况']

const showTab = ref(0)

</script>
<style lang="scss" scoped>
/*充值*/
.helpHeader {
	background-color: #587eb0;

	.helpHeaderText {
		color: #fff;
		font-size: 0.8rem;
	}
}




.rechargeProp {
	min-height: 100%;
	background-image: linear-gradient(45deg, #718db7, #527299);
	padding-bottom: 24px;
	box-sizing: border-box;
}
</style>
