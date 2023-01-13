<template>
  <div class="entertainment">
    <EntertainmentEnterHeader />
    <template v-for="(item, index) in siteList?.categories" :key="index">
      <EntertainmentSubTtitle
        :title="item.thirdPartyCategory"
        :more="indexID === index"
        @click="toggleIndex(index)"
      />
      <div v-if="indexID === index" class="index_box">
        <Swiper
          class="swiper-container platform-swiper"
          :slides-per-view="2"
          :pagination="{ clickable: true }"
          :space-between="10"
        >
          <SwiperSlide
            v-for="(list, index) in siteList?.platform?.[item.thirdPartyType]?.[
              item.thirdPartyCategory
            ]"
            :key="index"
          >
            <div v-on:click="() => router.push('entertainment/gaming')">
              <EntertainmentPlatformCard
                :title="list.thirdPartyName"
                :ImageSrc="platformMap?.[list.thirdPartyCode]?.banner"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div v-else class="grid_view">
        <v-row>
          <v-col
            v-for="(list, index) in siteList?.platform?.[item.thirdPartyType]?.[
              item.thirdPartyCategory
            ]"
            :key="index"
            cols="6"
          >
            <EntertainmentPlatformCard
              :title="list.thirdPartyName"
              :ImageSrc="platformMap?.[list.thirdPartyCode]?.banner"
            />
          </v-col>
        </v-row>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Pagination } from "swiper";
import { useHome, getSiteListMap } from "@tg/web-mobile/stores/home";
import "swiper/scss";
import "swiper/scss/pagination";
import { IndexKind } from "typescript";
SwiperCore.use([Pagination]);
const homeStore = useHome();
const indexID = ref(0);

definePageMeta({
  hiddenHeader: true,
  title: "娛樂",
});

const router = useRouter();
const { platformMap } = getSiteListMap();
const siteList = await homeStore.getSiteList();
function toggleIndex(id: number) {
  if (indexID.value == id) {
    indexID.value = 10;
  } else {
    indexID.value = id;
  }
}
console.log(siteList);
</script>
<style lang="scss" scoped>
.entertainment {
  flex: 1;
  background: #36567f;
  overflow-y: auto;

  .index_box {
    background: var(--tg-bg-primary);

    .swiper-container {
      padding: 16px;

      .sliderWrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transition-property: transform;
        box-sizing: content-box;

        :global(.swiper-slide) {
          border-radius: 0.5rem;
          position: relative;
          transition-property: transform;

          img {
            width: 100%;
            display: block;
          }
        }

        :global(.swiper-pagination) {
          bottom: 0 !important;
        }

        :global(.swiper-pagination-bullet) {
          background: white;
          border-radius: 0.5rem;
          opacity: 1;
        }

        :global(.swiper-pagination-bullet-active) {
          background-color: #283763;
          border-radius: 0.5rem;
        }
      }
    }
  }

  .grid_view {
    padding: 16px;
    background-image: linear-gradient(to bottom, #426796, #6c8cbd);
  }
}
</style>
