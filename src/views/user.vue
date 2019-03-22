<template>
  <div class="user_box">
    <Person :loginname="loginname"></Person>
    <Topic :loginname="loginname"></Topic>
    <CreateTop :loginname="loginname"></CreateTop>
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
    }
  }
</script>

<style scoped lang='scss'>
  .user_box {
    margin-top: 30px;
  }
</style>