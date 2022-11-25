<template>
	<v-card :type="type" v-bind="_cardBind">
		<v-card-title>{{ title }}</v-card-title>
		<v-card-text>
			<slot></slot>
		</v-card-text>
		<v-card-actions v-if="$slots.actions">
			<slot name="actions"></slot>
		</v-card-actions>
	</v-card>

</template>
<script lang="ts" setup>
import type { VCard } from "vuetify/components";

const props = withDefaults(defineProps<{
	title: string,
	type?: typeof types[number],
	cardBind?: VCard["$props"]
}>(), {
	type: 'default',
});
const _cardBind = computed(() => {
	let obj: VCard["$props"] = {}
	switch (props.type) {
		default:
			obj = defaultBind;
			break;
	}
	return { ...obj, ...props.cardBind }
})
</script>
<script lang="ts">
export const types = [
	'default',
] as const;
export const defaultBind: VCard["$props"] = {
	rounded: 0
}
</script>
<style lang="scss" >
.v-card[type="default"] {
	.v-card-title {
		background-color: #eef4f8;
		color: #283763;
		font-weight: bolder;
		font-size: 1rem;
		text-align: center;
	}

	.v-card-text {
		padding-top: 12px;
	}
}
</style>