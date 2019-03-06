<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header'
  export default {
    name: 'app',
    components: {
      Header
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