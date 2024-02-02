<template>
    <div class="home-wrapper">
        <div v-for="item in list" :key="item" class="home-item">{{ item }}</div>
    </div>
</template>
  
<script lang="ts" setup>
const list = ['地址：陕西省西安市', '邮箱：kakarots@foxmail.com', 'QQ：35688351', '微信：nokkbb'];

</script>
  
<style scoped>
.home-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

.home-item {
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 20px 20px;
    font-weight: bolder;
    display: inline-block;
    border-radius: 2px;
    line-height: 13px;
    font-size: 13px;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.5s;
}
</style>
  