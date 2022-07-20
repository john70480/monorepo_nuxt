<template>
	<div :class="$style.tabs" :type="type">
		<slot></slot>
		<slot name="filter"></slot>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	type: typeof types[number],
	modelValue?: any,
}>();
</script>

<script lang="ts">
export default {
	name: 'TgTabs'
};

export const types = [
	'mobile-market-tabs',
] as const;
</script>

<style lang="scss" module>
%flex-tabs {
	display: inline-flex;
	flex-wrap: nowrap;
	justify-content: space-between;

	[tab-pane] {
		cursor: pointer;
		user-select: none;
		text-decoration: none;

		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	>[disabled] {
		color: #bbb;
		pointer-events: none;
	}

	>hr {
		display: none;
	}
}

.tabs[type="mobile-market-tabs"] {
	@extend %flex-tabs;
	background: #36567f;
	display: flex;
	align-items: center;

	[tab-pane] {
		flex: 1;
		height: 40px;
		color: #c3c3c3;
		font-size: 0.8rem;
		line-height: 1;
		border: none;
		border-right: 1px solid #c3c3c3;
		background: transparent;

		&:hover,
		&[active] {
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&[active] {
			&::before {
				content: '';
				width: 6px;
				height: 6px;
				margin-right: 10px;
				border-radius: 50%;
				background: linear-gradient(to bottom, #ffae5c, #f5720d);
			}
		}

		&:last-child {
			// border-right: none;
		}
	}
}
</style>
