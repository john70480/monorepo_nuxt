<template>
	<v-text-field v-model="modelValueProxy" :class="type" v-bind="_bind"></v-text-field>
</template>
<script lang="ts" setup>
import type { VTextField } from "vuetify/components";

const props = withDefaults(defineProps<{
	type?: typeof types[number],
	modelValue?: any,
	textBind?: VTextField["$props"]
}>(), {
	type: 'default',
});
const emit = defineEmits<{
	(event: 'update:modelValue', payload?: any): void
}>();

const _bind = computed(() => {
	let obj: VTextField["$props"] = {}
	switch (props.type) {
		// case 'default':
		// 	break;
		default:
			obj = defaultBind;
			break;
	}
	return { ...obj, ...props.textBind }
})
const modelValueProxy = computed({
	get: () => props.modelValue,
	set: (val) => emit("update:modelValue", val)
})
</script>
<script lang="ts">
export const types = [
	'default',
] as const;
export const defaultBind: VTextField["$props"] = {
	variant: "outlined",
	density: "compact",
	hideDetails: true
}
</script>
<style lang="scss" >
.v-text-field.default {
	.v-input__control .v-field__field {
		min-height: auto !important;
		height: 30px;
		display: flex !important;
		align-items: center !important;
	}
}
</style>