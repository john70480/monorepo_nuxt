<template>
	<v-dialog v-model="openProxy" :class="{ 'ma-2': type === 'default' }" :type="type" v-bind="_bind">
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
const _bind = computed(() => {
	let obj: VDialog["$props"] = {}
	switch (props.type) {
		case 'classification':
		case 'fullscreen':
		case 'fullscreen80':
			obj = fullscreenBind;
			break;
	}
	return { ...obj, ...props.dialogBind }
})
function close() {
	openProxy.value = false;
}

</script>
<script lang="ts">
export const types = [
	'default',
	'classification',
	'fullscreen',
	'fullscreen80',
] as const;
const fullscreenBind = {
	fullscreen: true
}
</script>
<style lang="scss">
%v-card-title {
	margin: 0 10px;
	border-bottom: solid 1px #c3c3c3;
	text-align: center;
	font-weight: bold;
	color: #283763;
}

%dialog {
	.close {
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
	@extend %dialog;

	.v-overlay__content {
		max-height: 90%;
		width: 100%;

		>.v-card>.v-card-title {
			@extend %v-card-title;
		}
	}
}

.v-dialog[type="classification"],
.v-dialog[type="fullscreen"] {
	@extend %dialog;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	.v-overlay__content {
		position: relative;
		overflow-y: visible;
		margin: 30px 0 0 0;
		height: calc(100% - 50px);
		width: 100%;

		>.v-card>.v-card-title {
			@extend %v-card-title;
		}
	}
}

.v-dialog[type="fullscreen80"] {
	@extend [type="fullscreen"];

	.v-overlay__content {
		margin-top: 20%;
		height: 80%;
	}
}
</style>