<template>
    <v-switch v-model="modelValueProxy" :class="[type]" v-bind="_bind">
    </v-switch>
</template>
<script lang="ts" setup>
import { VSwitch } from 'vuetify/components'
const props = withDefaults(defineProps<{
    type?: typeof types[number],
    modelValue: boolean,
    switchBind?: VSwitch["$props"]
}>(), {
    type: 'default',
});
const emit = defineEmits<{
    (event: 'update:modelValue', payload?: boolean): void
}>();
const _bind = computed(() => {
    let obj: VSwitch["$props"] = {}
    switch (props.type) {
        default:
            obj = defaultBind;
            break;
    }
    return { ...obj, ...props.switchBind }
})
const modelValueProxy = computed({
    get: (): boolean => props.modelValue,
    set: (val: boolean) => emit("update:modelValue", val)
})
</script>
<script lang="ts">
export const types = [
    'default',
    'tg-right',
] as const;
export const defaultBind: VSwitch["$props"] = {
    hideDetails: true,
    color: "primary",
}
</script>
<style lang="scss">
.v-switch.default {
    .v-switch__track {
        height: 21px;
        border-radius: 14px;
        background: #c3c3c3;
    }

    .text-primary {
        .v-switch__track {
            background: var(--bg-primary);
        }
    }

    .v-switch__thumb {
        background-color: #fff;
    }
}

.v-switch.tg-right {
    @extend .default;

    .v-selection-control {
        justify-content: flex-end;
    }
}
</style>