<template>
    <div class="service_view">
        <div class="service_card online" @click="() => router.push('/service/online')">
            <div class="service_icon">
                <img src="../../assets/images/com_body_24h_ic_small.png"/>
            </div>
            <div class="service_content">
                <b>在线客服</b><br/>
                点击直接对话
            </div>
        </div>
        <div class="service_card qq">
            <div class="service_icon">
                <img src="../../assets/images/com_body_qq_ic_small.png"/>
            </div>
            <div class="service_content">
                <b>QQ客服</b><br/>
                QQ号/123546879
            </div>
        </div>
        <div class="service_card wechat">
            <div class="service_icon">
                <img src="../../assets/images/com_body_wechat_ic_small.png"/>
            </div>
            <div class="service_content">
                <b>微信客服</b><br/>
                微信号/123546879
            </div>
        </div>
  </div>
</template>
<script setup lang="ts">
const router = useRouter();
definePageMeta({
  title: "24H线上客服",
});


</script>
<style lang="scss" scoped>
.service_view {
    height: 100vh;
    background: var(--tg-bg-primary);
    padding: 12px 32px;
  .service_card{
    height: 68px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    align-items:center;
    margin-bottom: 12px;
    &.online{
        background-image: linear-gradient(to bottom, #f1a5c3, #af2e91);
    }
    &.qq{
        background-image: linear-gradient(to bottom, #65ceff , #1944b9);
    }
    &.wechat{
        background-image: linear-gradient(to bottom, #b0f8f8, #037868);
    }
    .service_icon{
        width: 64px;
        padding-left: 24px;
        img{
            height: 48px;
        }
    }
    .service_content{
        flex-grow:1;
        text-align: center;
        color:#fff;
    }
  }
  
}
</style>
