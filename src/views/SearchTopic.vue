<template>
  <div>
    <p v-if="search" class="p">请输入话题搜索关键词</p>

  </div>
</template>

<script>
    export default {
        name: "SearchTopic",
        data(){
            return{
                search: true
            }
        }

    }
</script>

<style scoped>
  .p{
    text-align: center;

    height: 350px;
    background-color: #d3dce6;
    margin-top: 20px;
    font-size: 20px;
    color: #ff6767;
    line-height: 350px;
    border-radius: 50px;
  }
</style>
