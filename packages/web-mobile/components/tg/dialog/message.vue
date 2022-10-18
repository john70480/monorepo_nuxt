<template>
  <TgDialog v-model="dialogsStore.open">
    <v-card>
      <slot name="header">
        <v-card-title :ripple="{ center: true }">
          {{ title }}
        </v-card-title>

      </slot>

      <slot>
        <v-card-text>
          {{ message }}
        </v-card-text>
      </slot>


      <v-card-actions bottom>
        <v-btn :block="true" color="green" text @click="dialogsStore.close">
          {{ close }}123
        </v-btn>
      </v-card-actions>
    </v-card>
  </TgDialog>
</template>
<script lang="ts" setup>
import { useDialogs } from '@tg/web-mobile/stores/dialogs';

const dialogsStore = useDialogs();
const title = dialogsStore.current?.title || "標題";
const close = dialogsStore.current?.closeText || "關閉"
const message = dialogsStore.current?.message || "訊息訊息訊息訊息訊息訊息訊息訊息訊息訊息訊息"
</script>
