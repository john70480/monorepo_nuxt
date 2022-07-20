<template>
	<div class="market">
		<div class="tabs">
			<TgTabs type="mobile-market-tabs" v-model="tab">
				<TgTabPane :value="0">全部(70)</TgTabPane>
				<TgTabPane :value="1">今日(32)</TgTabPane>
				<TgTabPane :value="2">明日(40)</TgTabPane>
			</TgTabs>
			<span class="filter_btn" @click="test()"></span>
		</div>
		<Announcement></Announcement>
		<ul class="game_list">
			<li v-for="n in 5" :key="n">
				<div class="game_title">
					<b>欧洲冠军联赛</b>
					<span>2020-10-15 23:30</span>
				</div>
				<div class="team_row">
					<div class="team_name">
						<b>华沙普洛克U19(主)</b>
						<b>洛兹U19</b>
					</div>
					<div class="guaranteed">保本</div>
				</div>
				<div class="score">
					<span>
						<b>3-3</b>
						<b>1.91</b>
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
import Tabs from './tabs.vue';
import Announcement from '@tg/web-mobile/pages/home/announcement.vue';

definePageMeta({
	title: "市场列表"
});
const tab = ref(0);
function test() {
	console.log('tests');

}
</script>
<style lang="scss" scoped>
/*市場列表*/
.game_list {
	li {
		color: #283763;

		.game_title {
			padding: 5px 10px;
			font-size: 0.9rem;
			line-height: 1.6;
			background: #eef4f8;
			display: flex;
			align-items: center;

			&::before {
				content: '';
				width: 16px;
				height: 16px;
				margin-right: 5px;
				background: url('@tg/web-mobile/assets/images/icon_market.png') center no-repeat;
				background-size: contain;
			}

			&::after {
				content: '';
				width: 12px;
				height: 12px;
				margin-left: 5px;
				background: url('@tg/web-mobile/assets/images/icon_arrow.png') center no-repeat;
				background-size: contain;
			}

			b {
				flex: 1;
			}

			span {
				font-size: 0.8rem;
				margin-left: 10px;
			}
		}

		.team_row {
			padding: 10px;
			display: flex;
			align-items: flex-start;

			.team_name {
				flex: 1;
				font-size: 0.8rem;
				padding-right: 10px;
				display: flex;
				flex-direction: column;
				gap: 5px;

				b {
					display: flex;
					align-items: center;

					&::before {
						content: '';
						width: 8px;
						height: 8px;
						margin-right: 5px;
						border-radius: 50%;
						background: linear-gradient(to bottom, #eaf5fb, #b2c9d5);
					}
				}
			}
		}

		.score {
			font-size: 0.8rem;
			padding: 0 10px 10px;

			span {
				min-width: 120px;
				border-radius: 5px;
				background: #eef4f8;
				display: inline-flex;

				b {
					flex: 1;
					padding: 5px;
					text-align: center;

					&:last-child {
						color: #fff;
						border-radius: 5px;
						background: #8eaace;
					}
				}
			}
		}
	}
}

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
