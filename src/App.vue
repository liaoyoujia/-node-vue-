<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
// console.log(this.$tab,31231);

  import Header from './components/header'
  export default {
    name: 'app',
    components: {
      Header
    },
    mounted(){
      console.log(this.$tab,31231)
      
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
  }
</style>