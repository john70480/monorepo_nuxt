<template>
    <div class="bar" :type="type">
        <v-row class="header py-2 align-center" no-gutters>
            <v-col class="ml-2" v-if="type.indexOf('left') != -1 || type == 'default'">
                <slot name="header-left">{{ props.title }}</slot>
            </v-col>
            <v-col cols="auto">
                <v-row class="align-center mr-2" @click="open = !open" no-gutters>
                    <v-col class="px-0 mx-0" v-if="type.indexOf('right') != -1">
                        <slot name="header-right">{{ props.date }}</slot>
                    </v-col>
                    <v-col class="material-icons pl-0 mx-0" v-if="type.indexOf('arrow') != -1">{{
                        open?
                                            'expand_more': 'chevron_right'
                    }}</v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row no-gutters class="detail warn-text px-2" :class="open ? 'open' : 'close'"
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
    title?: string,
    date?: string,

}>(), {
    type: 'default',
});



</script>
<script lang="ts">
export const types = [
    'default',
    'left-right-detail110-arrow',
    'left-right-detail0-arrow',
    'left-right',
] as const;

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

.bar[type="left-right-detail110-arrow"] {
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
        height: 110px;
        padding-top: 10px;
        padding-bottom: 0px;
    }

    .open {
        overflow: unset;
        height: auto;
        padding-top: 10px;
        padding-bottom: 10px;
    }
}

.bar[type="left-right-detail0-arrow"] {
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
        height: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
    }

    .open {
        overflow: unset;
        height: auto;
        padding-top: 10px;
        padding-bottom: 10px;
    }
}

.bar[type="left-right"] {
    .header {
        background-color: #eef4f8;
        color: #283763;
        font-size: 0.8rem;
        white-space: nowrap;
    }
}
</style>