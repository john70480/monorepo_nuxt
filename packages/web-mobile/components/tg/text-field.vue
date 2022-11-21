<template>
	<div class="tg-text-field" :type="type">
		<label v-if="label">{{ label }}</label>
		<v-text-field v-model="modelValueProxy" v-bind="_bind"></v-text-field>
	</div>
</template>
<script lang="ts" setup>
import type { VTextField } from "vuetify/components";

const props = withDefaults(defineProps<{
	label?: string,
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
		case 'login':
			obj = { ...defaultBind, variant: "underlined" }
			break;
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
	'login'
] as const;
export const defaultBind: VTextField["$props"] = {
	variant: "outlined",
	density: "compact",
	hideDetails: true,
	clearable: true
}
</script>
<style lang="scss" >
.tg-text-field[type="default"] {
	display: flex;
	flex-direction: column;

	label {
		font-size: 0.8rem;
		font-weight: bold;
		color: #283763;
		margin-bottom: 8px;
	}

	.v-text-field {
		.v-input__control .v-field__field {
			min-height: auto !important;
			height: 30px;
			display: flex !important;
			align-items: center !important;
		}
	}

	.v-field__prepend-inner,
	.v-field__append-inner,
	.v-field__clearable {
		padding-top: 4px
	}
}

.tg-text-field[type="login"] {
	.v-input {
		color: #8eaace;

		.v-input__control {
			.v-field__prepend-inner .material-icons {
				font-size: 32px;
			}
		}
	}
}
</style>