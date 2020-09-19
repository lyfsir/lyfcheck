<template>
  <li class="list-group-item" v-if="topic">
    <div style="display: flex">
      <div>
        <a href="javascript:void(0);" @click="gouser(topic.username)">
          <el-avatar size="large" :src="topic.logo"></el-avatar>
        </a>
      </div>
      <div style="margin-left: 10px;">
        <span style="font-size: 13px"><a href="javascript:void(0);"
                                         @click="gouser(topic.username)">{{topic.username}}</a></span><br/>
        <span style="font-size: 12px">{{topic.createTime}}</span>
      </div>
    </div>
    <p style="margin-top: 10px;font-size: 15px;color: #666666">{{topic.content}}</p>
      <div style="margin-top: 15px;display: flex;flex-wrap: wrap">
        <div v-for="(item,id) in topic.image" style="padding-right: 10px;padding-bottom: 10px;">
          <img :src="item.imageurl"/>
        </div>
      </div>
  </li>
</template>

<script>
    export default {
        name: "TopicItem",
        props: ['topic'],
        props: {
            'topic': Object,
        },
        created() {
            console.log("t", this.topic)
        },
        methods: {
            gouser(name) {
                this.$router.push({
                    path: '/umsinfo',
                    query: {
                        username: name
                    }
                })
            }
        }
    }
</script>

<style scoped>
  img {
    width: 120px;
    height: 120px;
  }
</style>
