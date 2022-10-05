<template>
	<v-card class="market-card">
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
	</v-card>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.market-card {
	color: #283763;

	.game_title {
		background: #eef4f8;

		&::after {
			content: '';
			width: 12px;
			height: 12px;
			margin-left: 5px;
			background: url('@tg/web-mobile/assets/images/icon_arrow.png') center no-repeat;
			background-size: contain;
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
</style>