<template>
  <TgDialog v-model="dialogsStore.open">
    <v-card>
      <slot name="header">
        <v-card-title :ripple="{ center: true }">
          {{ dialogsStore.current?.title || "標題" }}
        </v-card-title>
      </slot>
      <v-card-text>
        <div class="d-flex align-center justify-center pa-4 pb-6" v-if="icon">
          <span class="icon-x-lg-size mt-auto mb-auto" :class="[`icon-${icon}`]"></span>
        </div>

        <slot>
          {{ dialogsStore.current?.message || "訊息訊息訊息訊息訊息訊息訊息訊息訊息訊息訊息" }}
        </slot>
      </v-card-text>
      <v-card-actions bottom class="pa-4">

        <v-btn :block="true" class="bg-primary" @click="dialogsStore.close">
          {{ dialogsStore.current?.closeText || "關閉" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </TgDialog>
</template>
<script lang="ts" setup>
const dialogsStore = useDialogs();
const iconList = ["success", "warn", "fail"]
const icon = computed(() => {
  if (dialogsStore.current?.icontype && iconList.includes(dialogsStore.current?.icontype)) {
    return dialogsStore.current?.icontype
  } else {
    return '';
  }
})
// const iconFlag = computed(() => dialogsStore.current?.icontype)
</script>
<script lang="ts" >
</script>
<style lang="scss" scoped>

</style>