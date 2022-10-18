<template>
	<TgDialog v-model="openProxy" type="fullscreen80">
		<v-card class="transaction">
			<v-card-title>快捷金額設定</v-card-title>
			<v-card-text>
				<v-row v-for="(item, index) in settingList" :key="index">
					<v-col cols="12">
						<tg-text-field v-model="item.value" :label="item.label"></tg-text-field>
					</v-col>
				</v-row>
			</v-card-text>
			<v-card-actions>
				<v-btn block class="bg-primary">确认修改</v-btn>
			</v-card-actions>
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

const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
const settingList = ref([
	{ label: '第一设定值', value: 0 },
	{ label: '第二设定值', value: 0 },
	{ label: '第三设定值', value: 0 },
])
</script>

<style lang="scss" scoped>
.transaction {
	.info {
		background: #eef4f8;
	}
}
</style>
