<template>
	<TgDialog v-model="openProxy" type="fullscreen80">
		<component :is="componentId"></component>
	</TgDialog>
</template>
<script lang="ts" setup>
import test from "./test.vue";
const componentList = {
	test,
}
const props = defineProps<{
	open: boolean,
	target: keyof typeof componentList,
}>();
const emit = defineEmits<{
	(event: 'update:open', payload: boolean): void
}>();
const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
const componentId = computed(() => {
	if (props.target in componentList) {
		return markRaw(componentList[props.target])
	}
	return markRaw(test)
})
</script>
<style lang="scss" scoped>

</style>