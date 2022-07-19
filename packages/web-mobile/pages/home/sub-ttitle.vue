<template>
	<div class="sub_title">
		<b :class="[type, { 'mr-a': !showFilter }]">{{ title }}</b>
		<button v-if="showFilter" class="filter_btn" :class="{ 'mr-a': showFilter }">全部</button>
		<button class="more_btn"></button>
	</div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
	type: { type: String as PropType<typeof types[number]>, default: '' },
	title: String,
	showFilter: { type: Boolean, default: false },
});
</script>
<script lang="ts">
export const types = [
	'game',
	'event',
	'live',
	'sports',
	'casino',
	'pokers',
	'gaming',
	'lotteries',
	'esports',
] as const;
</script>
<style lang="scss" scoped>
.sub_title {
	padding: 0 5px;
	display: flex;
	align-items: center;
	// justify-content: space-between;

	b {
		color: #fff;
		font-size: 0.9rem;
		margin-left: 10px;
		display: flex;
		align-items: center;

		&::before {
			content: '';
			width: 18px;
			height: 18px;
			margin-right: 5px;
		}

		&.game::before {
			background: url('@tg/web-mobile/assets/images/icon_game.png') center no-repeat;
			background-size: contain;
		}

		&.event::before {
			background: url('@tg/web-mobile/assets/images/icon_event.png') center no-repeat;
			background-size: contain;
		}

		&.live::before {
			background: url('@tg/web-mobile/assets/images/icon_live.png') center no-repeat;
			background-size: contain;
		}

		&.sports::before {
			background: url('@tg/web-mobile/assets/images/icon_sports.png') center no-repeat;
			background-size: contain;
		}

		&.casino::before {
			background: url('@tg/web-mobile/assets/images/icon_casino.png') center no-repeat;
			background-size: contain;
		}

		&.pokers::before {
			background: url('@tg/web-mobile/assets/images/icon_pokers.png') center no-repeat;
			background-size: contain;
		}

		&.gaming::before {
			background: url('@tg/web-mobile/assets/images/icon_gaming.png') center no-repeat;
			background-size: contain;
		}

		&.lotteries::before {
			background: url('@tg/web-mobile/assets/images/icon_lotteries.png') center no-repeat;
			background-size: contain;
		}

		&.esports::before {
			background: url('@tg/web-mobile/assets/images/icon_esports.png') center no-repeat;
			background-size: contain;
		}
	}

	.mr-a {
		margin-right: auto;
	}

	.filter_btn {
		color: #a0c3e5;
		border: none;
		margin-left: 5px;
		background: transparent;
		display: flex;
		align-items: center;

		&::before {
			content: '';
			width: 20px;
			height: 20px;
			background: url('@tg/web-mobile/assets/images/filter_btn.png') 0 center no-repeat;
			background-size: auto 14px;
		}
	}

	.more_btn {
		width: 40px;
		height: 40px;
		border: none;
		background: url('@tg/web-mobile/assets/images/more_btn.png') center no-repeat;
		background-size: auto 14px;
	}
}
</style>