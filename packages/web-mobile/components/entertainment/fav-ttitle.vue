<template>
	<div class="sub_title">
		<b :class="[type, { 'mr-a': !showFilter }]">{{ title }}</b>
	</div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
	type: { type: String as PropType<typeof types[number] | string>, default: '' },
	title: String,
	showFilter: { type: Boolean, default: false },
});
const emit = defineEmits({
	more: () => true,
});
</script>
<script lang="ts">
export const types = [
	'game',
	'event',
	'live',
	'sports',
	'casinos',
	'pokers',
	'gaming',
	'lotteries',
	'esports',
] as const;
</script>
<style lang="scss" scoped>
.sub_title {
	display: flex;
	align-items: center;
	background-color: #36567f;
	line-height: 36px;
	// justify-content: space-between;

	b {
		color: #fff;
		font-size: 0.9rem;
		display: flex;
		align-items: center;

		&::before {
			content: '';
			width: 18px;
			height: 18px;
			margin-right: 5px;
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
		cursor: pointer;
		width: 40px;
		height: 40px;
		border: none;
		background: url('@tg/web-mobile/assets/images/more_btn.png') center no-repeat;
		background-size: auto 14px;
	}
}
</style>