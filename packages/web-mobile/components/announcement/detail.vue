<template>
    <div class="bar" :type="type">
        <v-row class="header py-2 align-center" no-gutters>
            <v-col class="ml-2" v-if="type.indexOf('left') != -1 || type == 'default'">
                <slot name="header-left">{{ props.list.title }}</slot>
            </v-col>
            <v-col cols="auto">
                <v-row class="align-center mr-2" @click="open = !open" no-gutters>
                    <v-col class="px-0 mx-0" v-if="type.indexOf('right') != -1">
                        <slot name="header-right">{{ props.list.date }}</slot>
                    </v-col>
                    <v-col class="material-icons pl-0 mx-0" v-if="type.indexOf('arrow') != -1">{{
                        open?
                                            'expand_more': 'chevron_right'
                    }}</v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row no-gutters class="detail warn-text pt-2 pb-4 px-2" :class="open ? 'open' : 'close'"
            v-if="type.indexOf('detail') != -1">
            <v-col cols="12">
                <slot></slot>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>

const open = ref(false)

const props = withDefaults(defineProps<{
    type?: typeof types[number],
    list: datalist,

}>(), {
    type: 'default',
});



</script>
<script lang="ts">
export const types = [
    'default',
    'left-right-detail-arrow',
] as const;
export type datalist = {
    title?: string,
    date?: string,
};
</script>

<style lang="scss" scoped>
.bar[type="default"] {
    .header {
        background-color: #eef4f8;
        color: #283763;
        font-size: 0.8rem;
        white-space: nowrap;
    }
}

.bar[type="left-right-detail-arrow"] {
    .header {
        background-color: #eef4f8;
        color: #283763;
        font-size: 0.8rem;
        white-space: nowrap;
    }

    .detail {
        background-color: #fff;
        line-height: 24px;
    }

    .close {
        overflow: hidden;
        height: 105px;
    }

    .open {
        overflow: unset;
        height: auto;
    }
}
</style>