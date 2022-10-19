<template>
	<TgDialog v-model="openProxy" type="fullscreen80">
		<v-card class="transaction">
			<v-card-title>更新密码</v-card-title>
			<v-card-text class="px-2">
				<v-col cols="12" class="px-0 pt-0">
					<tg-text-field v-model="oldPwd" :label="'原始密码'" :textBind="{placeholder: '请输入原始密码'}">
					</tg-text-field>
				</v-col>
				<v-col cols="12" class="px-0 pt-0">
					<tg-text-field v-model="newPwd" :label="'新密码'" :textBind="{placeholder: '请输入新密码'}"></tg-text-field>
				</v-col>
				<v-col cols="12" class="px-0 pt-0">
					<tg-text-field v-model="validPwd" :label="'确认新密码'" :textBind="{placeholder: '再次输入新密码'}">
					</tg-text-field>
				</v-col>
			</v-card-text>
			<v-card-actions class="pb-8">
				<v-btn block class="btn-submit bg-primary">确认修改</v-btn>
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

const openProxy = computed({
	get: () => props.open,
	set: (val) => emit("update:open", val)
});
const oldPwd: Ref<string> = ref('');
const newPwd: Ref<string> = ref('');
const validPwd: Ref<string> = ref('');
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
