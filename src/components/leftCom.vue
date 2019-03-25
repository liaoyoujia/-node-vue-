<template>
  <div class="con_box">
    <h3>{{data.title}}</h3>
    <div class="infor">
      <span>发布于</span>
      <span>15天前</span>
      <span>.作者:</span>
      <span v-if="author">{{author.loginname}}</span>
      <span>.{{data.visit_count}}次浏览.</span>
      <span>来自：</span>
      <span v-if="author">{{tabData}}</span>
    </div>
    <div class="content" v-html="data.content" v-if="data"></div>
  </div>
</template>

<script type='text/ecmascript-6'>
import tab from "../util/tab.js";
export default {
  data() {
    return {};
  },
  props: ["content"],
  computed: {
    author() {
      return this.content.author;
    },
    data() {
      return this.content;
    },
    tabData() {
      return tab[this.content.tab].name;
    }
  }
};
</script>

<style scoped lang='scss'>
.con_box {
  padding: 20px 20px 30px;
  margin: 30px 0;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /deep/img {
    width: 100%;
  }
  /deep/ li {
    list-style: none;
  }
  h3 {
    height: 40px;
    line-height: 40px;
  }

  span {
    color: #838383;
  }

  p {
    font-size: 16px;
    line-height: 32px;
    height: 32x;
  }

  .infor {
    padding-bottom: 6px;
    border-bottom: 1px solid #eee;
  }
  .content {
    img {
      width: 100%;
    }
  }
  ul {
    list-style: none;
    border: 1px solid #eee;

    li:first-child {
      padding: 10px 0 12px 20px;
    }
    li {
      padding: 10px 0 26px 20px;
      border-bottom: 1px solid #eee;
    }
    .li_con {
      display: flex;
      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 10px;
      }
    }
  }
}
</style>