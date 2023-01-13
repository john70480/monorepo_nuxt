<template>

	<v-card>
		<v-card-title>完成送出申請</v-card-title>
		<v-card-text class="px-5">
			<v-row>
			<v-col cols="12" class="px-0 pt-0 text-center">
				<v-icon size="x-large" color="green-darken-2" icon="md:check_circle"></v-icon>
			</v-col>
			<v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="eventName" :label="'活動名稱'"
                    :textBind="{ placeholder: '王者榮耀' }" disabled>
                </tg-text-field>
				系统将自动审核请耐心等候，谢谢! PS.存款完成后，保留单据以利核对并保障您的权力。系统将自动审核请耐心等候，谢谢!PS.存款完成后，保留单据以利核对并。
            </v-col>
			</v-row>
		</v-card-text>
		<v-card-actions class="pb-8">
			<v-btn block class="btn-submit bg-primary">确定</v-btn>
		</v-card-actions>
	</v-card>

</template>
<script lang="ts" setup>import { Ref } from 'vue';


const eventName: Ref<string> = ref('');

</script>

<style lang="scss" scoped>

</style>
