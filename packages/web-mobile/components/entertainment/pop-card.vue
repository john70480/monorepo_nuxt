<template>
	<v-card class="pop_card">
		<div class="mask"></div>
		<div class="type">CG</div>
		<v-img height="75" cover :src="imageSrc" />
		<v-card-actions class="action">
			<span class="title">{{ title }}</span>
			<v-spacer></v-spacer>
			<span class="times">{{ times }} 次</span>
		</v-card-actions>
	</v-card>
	
</template>
<script setup lang="ts">
const props = defineProps<{
    imageSrc: string,
	title: string,
    times: number,
	id:string
}>();

</script>
<style lang="scss" scoped>
.pop_card{
	border-radius: 0;
	width: 150px;
	.type{
		position:absolute;
		top:6px;
		right:6px;
		line-height: 12px;
		font-size: smaller;
		z-index: 999;
		color: #fff;
	}
	.mask{
	width: 0px;
	height: 0px;
	position:absolute;
	z-index: 888;
	top:0;
	right:0;
	border-width: 48px 0 0 48px;
	border-color: rgba($color: #000000, $alpha: 0.5) transparent transparent  ;
	border-style: inset;
	}
	.title{
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 8em;
		white-space: nowrap;
	}
	.action{
		min-height: 12px;
		line-height: 12px;
		font-size: 14px;
	}
}


</style>