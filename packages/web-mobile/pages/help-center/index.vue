<template>
    <div class="help_view">
        <div class="help_title">注册流程</div>
        
        <TgItemBtn v-model="target" :list="helpList"></TgItemBtn>
        
        <HelpCenterSwiperImg />

        <div class="help_content">
          <p>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案。<br/>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案。</p>
        </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const router = useRouter();
definePageMeta({
  title: "幫助中心",
});
const target = ref("");
const helpList = ["临柜汇款", "网路银行", "支付宝", "微信支付", "其他"];

const wechatID = ref("");
const typeOfQuesttion = ref("");
const reasonContent = undefined;
const verificationCode = ref("");
</script>
<style lang="scss" scoped>
.help_view {
  .help_title{
    line-height: 48px;
    background: #eef4f8;
    height: 48px;
    font-size: 1.1rem;
		font-weight: bold;
    color: #283763;
    text-align: center;

  }
  .help_type{
    height: 42px;
    background-color: #587eb0;
  }
  .help_content{
    padding: 16px;
    margin: 12px;
  }
}
</style>
