<template>
	<div class="evnet_card">
		<v-img class="event_image" :src="imageSrc"></v-img>
		<div class="event_sub">
			<span>{{ title }}</span>
			
			<span class="more">詳情>></span>
		</div>	
	</div>
</template>
<script setup lang="ts">
const props = defineProps<{
    imageSrc: string,
	title: string,
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
.evnet_card{
	.event_image{
		width: 100%;
	}
	.event_sub{
		width: 100%;
		line-height: 32px;
	.title{
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 8em;
		white-space: nowrap;
		color: #283763;
	}
	.more{
		color:#fff;
		float: right;
	}
}
}

</style>