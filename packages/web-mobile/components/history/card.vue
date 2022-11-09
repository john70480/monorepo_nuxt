<template>
	<v-card class="history-card" elevation="0">
		<div class="card-title px-2 pb-1">
			<div>{{ info.title }}</div>
			<span class="icon-notify">{{ info.num }}</span>
		</div>
		<div class="card-content px-2  pb-1">
			<div class="card-content--left">
				<div class="card-subtitle pb-1">
					{{ info.subtitle }}</div>
				<div class="team_name">
					<div class="d-flex pb-1">
						<div class="icon-cycle">{{ info.player1.name }}</div>
						<div>{{ info.player1.score }}</div>
					</div>
					<div class="d-flex pb-1">
						<div class="icon-cycle">{{ info.player2.name }}</div>
						<div>{{ info.player2.score }}</div>
					</div>
				</div>
				<div class="card-footer pb-1">
					<div>结算:</div>
					<div>{{ info.summary }}</div>
				</div>
			</div>
			<div class="card-content--right">
				<span class="icon-arrow-down"></span>
			</div>
		</div>

		<template v-if="info.dType === DetailType.RESERVE">
			<v-divider class="mx-2"></v-divider>
			<HistoryReserveDetail></HistoryReserveDetail>
		</template>
		<template v-if="info.dType === DetailType.ORDER">
			<v-divider class="mx-2"></v-divider>
			<HistoryOrderDetail></HistoryOrderDetail>
		</template>
		<v-divider></v-divider>
	</v-card>
</template>
<script setup lang="ts">import { HistoryCardModel, PlayerInfo, DetailType } from '@tg/web-mobile/core/models/HistoryModel';

const props = defineProps<{ info: HistoryCardModel }>();
</script>
<script lang="ts">

</script>
<style lang="scss" scoped>
.history-card {
	font-size: 12px;
	color: #283763;
	padding-top: 8px;
	padding-bottom: 8px;

	.card-title {
		display: flex;
		font-weight: bold;
		justify-content: space-between;
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

	.card-content {
		display: flex;

		.card-content--left {
			flex: 1;
			padding: 0 8px 0 4px;
		}

		.card-content--right {
			flex: 0;
			width: 16px;
			height: auto;
			padding-left: 4px;
			padding-right: 4px;
			display: flex;
			align-items: center;
		}
	}

	.card-footer {
		font-weight: bold;
		display: flex;
		justify-content: space-between;
	}
}

.team_name {
	.d-flex {
		justify-content: space-between;

	}
}

.icon-cycle {
	display: inline-flex;
	align-items: center;

	&::before {
		display: block;
		content: ' ';
		width: 8px;
		height: 8px;
		border-radius: 15px;
		background: linear-gradient(#eaf5fb, #b2c9d5);
		margin-right: 4px;
	}
}

.icon-arrow-down {
	&::before {
		display: block;
		content: ' ';
		background: url('@tg/web-mobile/assets/images/icon-folddown.svg') center no-repeat;
		background-size: cover;
		width: 10px;
		height: 6px;


	}

}

.icon-notify {
	width: 16px;
	height: 16px;
	background-color: #F00;
	color: #FFF;
	border-radius: 50%;
	font-size: 10px;
	display: flex;
	align-content: center;
	justify-content: center;
}
</style>