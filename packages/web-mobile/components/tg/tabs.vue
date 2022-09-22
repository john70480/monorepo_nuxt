<template>
	<v-tabs v-model="modelValue" class="tabs" :type="type" align-with-title>
		<slot></slot>
		<slot name="filter"></slot>
	</v-tabs>
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
<style lang="scss" >
// <style lang="scss" module>
%flex-tabs {
	display: inline-flex;
	flex-wrap: nowrap;
	justify-content: space-between;

	.v-tab {
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
	height: 40px;

	.v-tab {
		flex: 1;
		height: 40px !important;
		color: #c3c3c3;
		font-size: 0.8rem;
		line-height: 1;
		border: none;
		border-right: 1px solid #c3c3c3;
		background: transparent;

		&.v-slide-group-item--active,
		&:hover {
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		&.v-slide-group-item--active {
			&::before {
				content: '';
				width: 6px;
				height: 6px;
				margin-right: 10px;
				border-radius: 50%;
				background: linear-gradient(to bottom, #ffae5c, #f5720d);
			}
		}
	}
}
</style>
