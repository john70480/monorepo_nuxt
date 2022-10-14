<template>
    <v-row class="row-info">
        <v-col cols="6" class="py-2 pr-0">
            <slot>

            </slot>
        </v-col>
        <v-col cols="6" class="py-2 pl-0 float-right d-flex justify-content-end ">
            <slot name="rightLabel">

            </slot>
            <template v-if="switch">
                <v-switch class="float-right" v-bind="switchBind" hide-details></v-switch>
            </template>
            <template v-if="open">
                <span class="icon icon-open mt-auto mb-auto"></span>
            </template>
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
import type { VSwitch } from "vuetify/components";
const props = defineProps<{
    switch?: boolean,
    switchBind?: VSwitch["$props"]
    open?: boolean,


}>();
</script>
<style lang="scss" scoped>
.v-row {
    margin: 0;
}

.v-col {
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.0333333333em !important;
    font-family: "Roboto", sans-serif !important;
    text-transform: none !important;
}

.row-info {
    margin: 0;
    background-color: #eef4f8;
    height: 40px;
    padding-top: 8px;
    padding-bottom: 8px;
    align-items: center;
    align-content: center;

    .v-col {
        color: #283763;

        &.text-grey--light {
            color: #C3C3C3;
        }
    }
}

.justify-content-end {
    justify-content: flex-end;
}


.icon-open {
    display: flex;
    flex-direction: row-reverse;

    &::before {
        background: url('@tg/web-mobile/assets/images/my/icon_open.svg') center no-repeat;
        background-size: cover;
        content: ' ';
        display: block;
        width: 6px;
        height: 12px;
        margin-left: 8px;
    }
}

.icon-flag {
    &::before {
        width: 30px;
        height: 20px;
        margin-right: 8px;
    }
}

.text-blue--deep {
    color: #283763;
}

.v-input {
    &.float-right {
        display: flex;
        flex-direction: row-reverse;
    }
}
</style>