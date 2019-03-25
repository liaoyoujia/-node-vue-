<template>
  <div class="user_box">
    <Person :loginname="loginname"></Person>
    <Topic></Topic>
    <CreateTop></CreateTop>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Person from '../components/person'
  import Topic from '../components/perTopic'
  import CreateTop from '../components/createTopic'
  export default {
    data() {
      return {
        loginname: ''
      }
    },
    components: {
      Person,
      Topic,
      CreateTop
    },
    created() {
      this.loginname = this.$route.params.id
    },
    watch: {
      '$route'(to, from) {
        this.loginname = to.params.id;
        next();
      }
    }
  }
</script>

<style scoped lang='scss'>
  .user_box {
    margin-top: 30px;
  }
</style>