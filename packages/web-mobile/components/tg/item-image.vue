<template>
    <v-col class="item-image d-flex flex-column" :cols="col" :type="type">
        <div :class="_contentClass">
            <v-img v-bind="imgBind"></v-img>
        </div>
        <div :class="_footerClass">
            <slot>

            </slot>
        </div>
    </v-col>
</template>
<script lang="ts" setup>
import { ComputedRef } from "vue";
import type { VImg } from "vuetify/components";
const props = withDefaults(defineProps<{
    type?: typeof types[number],
    col?: string,
    contentClass?: string,
    footerClass?: string,
    imgBind?: VImg["$props"]
}>(), {
    type: 'default',
    col: '6',
});
const _contentClass: ComputedRef<string[]> = computed(() => {
    let contentClass = ["content"]
    switch (props.type) {
        default:
            contentClass.push('mx-1 px-2');
            break;
    }
    if (props.contentClass) contentClass.push(props.contentClass);
    return contentClass
})
const _footerClass: ComputedRef<string[]> = computed(() => {
    let footerClass = ['footer'];
    switch (props.type) {
        default:
            footerClass.push('mx-1 px-2 text-center text-white text-body-1 py-1');
            break;
    }
    if (props.footerClass) footerClass.push(props.footerClass);
    return footerClass
})

</script>
<script lang="ts">
export const types = [
    'default',
] as const;
</script>
<style lang="scss" scoped>
.item-image[type="default"] {
    .content {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background-color: #eef4f8;
        height: 80px;
    }

    .footer {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        background-color: #4988b9;
    }

    .v-img {
        height: 100%;
        width: 100%;
    }
}
</style>