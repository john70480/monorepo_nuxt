<template>
<Swiper :modules="modules" navigation class="swiper-container platform-swiper " :options="swiperOption">
    <SwiperSlide v-for="(list, index) in 5"
        :key="index">
        <div class="img-center">
            <img width="150" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"/>
        </div>
    </SwiperSlide>
</Swiper>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination} from 'swiper';
import 'swiper/css/navigation';
  import 'swiper/css/pagination';
const modules = [ Navigation,Pagination ]
const swiperOption = {
        loop: false,  // 是否循环轮播
        autoplay: false,  // 是否可以自动轮播
        slidesPerView: 1,  // 可是区域内可展示多少个块
        spaceBetween: 30,  // 块之间间隔距离
        initialSlide:0,  // 默认初始显示块
        freeMode: false
    }

</script>
<style>
.img-center{
    text-align: center;
    height: 360px;
    padding-top: 24px ;
}
.swiper-button-next{
    background: url(../../assets/images/icon-next.png) no-repeat;
    background-size: 40px 40px;
    width: 40px;
    height: 40px;
}
.swiper-button-prev{
    background: url(../../assets/images/icon-prev.png) no-repeat;
    background-size: 40px 40px;
    width: 140px;
    height: 140px;
}
.swiper-button-next::after,.swiper-button-prev::after{
    content:'';
}

</style>