<template>

	<v-card">
		<v-card-title>送出申請失敗</v-card-title>
		<v-card-text class="px-5">
			<v-row>
			<v-col cols="12" class="px-0 pt-0 text-center">
				<v-icon size="x-large" color="red-darken-1" icon="md:cancel"></v-icon>
			</v-col>
			<v-col cols="12" class="px-0 pt-0">
                申请失败系统将自动审核请耐心等候，谢谢! PS.存款完成后，保留单据以利核对并保障您的权力。申请失败系统将自动审核请耐心等候，谢谢!PS.存款完成后，保留单据以利核对并。
				系统将自动审核请耐心等候，谢谢!
				</v-col>
			</v-row>
		</v-card-text>
		<v-card-actions class="pb-8">
			<v-btn block class="btn-submit bg-primary">确定</v-btn>
		</v-card-actions>
	</v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';


const account: Ref<string> = ref('');
const pushMoney: Ref<string> = ref('');

</script>

<style lang="scss" scoped>

</style>
