<template>
	<v-tabs v-model="modelValueProxy" :type="type" v-bind="_bind">
		<slot></slot>
		<slot name="filter"></slot>
	</v-tabs>
</template>

<script lang="ts" setup>
import type { VTabs } from "vuetify/components";

const props = defineProps<{
	type: typeof types[number],
	modelValue?: any,
	tabsBind?: VTabs["$props"]
}>();

const emit = defineEmits<{
	(event: 'update:modelValue', payload?: any): void
}>();
const modelValueProxy = computed({
	get: () => props.modelValue,
	set: (val) => emit("update:modelValue", val)
})
const _bind = computed(() => {
	let obj: VTabs["$props"] = {}
	switch (props.type) {
		default:
			obj = defaultBind;
			break;
	}
	return { ...obj, ...props.tabsBind }
})
</script>

<script lang="ts">
export default {
	name: 'TgTabs'
};

export const types = [
	'tg-tabs',
	'market-list-tabs',
] as const;
export const defaultBind: VTabs["$props"] = {
	alignWithTitle: true,
	hideSlider: true
}
</script>
<style lang="scss" >
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

.v-tabs[type="tg-tabs"] {
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

.v-tabs[type="market-list-tabs"] {
	@extend %flex-tabs;
	display: flex;
	align-items: center;
	overflow-x: auto;
	height: fit-content;

	.v-tab {
		min-width: 30px;
		height: 20px !important;
		color: #c3c3c3;
		margin: 0px;
		padding: 0px;

		&.v-slide-group-item--active,
		&:hover {
			color: #283763;
		}
	}
}
</style>
