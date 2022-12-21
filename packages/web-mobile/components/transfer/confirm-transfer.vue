<template>
	<TgDialog v-model="openProxy" type="default">
		<v-card class="transaction">

			<v-card-text class="px-2">
				<v-col cols="12" class="px-0 pt-0">

					<tg-select v-model="wallet" :items="walletList" :selectBind="{
						placeholder: '选择钱包'
					}">
					</tg-select>
				</v-col>
				<div class="text-center"><img src="@tg/web-mobile/assets/images/transfer_arrow_ic.svg"
						class="arrowImg" /></div>
				<v-col cols="12" class="px-0 pt-0">

					<tg-select v-model="wallet2" :items="walletList" :selectBind="{
						placeholder: '选择钱包'
					}">
					</tg-select>
				</v-col>
				<v-col cols="12" class="px-0 pt-0">
					<tg-text-field v-model="transMoney" :label="'转换金额'" :textBind="{ placeholder: '请输入金额' }">
					</tg-text-field>
				</v-col>
				<v-col cols="12" class="d-flex align-center justify-end px-0 pt-0">
					<v-btn v-for="(item, index) in transMoneyList" variant="outlined"
						:color="target == index ? '#3958e2' : '#707070'" class="btnClass" @click="target = index">{{
		item
						}}</v-btn>
				</v-col>
			</v-card-text>
			<v-card-actions class="pb-8">
				<v-btn block class="btn-submit bg-primary py-4">确定转账</v-btn>
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

const wallet = ref<number>();
const wallet2 = ref<number>();
const transMoney = ref<number>();
const walletList = ref([
	{
		text: '邮箱验证',
		value: 0
	},
	{
		text: '邮箱验证2',
		value: 1
	}
]);
const target = ref(-1)
const transMoneyList = ['3000', '5000', '10,000', 'all']
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

.arrowImg {
	width: 25px;
}

.btnClass {
	height: 30px;
	font-size: 0.8rem;
	padding-left: 5px;
	padding-right: 5px;
	margin-left: 5px;
}
</style>
