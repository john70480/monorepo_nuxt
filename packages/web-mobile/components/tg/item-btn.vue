<template>
    <div class="item-btn" :type="type">

        <v-btn v-for="(item, index) in list" v-bind="_bind" :class="{ target: modelValueProxy == index }"
            class="btnClass" @click="modelValueProxy = index">{{
    item
            }}</v-btn>
    </div>
</template>


<script lang="ts" setup>

import type { VBtn } from "vuetify/components";


const props = withDefaults(defineProps<{
    type?: typeof types[number],
    modelValue?: any,
    list: Array<any>,
    btnBind?: VBtn["$props"]
}>(), {
    type: 'default',
});
const emit = defineEmits<{
    (event: 'update:modelValue', payload?: any): void
}>();
const modelValueProxy = computed({
    get: () => props.modelValue,
    set: (val) => emit("update:modelValue", val)
})

const _bind = computed(() => {
    let obj: VBtn["$props"] = {}
    switch (props.type) {
        default:
            obj = defaultBind;
            break;
    }
    return { ...obj, ...props.btnBind }
})
</script>

<script lang="ts">
export const types = [
    'default',
] as const;
export const defaultBind: VBtn["$props"] = {
    variant: 'outlined',
}
</script>

<style lang="scss" scoped>
.item-btn[type="default"] {
    .btnClass {
        height: 30px;
        font-size: 0.8rem;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: 10px;
        background-color: #587eb0;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 50px;

        &.target {
            background-color: #36567f;
            border: 1px solid #36567f;
            color: #fff;
        }
    }
}
</style>