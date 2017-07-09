<template>
  <div id="app">
    <div class="header">
      <h1>gabr-vue-base</h1>
    </div>
    <principal></principal>
  </div>
</template>

<script>
import Principal from './components/Principal'

export default {
  name: 'app',
  components: {
    Principal
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .header {
    background-color: #20a0ff;
    color: #ffffff;
    min-height: 72px;
    margin: -24px -8px;
    padding-top: 32px;
    h1 {
      margin: 8px;
    }
  }
}
</style>
