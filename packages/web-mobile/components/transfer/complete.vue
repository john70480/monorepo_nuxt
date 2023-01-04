<template>
	<TgDialog v-model="openProxy" type="default">
		<v-card class="rechargeProp">
			<v-card-title>交易完成</v-card-title>
			<v-card-text class="px-0">
				<v-col cols="12" class="px-0 pt-0 text-center">
					<img src="~/assets/images/ok.svg" class="okimg" />
				</v-col>
				<v-col class="tableDev">
					<table class="transTable">
						<tbody>
							<tr>
								<td>交易时间</td>
								<td>2020-12-25 14:38</td>
							</tr>
							<tr>
								<td>转入帐号</td>
								<td>pydna</td>
							</tr>
							<tr>
								<td>转出金额</td>
								<td>200.00</td>
							</tr>
						</tbody>
					</table>
				</v-col>
				<v-col cols="12" class="warn-text">
					请严格确认接收会员帐号，<span class="text-red">一旦转出公司恕不负责</span>。<br>
					转出金额，将即时生效，于您的帐户扣除。<br>
					接收会员将于<span class="text-red">24小时后</span>，方可进行提领动作。<br>
				</v-col>
			</v-card-text>
			<v-card-actions class="pb-8">
				<v-btn block class="btn-submit bg-primary py-4">前往交易纪录</v-btn>
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

.okimg {
	width: 40px;
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
