<template>
	<div class="hotmatch">
		<div class="game_date">
			<b>10-15 22:30</b>
			<div class="guaranteed">保本</div>
		</div>
		<div class="live">欧洲冠军联赛</div>
		<div class="team">华沙普洛克U19(主)</div>
		<div class="team">洛兹U19</div>
		<div class="game_info">
			<div class="score">
				<b>3-3</b>
				<span>1.91</span>
			</div>
			<div class="amount">
				<b>总成交量 920K</b>
				<span>开赛剩 23:05:16</span>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
defineProps({
	ImageSrc: String,
	title: String,
});
</script>
<style lang="scss" scoped>
.hotmatch {
	color: #283763;
	font-size: 0.8rem;
	display: flex;
	flex-direction: column;
	gap: 3px;

	.game_date {
		display: flex;
		align-items: center;

		b {
			flex: 1;
			font-weight: normal;
		}
	}

	.live {
		font-weight: bold;
		padding-left: 20px;
		background: url('@tg/web-mobile/assets/images/live_gray.png') 0 center no-repeat;
		background-size: auto 12px;
	}

	.team {
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

	.game_info {
		display: flex;

		.score {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-right: 5px;

			b {
				font-weight: normal;
				padding: 2px;
				background: #eef4f8;
				display: flex;
				justify-content: center;
				border-radius: 3px 3px 0 0;
			}

			span {
				color: #fff;
				padding: 2px;
				background: #8eaace;
				display: flex;
				justify-content: center;
				border-radius: 0 0 3px 3px;
			}
		}

		.amount {
			flex: 1.5;
			color: #8eaace;
			display: flex;
			flex-direction: column;

			b {
				font-weight: normal;
			}

			span {}
		}
	}
}
</style>