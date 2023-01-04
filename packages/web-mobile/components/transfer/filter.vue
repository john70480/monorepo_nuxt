<template>
    <TgDialog v-model="openProxy" type="select-dialog">
        <v-card class="mx-auto">
            <v-list>
                <v-list-item title="全部(预设)" class="text-center py-5" @click="listClick('all')"></v-list-item>
                <v-list-item v-for="(item, index) in list" :title="index" class="text-center py-5"
                    @click="listClick(index)"></v-list-item>
            </v-list>
        </v-card>
    </TgDialog>

</template>
<script lang="ts" setup>
const router = useRouter();
const props = defineProps<{
    assetsOpen: boolean,
    list: object,
    listTarget: string
}>();

const emit = defineEmits(['update:assetsOpen', 'update:listTarget']);
const openProxy = computed({
    get: () => props.assetsOpen,
    set: (val) => emit("update:assetsOpen", val)
});
const listClick = (str: string) => {
    emit('update:listTarget', str)
}
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