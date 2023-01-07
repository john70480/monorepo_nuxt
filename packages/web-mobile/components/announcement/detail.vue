<template>
    <div>
        <v-row class="header py-2 align-center" no-gutters>
            <v-col class="pl-2 px-0 mx-0">
                <slot name="title"></slot>
            </v-col>
            <v-col class="text-right" cols="auto">
                <v-row class="align-center" @click="type = !type">
                    <v-col class="px-0 mx-0">
                        <slot name="date"></slot>
                    </v-col>
                    <v-col class="material-icons pl-0 mx-0 mr-2">{{ type? 'expand_more': 'chevron_right' }}</v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row no-gutters class="detail warn-text pt-2 pb-4 px-2" :class="type ? 'open' : 'close'">
            <v-col cols="12">
                <slot></slot>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>

const type = ref(false)




</script>

<style lang="scss" scoped>
.header {
    background-color: #eef4f8;
    color: #283763;
    font-size: 0.8rem;
    white-space: nowrap;
}


.detail {
    background-color: #fff;
    line-height: 24px;
    /*-webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;*/
}

.close {
    overflow: hidden;
    height: 105px;
}

.open {
    overflow: unset;
    height: auto;
}
</style>