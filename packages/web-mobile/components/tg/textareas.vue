<template>
	<div class="tg-textarea" :type="type">
		<label v-if="label">{{ label }}</label>
		<v-textarea v-model="modelValueProxy" v-bind="_bind">
			<template v-slot:append-inner>
				<slot name="append-inner"></slot>
			</template>

			<template v-slot:append>
				<slot name="append"></slot>
			</template>
		</v-textarea>
	</div>
</template>
<script lang="ts" setup>
import type { VTextarea, VTextField } from "vuetify/components";

const props = withDefaults(defineProps<{
	label?: string,
	type?: typeof types[number],
	modelValue?: any,
	textBind?: VTextarea["$props"]
}>(), {
	type: 'default',
});
const emit = defineEmits<{
	(event: 'update:modelValue', payload?: any): void
}>();

const _bind = computed(() => {
	let obj: VTextarea["$props"] = {}
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
export const defaultBind: VTextarea["$props"] = {
	variant: "outlined",
	density: "compact",
	hideDetails: true,
	clearable: true
}
</script>
<style lang="scss" >
.tg-textarea[type="default"] {
	display: flex;
	flex-direction: column;

	label {
		font-size: 0.8rem;
		font-weight: bold;
		color: #283763;
		margin-bottom: 8px;
	}

	.v-textarea {
		.v-input__control .v-field__field {
			min-height: auto !important;
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

</style>