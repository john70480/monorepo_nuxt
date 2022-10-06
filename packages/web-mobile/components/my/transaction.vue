<template>
    <v-container>
        <v-row class="flex-column py-1">
            <v-col col="12" class="text-caption header py-0 text-blue--deep" :class="data.titleClass || ''">
                <slot></slot>
            </v-col>
            <v-col col="12" v-for="item in data.detailList" class="text-caption text-second py-0 text-blue--deep"
                :class="item.modelClass">{{item.text}}</v-col>
            <v-col col="12" class="py-0">
                <v-row class="py-0">
                    <slot name="footer"></slot>
                </v-row>
            </v-col>

        </v-row>
    </v-container>

</template>
<script lang="ts">

</script>
<script lang="ts" setup>import { WalletTransaction } from 'packages/web-mobile/pages/my/lock-wallet.vue';

const props = defineProps<{ data: WalletTransaction }>();
</script>
<style lang="scss" scoped>
.v-container {
    border-bottom: 1px solid #DDD;
}

.text-purple--light {
    color: #a681f8
}

.text-caption {
    line-height: 1.25rem;
}

.text-blue--deep {
    color: #283763;
}
</style>