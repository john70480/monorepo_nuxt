<template>
  <TgDialog v-model="dialogsStore.open">
    <v-card>
      <slot name="header">
        <v-card-title :ripple="{ center: true }">
          {{ dialogsStore.current?.title || "標題" }}
        </v-card-title>
      </slot>
      <v-card-text>
        <!-- {{ iconFlag }}
        {{ icon }} -->
        <div class="d-flex align-center justify-center pa-4 pb-6" v-if="icon">
          <span class="icon mt-auto mb-auto" :class="[`icon-${icon}`]"></span>
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
import { useDialogs } from '@tg/web-mobile/stores/dialogs';

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
$icon-list: (
  "success": "success.svg",
  "warn": "warn.svg",
  "fail": "fail.svg",
);

@each $key,
$val in $icon-list {
  .icon-#{$key} {
    &::before {
      width: 40px;
      height: 40px;
      background: url('@tg/web-mobile/assets/images/#{$val}') center no-repeat;
      background-size: cover;
      content: ' ';
      display: block;
    }
  }
}
</style>