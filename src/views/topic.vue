<template>
  <div class="topic_box">
    <div class="left_topic">
      <LeftTopic :content="content"></LeftTopic>
    </div>
    <div class="right_topic">
      <Infor :content="content"></Infor>
      <longTopic :content="content"></longTopic>
      <longJoin :content="content"></longJoin>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import LeftTopic from "../components/leftCom";
import Infor from "../components/infor.vue";
import longTopic from "../components/longTopic.vue";
import longJoin from "../components/longJoin.vue";
import { getTopicById } from "../util/api.js";
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    fetchData() {
      getTopicById(this.$route.params.id).then(res => {
        if (res.data) {
          this.content = res.data.data;
          console.log(res.data.data);
        }
      });
    }
  },
  mounted() {
    this.fetchData();
  },
  components: {
    LeftTopic,
    Infor,
    longTopic,
    longJoin
  }
};
</script>

<style scoped lang='scss'>
.topic_box {
  display: flex;
  width: 100%;
  justify-content: center;
}

.left_topic {
  width: 56%;
}

.right_topic {
  width: 24%;
  margin-left: 50px;
}
</style>