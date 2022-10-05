<template>
	<TgDialog v-model="openProxy" type="fullscreen" :dialogBind="{ fullscreen: true }">
		<v-card>
			<v-card-title>交易量明细</v-card-title>
			<v-card-item>
				<v-row class="">
					<v-col cols="12">欧洲冠军联赛</v-col>
					<v-col cols="12">华沙普洛克U19(主)</v-col>
					<v-col cols="12">洛兹U19</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">總成交量210,000,000</v-col>
				</v-row>
				<v-row v-for="item in 10">
					<v-col cols="2" class="text-center">0-0</v-col>
					<v-col cols="7">
						<v-progress-linear v-model="power" color="amber" height="25"></v-progress-linear>
					</v-col>
					<v-col cols="3" class="text-right">5000</v-col>
				</v-row>

			</v-card-item>
		</v-card>
	</TgDialog>
</template>
<script lang="ts" setup>
const props = defineProps<{
	open: boolean,
}>();
const emit = defineEmits<{
	(event: 'update:open', payload: boolean): void
}>();
const power = ref(80);
const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
</script>
