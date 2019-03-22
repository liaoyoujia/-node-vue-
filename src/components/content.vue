<template>
  <div>
    <div class="tab_content" v-for="(item,index) in list" :key="index">
      <router-link :to="'/user/'+item.author.loginname"><img :src="item.author.avatar_url" alt=""></router-link>
      <p class="number"><i class="small_number">{{item.reply_count}}</i>/<i class="big_number">{{item.visit_count}}</i>
      </p>
      <el-tag :type="$tab[item.tab] && $tab[item.tab].type">分享</el-tag>
      <p class="content">{{item.title}}</p>
      <span>{{$moment(item.last_reply_at,'YYYY-MM-DD').startOf('day')
        .fromNow()}}</span>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    data() {
      return {}
    },
    props: ['list'],
    mounted(){
      console.log(this.list,'3123123123123123');
      
    }

  }
</script>

<style scoped lang='scss'>
  .tab_content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    line-height: 50px;
    align-items: center;
    margin-bottom: 20px;

    img {
      width: 50px;
      border-radius: 50%;
      height: 50px;
    }

    .number {
      width: 10%;
      text-align: left;
    }

    .small_number {
      color: cyan;
    }

    .big_number {
      color: plum;
    }

    .content {
      color: #42b983;
      font-weight: 600;
      font-size: 16px;
      text-align: left;
      width: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>