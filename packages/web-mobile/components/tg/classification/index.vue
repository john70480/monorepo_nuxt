<template>
	<TgDialog v-model="dialogsStore.classificationOpen" type="classification">
		<div class="fill-height d-flex flex-column">
			<TgTabs v-model="platformTab">
				<v-tab v-for="(item, index) in platformList" :key="index" hide-slider :value="index">
					{{ item.title }}
				</v-tab>
			</TgTabs>
			<v-container class="px-0 pt-1 overflow-y-auto flex-1">
				<v-row class="classification-wrap" v-for=" (item, index) in siteList?.categories" :key="index" :dense="true">
					<v-col class="classification-title text-center" cols="12">
						<b>{{ item.thirdPartyCategory }}</b>
					</v-col>
					<v-col class="classification-content px-6 py-4" cols="12">
						<v-row>
							<TgItemImage v-for="(list, index) in siteList?.platform?.[item.thirdPartyType]?.[item.thirdPartyCategory]"
								:key="index" :imgBind="{ src: platformMap?.[list.thirdPartyCode]?.banner }" contentClass="mx-1 pa-2"
								class="px-2 py-2">
								{{ list.thirdPartyName }}
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
import { useHome, getSiteListMap } from '@tg/web-mobile/stores/home';

const dialogsStore = useDialogs();
const homeStore = useHome();
const platformTab = ref<keyof typeof platformList>('sports')
const siteList = await homeStore.getSiteList();
const { platformMap, categoryMap } = getSiteListMap();
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