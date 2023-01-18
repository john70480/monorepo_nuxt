<template>
    <v-window class="assistant_view">
      <v-row>
              <v-col cols="12" class="px-0 pt-0">
                  <tg-text-field v-model="wechatID" :label="'微信号'"
                      :textBind="{ placeholder: '必填欄位' }" >
                  </tg-text-field>
              </v-col>
              <v-col cols="12" class="px-0 pt-0">
                  <TgSelect v-model="typeOfQuesttion" :label="'问题类别'" :items="questionItems"
                      :textBind="{ placeholder: '选择类别' }" >
                  </TgSelect>
              </v-col>
              <v-col cols="12" class="px-0 pt-0">
                <TgTextareas label="原因内容" :textBind="{ placeholder: '限10-50字', rows:6 }"></TgTextareas>
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
              <ul class="assistant_note">
                <li>1.请确认为信号保持可供收寻与加入好友状态,以便上级与您联系。</li>
                <li>2.每人每日限发送十笔上级协助。</li>
              </ul>
          </v-row>
    </v-window>
  </template>
  <script setup lang="ts">
  import { ref } from "vue";
  const router = useRouter();
  definePageMeta({
    title: "上級協助",
  });

  const wechatID = ref('')
  const typeOfQuesttion = ref('')
  const reasonContent = undefined
  const verificationCode = ref('')
  const questionItems = ['彩金活动相关','充值提领相关','银行帐户相关','帐号功能异常','推荐友人加入','代理佣金相关','平台相关建议','上层事项相关','其他']
  
  </script>
  <style lang="scss" scoped>
  .assistant_view {
      padding:32px;
      min-height: 100vh;
      .assistant_note{
        font-size: 0.4rem;
      }
    }
  </style>
  