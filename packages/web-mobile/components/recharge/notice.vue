<template>
	<TgDialog v-model="openProxy" type="default">
		<v-card class="transaction">
			<v-card-title>注意事项</v-card-title>
			<div class="px-2">
				<v-col cols="12" class="px-0">
					<ul class="noticeUl">
						<li>注意事项内容文字注意事项内容文字注意事项内容文字注注意事项内容文字注意事项内容文字注意事项内容文字注</li>
						<li>注意事项内容文字注意事项内容文字注意事项内容文字注注意事项内容文字注意事项内容文字注意事项内容文字注</li>
						<li>注意事项内容文字注意事项内容文字注意事项内容文字注注意事项内容文字注意事项内容文字注意事项内容文字注</li>
						<li>注意事项内容文字注意事项内容文字注意事项内容文字注注意事项内容文字注意事项内容文字注意事项内容文字注</li>
						<li>注意事项内容文字注意事项内容文字注意事项内容文字注注意事项内容文字注意事项内容文字注意事项内容文字注</li>
						<li>注意事项内容文字注意事项内容文字注意事项内容文字注注意事项内容文字注意事项内容文字注意事项内容文字注</li>
					</ul>
				</v-col>
			</div>

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

</script>

<style lang="scss" scoped>
.noticeUl {
	padding-bottom: 25px;

	li {
		border-bottom: 1px #c3c3c3 solid;
		font-size: 0.8rem;
		padding-top: 10px;
		padding-bottom: 10px;

		&:last-child {
			border-bottom: none;
		}
	}
}
</style>
