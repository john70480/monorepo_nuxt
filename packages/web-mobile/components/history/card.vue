<template>
	<v-card class="history-card">
		<div class="card-title">
			<b>{{ cardTitle }}</b>
			<span>cardNumber</span>
		</div>
		<div class="card-content">
			<div class="card-subtitle">
				{{ cardSubTitle }}</div>
			<div class="team_name">
				<div class="d-flex"><b>{{ cardPlayer1.name }}</b><b>{{ cardPlayer1.score }}</b></div>
				<div class="d-flex"><b>{{ cardPlayer2.name }}</b><b>{{ cardPlayer2.score }}</b></div>
			</div>
		</div>
		<div class="card-footer">
			<span>
				<b>3-3</b>
				<b>1.91</b>
			</span>
		</div>
	</v-card>
</template>
<script setup lang="ts">
const props = defineProps<{
	cardTitle: string,
	cardNumber: number,
	cardSubTitle: string,
	cardPlayer1: PlayerInfo,
	cardPlayer2: PlayerInfo,

}>();
</script>
<script lang="ts">
export type PlayerInfo = {
	name: string;
	score: number;
}
</script>
<style lang="scss" scoped>
.market-card {
	color: #283763;

	.card-title {
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
</styl>