<template>
  <div class="sub_title">
    <b>{{ title }}</b>
	<v-spacer/>
    <button :class="more ? 'more_btn' : 'darw_btn'"></button>
  </div>
</template>
<script setup lang="ts">
defineProps({
	title: String,
	more: { type: Boolean, default: false }
});
</script>

<style lang="scss" scoped>
.sub_title {
  padding: 0 5px;
  display: flex;
  align-items: center;
  background-color: #36567f;
  // justify-content: space-between;

  b {
    color: #fff;
    font-size: 0.9rem;
    margin-left: 10px;
    display: flex;
    text-align: center;
    align-items: center;
  }

  .more_btn {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: none;
    background: url("@tg/web-mobile/assets/images/more_btn.png") center
      no-repeat;
    background-size: auto 14px;
  }
  .darw_btn {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: none;
    background: url("@tg/web-mobile/assets/images/darw_btn.png") center
      no-repeat;
    background-size: auto 14px;
  }
}
</style>
