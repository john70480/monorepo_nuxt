<template>
	<TgDialog type="classification" :dialogBind="{fullscreen:true}">
		<v-card>
			<slot name="header">
				<TgTabs type="mobile-market-tabs" v-model="platformTab">
					<v-tab v-for="(item, index) in platformList" :key="index" hide-slider :value="index">
						{{ item.title }}
					</v-tab>
				</TgTabs>
			</slot>

			<slot>
				<v-container>
					<v-card v-for="(item, index) in platformList" :key="index">
						<v-card-title>{{ item.title }}</v-card-title>
						<v-row>
							<v-col v-for="(list, index) in item.list" :key="index" :cols="6">
								<PlatformCard :title="list.title" :ImageSrc="list.imageSrc">
								</PlatformCard>
							</v-col>
						</v-row>
					</v-card>
				</v-container>
			</slot>
		</v-card>
	</TgDialog>
</template>
<script lang="ts" setup>
import { platformList } from '@tg/web-mobile/pages/home/index.vue';
import PlatformCard from './platform-card.vue';

const platformTab = ref<keyof typeof platformList>('sports')
</script>
