<template>
	<TgDialog v-model="openProxy" type="fullscreen80">
		<div>加值</div>
	</TgDialog>
</template>
<script lang="ts" setup>
const props = defineProps<{
	open: boolean,
}>();
const emit = defineEmits<{
	(event: 'update:open', payload: boolean): void
}>();
const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
</script>
<style lang="scss" scoped>

</style>