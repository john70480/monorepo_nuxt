<template>
	<v-dialog v-model="openProxy" :class="{ 'ma-2': type === 'default' }" :type="type" v-bind="dialogBind">
		<div class="close" @click="close()"></div>
		<slot>

		</slot>
	</v-dialog>
</template>
<script lang="ts" setup>
import type { VDialog } from "vuetify/components";

const props = withDefaults(defineProps<{
	modelValue: boolean,
	type?: typeof types[number],
	dialogBind?: VDialog["$props"]
}>(), {
	type: 'default',
});
const emit = defineEmits<{
	(event: 'update:modelValue', payload: boolean): void
}>();

const openProxy = computed({
	get: () => props.modelValue,
	set: (val) => emit("update:modelValue", val)
});

function close() {
	openProxy.value = false;
}

</script>
<script lang="ts">
export const types = [
	'default',
	'classification',
	'fullscreen',
] as const;
</script>
<style lang="scss">
.v-dialog {
	.close {
		// z-index: 9999;
		cursor: pointer;
		position: absolute;
		right: 50%;
		top: -30px;
		background: url('@tg/web-mobile/assets/images/come_body_cancel_btn.png') center no-repeat;
		width: 20px;
		height: 20px;
	}
}

.v-dialog[type="default"] {
	.v-overlay__content {
		max-height: 90%;
		width: 100%;
	}
}

.v-dialog[type="classification"],
.v-dialog[type="fullscreen"] {

	.v-overlay__content {
		position: relative;
		overflow-y: visible;
		margin: 30px 0 0 0;
		height: calc(100% - 50px);
		width: 100%;
	}
}
</style>