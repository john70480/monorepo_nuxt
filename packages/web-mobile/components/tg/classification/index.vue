<template>
	<TgDialog v-model="dialogsStore.classificationOpen" type="classification">
		<div class="fill-height d-flex flex-column">
			<TgTabs type="tg-tabs" v-model="platformTab">
				<v-tab v-for="(item, index) in platformList" :key="index" hide-slider :value="index">
					{{ item.title }}
				</v-tab>
			</TgTabs>
			<v-container class="px-0 pt-1 overflow-y-auto flex-1">
				<v-row class="classification-wrap" v-for=" (item, index) in platformList" :key="index" :dense="true">
					<v-col class="classification-title text-center" cols="12">
						<b>{{ item.title }}</b>
					</v-col>
					<v-col class="classification-content px-6 py-4" cols="12">
						<v-row>
							<TgItemImage v-for="(list, index) in item.list" :key="index" :imgBind="{ src: list.imageSrc }"
								contentClass="mx-1 pa-2" class="px-2 py-2">
								{{ list.title }}
							</TgItemImage>
						</v-row>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</TgDialog>
</template>
<script lang="ts" setup>
import { platformList } from '@tg/web-mobile/pages/home/index.vue';
import { useDialogs } from '@tg/web-mobile/stores/dialogs';

const dialogsStore = useDialogs();
const platformTab = ref<keyof typeof platformList>('sports')
</script>
<style lang="scss" scoped>
.classification-wrap {

	.classification-title {
		background-color: #eef4f8;
		color: #283763;
	}

	&:nth-child(odd) .classification-content {
		background-color: #a0c3e5;
	}

	&:nth-child(even) .classification-content {
		background-color: #ffffff;
	}

}
</style>