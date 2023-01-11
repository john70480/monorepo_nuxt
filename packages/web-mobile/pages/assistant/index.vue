<template>
  <v-window v-model="tab"  class="grid_view">
    <v-row>
			<v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="wechatID" :label="'微信号'"
                    :textBind="{ placeholder: '王者榮耀' }" >
                </tg-text-field>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <TgSelect v-model="typeOfQuest" :label="'问题类别'"
                    :textBind="{ placeholder: '王者榮耀' }" disabled>
                </TgSelect>
            </v-col>
            <v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="eventName" :label="'问题类别'"
                    :textBind="{ placeholder: '王者榮耀' }" disabled>
                </tg-text-field>
            </v-col>
			<v-col cols="6" class="px-0 pt-0">
                <tg-text-field v-model="verificationCode" :label="'驗證碼'"
                    :textBind="{ placeholder: ''}">
                </tg-text-field>
            </v-col>
			<v-col cols="5" class="px-0 pt-0">
					<span></span><br/>
					<!-- <button class="reload" @click="getValidateImage"></button> -->
					<!-- <img :src="`data:image/png;base64,${verificationImage}`" /> -->
					<img id="pic" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAUCAMAAADm3a4bAAAAbFBMVEWRQMH////nFRz4pCAbQMQqv9r59BV+D6W4vtcMaiucGvfj8S/KgbA3dSdkpikSL3sTzpnOPVtiiIyj94e7En+zR2CsEVOUGbtdL2VkjHcjsTtEbzzeoOYby/SmNmiuKU9bGh5NEE0ZHzNAXCRtldHCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAq0lEQVQ4jZ3S0Q6CMAwF0FUxMTFRgjEG44PM//9H6Ma6FVpWuA+LAc9um+Bgd070yzX7dcYb755V3NmLbnLzD2O/JeMrWpiPRbyvYMpaezMWrYLvHAs7T/JYcx/3PbpzcHj8Q2x4wEBcGBOdrB2xZNMx1yulRTN9JMTy7LaxOf4mDJWxp5yXOIV2/hQP32Iz6pZfsTV2CNPDul5J4fI17sUvpFxUrA6m/PEBIwcLFLuo3rgsAAAAAElFTkSuQmCC" alt="图形验证" style="height: 35px;width: 100px"/>
			</v-col>
		</v-row>
  </v-window>
</template>
<script setup lang="ts">
import { ref } from "vue";
const router = useRouter();
definePageMeta({
  title: "上級協助",
});

</script>
<style lang="scss" scoped>
.grid_view {
    padding: 0 16px;
    min-height: 100vh;
    background-image: linear-gradient(to left, #426796, #6c8cbd);
  }
</style>
