<template>
	<TgDialog v-model="openProxy">
		<v-card class="transaction">
			<v-card-title class="text-center">快捷金額設定</v-card-title>
			<v-container>
				<v-row v-for="(item, index) in settingList" :key="index">
					<v-col cols="12">
						<v-text-field v-model="item.value" :label="item.label"></v-text-field>
					</v-col>

				</v-row>
				<v-row>
					<v-col cols="12">
						<v-btn block color="primary">确认修改</v-btn>
					</v-col>
				</v-row>
			</v-container>
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
