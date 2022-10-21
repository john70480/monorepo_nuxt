<template>
	<TgDialog v-model="openProxy" type="fullscreen">
		<v-card>
			<TgTabs v-model="tab">
				<v-tab v-for="(item, index) in tabList" hide-slider>
					{{ item }}
				</v-tab>
			</TgTabs>
			<v-window v-model="tab" class="fill-height">
				<v-window-item class="fill-height">
					<OrderGeneral></OrderGeneral>
				</v-window-item>
				<v-window-item class="fill-height">
					<OrderReserve></OrderReserve>
				</v-window-item>
			</v-window>
		</v-card>
	</TgDialog>
</template>
<script lang="ts" setup>
import OrderGeneral from "./order-general.vue";
import OrderReserve from "./order-reserve.vue";
const props = defineProps<{
	open: boolean,
}>();
const emit = defineEmits<{
	(event: 'update:open', payload: boolean): void
}>();
const tab = ref(0)
const tabList = ['一般下單', '預約下單']
const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
</script>
