<template>
	<TgDialog v-model="openProxy" type="default">
		<v-card class="transaction">
			<v-card-title>系統提醒</v-card-title>
			<v-card-text class="px-2">
				<v-col cols="12" class="px-0">
					<tg-text-field class="text-center" v-model="oldPwd" :label="'请输入原提款密码'">
					</tg-text-field>
				</v-col>
			</v-card-text>
			<v-card-actions class="pb-8">
				<v-btn block class="btn-submit bg-primary py-4">确定</v-btn>
			</v-card-actions>
		</v-card>
	</TgDialog>
</template>
<script lang="ts" setup>import { Ref } from 'vue';

const props = defineProps<{
	open: boolean,
}>();
const emit = defineEmits<{
	(event: 'update:open', payload: boolean): void
}>();
const enum textAlign {
	LEFT = 'left',
	CENTER = 'center',
	RIGHT = 'right'
};

const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
const oldPwd: Ref<string> = ref('');
</script>

<style lang="scss" scoped>
.btn-submit {
	height: 48px;
}

.transaction {
	.info {
		background: #eef4f8;
	}
}
</style>
