<template>
	<v-dialog v-model="open" :class="{'ma-2':type==='default'}" :type="type" v-bind="dialogBind">
		<div class="close" @click="close()"></div>
		<slot>

		</slot>
	</v-dialog>
</template>
<script lang="ts" setup>
import { useDialogs } from '@tg/web-mobile/stores/dialogs';
import type { VDialog } from "vuetify/components";

const props = withDefaults(defineProps<{
	type?: typeof types[number],
	dialogBind?: VDialog["$props"]
}>(), {
	type: 'default',
});
const dialogsStore = useDialogs();

const open = computed({
	get: () => {
		switch (props.type) {
			case 'classification':
				return dialogsStore.classificationOpen
			default:
				return dialogsStore.open
		}
	},
	set: value => {
		switch (props.type) {
			case 'classification':
				dialogsStore.classificationOpen = value;
				break;
			default:
				dialogsStore.open = value;
				break;
		}
	},
});

function close() {
	open.value = false;
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