<template>
  <v-dialog v-model="dialogsStore.open" fullscreen class="pa-md-4 mx-lg-auto">
    <v-card>
      <slot name="header">
        <v-card-title class="text-h5  text-center" :ripple="{ center: true }">
          {{ title }}
        </v-card-title>

      </slot>

      <slot>
        <v-card-text>
          {{ message }}
        </v-card-text>
      </slot>


      <v-card-actions bottom>
        <v-btn :block="true" color="green darken-1" text @click="dialogsStore.close">
          {{ close }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
import { useDialogs } from '@tg/web-mobile/stores/dialogs';
const dialogsStore = useDialogs();
const title = dialogsStore.current?.title || "標題";
const close = dialogsStore.current?.closeText || "關閉"
const message = dialogsStore.current?.message || "訊息訊息訊息訊息訊息訊息訊息訊息訊息訊息訊息"
</script>
