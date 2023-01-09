<template>
  <v-card class="apply_card">
    <v-img cover :src="imageSrc"></v-img>
    <v-card-text class="apply_sub">
      <h3>活動名稱</h3>
      <p>{{ title }}</p>
      <h3>申請時間</h3>
      <p>2020/02/08 17:55:37</p>
      <h3>進度</h3>
      <p>{{stateText}}</p>
      <h3>申請序號</h3>
      <p>8771</p>
      <div v-if="exp">
        <h3>申請項目</h3>
        <p>
          內容說明文字內容說明文字內容說明文字內容說明文字內容說明文字內容說明文字內容說明文字內容說明文字內容說明文字內容內容說明文字內容說明文字內容。
        </p>
        <div v-if="state != 2">
          <h3>狀態</h3>
        </div>
        <div v-if="state == 0">
          <v-progress-linear
            model-value="30"
            height="6"
			      color="primary"
            bg-color="gray"
            rounded
          >
          </v-progress-linear>
          <sub>还需6,666,600流水</sub>
        </div>
        <div v-if="state == 1">
          <v-btn class="apply_btn">領取釭利</v-btn>
        </div>
      </div>
    </v-card-text>
    <v-card-action>
      <v-btn class="exp_btn" @click="exp = !exp"
        >
		<v-icon :icon="exp ? 'md:expand_less' : 'md:expand_more'"></v-icon>
	</v-btn>
    </v-card-action>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  imageSrc: string;
  title: string;
  id: string;
  state: number;
}>();
const exp = ref(false);
const emit = defineEmits({
  toggle: (e) => true,
});
const stateText = computed(()=>{
  switch (props.state) {
    case 0:
       return '審核中'
      break;
      case 1:
       return '審核通過'
      break;
      case 2:
       return '審核失敗'
      break;
    default:
      break;
  }
})
const changeSelect = () => {
  console.log("changeSelect:", props.id);
  emit("toggle", props.id);
};
</script>
<style lang="scss" scoped>
.apply_card {
  border-radius: 0;
  .apply_sub {
    width: 100%;
    line-height: 32px;
    .title {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 8em;
      white-space: nowrap;
      color: #283763;
    }
    .apply_btn{
      width: 100%;
      color: #fff;
      background:linear-gradient(to right, #62aada, #4385bd)
    }
  }
  .exp_btn {
    height: 100%;
    width: 100%;
    text-align: center;
    background-color: #a0c3e5;
    border-radius: 0;
  }
}


</style>
