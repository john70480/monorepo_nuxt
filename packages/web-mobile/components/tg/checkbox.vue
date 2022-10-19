<template>
	<v-checkbox v-model="modelValueProxy" :class="type" v-bind="_bind">
	</v-checkbox>

</template>
<script lang="ts" setup>
import type { VCheckbox } from "vuetify/components";

const props = withDefaults(defineProps<{
	type?: typeof types[number],
	modelValue?: any,
	checkBoxBind?: VCheckbox["$props"]
}>(), {
	type: 'default',
});
const emit = defineEmits<{
	(event: 'update:modelValue', payload?: any): void
}>();

const _bind = computed(() => {
	let obj: VCheckbox["$props"] = {}
	switch (props.type) {
		case 'star':
			obj = {
				...defaultBind,
				trueIcon: 'star',
				falseIcon: "star_border",
				color: '#a0c3e5'
			}
			break;
		default:
			obj = defaultBind;
			break;
	}
	return { ...obj, ...props.checkBoxBind }
})
const modelValueProxy = computed({
	get: () => props.modelValue,
	set: (val) => emit("update:modelValue", val)
})
</script>
<script lang="ts">
export const types = [
	'star',
	'default',
] as const;
export const defaultBind: VCheckbox["$props"] = {
	hideDetails: true
}
</script>
<style lang="scss" >
.v-checkbox.star {
	.v-input__control .v-selection-control {
		min-height: auto !important;
		height: 30px;
		display: flex !important;
		align-items: center !important;
	}
}
</style>