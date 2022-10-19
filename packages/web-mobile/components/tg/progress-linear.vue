<template>
	<v-progress-linear :type="type" v-model="modelValueProxy" v-bind="_bind" :color="color"></v-progress-linear>
</template>
<script lang="ts" setup>
import { VProgressLinear } from "vuetify/components";

const props = withDefaults(defineProps<{
	type?: typeof types[number],
	modelValue?: any,
	progressBind?: VProgressLinearType["$props"],
}>(), {
	type: 'default',
});
const emit = defineEmits<{
	(event: 'update:modelValue', payload?: any): void
}>();

const _bind = computed(() => {
	let obj: VProgressLinearType["$props"] = {}
	switch (props.type) {
		default:
			obj = defaultBind;
			break;
	}
	return { ...obj, ...props.progressBind }
})
const modelValueProxy = computed({
	get: () => props.modelValue,
	set: (val) => emit("update:modelValue", val)
})
const color = computed(() => {
	if (modelValueProxy.value > 80) {
		return 'tg-red'
	} else if (modelValueProxy.value > 50) {
		return 'tg-yellow'
	} else if (modelValueProxy.value > 30) {
		return 'tg-blue'
	}
	return 'tg-green'
}


)
</script>
<script lang="ts">
export type VProgressLinearType = InstanceType<typeof VProgressLinear>;

export const types = [
	'default',
] as const;
export const defaultBind: VProgressLinearType["$props"] = {
	height: "22"
}
</script>
<style lang="scss" >
.v-progress-linear[type="default"] {
	background-color: "#E6E6E6";
	border: 3px solid #BEE3FD;
	border-radius: 15px;

	.v-progress-linear__determinate {
		position: relative;

		&.bg-tg-red {
			background-color: #E76A8B;
		}

		&.bg-tg-yellow {
			background-color: #D9A150;
		}

		&.bg-tg-blue {
			background-color: #43BAD4;
		}

		&.bg-tg-green {
			background-color: #7B9C42;
		}

		&::after {
			position: absolute;
			top: 0px;
			right: -10px;
			content: "";
			height: 16px;
			width: 16px;
			background-color: #CDE2FF;
			border: 2px solid #FFF;
			border-radius: 15px;
			z-index: 20;
		}
	}
}
</style>