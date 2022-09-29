<template>
	<TgDialog v-model="openProxy" type="fullscreen" :dialogBind="{ fullscreen: true }">
		<v-card>
			<v-card-title class="text-center">选择联盟</v-card-title>
			<v-container class="fill-height overflow-y-auto">
				<v-row>
					<v-col cols="6" v-for="item in 40">
						<v-checkbox v-model="test" label="联盟名称名称名称名称"></v-checkbox>
					</v-col>
				</v-row>
			</v-container>
			<v-card-actions>
				<v-row>
					<v-col cols="6">
						<v-btn flat color="primary">全選</v-btn>
						<v-btn variant="tonal">反选</v-btn>
					</v-col>
					<v-col cols="6" class="text-right">
						<span>隐藏了20场</span>
					</v-col>
					<v-col cols="12">
						<v-btn block flat color="primary">确定</v-btn>
					</v-col>
				</v-row>
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
const test = ref(false);
const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
</script>
