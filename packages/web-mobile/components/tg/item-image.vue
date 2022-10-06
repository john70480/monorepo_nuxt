<template>
    <v-col class="item-image d-flex flex-column" :col="col">
        <div class="content mx-1 px-2" :class="contentClass"
            :style="{height: `${imgHeight}px`, backgroundColor: `#${bgImgColor}`}">
            <v-img v-bind="imgBind"></v-img>
        </div>
        <div class="footer mx-1 px-2" :class="footerClass" :style="{backgroundColor: `#${bgColor}`}">
            <slot>

            </slot>
        </div>
    </v-col>
</template>
<script lang="ts" setup>
import { ComputedRef } from "vue";
import type { VImg } from "vuetify/components";
const props = withDefaults(defineProps<{
    col?: string,
    imgHeight?: string,
    contentClass?: string,
    bgImgColor?: string,
    bgColor?: String,
    footerClass?: string,
    cover?: boolean,
    imgBind?: VImg["$props"]
}>(), {
    col: "1",
    height: "50",
    cover: false,
});
</script>
<style lang="scss" scoped>
.content {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.footer {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

.v-img {
    height: 100%;
    width: 100%;
}
</style>