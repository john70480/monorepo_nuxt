<template>

	<v-card class="rechargeProp">
		<v-card-title>活動申請</v-card-title>
		<v-card-text class="px-5">
			<v-row>
			<v-col cols="12" class="px-0 pt-0">
                <tg-text-field v-model="eventName" :label="'活動名稱'"
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
		</v-card-text>
		<v-card-actions class="pb-8">
			<v-btn block class="btn-submit bg-primary">送出</v-btn>
		</v-card-actions>
	</v-card>

</template>
<script lang="ts" setup>
import { Ref } from 'vue';

	const verificationCode: Ref<string> = ref('');
	const eventName: Ref<string> = ref('');
	const verificationImage: Ref<string> = ref('');

	// function getValidateImage(){
	// 	console.log()
	// }

</script>

<style lang="scss" scoped>

</style>
