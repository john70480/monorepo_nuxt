<template>
	<v-card class="fav_card">
		<v-img height="100" cover :src="imageSrc" />
		<v-card-actions class="action">
			<span class="title">{{ title }}</span>
			<v-spacer></v-spacer>
			<v-button @click="changeSelect">
				<img class="favorite_icon" v-if="isSelect" src="../../assets/images/entertainment_body_heartselect_ic.svg" />
				<img class="favorite_icon" v-if="!isSelect" src="../../assets/images/entertainment_body_heart_ic.svg" />
			</v-button>
		</v-card-actions>
	</v-card>
	
</template>
<script setup lang="ts">
const props = defineProps<{
    imageSrc: string,
	title: string,
    isSelect: boolean,
	id:string
}>();
const emit = defineEmits({
	toggle: (e)=>true
});
const changeSelect = ()=>{
	console.log('changeSelect:',props.id)
	emit('toggle', props.id )
}
</script>
<style lang="scss" scoped>
.fav_card{
	border-radius: 0;
	.title{
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 8em;
		white-space: nowrap;
	}
	.action{
		min-height: 36px;
		line-height: 18px;
	}
}
.favorite_icon {
	height: 18px;
}

</style>