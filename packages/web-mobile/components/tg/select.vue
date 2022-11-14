<template>
	<v-select :class="type" :type="type" v-model="modelValueProxy" :items="items" v-bind="_bind">>
	</v-select>
</template>

<script lang="ts" setup>
import { VSelect } from 'vuetify/components';

const props = withDefaults(defineProps<{
	type?: typeof types[number],
	modelValue?: any,
	items?: unknown[]
	selectBind?: VSelect["$props"],
}>(), {
	type: 'default',
});
const emit = defineEmits<{
	(event: 'update:modelValue', payload?: any): void
}>();

const _bind = computed(() => {
	let obj: VSelect["$props"] = {}
	switch (props.type) {
		// case '':
		// 	obj = {
		// 		...defaultBind,
		// 	}
		// 	break;
		default:
			obj = defaultBind;
			break;
	}
	return { ...obj, ...props.selectBind }
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
export const defaultBind: VSelect["$props"] = {
	density: 'compact',
	hideDetails: true,
	variant: "solo",
	itemTitle: "text",
	itemValue: "value"
}
</script>
<style lang="scss" >
.v-select.default,
.v-select[type="default"] {

	.v-input__control .v-field {
		min-height: auto !important;
		height: 30px;
		display: flex !important;
		align-items: center !important;
		color: #283763;

		.v-field__field {
			object-fit: contain;
			font-size: 1rem;
			font-weight: bold;
		}

		.v-field__append-inner {
			padding-top: 0;
		}
	}
}
</style>