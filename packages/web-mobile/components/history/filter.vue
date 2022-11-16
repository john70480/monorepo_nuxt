<template>
    <TgDialog v-model="openProxy" type="default">
        <v-card class="mx-auto">
            <v-list>
                <v-list-item title="全部(预设)" class="text-center py-5"></v-list-item>
                <v-divider></v-divider>
                <v-list-item title="TG平台" class="text-center"></v-list-item>
                <v-divider></v-divider>
                <v-list-group value="real">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" title="真人" class="text-center py-5"></v-list-item>
                        <v-divider></v-divider>
                    </template>

                    <v-list-item value="ALL" title="全部真人" class="sub-list text-center"></v-list-item>
                    <v-list-item value="WM" title="WM真人" class="sub-list text-center"></v-list-item>
                    <v-list-item value="OB" title="OB真人" class="sub-list text-center"></v-list-item>
                    <v-list-item value="XX" title="XX真人" class="sub-list text-center"></v-list-item>

                </v-list-group>
                <v-divider></v-divider>
                <v-list-item title="棋牌" class="text-center py-5"></v-list-item>
                <v-divider></v-divider>
                <v-list-item title="电子" class="text-center py-5"></v-list-item>
                <v-divider></v-divider>
                <v-list-item title="彩票" class="text-center py-5"></v-list-item>
                <v-divider></v-divider>
                <v-list-item title="电竞" class="text-center py-5"></v-list-item>
            </v-list>
        </v-card>
    </TgDialog>

</template>
<script lang="ts" setup>
const router = useRouter();
const props = defineProps<{
    assetsOpen: boolean
}>();
const emit = defineEmits<{
    (event: 'update:assetsOpen', payload: boolean): void
}>();
const openProxy = computed({
    get: () => props.assetsOpen,
    set: (val) => emit("update:assetsOpen", val)
});
function handleDirection(url: string): void {
    router.push(url);
}


</script>
<style lang="scss" scoped>
.v-card {
    width: 100%;
}


.v-list-item-title {
    text-align: center;
}

.v-list-item :deep(.v-list-item__append) {
    position: absolute;
    right: 10px;
}

.sub-list {
    background-color: #f1f1f1;
}

.container {
    background-color: #eef4f8;
}

.text-blue--deep {
    color: #283763;
}
</style>