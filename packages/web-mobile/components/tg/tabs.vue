<template>
	<v-tabs v-model="modelValueProxy" class="tabs" :type="type" align-with-title>
		<slot></slot>
		<slot name="filter"></slot>
	</v-tabs>
</template>

<script lang="ts" setup>
const props = defineProps<{
	type: typeof types[number],
	modelValue?: any,
}>();

const emit = defineEmits<{
	(event: 'update:modelValue', payload?: any): void
}>();
const modelValueProxy = computed({
	get: () => props.modelValue,
	set: (val) => emit("update:modelValue", val)
})
</script>

<script lang="ts">
export default {
	name: 'TgTabs'
};

export const types = [
	'tg-tabs',
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

.tabs[type="tg-tabs"] {
	@extend %flex-tabs;
	background: #36567f;
	display: flex;
	align-items: center;
	min-height: 40px;
	width: 100%;
	overflow-x: auto;

	.v-tab {
		flex: 1;
		height: 40px !important;
		color: #c3c3c3;
		font-size: 0.8rem;
		line-height: 1;
		border: none;
		border-right: 1px solid #c3c3c3;
		background: transparent;

		&:first-child {
			margin-inline-start: 0px !important;
		}

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
