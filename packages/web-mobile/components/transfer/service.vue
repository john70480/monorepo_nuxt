<template>
	<TgDialog v-model="openProxy" type="default">
		<v-card class="rechargeProp">
			<v-card-title>系統提醒</v-card-title>
			<v-card-text class="px-0">
				<v-col cols="12" class="px-0  text-center setImg pb-0">
					<img src="~/assets/images/transfer/customerservice_24hour_ic.png" />
					<img src="~/assets/images/transfer/customerservice_qq_ic.png" />
					<img src="~/assets/images/transfer/customerservice_wechat_ic.png" />
				</v-col>

				<v-col cols="12" class="warn-text text-center pt-0">
					请联络客服
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

.setImg {
	img {
		width: 70px;
	}
}

.tableDev {
	background-color: #eef4f8;

	.transTable {
		font-size: 0.8rem;
		width: 100%;

		td {
			padding-top: 5px;
			padding-bottom: 5px;
		}

		tr td:last-child {
			text-align: right;
		}
	}
}
</style>
