<template>
	<v-card>
		<v-img :src="ImageSrc">
		</v-img>
		<v-card-actions>
			<v-btn text>
				{{ title }}
			</v-btn>

		</v-card-actions>
	</v-card>
</template>
<script setup lang="ts">
defineProps({
	ImageSrc: String,
	title: String,
});
</script>