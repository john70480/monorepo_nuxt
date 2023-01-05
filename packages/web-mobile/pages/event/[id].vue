<template>
    <Header></Header>
    <v-window class="img_box">
        <v-img class="img_full" :src="eventContent.imgsrc"/>
    </v-window>
    <v-bottom-navigation class="apply_footer">
        <v-btn class="apply_btn">活動申請</v-btn>

    </v-bottom-navigation>
    <!-- <v-footer class="justify-center">
    </v-footer> -->
  </template>
  <script setup lang="ts">
  import Header from "./header.vue";
  import { ref, reactive } from "vue";
  import EventCard from "./event-card.vue";
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  definePageMeta({
    hiddenHeader: true,
    title: "活動名稱",
  });

    const eventContent ={
      title: "王者荣耀",
      imgsrc:
        "https://banner.clswjk.top/k7/product/banner_text/CGQo89oeOeqRVCKknnao5z2IBNLfmlwFfcsedh7y.jpg?v=1672324908",
    };

  </script>
  <style lang="scss" scoped>
  .img_box{
    margin:0;
    padding: 0;
    background: linear-gradient(to left, #426796, #6c8cbd);
  .img_full {
    
    width: 100%;
  }
}
.apply_footer{
    background: linear-gradient(to left, #426796, #6c8cbd);
    padding: 10px;
    
    .apply_btn{
        width: 100vw;
        background: linear-gradient(to left, #4385bd, #62aada);
        box-shadow: 0px 0px 5px #426796;
        color:#fff;
    }
}

  </style>
  