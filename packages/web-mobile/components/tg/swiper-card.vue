<template>
    <v-container class="px-0 pt-1 overflow-y-auto flex-1 classification-wrap">
        <TgCard v-for=" (item, index) in list" :key="index" :title="index" class="classification-content"
            :cardBind="{ variant: 'text' }">
            <div class="index_box">
                <Swiper class="swiper-container recharge-swiper" slides-per-view="auto">
                    <SwiperSlide v-for="(list, index) in item" :key="index">
                        <TgItemImage :imgBind="{ src: list.images }" contentClass="mx-1 pa-2" class="px-2 py-2"
                            col="12">
                            {{ list.text }}
                        </TgItemImage>
                    </SwiperSlide>
                </Swiper>
            </div>
        </TgCard>
    </v-container>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
const props = defineProps<{
    list: Record<string, { images: string, text: string }[]>,
}>();
</script>

<style lang="scss" scoped>
.swiper-container {
    &.recharge-swiper {
        position: relative;
        overflow: hidden;
        list-style: none;
        z-index: 1;

        .swiper-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            transition-property: transform;
            box-sizing: content-box;

            .swiper-slide {
                width: 250px;
                border-radius: 5px;
                background: #fff;
                flex-shrink: 0;
                position: relative;
                transition-property: transform;
            }
        }
    }
}
</style>