<template>
	<TgDialog v-model="dialogsStore.rechargeOpen" type="default">
		<component :is="componentId"></component>
	</TgDialog>
</template>
<script lang="ts">
export type componentListKeyType = keyof typeof componentList
const componentList = {
    ApplyEvent,
	ApplySuccess,
	ApplyFail

}

</script>
<script lang="ts" setup>
import ApplyEvent from "./apply-event.vue";
import ApplySuccess from "./apply-success.vue";
import ApplyFail from "./apply-fail.vue";

const dialogsStore = useDialogs();

const componentId = computed(() => {
	if (dialogsStore.rechargeTarget in componentList) {
		return markRaw(componentList[dialogsStore.rechargeTarget as componentListKeyType])
	}
	return markRaw(ApplyEvent)
})
</script>
