<template>
    <v-switch v-model="modelValue" color="primary" :class="{'float-right': floatRight, '--active': modelValue}"
        v-bind="switchBind">
    </v-switch>
</template>
<script lang="ts" setup>
import { VSwitch } from 'vuetify/components'
const props = withDefaults(defineProps<{
    floatRight?: boolean,
    modelValue: boolean,
    switchBind: VSwitch["$props"]
}>(), {
});
const emit = defineEmits<{
    (event: 'update:modelValue'): void
}>();
const modelValueProxy = computed({
    get: (): boolean => props.modelValue,
    set: (): void => emit("update:modelValue")
})
</script>
<style lang="scss" scoped>

</style>