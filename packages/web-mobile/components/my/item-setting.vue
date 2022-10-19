<template>
    <v-row class="row-info">
        <v-col cols="6" class="py-2 pr-0">
            <slot name="rowTitleLabel">
                {{rowTitle}}
            </slot>
        </v-col>
        <v-col cols="6" class="py-2 pl-0 float-right d-flex justify-content-end ">
            <slot>

            </slot>
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
import type { VSwitch } from "vuetify/components";
const props = defineProps<{
    rowTitle?: string,
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