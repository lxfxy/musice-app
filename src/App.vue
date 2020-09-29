<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@components/Head/head";
export default {
  components: {
    Header,
  }
}
</script>

<style lang="less">
@import "./style/init.less";
</style>